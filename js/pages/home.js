function homePage() {
    return `
        <div class="home-container">
            <h1>NeuroBlock</h1>
            <p>Your interactive medical reference</p>
            <div class="module-grid">
                <div class="module-card" onclick="navigate('neuroanatomy')">
                    <h2>🧠 Neuroanatomy</h2>
                    <p>Cranial nerves, brainstem, pathways</p>
                </div>
                <div class="module-card">
                    <h2>💊 Pharmacology</h2>
                    <p>Coming soon</p>
                </div>
                <div class="module-card">
                    <h2>🫀 Physiology</h2>
                    <p>Coming soon</p>
                </div>
            </div>
        </div>
    `;
}
