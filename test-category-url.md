# Testing Category URL Functionality

## Test Cases

1. **Initial Load with No Category Parameter**
   - Navigate to `/products`
   - Expected: All products should be displayed, no category filter applied
   - URL should remain `/products`

2. **Initial Load with Category Parameter**
   - Navigate to `/products?category=bouquets`
   - Expected: Only products from the "bouquets" category should be displayed
   - The "bouquets" radio button should be selected
   - URL should remain `/products?category=bouquets`

3. **Selecting a Category**
   - Navigate to `/products`
   - Click on a category (e.g., "velvet_wire_floral_art")
   - Expected: Only products from the selected category should be displayed
   - URL should update to `/products?category=velvet_wire_floral_art`

4. **Selecting "All" Category**
   - Navigate to `/products?category=bouquets`
   - Click on "All" category
   - Expected: All products should be displayed
   - URL should update to `/products` (no category parameter)

5. **Resetting Filters**
   - Navigate to `/products?category=bouquets`
   - Click "Reset Filters" button
   - Expected: All products should be displayed
   - URL should update to `/products` (no category parameter)

6. **Copy-Paste URL Test**
   - Navigate to `/products?category=thai_floral_craft`
   - Copy the URL
   - Open a new tab and paste the URL
   - Expected: Only products from the "thai_floral_craft" category should be displayed
   - The "thai_floral_craft" radio button should be selected
