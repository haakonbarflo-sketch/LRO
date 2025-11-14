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

// Sjekk om bruker allerede har akseptert
  if(localStorage.getItem('cookieConsent') === 'true'){
      document.getElementById('cookie-consent').style.display = 'none';
      loadAnalytics();
  }

  document.getElementById('accept-cookies').onclick = function() {
      localStorage.setItem('cookieConsent', 'true');
      document.getElementById('cookie-consent').style.display = 'none';
      loadAnalytics();
  }

  function loadAnalytics() {
      // Legg til GA4-koden først når brukeren har godtatt
      var script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-7QLV9LMEVN";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7QLV9LMEVN', { 'anonymize_ip': true });
  }
