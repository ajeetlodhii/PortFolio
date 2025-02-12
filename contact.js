function sendToWhatsApp() {
    const phoneNumber = "+919691822276"; // Your WhatsApp number
    
    // Get form values
    let senderName = document.getElementById("name").value.trim();
    let senderEmail = document.getElementById("email").value.trim();
    let senderMessage = document.getElementById("message").value.trim();

    // Validate input fields
    if (!senderName || !senderEmail || !senderMessage) {
        alert("Please fill in all fields.");
        return;
    }

    // Format sender's name properly
    senderName = senderName
        .replace(/[_-]/g, " ") // Convert snake_case & kebab-case to normal text
        .toLowerCase() // Convert everything to lowercase
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word

    // Construct the message with name, email, and message
    const message = encodeURIComponent(
        `Hello, I am ${senderName}.\nEmail: ${senderEmail}\nMessage: ${senderMessage}`
    );

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}