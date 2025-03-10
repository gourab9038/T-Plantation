document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm")
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")
  
    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    const messageError = document.getElementById("messageError")
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  
    // Function to show error
    function showError(input, errorElement, message) {
      input.classList.add("input-error")
      errorElement.textContent = message
    }
  
    // Function to clear error
    function clearError(input, errorElement) {
      input.classList.remove("input-error")
      errorElement.textContent = ""
    }
  
    // Real-time validation for name
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required")
      } else if (nameInput.value.trim().length < 2) {
        showError(nameInput, nameError, "Name must be at least 2 characters")
      } else {
        clearError(nameInput, nameError)
      }
    })
  
    // Real-time validation for email
    emailInput.addEventListener("input", () => {
      if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Email is required")
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, "Please enter a valid email")
      } else {
        clearError(emailInput, emailError)
      }
    })
  
    // Real-time validation for message
    messageInput.addEventListener("input", () => {
      if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Message is required")
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, "Message must be at least 10 characters")
      } else {
        clearError(messageInput, messageError)
      }
    })
  
    // Form submission
    contactForm.addEventListener("submit", (event) => {
      let isValid = true
  
      // Validate name
      if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required")
        isValid = false
      } else if (nameInput.value.trim().length < 2) {
        showError(nameInput, nameError, "Name must be at least 2 characters")
        isValid = false
      }
  
      // Validate email
      if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Email is required")
        isValid = false
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, "Please enter a valid email")
        isValid = false
      }
  
      // Validate message
      if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Message is required")
        isValid = false
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, "Message must be at least 10 characters")
        isValid = false
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault()
      } else {
        // Here you would typically send the form data to a server
        alert("Form submitted successfully!")
        contactForm.reset()
      }
    })
  })
  
  