document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-section');
    const appearOptions = {
        threshold: 0.05
    };

    const onScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
        });
    }, appearOptions);

    sections.forEach(section => {
        onScroll.observe(section);
    });

    document.querySelectorAll('.gift-img').forEach(giftDiv => {
        giftDiv.addEventListener('click', function() {
            this.classList.toggle('opened');
        });
    });
});