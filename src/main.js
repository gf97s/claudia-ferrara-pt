import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-content">
      <a class="brand" href="#" aria-label="Claudia Ferrara, home">
        Claudia Ferrara
        <span>Personal Trainer</span>
      </a>

      <nav aria-label="Navigazione principale">
        <a href="#chi-sono">Chi sono</a>
        <a href="#percorso">Il percorso</a>
        <a href="#contatti">Contatti</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">
            Claudia Ferrara · Allenamento femminile
          </p>

          <h1 id="hero-title">
            La tua forza.<br>
            Il tuo ritmo.<br>
            <span>Il tuo percorso.</span>
          </h1>

          <p class="intro">
            Uno spazio dedicato alle donne che vogliono allenarsi,
            ritrovare il piacere del movimento e dedicare tempo a sé.
            Senza confronti, un passo alla volta.
          </p>

          <div class="hero-actions">
            <a class="button" href="#contatti">
              Inizia da qui
            </a>

            <a class="text-link" href="#chi-sono">
              Conosci Claudia <span aria-hidden="true">→</span>
            </a>
          </div>

          <p class="hero-note">
            Non devi essere già pronta. Puoi iniziare da dove sei.
          </p>
        </div>

        <div class="portrait-wrapper">
          <div class="portrait-placeholder">
            <span class="portrait-label">Il tuo momento</span>

            <span class="portrait-initials" aria-hidden="true">
              CF
            </span>

            <p>Qui inseriremo una foto di Claudia</p>
          </div>

          <div class="portrait-caption">
            <span class="caption-dot" aria-hidden="true"></span>
            Più spazio a te.
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="chi-sono">
      <div class="container about-grid">
        <div>
          <p class="eyebrow">Chi sono</p>

          <h2>
            Piacere,<br>
            sono Claudia.
          </h2>
        </div>

        <div class="section-copy">
          <p class="lead">
            Credo in un allenamento che lasci spazio alla persona,
            non soltanto agli obiettivi.
          </p>

          <p>
            Sono Claudia, personal trainer. Vorrei accompagnarti
            a trovare un modo di allenarti che tenga conto
            dei tuoi ritmi e della tua quotidianità.
          </p>

          <p>
            Uno spazio per metterti in gioco, ascoltarti
            e dedicare tempo a te stessa.
            Senza doverti confrontare con il percorso di qualcun’altra.
          </p>

          <a class="text-link" href="#percorso">
            Scopri da dove iniziare
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    <section
      class="section section-pink"
      id="percorso"
      aria-labelledby="percorso-title"
    >
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Il tuo percorso</p>

          <h2 id="percorso-title">
            Un passo alla volta.<br>
            A partire da te.
          </h2>

          <p class="section-description">
            Ogni donna ha una storia, esigenze e tempi diversi.
            Il primo passo è parlarne.
          </p>
        </div>

        <div class="cards">
          <article class="card">
            <span class="card-number">01</span>

            <h3>Conosciamoci</h3>

            <p>
              Partiamo da una conversazione:
              cosa cerchi, cosa ti piace e quale spazio
              vorresti dare all’allenamento.
            </p>
          </article>

          <article class="card">
            <span class="card-number">02</span>

            <h3>Trova la tua direzione</h3>

            <p>
              Mettiamo a fuoco le tue priorità,
              senza rincorrere il percorso o i risultati
              di qualcun’altra.
            </p>
          </article>

          <article class="card">
            <span class="card-number">03</span>

            <h3>Dai spazio a te</h3>

            <p>
              Il movimento può diventare un momento
              da dedicarti, con gradualità
              e nel rispetto dei tuoi tempi.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="quote-section">
      <div class="container">
        <p class="eyebrow">Un promemoria per te</p>

        <p class="quote">
          Non un corpo da confrontare.<br>
          <span>Una persona da ascoltare.</span>
        </p>
      </div>
    </section>

    <section
      class="section contact-section"
      id="contatti"
      aria-labelledby="contatti-title"
    >
      <div class="container">
        <div class="contact-box">
          <p class="eyebrow">Facciamo il primo passo</p>

          <h2 id="contatti-title">
            Tutto comincia<br>
            da una conversazione.
          </h2>

          <p class="contact-description">
            Vuoi conoscere meglio il mio approccio?
            Questo sarà lo spazio per contattarmi
            e parlare del tuo percorso.
          </p>

          <p class="contact-placeholder">
            Recapiti in aggiornamento:
            qui inseriremo WhatsApp, email e Instagram.
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <a class="brand footer-brand" href="#">
        Claudia Ferrara
        <span>Personal Trainer</span>
      </a>

      <p>
        © ${new Date().getFullYear()} Claudia Ferrara
      </p>
    </div>
  </footer>
`