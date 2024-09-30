// Caching elements using selectElementById and querySelector
const productSelect = document.getElementById('product-select'); // Cached with getElementById
const infoDisplay = document.querySelector('#info-display'); // Cached with querySelector
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
        description: 'Achieve flawless skin with our lightweight foundation that offers buildable coverage for a natural look.'
    }
};

// Event listener for form submission (HTML attribute validation)
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const selectedProduct = productSelect.value;

    // DOM event-based validation
    if (selectedProduct) {
        displayProductInfo(selectedProduct);
    } else {
        alert('Please select a product.');
    }
});

// Function to display product info
function displayProductInfo(product) {
    const data = productData[product];
    productImage.src = data.image;
    productDescription.textContent = data.description;
    infoDisplay.style.display = 'block';
}

// Event listener for adding a custom product
addProductButton.addEventListener('click', function() {
    const customProduct = prompt("Enter a custom product name:");
    const productImageUrl = prompt("Enter the image URL:");
    const productDesc = prompt("Enter a description:");

    if (customProduct && productImageUrl && productDesc) {
        // Creating a new product object
        const newProduct = {
            image: productImageUrl,
            description: productDesc
        };

        // Caching new product data
        productData[customProduct.toLowerCase()] = newProduct;

        // Creating a new option in the select element
        const newOption = document.createElement('option');
        newOption.value = customProduct.toLowerCase();
        newOption.textContent = customProduct;

        // Append new option to the select element
        productSelect.appendChild(newOption);
    } else {
        alert("All fields are required!");
    }
});

// Using parent-child-sibling relationship
const footer = document.querySelector('footer');
const lastChild = footer.lastChild; // Get the last child of the footer
console.log('Last child of footer:', lastChild);

// Iterating over a collection of elements (select options)
const options = productSelect.querySelectorAll('option');
options.forEach(option => {
    console.log('Option:', option.textContent);
});

// Adding BOM properties
console.log(navigator.userAgent); // Print user agent
console.log(window.innerWidth); // Print window width