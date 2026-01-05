document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container');
    const submitBtn = document.querySelector('.contact-card__button');

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('contact-name').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };

        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            alert('Network error occurred');
        });
    });
});
