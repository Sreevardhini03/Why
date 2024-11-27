document.addEventListener("DOMContentLoaded", function() {
    const reasons = [
        "You make me laugh every time we talk 😊",
        "You always know how to brighten my day! 💖",
        "Your kindness knows no bounds! 🌟",
        "You are a great listener and an awesome big brother ( mine only )! 👂",
        "You always keep me happy! 🎯",
        "Your laugh is contagious and makes me happy! 😄",
        "You make the world a better place just by being in it! 🌍",
        "You never give up and are strong, no matter how tough things get! 💪",
        "You're an amazing , awesome , kind , loving , sweet big brother! 🍳🍰",
        "You always know how to make me feel loved! 🥰"
    ];
    
    let currentIndex = 0;
    
    const reasonText = document.getElementById('reasonText');
    const nextReasonBtn = document.getElementById('nextReasonBtn');
    const confettiContainer = document.getElementById('confetti');
    
    // Function to show confetti
    function showConfetti() {
        const numConfetti = 100;
        for (let i = 0; i < numConfetti; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti');
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confettiContainer.appendChild(confettiPiece);
            setTimeout(() => confettiPiece.remove(), 3000); // Remove after animation
        }
    }
    
    // Function to show the next reason
    function showNextReason() {
        if (currentIndex < reasons.length) {
            reasonText.textContent = reasons[currentIndex];
            showConfetti();
            currentIndex++;
        } else {
            reasonText.textContent = "You’ve seen all the reasons, but there’s so much more to love about you!";
            nextReasonBtn.disabled = true; // Disable the button after all reasons
        }
    }
    
    nextReasonBtn.addEventListener('click', showNextReason);
    
    // Initial setup
    showNextReason();
});
