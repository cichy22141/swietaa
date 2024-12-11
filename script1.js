document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const currentDate = new Date();
        const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // 25 grudnia
        if (currentDate > christmasDate) {
            christmasDate.setFullYear(currentDate.getFullYear() + 1);
        }

        const diff = christmasDate - currentDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.textContent = `Do Bożego Narodzenia pozostało: ${days} dni, ${hours} godzin, ${minutes} minut i ${seconds} sekund.`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
