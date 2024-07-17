document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Formulario de contacto (ejemplo básico, necesitarías backend para funcionalidad completa)
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        form.reset();
    });
});