# Testing Category and Price URL Functionality

## Test Cases

1. **Initial Load with No Parameters**
   - Navigate to `/products`
   - Expected: All products should be displayed, no category filter applied, default price range
   - URL should remain `/products`

2. **Initial Load with Category Parameter**
   - Navigate to `/products?category=bouquets`
   - Expected: Only products from the "bouquets" category should be displayed
   - The "bouquets" radio button should be selected
   - URL should remain `/products?category=bouquets`

3. **Initial Load with Price Parameters**
   - Navigate to `/products?minPrice=200&maxPrice=1000`
   - Expected: Only products within the price range 200-1000 should be displayed
   - Price slider should reflect the 200-1000 range
   - URL should remain `/products?minPrice=200&maxPrice=1000`

4. **Initial Load with Both Category and Price Parameters**
   - Navigate to `/products?category=bouquets&minPrice=200&maxPrice=1000`
   - Expected: Only bouquet products within the price range 200-1000 should be displayed
   - The "bouquets" radio button should be selected and price slider should reflect the range
   - URL should remain `/products?category=bouquets&minPrice=200&maxPrice=1000`

5. **Selecting a Category**
   - Navigate to `/products`
   - Click on a category (e.g., "velvet_wire_floral_art")
   - Expected: Only products from the selected category should be displayed
   - URL should update to `/products?category=velvet_wire_floral_art`

6. **Adjusting Price Range**
   - Navigate to `/products`
   - Adjust the price slider to a new range (e.g., 300-2000)
   - Expected: Only products within the new price range should be displayed
   - URL should update to `/products?minPrice=300&maxPrice=2000`

7. **Combining Category and Price Filters**
   - Navigate to `/products`
   - Select a category (e.g., "nature_inspired_floral_creation")
   - Adjust the price slider to a new range (e.g., 500-1500)
   - Expected: Only products from the selected category within the price range should be displayed
   - URL should update to `/products?category=nature_inspired_floral_creation&minPrice=500&maxPrice=1500`

8. **Selecting "All" Category**
   - Navigate to `/products?category=bouquets&minPrice=200&maxPrice=1000`
   - Click on "All" category
   - Expected: All products within the price range should be displayed
   - URL should update to `/products?minPrice=200&maxPrice=1000` (no category parameter)

9. **Resetting Filters**
   - Navigate to `/products?category=bouquets&minPrice=200&maxPrice=1000`
   - Click "Reset Filters" button
   - Expected: All products should be displayed with default price range
   - URL should update to `/products` (no parameters)

10. **Copy-Paste URL Test**
    - Navigate to `/products?category=thai_floral_craft&minPrice=150&maxPrice=500`
    - Copy the URL
    - Open a new tab and paste the URL
    - Expected: Only products from the "thai_floral_craft" category within the price range should be displayed
    - The "thai_floral_craft" radio button should be selected and price slider should reflect the range
