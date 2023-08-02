import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import * as ProductListingStyle from '../../Styles/ProductListingStyle';
import Fuse from 'fuse.js';
import { FaMicrophone } from 'react-icons/fa'; // Import the microphone icon
import { FaSearch } from 'react-icons/fa'; // Import the search icon


const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [categories, setCategories] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isRemoveFilterModalOpen, setIsRemoveFilterModalOpen] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { addItemToCart, isItemInCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVoiceSearchActive, setIsVoiceSearchActive] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        //console.log('Fetched Products:', response.data); 
        setProducts(response.data);
        setFilteredProducts(response.data);
        extractCategories(response.data);
      } catch (error) {
        //console.error('Error fetching products:', error); 
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters(products);  // eslint-disable-next-line 
  }, [minPrice, maxPrice, ratingFilter]);

  const extractCategories = (products) => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    setCategories(uniqueCategories);
  };

  const handleCategoryFilter = (category) => {
    //console.log('Selected Category:', category);
    setCategoryFilter(category);
    const filtered = products.filter((product) => (category ? product.category === category : true));
    applyFilters(filtered);
  };

  const handlePriceFilter = () => {
    applyFilters(products);
    setIsFilterModalOpen(false);
    setIsFilterApplied(true);
  };

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating === ratingFilter ? '' : rating);
  };

  const checkFiltersApplied = () => {
    return minPrice !== '' || maxPrice !== '' || ratingFilter !== '';
  };

  const handleRemoveFilter = (filter) => {
    //console.log('Removed Filter:', filter);
    if (filter === 'Price') {
      setMinPrice('');
      setMaxPrice('');
    } else if (filter === 'Rating') {
      setRatingFilter('');
    }
    setIsRemoveFilterModalOpen(false);
    setIsFilterApplied(checkFiltersApplied()); // Updating isFilterApplied state
    applyFilters(products);
  };

  const removeAllFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setRatingFilter('');
    setSelectedPriceRange('');
    setIsFilterApplied(false);
    setFilteredProducts(products);
    setIsRemoveFilterModalOpen(false);
  };

  const applyFilters = (products) => {
    let filtered = products;

    const filters = [];

    if (minPrice || maxPrice) {
      filters.push('Price');
    }

    if (ratingFilter) {
      filters.push('Rating');
    }

    setSelectedFilters(filters);

    if (minPrice !== null && maxPrice !== null) {
      filtered = filtered.filter((product) => {
        const price = product.price;
        if (minPrice && maxPrice) {
          return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
        } else if (minPrice) {
          return price >= parseInt(minPrice);
        } else if (maxPrice) {
          return price <= parseInt(maxPrice);
        }
        return true;
      });
    }

    if (ratingFilter) {
      filtered = filtered.filter((product) => product.rating.rate <= ratingFilter);
    }

    if (categoryFilter) {
      filtered = filtered.filter((product) => product.category === categoryFilter);
    }

    // Sort by rating
    filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    setFilteredProducts(filtered);

    const selectedRange =
      (minPrice ? `Rs. ${minPrice}` : '') + (minPrice && maxPrice ? ' - ' : '') + (maxPrice ? `Rs. ${maxPrice}` : '');
    setSelectedPriceRange(selectedRange);

    setIsFilterApplied(checkFiltersApplied()); // Updating isFilterApplied state
  };

  const handleFilterModalOpen = () => {
    setIsFilterModalOpen(true);
  };

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false);
  };

  const handleRemoveFilterModalOpen = () => {
    setIsRemoveFilterModalOpen(true);
  };

  const handleRemoveFilterModalClose = () => {
    setIsRemoveFilterModalOpen(false);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleConsoleViewProduct = (product) => {
    console.log('Selected Product:', product); //Added console for testing purpose
  };

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };


  const renderStarIcons = (rate) => {
    const filledStars = Math.floor(rate);
    const hasHalfStar = rate - filledStars >= 0.5;

    const starIcons = [];

    for (let i = 0; i < filledStars; i++) {
      starIcons.push(<ProductListingStyle.StarIcon key={i} active={true} >&#9733;</ProductListingStyle.StarIcon>);
    }

    if (hasHalfStar) {
      starIcons.push(<ProductListingStyle.StarIcon key="half" active={true} >&#9733;</ProductListingStyle.StarIcon>);
    }

    for (let i = starIcons.length; i < 5; i++) {
      starIcons.push(<ProductListingStyle.StarIcon key={i} active={false} >&#9733;</ProductListingStyle.StarIcon>);
    }

    return starIcons;
  };

  useEffect(() => {
    if (categoryFilter !== '') {
      const filtered = products.filter((product) => product.category === categoryFilter);
      applyFilters(filtered);
    } else {
      applyFilters(products);
    } // eslint-disable-next-line
  }, [categoryFilter, products]);

  // Initialize Fuse instance
  const fuse = new Fuse(products, {
    keys: ['title'], // Keys to search in (in this case, searching by 'title' key)
    threshold: 0.4, // Fuzzy search threshold (0 to 1, lower values are more strict)
  });

  // Function to handle search 
  const handleSearch = (query) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') {
      setSearchQuery('');
      setFilteredProducts(products);
    }
    else {
      setSearchQuery(trimmedQuery);
      const result = fuse.search(trimmedQuery);
      setFilteredProducts(result.map((item) => item.item));
    }
  };

  // Function to handle voice search
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-UK'; // Change to the desired language code

      recognition.onstart = () => {
        //console.log('Voice search started');
        setIsVoiceSearchActive(true); // Set the state to true when voice search starts
      };

      recognition.onend = () => {
        //console.log('Voice search ended');
        setIsVoiceSearchActive(false); // Set the state to false when voice search ends
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        //console.log('Voice search result:', transcript);
        handleSearch(transcript);
      };

      recognition.start();
    } else {
      //console.error('Web Speech API is not supported in this browser');
    }
  };


  return (
    <>
      <div>
        <h1>Product-Listing</h1>
        <ProductListingStyle.ProductFilterWrapper>
          <ProductListingStyle.CategoryFilter onClick={() => handleCategoryFilter('')} selected={categoryFilter === ''}>
            All
          </ProductListingStyle.CategoryFilter>
          {categories.map((category) => (
            <ProductListingStyle.CategoryFilter
              key={category}
              onClick={() => handleCategoryFilter(category)}
              selected={categoryFilter === category}
            >
              {category}
            </ProductListingStyle.CategoryFilter>
          ))}
          <ProductListingStyle.SearchInputWrapper>
            <ProductListingStyle.StyledMicrophone onClick={handleVoiceSearch} active={isVoiceSearchActive.toString()}>
              <FaMicrophone />
            </ProductListingStyle.StyledMicrophone>
            <ProductListingStyle.SearchInput type="text" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} placeholder="Search products..." />
            <ProductListingStyle.SearchIcon onClick={() => handleSearch(searchQuery)}>
              <FaSearch />
            </ProductListingStyle.SearchIcon>
          </ProductListingStyle.SearchInputWrapper>
          <ProductListingStyle.FilterButton onClick={handleFilterModalOpen}>
            Filter
            {selectedFilters.length > 0 && (
              <ProductListingStyle.FilterAppliedCount show={isFilterApplied}>({selectedFilters.length})</ProductListingStyle.FilterAppliedCount>
            )}
          </ProductListingStyle.FilterButton>
          {isFilterApplied && selectedFilters.length > 0 && (
            <ProductListingStyle.RemoveFilterButton show={isFilterApplied} active={isFilterApplied} onClick={handleRemoveFilterModalOpen}>
              Remove Filter
            </ProductListingStyle.RemoveFilterButton>
          )}
        </ProductListingStyle.ProductFilterWrapper>
        {isFilterApplied && (
          <ProductListingStyle.SelectedFilteredArea>
            {selectedPriceRange && (
              <ProductListingStyle.SelectedPriceRange show={isFilterApplied} range={selectedPriceRange}>
                Selected Price Range: {selectedPriceRange}
              </ProductListingStyle.SelectedPriceRange>
            )}
            {ratingFilter && (
              <ProductListingStyle.SelectedStarRating show={isFilterApplied}>
                Selected Rating: <ProductListingStyle.StarContainer>{renderStarIcons(ratingFilter)}stars</ProductListingStyle.StarContainer>
              </ProductListingStyle.SelectedStarRating>
            )}
          </ProductListingStyle.SelectedFilteredArea>
        )}
        {isFilterModalOpen && (
          <ProductListingStyle.FilterModal>
            <ProductListingStyle.ModalContent>
              <h2>Price Range Filter</h2>
              <ProductListingStyle.PriceRangeFilter>
                <ProductListingStyle.FilterLabel htmlFor="min-price">Min Price:</ProductListingStyle.FilterLabel>
                <ProductListingStyle.RangeSlider
                  type="range"
                  id="min-price"
                  min="0"
                  max="100"
                  step="1"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <span>{minPrice ? `Rs. ${minPrice}` : ''}</span>
              </ProductListingStyle.PriceRangeFilter>
              <ProductListingStyle.PriceRangeFilter>
                <ProductListingStyle.FilterLabel htmlFor="max-price">Max Price:</ProductListingStyle.FilterLabel>
                <ProductListingStyle.RangeSlider
                  type="range"
                  id="max-price"
                  min="100"
                  max="5000"
                  step="1"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
                <span>{maxPrice ? `Rs. ${maxPrice}` : ''}</span>
              </ProductListingStyle.PriceRangeFilter>
              <h2>Star Rating Filter</h2>
              <ProductListingStyle.StarRatingFilter>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <ProductListingStyle.Star
                    key={rating}
                    active={rating <= ratingFilter}
                    onClick={() => handleRatingFilter(rating)}
                  >
                    &#9733;
                  </ProductListingStyle.Star>
                ))}
              </ProductListingStyle.StarRatingFilter>
              <ProductListingStyle.ApplyFiltersButton onClick={handlePriceFilter}>Apply Filters</ProductListingStyle.ApplyFiltersButton>
              <button onClick={handleFilterModalClose}>Close</button>
            </ProductListingStyle.ModalContent>
          </ProductListingStyle.FilterModal>
        )}
        {isRemoveFilterModalOpen && (
          <ProductListingStyle.RemoveFilterModal>
            <ProductListingStyle.ModalContent>
              <h2>Remove Filters</h2>
              {selectedFilters.length > 0 && (
                <ProductListingStyle.SelectedFiltersWrapper>
                  <ProductListingStyle.SelectedFiltersTitle>Selected Filters:</ProductListingStyle.SelectedFiltersTitle>
                  <ProductListingStyle.SelectedFiltersList>
                    {selectedFilters.map((filter) => (
                      <ProductListingStyle.SelectedFilterItem key={filter}>{filter}</ProductListingStyle.SelectedFilterItem>
                    ))}
                  </ProductListingStyle.SelectedFiltersList>
                  <ProductListingStyle.RemoveFilterButtonWrapper>
                    <ProductListingStyle.RemoveFilterButtonLabel>Remove Filter:</ProductListingStyle.RemoveFilterButtonLabel>
                    <ProductListingStyle.RemoveFilterButtonGroup>
                      {selectedFilters.map((filter) => (
                        <ProductListingStyle.RemoveFilterButtonOption
                          key={filter}
                          onClick={() => handleRemoveFilter(filter)}
                        >
                          {filter}
                        </ProductListingStyle.RemoveFilterButtonOption>
                      ))}
                    </ProductListingStyle.RemoveFilterButtonGroup>
                  </ProductListingStyle.RemoveFilterButtonWrapper>
                </ProductListingStyle.SelectedFiltersWrapper>
              )}
              {selectedFilters.length > 0 && (
                <ProductListingStyle.RemoveAllFiltersButton onClick={removeAllFilters}>Remove All Filters</ProductListingStyle.RemoveAllFiltersButton>
              )}
              <button onClick={handleRemoveFilterModalClose}>Close</button>
            </ProductListingStyle.ModalContent>
          </ProductListingStyle.RemoveFilterModal>
        )}
        {filteredProducts.length > 0 ? (
          <ProductListingStyle.ProductListWrapper>
            {filteredProducts.map((product) => (
              <ProductListingStyle.ProductCard key={product.id}>
                <ProductListingStyle.ProductImageWrapper>
                  <Link to={{ pathname: `/ProductDetails/${product.title}`, state: { product } }}>
                    <ProductListingStyle.ProductImage src={product.image} alt={product.title} />
                  </Link>
                </ProductListingStyle.ProductImageWrapper>
                <Link to={{ pathname: `/ProductDetails/${product.title}`, state: { product } }}>
                  <ProductListingStyle.ProductTitle onClick={() => handleConsoleViewProduct(product)}>
                    {product.title}
                  </ProductListingStyle.ProductTitle>
                </Link>
                <ProductListingStyle.ProductPrice>Rs. {parseFloat(product.price).toFixed(2)}</ProductListingStyle.ProductPrice>
                <ProductListingStyle.ProductRating show={product.rating.count > 0}>
                  <ProductListingStyle.RatingText>
                    Ratings: <ProductListingStyle.StarContainer>{renderStarIcons(product.rating.rate)}</ProductListingStyle.StarContainer>
                  </ProductListingStyle.RatingText>
                </ProductListingStyle.ProductRating>
                <ProductListingStyle.AddToCartButton
                  onClick={() => handleAddToCart(product)}
                  added={isItemInCart(product.id)}
                  disabled={isItemInCart(product.id)}
                >
                  {isItemInCart(product.id) ? (
                    <>
                      <ProductListingStyle.TickIcon />
                      Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </ProductListingStyle.AddToCartButton>
              </ProductListingStyle.ProductCard>
            ))}
          </ProductListingStyle.ProductListWrapper>
        ) : (
          <ProductListingStyle.NoResult>No products found.</ProductListingStyle.NoResult>
        )}
      </div>
    </>
  );
};

export default ProductListing;
