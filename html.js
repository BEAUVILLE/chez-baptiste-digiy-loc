/* ==========================================
   DIGIY LOC — Script officiel CHEZ BAPTISTE
   Vitrine dynamique + ouverture fiche partenaire
   ========================================== */

/* ---- 1. Smooth scroll pour la page ---- */
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

/* ---- 2. Ouvrir la vidéo de présentation ---- */
function openVideo() {
    window.open(
        "https://drive.google.com/file/d/1oEVpt1R7fWBAJnKZlPu_fp2gqS-Z1kni/view",
        "_blank"
    );
}

/* ---- 3. Ouvrir la photo DIGIY ---- */
function openPhoto() {
    window.open(
        "https://digiylyfe.com/wp-content/uploads/2025/06/042-BAPTISTE.png",
        "_blank"
    );
}

/* ---- 4. Galerie photos (en attendant la visionneuse DIGIY) ---- */
function openGallery() {
    alert("📸 La galerie complète arrive bientôt dans DIGIY LOC !");
}

/* ---- 5. Ouvrir localisation Google Maps ---- */
function openGPS() {
    const gps = "https://maps.google.com/?q=Saly+Senegal";
    window.open(gps, "_blank");
}

/* ---- 6. Ouvrir la fiche Partenaire DIGIY (Driver / Loc / Market...) ---- */
function openPartnerForm(module = "loc") {
    // URL de ton futur HUB DIGIY
    const hubURL = "https://digiylyfe.com/partenaires-chez-baptiste/";

    // On envoie le module (loc, driver, resto…)
    window.location.href = `${hubURL}?module=${module}`;
}

/* ---- 7. Tracking simple (non intrusif) ---- */
function track(action) {
    console.log("DIGIY TRACK:", action);
}

/* ---- 8. Boutons liés dans le HTML ---- */
window.openVideo = openVideo;
window.openPhoto = openPhoto;
window.openGallery = openGallery;
window.openGPS = openGPS;
window.openPartnerForm = openPartnerForm;
window.track = track;
