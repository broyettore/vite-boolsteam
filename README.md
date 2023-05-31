# Vite Boolfolio

Milestone 3
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Colleghiamo questo progetto ad una repo separata.

Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

Milsestone 6

Backend
* Rotta API per il dettaglio dei vostri progetti

Frontend
* vue router
* creazione rotte (router.js)
* creazione pagine
* creazione rotta parametrica e pagina di dettaglio del progetto
* navigazione tra le pagine

Milestone 7

Backend
* Creazione API per risorse accessorie (tecnologie, tipologie)

Frontend
* Pagina 404
* Pagina tipologie con Progetti relazionati
* Pagina tecnologie con Progetti relazionati
* Collegamento tra le varie pagine

Bonus
* Creare un sistema di paginazione dei progetti
* Creare un file .env per la gestione dell'url API

Milestone 8

Frontend
Create un form di contatto all'interno del vostro progetto frontend comprensivo di 3 campi:
* name
* email
* message

Backend
Create tutto il necessario per l'inserimento e la gestione della risorsa Lead - almeno una CRUD con Read (Lista e Dettaglio) e Delete (cancellazione della risorsa).

Funzionamento
A frontend viene inserito un nuovo messaggio. Il messaggio viene salvato nella tabella leads e il sistema (backend + Mailtrap) invia una mail di notifica ricezione del messaggio.
