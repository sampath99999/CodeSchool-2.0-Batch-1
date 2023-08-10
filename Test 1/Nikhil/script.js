document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const nameValidation = document.getElementById("nameValidation");

    nameInput.addEventListener("input", function() {
        const name = nameInput.value.trim();
        if (name === "") {
            nameValidation.textContent = "Name is required";
        } else {
            nameValidation.textContent = ""; 
        }
    });
});
