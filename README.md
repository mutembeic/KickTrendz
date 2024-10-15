md

# 🏷️ KickTrendz

## Overview

KickTrendz is a modern e-commerce platform designed to provide users with a seamless shopping experience. Built with HTML, CSS, JavaScript, and Bootstrap, KickTrendz offers a range of features including product browsing, a dynamic shopping cart, user authentication, and more.

## ✨ Features

- **User-Friendly Product Catalog:**
  - Browse a wide variety of products organized into categories.
  - Responsive design ensures a smooth experience across all devices.
  
- **Dynamic Shopping Cart:**
  - **Add to Cart:** Easily add products to your cart with a single click.
  - **Cart Item Counter:** Real-time updates on the number of items in your cart.
  - **View Cart in Modal:** Access your cart through a convenient modal popup.
  - **Remove Items:** Delete unwanted items directly from the cart.
  - **Total Price Calculation:** Automatic calculation of the total cost of items.
  - **Purchase Items:** Complete your purchase with a simple "Buy" button.
  
- **User Authentication:**
  - **Login/Logout:** Securely log in or out to manage your account.
  - **User Prompts:** Interactive prompts for username and password during login.
  
- **Responsive Navigation:**
  - Intuitive navigation bar for easy access to different sections of the site.
  - Includes links to Home, Products, Cart, and User Account.
  
- **Notifications and Alerts:**
  - Real-time alerts to inform users about successful actions like adding items to the cart or completing a purchase.

## 🗂 Project Structure

```bash
/KickTrendz
│
├── index.html        # Main HTML file for the homepage
├── products.html     # HTML file for the products page
├── cart.html         # HTML file for the cart modal
├── style.css         # Custom CSS styles
├── script.js         # JavaScript file handling all dynamic functionalities
└── assets/           # Folder containing images, icons, and other assets
    ├── cart-icon.png
    └── ...other assets

### JavaScript Functionality Overview

- **Cart Management:**
  - A cart array stores all the products added by the user.
  - Each product includes details like name and price.
  - Functions are provided to add, remove, and display items in the cart.

- **Adding Items to the Cart:**
  - When a user clicks the "Add to Cart" button, the selected product is added to the cart array.
  - The cart count badge updates to reflect the new number of items.
  - A confirmation alert notifies the user of the successful addition.

- **Cart Item Counter:**
  - Displays the current number of items in the cart.
  - Updates dynamically as items are added or removed.

- **Rendering the Cart Modal:**
  - Clicking the cart icon opens a modal displaying all items in the cart.
  - Each item is listed with its name, price, and a "Remove" button.
  - The total price is calculated and displayed at the bottom of the modal.

- **Removing Items from the Cart:**
  - Users can remove items by clicking the "Remove" button next to each product in the cart.
  - The cart array is updated accordingly, and the display refreshes to show the current items and total price.

- **Total Price Calculation:**
  - Utilizes JavaScript's `reduce()` method to sum the prices of all items in the cart.
  - The total is formatted to two decimal places for clarity.

- **Purchasing Items:**
  - Upon clicking the "Buy" button, an alert confirms the purchase with the total amount.
  - The cart is then cleared, resetting the cart count and modal display.

- **User Authentication:**
  - The login/logout button toggles based on the user's authentication state.
  - Simple prompts collect username and password information during login.
  - Alerts confirm successful login or logout actions.

## 🚀 How to Use

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/KickTrendz.git
