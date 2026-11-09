document.addEventListener('DOMContentLoaded', () => {
    function trackGoal(goalName) {
        if (window.SETCAD_METRIKA_ID && typeof window.ym === 'function') {
            window.ym(window.SETCAD_METRIKA_ID, 'reachGoal', goalName);
        }
        if (typeof window.gtag === 'function') {
            window.gtag('event', goalName);
        }
    }

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => trackGoal('phone_click'));
    });
});
