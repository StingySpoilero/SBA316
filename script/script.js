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
        image: 'imageone.jpg',
        description: 'Our Broken Hearts Lipstick provides vibrant color with a smooth finish, perfect for any occasion.'
    },
    eyeshadow: {
        image: 'imagefive.jpg',
        description: 'Create stunning eye looks with our rich and pigmented eyeshadow palettes that blend seamlessly.'
    },
    foundation: {
        image: 'imagetwo.jpg',
        description: 'Achieve an airbrushed look with our lightweight foundation that offers buildable coverage for a skin-like natural look.'
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