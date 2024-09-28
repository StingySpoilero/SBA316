// Caching elements using selectElementById and querySelector
const productSelect = document.getElementById('product-select');
const infoDisplay = document.getElementById('info-display');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');
const productForm = document.getElementById('product-form');
const addProductButton = document.getElementById('add-product');

// Product data
const productData = {
    lipstick: {
        image: 'https://images.pexels.com/photos/12334955/pexels-photo-12334955.jpeg',
        description: 'Our Broken Hearts Lipstick provides vibrant color with a smooth finish, perfect for any occasion.'
    },
    eyeshadow: {
        image: 'https://images.pexels.com/photos/4167396/pexels-photo-4167396.jpeg',
        description: 'Create stunning eye looks with our rich and pigmented eyeshadow palettes that blend seamlessly.'
    },
    foundation: {
        image: 'https://images.pexels.com/photos/5689530/pexels-photo-5689530.jpeg',
        description: 'Achieve flawless skin with our lightweight foundation that offers buildable coverage for a natural look.'
    }
};

// Event listener for form submission
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const selectedProduct = productSelect.value;
    if (selectedProduct) {
        displayProductInfo(selectedProduct);
    }
});

// Function to display product info
function displayProductInfo(product) {
    const data = productData[product];
    productImage.src = data.image;
    productDescription.textContent = data.description;
    infoDisplay.style.display = 'block';
}

// Event listener for adding custom product
addProductButton.addEventListener('click', function() {
    // Create a new product input form
    const customProduct = prompt("Enter a custom product name:");
    const productImageUrl = prompt("Enter the image URL:");
    const productDesc = prompt("Enter a description:");

    if (customProduct && productImageUrl && productDesc) {
        // Caching and using DocumentFragment to create templated content
        const newProduct = {
            image: productImageUrl,
            description: productDesc
        };

        productData[customProduct.toLowerCase()] = newProduct;

        // Create new option in the select element
        const newOption = document.createElement('option');
        newOption.value = customProduct.toLowerCase();
        newOption.textContent = customProduct;

        // Append new option to the select element
        productSelect.appendChild(newOption);
    } else {
        alert("All fields are required!");
    }
});

// Adding BOM properties
console.log(navigator.userAgent); // Print user agent
console.log(window.innerWidth); // Print window width