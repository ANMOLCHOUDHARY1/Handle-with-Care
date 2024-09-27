// Get elements
const whatsappButton = document.getElementById('whatsapp-button');
const whatsappPopup = document.getElementById('whatsapp-popup');
const popupClose = document.getElementById('popup-close');

// Show the popup when the button is clicked
whatsappButton.addEventListener('click', () => {
    whatsappPopup.style.display = 'block';
});

// Close the popup when the close button is clicked
popupClose.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
});

// Close the popup if the user clicks outside of the popup content
window.addEventListener('click', (event) => {
    if (event.target === whatsappPopup) {
        whatsappPopup.style.display = 'none';
    }
});



// Google Apps Script Web App URL (Paste the URL you copied earlier)
const scriptURL = 'YOUR_GOOGLE_WEB_APP_URL_HERE';

// Show form after 5 seconds
setTimeout(() => {
    document.getElementById('form-overlay').style.display = 'block';
    document.getElementById('inquiry-form').style.display = 'block';
}, 5000);

// Handle form submission
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(inquiryForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone')
    };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            alert('Inquiry submitted successfully!');
            // Hide form after submission
            document.getElementById('form-overlay').style.display = 'none';
            document.getElementById('inquiry-form').style.display = 'none';
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('There was an issue submitting the inquiry.');
        });
});

// Close button functionality
const closeFormButton = document.getElementById('close-form');
closeFormButton.addEventListener('click', () => {
    document.getElementById('form-overlay').style.display = 'none';
    document.getElementById('inquiry-form').style.display = 'none';
});