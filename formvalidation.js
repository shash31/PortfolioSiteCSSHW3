document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form form');
    const errorOutput = document.getElementById('error-message');
    const infoOutput = document.getElementById('info-message');
    const formErrorsInput = document.getElementById('form-errors');
    
    errorOutput.style.display = 'none';
    infoOutput.style.display = 'none';

    let form_errors = [];

    form.addEventListener('submit', function(e) {
        let curr_form_errors = [];
        errorOutput.textContent = '';

        const requiredFields = [
            { id: 'subject', label: 'Topic' },
            { id: 'name', label: 'Name' },
            { id: 'email', label: 'Email' }
        ];

        requiredFields.forEach(field => {
            const el = document.getElementById(field.id);
            if (!el.value.trim()) {
                curr_form_errors.push({
                    field: field.id,
                    message: `${field.label} is required`
                });
            }
        });

        const email = document.getElementById('email').value.trim();
        if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            curr_form_errors.push({
                field: 'email',
                message: 'Invalid email format'
            });
        }

        console.log('Current form errors:', curr_form_errors);

        if (curr_form_errors.length > 0) {
            form_errors = form_errors.concat(curr_form_errors);
            e.preventDefault();
            errorOutput.textContent = curr_form_errors.map(err => err.message).join(' | ');
            errorOutput.style.display = 'block';
        } else {
            errorOutput.textContent = '';
            infoOutput.style.display = 'block';
            formErrorsInput.value = JSON.stringify(form_errors);
        }
    });
});