
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("rentalForm");

    form.addEventListener("submit", function(event) {
       
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        
        const fullNameInput = document.getElementById("fullName");
        if (fullNameInput.value.trim() === "") {
            setError(fullNameInput, "Full name is required");
            isValid = false;
        } else {
            clearError(fullNameInput);
        }

        
        const emailInput = document.getElementById("email");
        if (emailInput.value.trim() === "") {
            setError(emailInput, "Email is required");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, "Please enter a valid email address");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        
        const phoneInput = document.getElementById("phone");
        if (phoneInput.value.trim() === "") {
            setError(phoneInput, "Phone number is required");
            isValid = false;
        } else if (!isValidPhone(phoneInput.value.trim())) {
            setError(phoneInput, "Please enter a valid phone number");
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        
        const pickupDateInput = document.getElementById("pickupDate");
        if (pickupDateInput.value.trim() === "") {
            setError(pickupDateInput, "Pickup date is required");
            isValid = false;
        } else {
            clearError(pickupDateInput);
        }

        const returnDateInput = document.getElementById("returnDate");
        if (returnDateInput.value.trim() === "") {
            setError(returnDateInput, "Return date is required");
            isValid = false;
        } else {
            clearError(returnDateInput);
        }

        return isValid;
    }

    function setError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        if (!errorMessage) {
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("error-message");
            errorMessage.innerText = message;
            formGroup.appendChild(errorMessage);
        }
        input.classList.add("error");
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        input.classList.remove("error");
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\d{10}$/; 
        return phoneRegex.test(phone);
    }
});
