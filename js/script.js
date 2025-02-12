// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: "#022C16" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            resize: true
        }
    }
});

// Dark Mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Obsługa produktów
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <div class="gallery-slide">
                    <img src="${card.dataset.image1}">
                    <img src="${card.dataset.image2}">
                    <img src="${card.dataset.image3}">
                    <img src="${card.dataset.image4}">
                </div>
                <h3>${card.querySelector('h3').textContent}</h3>
                <p>${card.dataset.description}</p>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    });
});

// Inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', toggleTheme);
});
