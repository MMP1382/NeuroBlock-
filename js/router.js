function navigate(page) {
    const app = document.getElementById('app');

    // 1. Fade out
    app.style.opacity = '0';
    app.style.transform = 'scale(0.97)';

    setTimeout(() => {

        // 2. Swap content
        if (page === 'home') {
            app.innerHTML = homePage();
        } else if (page === 'neuroanatomy') {
            neuroanatomyPage();
        } else {
            navigate('home');
            return;
        }

        // 3. Push to browser history so back button works
        history.pushState({ page }, '', `#${page}`);

        // 4. Double rAF forces browser to paint new content first,
        //    then triggers the CSS transition in the next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                app.style.opacity = '1';
                app.style.transform = 'scale(1)';
            });
        });

    }, 300);
}

// Handle browser back / forward button
window.addEventListener('popstate', (e) => {
    const page = e.state?.page ?? 'home';
    navigate(page);
});

// Wait for DOM to be fully loaded before first render
document.addEventListener('DOMContentLoaded', () => navigate('home'));
