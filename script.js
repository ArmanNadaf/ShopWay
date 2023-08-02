// Function to render the cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
  
    // Get the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Clear the existing content in the cartItemsContainer
    cartItemsContainer.innerHTML = '';
  
    // Iterate through each cart item and create the corresponding HTML elements
    cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
  
      // Add the product image
      const productImage = document.createElement('img');
      productImage.src = item.image;
      productImage.alt = item.name;
      cartItemDiv.appendChild(productImage);
  
      // Add the product name
      const productName = document.createElement('h4');
      productName.textContent = item.name;
      cartItemDiv.appendChild(productName);
  
      // Add the product price
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${item.price.toFixed(2)}`;
      cartItemDiv.appendChild(productPrice);
  
      // Add the product quantity and update button
      const productQuantity = document.createElement('input');
      productQuantity.type = 'number';
      productQuantity.min = '1';
      productQuantity.value = item.quantity;
      cartItemDiv.appendChild(productQuantity);
  
      // Add the "Update" button to update the quantity
      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.addEventListener('click', () => {
        item.quantity = parseInt(productQuantity.value);
        // Save the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Re-render the cart items to show the updated quantity
        renderCartItems();
      });
      cartItemDiv.appendChild(updateButton);
  
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }
  
  // Call the renderCartItems function on page load
  document.addEventListener('DOMContentLoaded', renderCartItems);
  