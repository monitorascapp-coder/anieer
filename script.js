document.addEventListener('DOMContentLoaded', () => {
    // --- Floating Hearts Background ---
    const container = document.getElementById('hearts-container');
    const heartTypes = ['❤️', '💖', '💕', '💗', '💓', '🌸', '✨'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        heart.style.left = Math.random() * 100 + 'vw';
        const size = (Math.random() * 15 + 10) + 'px';
        heart.style.fontSize = size;
        
        const duration = (Math.random() * 8 + 7) + 's';
        heart.style.animationDuration = duration;
        heart.style.opacity = Math.random() * 0.4 + 0.2;
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), parseFloat(duration) * 1000);
    }
    
    setInterval(createHeart, 400);
    for(let i = 0; i < 10; i++) setTimeout(createHeart, Math.random() * 5000);

    // --- Love Counter Logic ---
    // Target date: February 22nd. 
    // If it hasn't happened this year yet, it will show time since last year's Feb 22.
    // Or if it's meant to be a fixed start date (e.g., Feb 22, 2024), we set it here.
    const startDate = new Date('February 22, 2026 14:00:00'); 

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d.toString().padStart(2, '0');
        document.getElementById('hours').innerText = h.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
    }

    setInterval(updateCounter, 1000);
    updateCounter();

    // --- Surprise Card Logic ---
    const surpriseBtn = document.getElementById('surprise-btn');
    const overlay = document.getElementById('card-overlay');
    const closeBtn = document.getElementById('close-card');

    surpriseBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        // Add extra hearts when clicking the button
        for(let i = 0; i < 15; i++) setTimeout(createHeart, i * 100);
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.add('hidden');
    });
});

