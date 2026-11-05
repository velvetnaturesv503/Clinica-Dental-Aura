document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('active')));

    // Formulario y Modal
    const form = document.getElementById('appointmentForm');
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementById('closeModal');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        form.reset();
    });

    closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
    modal?.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
});