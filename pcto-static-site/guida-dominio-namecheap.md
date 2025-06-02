# Guida per l'Acquisto e il Collegamento di un Dominio Namecheap

Questa guida ti aiuterà ad acquistare un dominio su Namecheap e a collegarlo al tuo sito web PCTO ospitato su GitHub Pages o qualsiasi altro servizio di hosting.

## Parte 1: Acquisto del Dominio su Namecheap

### Passo 1: Registrazione e Accesso
1. Vai su [Namecheap.com](https://www.namecheap.com/)
2. Clicca su "Sign Up" per creare un nuovo account o "Log In" se ne hai già uno
3. Completa il processo di registrazione con i tuoi dati personali

### Passo 2: Ricerca e Acquisto del Dominio
1. Nella barra di ricerca in alto, inserisci il nome di dominio desiderato (es. "mio-percorso-pcto.it")
2. Namecheap mostrerà la disponibilità del dominio e suggerimenti alternativi
3. Seleziona il dominio che preferisci e clicca su "Add to Cart"
4. Puoi scegliere tra diverse estensioni (.com, .it, .org, ecc.) in base alle tue preferenze
5. Procedi al checkout cliccando sul carrello in alto a destra
6. Rivedi il tuo ordine e seleziona il periodo di registrazione (1 anno, 2 anni, ecc.)
7. Completa l'acquisto inserendo i dati di pagamento

### Passo 3: Configurazione Iniziale
1. Dopo l'acquisto, vai alla dashboard di Namecheap
2. Clicca su "Domain List" nel menu laterale
3. Trova il tuo dominio appena acquistato e clicca su "Manage"

## Parte 2: Collegamento del Dominio a GitHub Pages

### Passo 1: Configurazione DNS su Namecheap
1. Nella pagina di gestione del dominio, vai alla scheda "Advanced DNS"
2. Rimuovi tutti i record esistenti (se presenti)
3. Aggiungi i seguenti record A puntando agli IP di GitHub Pages:
   - Tipo: A, Host: @, Valore: 185.199.108.153, TTL: Automatic
   - Tipo: A, Host: @, Valore: 185.199.109.153, TTL: Automatic
   - Tipo: A, Host: @, Valore: 185.199.110.153, TTL: Automatic
   - Tipo: A, Host: @, Valore: 185.199.111.153, TTL: Automatic
4. Aggiungi un record CNAME per il sottodominio www:
   - Tipo: CNAME, Host: www, Valore: [tuo-username].github.io., TTL: Automatic
   (Sostituisci [tuo-username] con il tuo nome utente GitHub)
5. Salva le modifiche

### Passo 2: Configurazione su GitHub Pages
1. Vai al tuo repository GitHub dove è ospitato il sito
2. Clicca su "Settings" (l'icona a forma di ingranaggio)
3. Scorri fino alla sezione "GitHub Pages"
4. Nel campo "Custom domain", inserisci il tuo dominio (es. mio-percorso-pcto.it)
5. Spunta la casella "Enforce HTTPS" per abilitare la connessione sicura
6. Clicca su "Save"

## Parte 3: Collegamento del Dominio ad Altri Servizi di Hosting

### Per Netlify:
1. Accedi al tuo account Netlify
2. Seleziona il tuo sito
3. Vai a "Domain settings" > "Custom domains"
4. Clicca su "Add custom domain" e inserisci il tuo dominio
5. Segui le istruzioni per verificare la proprietà del dominio
6. Torna su Namecheap e nella sezione "Advanced DNS" aggiungi i record DNS forniti da Netlify

### Per Vercel:
1. Accedi al tuo account Vercel
2. Seleziona il tuo progetto
3. Vai a "Settings" > "Domains"
4. Aggiungi il tuo dominio
5. Segui le istruzioni per configurare i record DNS su Namecheap come indicato da Vercel

## Note Importanti

- **Propagazione DNS**: Le modifiche DNS possono richiedere fino a 24-48 ore per propagarsi completamente. Durante questo periodo, il tuo dominio potrebbe non funzionare correttamente.
- **Rinnovo del Dominio**: I domini devono essere rinnovati periodicamente. Namecheap ti invierà notifiche via email prima della scadenza.
- **HTTPS**: L'attivazione del certificato HTTPS può richiedere alcune ore dopo la configurazione del dominio.
- **Supporto**: Se incontri problemi, il supporto clienti di Namecheap è disponibile 24/7 tramite chat.

## Pubblicazione del Sito Statico

Per pubblicare il sito statico che ti ho fornito:

1. Estrai il file zip in una cartella sul tuo computer
2. Carica tutti i file nella cartella principale del tuo repository GitHub o servizio di hosting
3. Se usi GitHub Pages, assicurati che il repository sia pubblico e che GitHub Pages sia abilitato nelle impostazioni
4. Configura il dominio personalizzato come descritto sopra

Il tuo sito sarà ora accessibile sia tramite l'URL di GitHub Pages (username.github.io/repository) sia tramite il tuo dominio personalizzato.
