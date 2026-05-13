# Guida alla Configurazione della Disponibilità

## 📋 Come Configurare i Periodi Occupati

Il file `assets/data/booked-dates.js` contiene l'elenco dei periodi in cui la villa non è disponibile per le prenotazioni.

### 📝 Formato del File

Il file contiene una variabile `bookedDatesString` con i periodi occupati nel seguente formato:
```
AAAA-MM-GG - AAAA-MM-GG
AAAA-MM-GG - AAAA-MM-GG
```

**Esempio:**
```javascript
const bookedDatesString = `
2026-02-15 - 2026-02-20
2026-03-01 - 2026-03-10
`;
```

Questo significa:
- Dal 15 febbraio al 20 febbraio 2026: **OCCUPATO**
- Dal 1 marzo al 10 marzo 2026: **OCCUPATO**
- Tutti gli altri giorni: **DISPONIBILE**

### ✏️ Come Modificare il File

1. Apri il file `assets/data/booked-dates.js` con un editor di testo (VS Code, Notepad, etc.)
2. Trovate la riga con `const bookedDatesString = ` ``;` 
3. Aggiungi i periodi occupati dentro i backtick, uno per riga
4. Salva il file
5. Aggiorna la pagina "Disponibilità" nel browser (premi F5)

### 📌 Regole Importanti

- **Separatore:** Usa il trattino "-" per separare le date (con spazi prima e dopo)
- **Formato data:** Sempre `AAAA-MM-GG` (es: 2026-02-15, non 15-02-2026)
- **Commenti:** NON usare commenti JavaScript dentro la stringa
- **Righe vuote:** Vanno bene, vengono ignorate
- **Ordine:** L'ordine dei periodi non importa

### ✅ Esempi Validi

```javascript
const bookedDatesString = `
2026-02-15 - 2026-02-20
2026-03-01 - 2026-03-10
2026-07-01 - 2026-08-31
2026-12-20 - 2026-12-27
`;
```

### ❌ Esempi Non Validi (NON usare questi formati)

```javascript
const bookedDatesString = `
15-02-2026 - 20-02-2026    ❌ (ordine data sbagliato)
2026/02/15 - 2026/02/20    ❌ (separatore sbagliato)
2026-2-15 - 2026-2-20      ❌ (mesi e giorni senza zero)
// 2026-02-15 - 2026-02-20 ❌ (commenti JavaScript NON vanno)
`;
```

### 🔄 Aggiornamento Calendario

Dopo aver modificato il file `booked-dates.js`:
1. Salva il file
2. Aggiorna la pagina "Disponibilità" nel browser (premi F5)
3. Il calendario si aggiornerà automaticamente

### 📅 Come Funziona il Calendario

Il calendario mostra:
- **Verde:** Giorni disponibili per la prenotazione
- **Rosso:** Giorni occupati (prenotati)
- **Blu (bordo):** Oggi
- **Grigio:** Giorni del mese precedente/successivo

### 🎯 Suggerimenti

1. **Durata minima:** Potresti stabilire una durata minima di soggiorno (es: minimo 3 notti)
2. **Giorni di pulizia:** Se hai giorni di pulizia tra una prenotazione e l'altra, includili nei periodi occupati
3. **Manutenzione:** Puoi anche marcare i periodi di manutenzione come occupati
4. **Aggiornamenti frequenti:** Aggiorna il file appena ricevi una nuova prenotazione

### 💡 Esempio Completo di File

```javascript
// File di configurazione periodi occupati per il calendario
// Formato: "AAAA-MM-GG - AAAA-MM-GG" (una riga per periodo)

const bookedDatesString = `
2026-02-15 - 2026-02-20
2026-03-01 - 2026-03-10
2026-04-05 - 2026-04-12
2026-07-01 - 2026-08-31
2026-12-20 - 2026-12-27
`;
```

### ⚠️ Risoluzione Problemi

**Il calendario non si aggiorna:**
- Assicurati di aver salvato il file `availability.txt`
- Prova a fare un aggiornamento forzato del browser (Ctrl+F5)
- Verifica che le date siano nel formato corretto

**Le date non sono highlight come occupate:**
- Controlla che il formato sia esattamente: `AAAA-MM-GG - AAAA-MM-GG`
- Assicurati che non ci siano spazi extra o caratteri non validi
- Verifica che la data sia sensata (es: 2026-02-29 non esiste)

---

Per qualsiasi domanda, contatta marybluesdream@gmail.com
