// Form submission handler
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  // Validate form data
  if (validateForm(data)) {
    // Store form data in localStorage (for demo purposes)
    localStorage.setItem("applicationData", JSON.stringify(data));

    // Redirect to thank you page
    window.location.href = "thank-you.html";
  }
}

// Form validation
function validateForm(data) {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Basic phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(data.contact.replace(/\D/g, ""))) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  // Check if all fields are filled
  for (let key in data) {
    if (!data[key]) {
      alert("Please fill in all fields");
      return false;
    }
  }

  return true;
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
});
