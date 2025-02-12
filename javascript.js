
        function toggleSearch() {
            alert('Search clicked! Implement search functionality here.');
        }
        function toggleMenu() {
            document.querySelector('nav ul').classList.toggle('active');
        }

        // hire me now button
        function openWhatsApp() {
            const phoneNumber = "+919691822276"; // Your WhatsApp number
            const message = encodeURIComponent("Hello Ajeet Patel, I'm interested in hiring you!");
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        }