# Guida alla Configurazione della Disponibilità

## 📋 Come Configurare i Periodi Occupati

Il file `assets/data/availability.txt` contiene l'elenco dei periodi in cui la villa non è disponibile per le prenotazioni.

### 📝 Formato del File

Ogni riga deve contenere un periodo occupato nel seguente formato:
```
AAAA-MM-GG - AAAA-MM-GG
```

**Esempio:**
```
2026-02-15 - 2026-02-20
2026-03-01 - 2026-03-10
```

Questo significa:
- Dal 15 febbraio al 20 febbraio 2026: **OCCUPATO**
- Dal 1 marzo al 10 marzo 2026: **OCCUPATO**
- Tutti gli altri giorni: **DISPONIBILE**

### ✏️ Come Modificare il File

1. Apri il file `assets/data/availability.txt` con qualsiasi editor di testo (Notepad, Word, etc.)
2. Aggiungi i periodi occupati nel formato sopra
3. Una riga per ogni periodo
4. Salva il file

### 📌 Regole Importanti

- **Separatore:** Usa il trattino "-" per separare le date (con spazi prima e dopo)
- **Formato data:** Sempre `AAAA-MM-GG` (es: 2026-02-15, non 15-02-2026)
- **Commenti:** Le righe che iniziano con `#` sono commenti e vengono ignorate
- **Righe vuote:** Vanno bene, vengono ignorate
- **Ordine:** L'ordine dei periodi non importa

### ✅ Esempi Validi

```
2026-02-15 - 2026-02-20
2026-03-01 - 2026-03-10
2026-07-01 - 2026-08-31
2026-12-20 - 2026-12-27
```

### ❌ Esempi Non Validi (NON usare questi formati)

```
15-02-2026 - 20-02-2026    ❌ (ordine data sbagliato)
2026/02/15 - 2026/02/20    ❌ (separatore sbagliato)
2026-2-15 - 2026-2-20      ❌ (mesi e giorni senza zero)
15 febbraio - 20 febbraio  ❌ (formato testo)
```

### 🔄 Aggiornamento Calendario

Dopo aver modificato il file `availability.txt`:
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

1. **Temp minimala:** Potresti stabilire una durata minima di soggiorno (es: minimo 3 notti)
2. **Giorni di pulizia:** Se hai giorni di pulizia tra una prenotazione e l'altra, includili nei periodi occupati
3. **Manutenzione:** Puoi anche marcare i periodi di manutenzione come occupati
4. **Aggiornamenti frequenti:** Aggiorna il file appena ricevi una nuova prenotazione

### 💡 Esempio Completo di File

```
# Prenotazioni confermate per 2026

# Febbraio
2026-02-15 - 2026-02-20

# Marzo
2026-03-01 - 2026-03-10

# Aprile
2026-04-05 - 2026-04-12

# Estate
2026-07-01 - 2026-08-31

# Natale
2026-12-20 - 2026-12-27
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

Per qualsiasi domanda, contatta ottavio.barone@protonmail.com
