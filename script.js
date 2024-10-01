document
  .getElementById("webinarSeries")
  .addEventListener("change", function () {
    const customContainer = document.getElementById("customSeriesContainer");
    const customInput = document.getElementById("customSeries");

    if (this.value === "custom") {
      customContainer.style.display = "block";
      customInput.required = true;
    } else {
      customContainer.style.display = "none";
      customInput.required = false;
    }
  });

// Only needed if you want client-side feedback before form submission
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    // FormSubmit will handle the actual form submission
    // This is just for immediate user feedback
    const successMessage = document.getElementById("successMessage");
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  });
