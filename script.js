// Toggle meny
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}

// Sett copyright-år
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Til kontaktskjema
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // hindrer standard POST

            const data = {
                navn: form.navn.value,
                email: form.email.value,
                melding: form.melding.value
            };

            try {
                const response = await fetch('https://formspree.io/f/mblqgrbl', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Meldingen er sendt! Takk for at du kontakter oss.');
                    form.reset();
                } else {
                    alert('Noe gikk galt. Vennligst prøv igjen.');
                }
            } catch (error) {
                alert('Noe gikk galt. Vennligst prøv igjen.');
                console.error(error);
            }
        });
    }
});
