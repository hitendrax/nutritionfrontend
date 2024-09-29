document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userDetailsForm');

    // Example of adding form submission handling
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());

        // Log form data (replace with your desired action, e.g., sending to a server)
        console.log('User Details:', userData);

        // You can add more functionality here, such as form validation or sending data to a server
    });

    // Example of adding interactivity to the menu icon
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function() {
        alert('Menu clicked! Add your menu functionality here.');
    });
});