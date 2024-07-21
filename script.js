// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const usersTableBody = document.querySelector('#usersTable tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Create a new table row for the user
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
        `;
        usersTableBody.appendChild(newRow);

        // Clear the form fields
        form.reset();



    });
});
