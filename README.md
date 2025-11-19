<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>CHEZ BAPTISTE — Appartement à Saly</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root{
    --bg:#0b1020;
    --card:#020617;
    --card-soft:#020617;
    --accent:#facc15;
    --accent-soft:#f97316;
    --ink:#f9fafb;
    --muted:#9ca3af;
    --line:#1f2937;
  }
  *{box-sizing:border-box;}
  body{
    margin:0; padding:0;
    background:radial-gradient(circle at top,#111827 0,#020617 55%);
    color:var(--ink);
    font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  }
  .app{
    max-width:980px;
    margin:0 auto;
    min-height:100vh;
    display:flex;
    flex-direction:column;
  }
  header{
    padding:14px 16px;
    display:flex;
    justify-content:space-between;
    gap:12px;
    align-items:center;
  }
  .brand{
    font-weight:700;
    font-size:18px;
  }
  .brand span{
    color:var(--accent);
  }
  .tag{
    font-size:11px;
    border-radius:999px;
    border:1px solid rgba(148,163,184,.6);
    padding:4px 10px;
    white-space:nowrap;
    color:var(--muted);
  }
  main{flex:1;padding:0 12px 16px;}

  .hero{
    background:linear-gradient(135deg,#111827,#020617);
    border-radius:18px;
    padding:16px;
    border:1px solid rgba(250,204,21,.4);
    display:grid;
    grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);
    gap:16px;
    align-items:flex-start;
    box-shadow:0 20px 40px rgba(0,0,0,.7);
    margin-bottom:16px;
  }
  @media(max-width:900px){
    .hero{grid-template-columns:1fr;}
  }
  .hero h1{
    margin:0 0 6px;
    font-size:22px;
  }
  .hero p{
    margin:0 0 8px;
    font-size:13px;
    color:var(--muted);
  }
  .chips{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
    margin-top:6px;
  }
  .chip{
    font-size:11px;
    border-radius:999px;
    border:1px solid rgba(148,163,184,.6);
    padding:4px 8px;
    color:var(--muted);
  }

  .hero-media{
    margin-top:10px;
  }
  .hero-photo{
    width:100%;
    max-height:220px;
    border-radius:14px;
    object-fit:cover;
    display:block;
    border:1px solid #1f2937;
  }
  .hero-caption{
    margin-top:4px;
    font-size:11px;
    color:var(--muted);
  }

  .price-block{
    background:#020617;
    border-radius:14px;
    border:1px solid #1f2937;
    padding:10px 12px;
    font-size:13px;
  }
  .price-block h2{
    margin:0 0 4px;
    font-size:14px;
    color:var(--accent);
  }
  .tarifs{
    display:flex;
    flex-direction:column;
    gap:4px;
    margin:6px 0;
  }
  .tarifs span{
    display:flex;
    justify-content:space-between;
  }

  .cta-col{
    display:flex;
    flex-direction:column;
    gap:8px;
    margin-top:6px;
  }
  .btn{
    border:none;
    border-radius:999px;
    padding:9px 12px;
    font-size:14px;
    font-weight:600;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6px;
    text-decoration:none;
  }
  .btn-wa{
    background:#16a34a;
    color:#ecfdf3;
  }
  .btn-call{
    background:#0f172a;
    color:#e5e7eb;
    border:1px solid #1f2937;
  }
  .btn-video{
    background:#111827;
    color:#e5e7eb;
    border:1px solid #334155;
    font-size:13px;
  }

  .layout{
    display:grid;
    grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
    gap:12px;
  }
  @media(max-width:900px){
    .layout{grid-template-columns:1fr;}
  }

  .card{
    background:var(--card);
    border-radius:16px;
    border:1px solid var(--line);
    box-shadow:0 16px 32px rgba(0,0,0,.6);
    padding:12px;
  }
  .card h2{
    margin:0 0 4px;
    font-size:16px;
  }
  .card small{
    font-size:12px;
    color:var(--muted);
  }

  .form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:8px;
    margin-top:8px;
  }
  .field label{
    display:block;
    font-size:11px;
    color:var(--muted);
    margin-bottom:2px;
  }
  .field input,
  .field select{
    width:100%;
    padding:7px 9px;
    border-radius:10px;
    border:1px solid var(--line);
    background:#020617;
    color:var(--ink);
    font-size:13px;
  }
  .field input[type="date"]{
    color-scheme:dark;
  }

  .summary{
    margin-top:8px;
    font-size:13px;
    color:var(--muted);
  }
  .summary strong{
    color:var(--accent-soft);
  }

  footer{
    padding:8px 14px 14px;
    font-size:11px;
    color:var(--muted);
    text-align:center;
  }

  a.inline-link{
    color:var(--accent-soft);
    text-decoration:none;
  }
  a.inline-link:hover{
    text-decoration:underline;
  }
</style>
</head>
<body>
<div class="app">
  <header>
    <div class="brand">CHEZ BAPTISTE — <span>DIGIY LOC</span></div>
    <div class="tag">Appartement à Saly · 4 personnes max · Quartier paisible</div>
  </header>

  <main>
    <!-- HERO AVEC PHOTO + CTA -->
    <section class="hero">
      <div>
        <h1>Appartement CHEZ BAPTISTE — Saly</h1>
        <p>
          Appartement confortable dans un quartier paisible de Saly, sans bruyance, idéal pour les séjours
          en famille ou entre amis. Jusqu’à 4 personnes, à quelques minutes des commodités et de la vie de Saly.
        </p>
        <div class="chips">
          <span class="chip">4 personnes max</span>
          <span class="chip">Quartier calme</span>
          <span class="chip">Sénélec en sus</span>
          <span class="chip">Réservation directe propriétaire</span>
        </div>

        <div class="hero-media">
          <img src="https://digiylyfe.com/wp-content/uploads/2025/06/042-BAPTISTE.png"
               alt="Appartement CHEZ BAPTISTE à Saly"
               class="hero-photo">
          <div class="hero-caption">
            Vue de l’appartement CHEZ BAPTISTE — Saly (visuel DIGIY).
          </div>
        </div>
      </div>

      <div>
        <div class="price-block">
          <h2>Tarifs CHEZ BAPTISTE</h2>
          <div class="tarifs">
            <span><span>Nuit :</span><strong>30 000 F</strong></span>
            <span><span>Semaine :</span><strong>175 000 F</strong></span>
            <span><span>Mois :</span><strong>450 000 F</strong></span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px;">
            ⚡ Sénélec en sus selon consommation électrique.
          </div>
        </div>

        <div class="cta-col">
          <!-- WhatsApp direct -->
          <a class="btn btn-wa"
             id="btnWa">
            💬 Réserver par WhatsApp
          </a>

          <!-- Appel direct -->
          <a class="btn btn-call"
             id="btnCall">
            📞 Appeler le propriétaire
          </a>

          <!-- Vidéo présentation -->
          <a class="btn btn-video"
             href="https://drive.google.com/file/d/1oEVpt1R7fWBAJnKZlPu_fp2gqS-Z1kni/view?usp=sharing"
             target="_blank" rel="noopener">
            🎥 Voir la vidéo de présentation
          </a>
        </div>
      </div>
    </section>

    <!-- LAYOUT BAS -->
    <section class="layout">
      <!-- Simulateur séjour -->
      <article class="card">
        <h2>Simuler votre séjour</h2>
        <small>Choisissez vos dates et le nombre de personnes pour voir une estimation.</small>

        <div class="form-grid">
          <div class="field">
            <label>Date d'arrivée</label>
            <input type="date" id="dateIn">
          </div>
          <div class="field">
            <label>Date de départ</label>
            <input type="date" id="dateOut">
          </div>
          <div class="field">
            <label>Nombre de personnes</label>
            <select id="guests">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>4</option>
            </select>
          </div>
          <div class="field">
            <label>Votre nom</label>
            <input type="text" id="clientName" placeholder="Votre nom">
          </div>
        </div>

        <div class="summary" id="summary">
          Sélectionnez des dates pour voir le nombre de nuits et une estimation en tarif nuit (30 000 F / nuit).
          Les tarifs semaine (175 000 F) et mois (450 000 F) pourront être ajustés avec le propriétaire.
        </div>
      </article>

      <!-- Infos pratiques + liens cliquables -->
      <article class="card">
        <h2>Infos pratiques & contacts</h2>
        <small>Quelques points importants pour votre séjour.</small>

        <ul style="margin:8px 0 0 16px; padding:0; font-size:13px; color:var(--muted);">
          <li>Quartier paisible, sans bruyance.</li>
          <li>Appartement pour 4 personnes maximum.</li>
          <li>Tarifs : 30 000 F / nuit · 175 000 F / semaine · 450 000 F / mois.</li>
          <li>Sénélec en sus selon consommation.</li>
          <li>Réservation et confirmation par WhatsApp ou appel direct.</li>
        </ul>

        <div style="margin-top:10px;font-size:12px;color:var(--muted);line-height:1.5;">
          WhatsApp principal : 
          <a class="inline-link"
             href="https://wa.me/221771342889"
             target="_blank" rel="noopener">
            +221 77 134 28 89
          </a><br>

          WhatsApp / téléphone secondaire : 
          <a class="inline-link"
             href="https://wa.me/221778765786"
             target="_blank" rel="noopener">
            +221 77 876 57 86
          </a><br><br>

          Appel direct : 
          <a class="inline-link"
             href="tel:+221771342889">
            📞 +221 77 134 28 89
          </a><br>

          Vidéo de présentation : 
          <a class="inline-link"
             href="https://drive.google.com/file/d/1oEVpt1R7fWBAJnKZlPu_fp2gqS-Z1kni/view?usp=sharing"
             target="_blank" rel="noopener">
            🎥 Voir la vidéo
          </a><br>

          Visuel DIGIY : 
          <a class="inline-link"
             href="https://digiylyfe.com/wp-content/uploads/2025/06/042-BAPTISTE.png"
             target="_blank" rel="noopener">
            📸 Voir la photo
          </a>
        </div>
      </article>
    </section>
  </main>

  <footer>
    CHEZ BAPTISTE — Saly · Module DIGIY LOC personnalisé · Contact WhatsApp : +221 77 134 28 89 / +221 77 876 57 86
  </footer>
</div>

<script>
function formatMoney(x){
  return (x||0).toLocaleString("fr-FR") + " F";
}

const dateIn = document.getElementById("dateIn");
const dateOut = document.getElementById("dateOut");
const guests = document.getElementById("guests");
const clientName = document.getElementById("clientName");
const summary = document.getElementById("summary");
const btnWa = document.getElementById("btnWa");
const btnCall = document.getElementById("btnCall");

function getNights(){
  if(!dateIn.value || !dateOut.value) return 0;
  const d1 = new Date(dateIn.value);
  const d2 = new Date(dateOut.value);
  const diff = d2 - d1;
  if(isNaN(diff) || diff <= 0) return 0;
  return Math.round(diff / (1000*60*60*24));
}

function updateSummary(){
  const nights = getNights();
  const g = Number(guests.value||"1");
  if(!nights){
    summary.innerHTML = "Sélectionnez des dates d'arrivée et de départ pour voir le nombre de nuits et une estimation en tarif nuit (30 000 F / nuit).";
    return;
  }
  const totalNight = nights * 30000;
  summary.innerHTML = `
    <div>Séjour de <strong>${nights}</strong> nuit(s) pour <strong>${g}</strong> personne(s) (max 4).</div>
    <div>Estimation en tarif nuit (30 000 F / nuit) : <strong>${formatMoney(totalNight)}</strong>.</div>
    <div style="margin-top:4px;font-size:12px;">
      Tarifs indicatifs : <strong>175 000 F</strong> la semaine · <strong>450 000 F</strong> le mois (Sénélec en sus).<br>
      Le tarif final sera confirmé avec le propriétaire lors de l’échange WhatsApp.
    </div>
  `;
}

[dateIn, dateOut, guests].forEach(el=>{
  el.addEventListener("change", updateSummary);
});

// WhatsApp bouton dynamique (avec résumé)
btnWa.addEventListener("click", ()=>{
  const nights = getNights();
  const g = Number(guests.value||"1");
  const name = clientName.value.trim() || "Client";
  let txt = "Bonjour, je souhaite une r\u00e9servation pour l'appartement CHEZ BAPTISTE \u00e0 Saly.%0A";
  txt += "- Nom : " + name + "%0A";
  if(dateIn.value && dateOut.value){
    txt += "- Dates : du " + dateIn.value + " au " + dateOut.value + " (" + nights + " nuit(s))%0A";
  }
  txt += "- Nombre de personnes : " + g + "%0A";
  txt += "- Tarifs DIGIY LOC : Nuit 30 000 F / Semaine 175 000 F / Mois 450 000 F (S\u00e9n\u00e9lec en sus).%0A";
  txt += "%0AMerci de me confirmer la disponibilit\u00e9.";
  const url = "https://wa.me/221771342889?text=" + txt;
  window.open(url, "_blank");
});

// Appel direct JS (fallback au href tel éventuel)
btnCall.addEventListener("click", ()=>{
  window.location.href = "tel:+221771342889";
});
</script>
</body>
</html>
