// Logique pour le menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

// Logique pour le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation de base
        if (name === '' || email === '' || message === '') {
            formStatus.textContent = "Tous les champs sont obligatoires.";
            formStatus.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            formStatus.textContent = "Veuillez entrer une adresse email valide.";
            formStatus.style.color = "red";
            return;
        }

        // Affichage du statut de soumission (Simulation)
        formStatus.textContent = "Formulaire en fix...";
        formStatus.style.color = "orange";

        // Réinitialisation du formulaire
        contactForm.reset();
    });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

