# AI Case Evaluator – Blueprint

> **Stand:** 02.02.2026
> **Kontext:** Ergänzung zum bestehenden gannaca AI Case Sprint Framework
> **Technologie:** Vercel Serverless + OpenAI API

---

## 1. Zweck & Rolle im Gesamtprozess

### Position im Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   FRAMEWORK                          AI CASE EVALUATOR               │
│                                                                      │
│   Screen 6                                                           │
│   Case-Erfassung        ──────►      Input: Case-Daten               │
│   (11 Fragen +                              │                        │
│    Governance-Trigger)                      ▼                        │
│          │                           OpenAI Bewertung                │
│          │                           (5 Kriterien)                   │
│          │                                  │                        │
│          │                                  ▼                        │
│          │               ◄──────     Output: Bewertungsergebnis      │
│          ▼                                                           │
│   Screen 6b                                                          │
│   Bewertung & Prüflogik                                              │
│   (Ergebnisse anzeigen)                                              │
│          │                                                           │
│          ▼                                                           │
│   Screen 8                                                           │
│   Matrix-Positionierung                                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Outputs des Evaluators

| Output | Beschreibung | Verwendung |
|--------|--------------|------------|
| **Nutzen-Score** | Hoch / Mittel / Gering | X-Achse Matrix |
| **Umsetzbarkeit-Score** | Hoch / Mittel / Gering | Y-Achse Matrix |
| **Risiko-Flags** | Liste identifizierter Risikobereiche | Governance-Prüfung |
| **Governance-Status** | Kein Prüfbedarf / Prüfbedarf / Blocker | Ampel-Anzeige |
| **Prüffelder** | DSGVO, AI Act, KRITIS, Audit | Detailansicht |
| **Kurzbegründung** | Pro Kriterium 1-2 Sätze | Nachvollziehbarkeit |

---

## 2. Input-Daten

### Pflichtfelder (aus Screen 6)

| Nr. | Feld | Typ | Anmerkung |
|-----|------|-----|-----------|
| 1 | Abteilung(en) | Multi-Select + Freifeld | Betroffene Bereiche |
| 2 | Lage-Beschreibung | Freitext | Ersetzt "Problem" – neutraler Begriff |
| 3 | Schritt-für-Schritt Prozess | Freitext | IST-Zustand des Prozesses |
| 4 | Häufigkeit | Dropdown + Freifeld | Täglich/Wöchentlich/Monatlich/Unbestimmt |
| 5 | Volumen | Zahl + Einheit + Freifeld | Fallzahlen, ggf. "Unbestimmt" |
| 6 | Zeitaufwand pro Fall | Zahl + Einheit + Freifeld | In Minuten/Stunden, ggf. "Unbestimmt" |
| 7 | Betroffene Personen | Zahl + Freifeld | Anzahl involvierter Mitarbeiter |
| 8 | Bestehende Tools | Multi-Select + Freifeld | Aktuelle Systemlandschaft |

### Governance-Trigger (Pflicht)

| Feld | Optionen | Trigger-Logik |
|------|----------|---------------|
| Entscheidungswirkung | Ja / Nein / Unklar | Ja/Unklar → Prüfbedarf |
| KRITIS-Relevanz | Ja / Nein / Unklar | Ja/Unklar → Prüfbedarf |
| Personenbezogene Daten | Ja / Nein / Unklar | Ja → Prüfbedarf |
| Besondere Kategorien (Art. 9) | Ja / Nein / Unklar | Ja → Blocker-Risiko |
| Automationsgrad | Vollautomatisch / Entscheidungsunterstützend / Informierend | Vollautomatisch → erhöhtes Risiko |

### Optionale Felder

| Feld | Zweck |
|------|-------|
| KI-Unterstützungsidee | Erste Einschätzung des Kunden |
| Risikoeinschätzung (Kunde) | Selbstwahrnehmung |
| Priorität (Kunde) | Subjektive Dringlichkeit |

### Umgang mit "Unklar/Unbestimmt"

- Wird **nicht** als Fehler behandelt
- Wird an KI übergeben mit Hinweis: "Keine belastbare Angabe"
- Führt in Bewertung zu: "Weitere Klärung erforderlich"
- Zeigt sich im Output als gelbes Flag (nicht rot)

---

## 3. Bewertungslogik (High-Level)

### Die 5 Bewertungsdimensionen

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. AUTOMATISIERBARKEIT                                    │
│      Wie gut lässt sich der Prozess automatisieren?         │
│      Inputs: Prozessbeschreibung, Häufigkeit, Volumen       │
│                                                             │
│   2. DATENVERFÜGBARKEIT                                     │
│      Sind relevante Daten digital vorhanden?                │
│      Inputs: Bestehende Tools, Prozessbeschreibung          │
│                                                             │
│   3. REGULATORISCHE RISIKEN                                 │
│      DSGVO, KRITIS, EU AI Act Konformität                   │
│      Inputs: Governance-Trigger, Personenbezug              │
│                                                             │
│   4. EXPLAINABILITY                                         │
│      Ist KI-Logik nachvollziehbar darstellbar?              │
│      Inputs: Automationsgrad, Entscheidungswirkung          │
│                                                             │
│   5. WIRTSCHAFTLICHER HEBEL                                 │
│      Zeit-/Kosteneinsparung vs. Implementierungsaufwand     │
│      Inputs: Zeitaufwand, Volumen, Häufigkeit, Personen     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Zusammenspiel der Dimensionen

```
                    NUTZEN-SCORE
                         │
         ┌───────────────┴───────────────┐
         │                               │
   Wirtschaftlicher              Automatisierbarkeit
       Hebel                            │
         │                               │
         └───────────────┬───────────────┘
                         │
                         ▼
                  MATRIX-POSITION
                         ▲
                         │
         ┌───────────────┴───────────────┐
         │                               │
   Datenverfügbarkeit            Regulatorische
         │                          Risiken
         │                               │
         └───────────────┬───────────────┘
                         │
                 UMSETZBARKEIT-SCORE


   EXPLAINABILITY ──────► Beeinflusst beide Achsen
                          (hohe Anforderung = niedrigere Umsetzbarkeit)
```

### Nicht verhandelbare Regeln

1. **Keine neuen Begriffe erfinden** – Nur Terminologie aus Framework + Kundendokumenten
2. **Keine Zeitangaben** – Keine Aussagen wie "in 2 Wochen umsetzbar"
3. **Auditierbarkeit** – Jede Bewertung muss begründet sein
4. **Quellenbasiert** – Governance-Aussagen nur auf Basis hinterlegter Dokumente
5. **Transparenz bei Unsicherheit** – "Unklar" ist eine valide Ausgabe

---

## 4. Governance & Legal Layer

### Interne Prüfinstanz (nicht extern)

```
┌─────────────────────────────────────────────────────────────┐
│  GOVERNANCE-CHECK INNERHALB DES EVALUATORS                  │
│                                                             │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐   │
│  │  Trigger-   │     │  Regelwerk- │     │  Ergebnis-  │   │
│  │  Prüfung    │ ──► │  Abgleich   │ ──► │  Ausgabe    │   │
│  └─────────────┘     └─────────────┘     └─────────────┘   │
│        │                    │                   │           │
│        ▼                    ▼                   ▼           │
│  Governance-          Dokumente aus       Prüfstatus +      │
│  Trigger aus          Legal-Ordner        Prüffelder +      │
│  Screen 6             (hinterlegt)        Begründung        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Anbindung juristischer Dokumente

| Aspekt | Umsetzung |
|--------|-----------|
| **Speicherort** | Separater Ordner/Bucket mit Legal-Dokumenten |
| **Format** | PDF/TXT – vom Evaluator lesbar |
| **Verwendung** | Als Kontext für OpenAI (System-Prompt oder RAG) |
| **Aktualisierung** | Dokumente können ausgetauscht werden ohne Code-Änderung |
| **Nachweisbarkeit** | Output enthält Referenz auf verwendete Dokumente |

### Beispiel: Dokumenten-Struktur

```
/legal-documents/
├── DSGVO-Checkliste.pdf
├── KRITIS-Anforderungen.pdf
├── EU-AI-Act-Kategorien.pdf
├── Interne-Compliance-Regeln.pdf
└── Kundenspezifische-Vorgaben.pdf
```

### Umgang mit Unsicherheit

| Situation | Ausgabe | Farbe |
|-----------|---------|-------|
| Alle Trigger = Nein | "Kein Prüfbedarf identifiziert" | 🟢 Grün |
| Mind. 1 Trigger = Unklar | "Weiterer Prüfbedarf – Klärung erforderlich" | 🟡 Gelb |
| Mind. 1 Trigger = Ja | "Prüfbedarf – Governance-Review erforderlich" | 🟡 Gelb |
| Kritischer Trigger (Art. 9, KRITIS) | "Potenzieller Blocker – Juristische Freigabe erforderlich" | 🔴 Rot |

---

## 5. UI/UX-Skizze

### Beamer-taugliche Hauptansicht

```
┌─────────────────────────────────────────────────────────────────────┐
│  AI CASE EVALUATOR                                    [Case: Name]  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │                 │  │                 │  │                 │     │
│  │  NUTZEN         │  │  UMSETZBARKEIT  │  │  GOVERNANCE     │     │
│  │                 │  │                 │  │                 │     │
│  │     HOCH        │  │     MITTEL      │  │   PRÜFBEDARF    │     │
│  │      🟢         │  │       🟡        │  │       🟡        │     │
│  │                 │  │                 │  │                 │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  MATRIX-POSITION                                             │   │
│  │                                                              │   │
│  │       ▲ Umsetzbarkeit                                        │   │
│  │       │                                                      │   │
│  │  Hoch │    Sweet        ●──── Case                          │   │
│  │       │    Spot                                              │   │
│  │       │                                                      │   │
│  │       └──────────────────────────► Nutzen                    │   │
│  │              Mittel        Hoch                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  PRÜFFELDER                                                  │   │
│  │                                                              │   │
│  │  [DSGVO]  [KRITIS]                                          │   │
│  │                                                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Sichtbare vs. Interne Elemente

| Element | Sichtbar (Beamer) | Intern (Detail) |
|---------|-------------------|-----------------|
| Ampel-Status (3 Boxen) | ✅ | – |
| Matrix-Position | ✅ | – |
| Prüffeld-Tags | ✅ | – |
| Kurzbegründung pro Dimension | Optional (Toggle) | ✅ |
| Vollständige KI-Antwort | ❌ | ✅ |
| Verwendete Regelwerke | ❌ | ✅ |
| Input-Daten (zur Kontrolle) | ❌ | ✅ |
| Timestamp + Version | ❌ | ✅ |

### Interaktionselemente

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Case-Daten eingeben]     Freitext oder JSON-Upload        │
│                                                             │
│  [Bewerten]                Startet OpenAI-Auswertung        │
│                                                             │
│  [Ergebnis exportieren]    JSON für Framework-Import        │
│                                                             │
│  [Details anzeigen]        Klappt Begründungen auf          │
│                                                             │
│  [Neuer Case]              Formular zurücksetzen            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Artefakte / Datenhaltung

### Gespeicherte Objekte

```
┌─────────────────────────────────────────────────────────────┐
│  CASE-OBJEKT                                                │
├─────────────────────────────────────────────────────────────┤
│  {                                                          │
│    "id": "case-001",                                        │
│    "name": "Reisekostenabrechnung",                         │
│    "created": "2026-02-02T10:30:00Z",                       │
│    "status": "bewertet",                                    │
│                                                             │
│    "input": {                                               │
│      "abteilungen": ["Finanzen", "HR"],                     │
│      "lage": "...",                                         │
│      "prozess": "...",                                      │
│      "haeufigkeit": "täglich",                              │
│      "volumen": 150,                                        │
│      "zeitaufwand_minuten": 20,                             │
│      "personen": 5,                                         │
│      "tools": ["SAP", "Excel"],                             │
│      "governance_trigger": {                                │
│        "entscheidungswirkung": "nein",                      │
│        "kritis": "unklar",                                  │
│        "personenbezogen": "ja",                             │
│        "besondere_kategorien": "nein",                      │
│        "automationsgrad": "entscheidungsunterstuetzend"     │
│      }                                                      │
│    },                                                       │
│                                                             │
│    "evaluation": {                                          │
│      "timestamp": "2026-02-02T10:31:15Z",                   │
│      "model": "gpt-4o",                                     │
│      "nutzen": "hoch",                                      │
│      "umsetzbarkeit": "mittel",                             │
│      "governance_status": "pruefbedarf",                    │
│      "prueffelder": ["DSGVO", "KRITIS"],                    │
│      "begruendungen": {                                     │
│        "automatisierbarkeit": "...",                        │
│        "datenverfuegbarkeit": "...",                        │
│        "regulatorische_risiken": "...",                     │
│        "explainability": "...",                             │
│        "wirtschaftlicher_hebel": "..."                      │
│      },                                                     │
│      "verwendete_dokumente": [                              │
│        "DSGVO-Checkliste.pdf",                              │
│        "Interne-Compliance-Regeln.pdf"                      │
│      ]                                                      │
│    }                                                        │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
```

### Case bearbeiten / wieder öffnen

| Aktion | Umsetzung |
|--------|-----------|
| **Case speichern** | JSON wird lokal gespeichert (LocalStorage oder Download) |
| **Case laden** | JSON-Upload oder aus LocalStorage |
| **Case bearbeiten** | Input-Felder werden befüllt, neue Bewertung möglich |
| **Versionshistorie** | Jede Bewertung erhält Timestamp, alte bleiben erhalten |
| **Export für Framework** | Button generiert Framework-kompatibles JSON |

### Datenfluss: Evaluator ↔ Framework

```
┌──────────────┐          ┌──────────────┐          ┌──────────────┐
│              │          │              │          │              │
│  FRAMEWORK   │  ──────► │  EVALUATOR   │  ──────► │  FRAMEWORK   │
│  Screen 6    │  Export  │              │  Import  │  Screen 6b   │
│              │  (JSON)  │              │  (JSON)  │  + Screen 8  │
│              │          │              │          │              │
└──────────────┘          └──────────────┘          └──────────────┘

Export-Format:                        Import-Format:
- Case-Name                           - nutzen: hoch/mittel/gering
- Alle Input-Felder                   - umsetzbarkeit: hoch/mittel/gering
- Governance-Trigger                  - governance_status
                                      - prueffelder[]
                                      - begruendungen{}
```

---

## 7. Offene Entscheidungen / Annahmen

### Noch zu klären

| Thema | Frage | Optionen |
|-------|-------|----------|
| **Legal-Dokumente** | Wer liefert die Dokumente? | Carlotta? Interne Compliance? |
| **Hosting** | Vercel bestätigt – welches Projekt/Repo? | Neues Repo vs. bestehendes |
| **OpenAI Modell** | GPT-4o oder GPT-4o-mini? | Kosten vs. Qualität |
| **Authentifizierung** | Soll der Evaluator geschützt sein? | Offen / Passwort / Login |
| **Mehrere Cases** | Batch-Verarbeitung nötig? | Einzeln vs. Bulk-Upload |
| **Sprache** | Nur Deutsch oder auch Englisch? | UI + Outputs |

### Getroffene Annahmen

1. **Kein Echtzeit-Sync** – Framework und Evaluator kommunizieren via JSON-Export/Import
2. **Keine Datenbank** – Cases werden lokal gespeichert (Browser/Download)
3. **Mensch reviewed KI-Ergebnis** – Evaluator liefert Vorschlag, finale Entscheidung liegt beim Menschen
4. **Beamer-First** – UI optimiert für große Bildschirme im Workshop-Setting
5. **Keine juristischen Entscheidungen** – Evaluator zeigt Risiken auf, entscheidet nicht

---

## 8. Nächste Schritte (ohne Zeitzusagen)

1. [ ] Blueprint reviewen und Feedback geben
2. [ ] Legal-Dokumente von Carlotta erhalten
3. [ ] Vercel-Projekt einrichten
4. [ ] OpenAI API-Key konfigurieren
5. [ ] Erste Version bauen (MVP)
6. [ ] Testen mit Demo-Cases
7. [ ] Integration mit bestehendem Framework (Import/Export)

---

*Erstellt im Rahmen des gannaca AI Case Sprint Projekts*
