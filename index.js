document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    // Function to update the cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cart.length;
    }

    // Function to calculate total price
    function calculateTotalPrice() {
        return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    }

    // Function to render the cart items
    function renderCart() {
        const cartList = document.querySelector('.cart-list');
        cartList.innerHTML = ''; // Clear the list
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = `${item.name} - $${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger btn-sm';
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => {
                removeItemFromCart(index);
            };
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });

        const totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.textContent = `Total: $${calculateTotalPrice()}`;
    }

    // Function to add an item to the cart
    function addToCart(name, price) {
        cart.push({ name, price });
        renderCart();
        updateCartCount();
        alert(`${name} was successfully added to the cart!`);
    }

    // Function to remove an item from the cart
    function removeItemFromCart(index) {
        cart.splice(index, 1);
        renderCart();
        updateCartCount();
    }

    // Handle Add to Cart button click
    document.querySelectorAll('.btn-primary').forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.card');
            const name = card.querySelector('.card-title').textContent;
            const price = card.querySelector('h3').textContent.replace('$', '');
            addToCart(name, price);
        });
    });

    // Handle Buy button click in the cart modal
    document.querySelector('.cart-buy-button').addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length > 0) {
            alert(`You have purchased items worth $${calculateTotalPrice()}!`);
            cart = [];
            renderCart();
            updateCartCount();
            const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
            cartModal.hide();
        } else {
            alert('Your cart is empty!');
        }
    });

    // Handle Login/Sign Up button click
    const loginButton = document.querySelector('.btn-outline-light');
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const isLoggedIn = loginButton.textContent === 'Log Out';
        if (isLoggedIn) {
            alert('Logged out successfully.');
            loginButton.textContent = 'Login/Sign Up';
        } else {
            const username = prompt('Enter your username:');
            const password = prompt('Enter your password:');
            if (username && password) {
                alert('Logged in successfully.');
                loginButton.textContent = 'Log Out';
            }
        }
    });

    // Handle Cart icon click
    document.querySelector('.cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    });

    // Render cart on page load
    renderCart();
    updateCartCount();
});


document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (which is jumping to the top of the page)

    // Scroll to the footer smoothly
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});