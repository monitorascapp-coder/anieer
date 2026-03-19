document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');
    const hearts = ['❤️', '💖', '💕', '💗', '💓'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Randomize heart type
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Randomize position
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Randomize size
        const size = (Math.random() * 20 + 10) + 'px';
        heart.style.fontSize = size;
        
        // Randomize duration
        const duration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDuration = duration;
        
        // Randomize opacity
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        container.appendChild(heart);
        
        // Remove heart after animation finishes
        setTimeout(() => {
            heart.remove();
        }, parseFloat(duration) * 1000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 300);
    
    // Create some initial hearts
    for(let i = 0; i < 15; i++) {
        setTimeout(createHeart, Math.random() * 3000);
    }

    // Surprise Card Logic
    const surpriseBtn = document.getElementById('surprise-btn');
    const overlay = document.getElementById('card-overlay');
    const closeBtn = document.getElementById('close-card');

    surpriseBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    // Close on click outside the card
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});
