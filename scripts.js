// Admin credentials
const adminUsername = "admin";
const adminPassword = "securePassword123";

// Populate local government based on selected state
function populateLocalGovernment() {
    const state = document.getElementById('state').value;
    const localGovernmentSelect = document.getElementById('local-government');
    localGovernmentSelect.innerHTML = '<option value="">Select your local government</option>';
    
    if (state && localGovernments[state]) {
        localGovernments[state].forEach(lga => {
            const option = document.createElement('option');
            option.value = lga;
            option.text = lga;
            localGovernmentSelect.appendChild(option);
        });
    }
}

// Product options logic
function populateProductOptions() {
    const product = document.getElementById('product').value;
    const productOptionSelect = document.getElementById('product-option');
    productOptionSelect.innerHTML = '<option value="">Select Product Option</option>';
    
    let options = [];
    if (product === "rice") {
        options = ["Local Rice", "Foreign Rice"];
    } else if (product === "cement") {
        options = ["Dangote 3X", "Dangote Falcon", "Dangote Block Master","BUA","Mangal"];
    } else if (product === "spaghetti") {
        options = ["Local Spaghetti", "Foreign Spaghetti"];
    } else if (product === "macaroni") {
        options = ["Local Macaroni", "Foreign Macaroni"];
    }

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.text = option;
        productOptionSelect.appendChild(opt);
    });
}

// Handle admin login
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const enteredUsername = document.getElementById('adminUsername').value;
    const enteredPassword = document.getElementById('adminPassword').value;

    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
        document.getElementById('adminPanel').style.display = 'block';
        document.getElementById('loginError').style.display = 'none';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Handle order form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const localGovernment = document.getElementById('local-government').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const productOption = document.getElementById('product-option').value;
    const quantity = document.getElementById('quantity').value;

    // Add the order to the admin panel
    const ordersTableBody = document.querySelector('#ordersTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${state}</td>
        <td>${localGovernment}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${product}</td>
        <td>${productOption}</td>
        <td>${quantity}</td>
    `;
    ordersTableBody.appendChild(newRow);

    // Send an email (this will open the user's email client)
    const emailBody = `Name: ${name}%0AState: ${state}%0ALGA: ${localGovernment}%0AAddress: ${address}%0APhone: ${phone}%0AProduct: ${product}%0AProduct Option: ${productOption}%0AQuantity: ${quantity}`;
    window.location.href = `mailto:jibiamultiresources@gmail.com?subject=New Order&body=${emailBody}`;
});
