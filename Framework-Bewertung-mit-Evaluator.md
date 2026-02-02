# Framework-Bewertung im Lichte des AI Case Evaluators

> **Datum:** 02.02.2026
> **Kontext:** Analyse des bestehenden Frameworks nach Integration des geplanten AI Case Evaluators

---

## Übersicht: Screen-für-Screen Einordnung

| Screen | Kategorie | Bleibt | Begründung |
|--------|-----------|--------|------------|
| **0** Workshop-Prozess | Erklärend | ✅ Ja | Orientierung im Workshop |
| **1** Übersicht | Erklärend | ✅ Ja | Framework-Verständnis |
| **2** KPI-Rahmen | Erklärend | ⚠️ Optional | Nur relevant wenn KPIs diskutiert werden |
| **3** Governance | Erklärend + Konzeptionell | ✅ Ja | Governance-Regel muss verstanden werden |
| **4** Zielprozess | Erklärend | ⚠️ Optional | Beispiel – nicht zwingend nötig |
| **5** Visualisierung | Erklärend | ⚠️ Optional | Ausblick auf Phase 3 |
| **6** Case-Erfassung | **Evaluator-Input** | ✅ Ja | Primäre Datenquelle |
| **6b** Bewertung | Ergebnis-Anzeige | ✅ Ja | Zeigt Evaluator-Ergebnisse |
| **7** Ergebnis | Übersicht | ✅ Ja | Case-Verwaltung |
| **8** Matrix | Ergebnis-Visualisierung | ✅ Ja | Finales Ergebnis |

---

## 1. Überflüssige Inhalte durch den Evaluator?

### Nicht überflüssig – aber Rolle ändert sich:

| Element | Vorher | Nachher (mit Evaluator) |
|---------|--------|-------------------------|
| **Screen 6b: Manuelle Bewertungseingabe** | Mensch trägt Nutzen/Umsetzbarkeit manuell ein | Zeigt KI-Bewertung an, Mensch validiert nur |
| **Screen 8: Matrix-Positionen** | Statisch/manuell positioniert | Dynamisch aus Evaluator-Ergebnissen |
| **Screen 3: Governance-Prinzipien** | Erklärt das Konzept | Bleibt wichtig – erklärt WARUM Prüfung nötig |

### Was bleibt unverändert:

- **Screen 6 (Case-Erfassung):** Die 11 Fragen + Governance-Trigger sind der **Input für den Evaluator** → zwingend nötig
- **Screen 0-1 (Ablauf/Übersicht):** Workshop-Orientierung → bleibt
- **Screen 3 (Governance):** Erklärt die Trigger-Logik → bleibt

### Was optional wird:

| Screen | Warum optional? |
|--------|-----------------|
| **Screen 2 (KPI-Rahmen)** | Die 4 Dimensionen (Zeit, Kosten, Qualität, Risiko) werden im Evaluator automatisch berücksichtigt. Im Workshop nur erklären wenn Fragen kommen. |
| **Screen 4 (Zielprozess)** | Beispielprozess (Reisekostenabrechnung) – nur relevant wenn ein ähnlicher Case erfasst wird. Nicht zwingend durchgehen. |
| **Screen 5 (Visualisierung)** | Mockup-Vorschau für Phase 3 – irrelevant für Workshop-Erfassung. Kann übersprungen werden. |

---

## 2. Was MUSS bleiben (trotz Evaluator)?

### Zwingend für Workshop-Durchführung:

| Screen | Zweck | Warum unverzichtbar? |
|--------|-------|----------------------|
| **0 Workshop-Prozess** | Orientierung | Teilnehmer müssen wissen, wo sie sind |
| **1 Übersicht** | Framework-Verständnis | Kontext für die Erfassung |
| **3 Governance** | Trigger-Regel erklären | Teilnehmer müssen verstehen: "Wenn Ja/Unklar → Prüfung" |
| **6 Case-Erfassung** | Daten sammeln | Primäre Workshop-Aktivität |
| **7 Ergebnis** | Case-Übersicht | Kontrolle der erfassten Cases |

### Zwingend für Ergebnis-Präsentation (per E-Mail/nach Workshop):

| Screen | Zweck |
|--------|-------|
| **6b Bewertung** | Evaluator-Ergebnisse pro Case |
| **8 Matrix** | Priorisierung visualisieren |

---

## 3. Menschliches Verständnis vs. Evaluator-Input

### Rein für menschliches Verständnis (Transparenz, Alignment):

| Element | Screen | Zweck |
|---------|--------|-------|
| 3-Phasen-Timeline | Screen 0 | Orientierung: "Wo sind wir?" |
| 4-Phasen-Denkmodell | Screen 1 | Methodik verstehen |
| Mensch-vs-KI-Tabelle | Screen 3 | Rollenverteilung klar machen |
| Governance-Trigger-Übersicht | Screen 3 | Visualisierung der 4 Trigger-Kategorien |
| Prüfinstanz-Boxen (klickbar) | Screen 3 | Dokumenten-Referenz zeigen |
| KPI-Dimensionen | Screen 2 | Bewertungslogik transparent machen |
| Beispiel-Prozess | Screen 4 | Veranschaulichung |
| Mockup-Vorschau | Screen 5 | Ausblick auf Endprodukt |

### Echte Input-Daten für den Evaluator:

| Feld | Screen | Pflicht? | Evaluator nutzt für |
|------|--------|----------|---------------------|
| Problem-Titel | 6 | ✅ | Case-Identifikation |
| Abteilung(en) | 6 | ✅ | Kontext |
| Ausgangslage/Ist-Zustand | 6 | ✅ | Automatisierbarkeit |
| Konkretes Problem | 6 | ✅ | Nutzen-Bewertung |
| Häufigkeit | 6 | ✅ | Wirtschaftlicher Hebel |
| Volumen | 6 | ✅ | Wirtschaftlicher Hebel |
| Zeitaufwand pro Fall | 6 | ✅ | Wirtschaftlicher Hebel |
| Betroffene Personen | 6 | ✅ | Wirtschaftlicher Hebel |
| Bestehende Tools | 6 | ⚠️ | Datenverfügbarkeit |
| Strategische Relevanz | 6 | ⚠️ | Priorisierung |
| Risiko-Score | 6 | ✅ | Risiko-Bewertung |
| Daten-Verfügbarkeit | 6 | ✅ | Datenverfügbarkeit |
| KI-Potenzial (optional) | 6 | ❌ | Nur Hinweis |
| **Entscheidungswirkung** | 6 (Trigger) | ✅ | Governance-Status |
| **KRITIS-Relevanz** | 6 (Trigger) | ✅ | Governance-Status |
| **Personenbezogene Daten** | 6 (Trigger) | ✅ | Governance-Status |
| **Automationsgrad** | 6 (Trigger) | ✅ | Governance-Status |

---

## 4. Erklären statt Ausfüllen

### Im Workshop erklären, NICHT ausfüllen lassen:

| Element | Screen | Warum nur erklären? |
|---------|--------|---------------------|
| KPI-Dimensionen (Zeit, Kosten, Qualität, Risiko) | 2 | Der Evaluator nutzt diese Kategorien – Teilnehmer müssen sie nicht selbst anwenden |
| Governance-Prüfinstanzen (KRITIS, DSGVO, AI Act...) | 3 | Dokumente sind hinterlegt – Teilnehmer müssen nur wissen, dass geprüft wird |
| Bewertungslogik (5 Kriterien) | 8 | KI bewertet – Teilnehmer müssen Ergebnis verstehen, nicht Methode anwenden |
| Beispiel-Prozess (Reisekostenabrechnung) | 4 | Nur bei Bedarf zeigen, nicht durcharbeiten |

### Im Workshop ausfüllen lassen:

| Element | Screen | Warum ausfüllen? |
|---------|--------|------------------|
| 11 Fragen zur Case-Erfassung | 6 | **Primärer Input** für Evaluator |
| 4 Governance-Trigger | 6 | **Pflichtfelder** für Governance-Status |

---

## 5. Empfohlene Trennung

### A) Workshop-Framework (sichtbar, erklärend, strukturierend)

```
┌─────────────────────────────────────────────────────────────┐
│  WORKSHOP-MODUS (live im Termin)                            │
│                                                             │
│  Screen 0: Workshop-Prozess                                 │
│  → "Wo sind wir? Was passiert wann?"                        │
│                                                             │
│  Screen 1: Übersicht                                        │
│  → "Was ist das gannaca Framework?"                         │
│                                                             │
│  Screen 3: Governance (kurz!)                               │
│  → "Wenn Trigger = Ja/Unklar → Prüfung nötig"               │
│                                                             │
│  Screen 6: Case-Erfassung ⭐                                │
│  → HAUPTAKTIVITÄT: Cases dokumentieren                      │
│                                                             │
│  Screen 7: Ergebnis                                         │
│  → Übersicht der erfassten Cases                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Optional im Workshop (nur bei Bedarf):**
- Screen 2: KPI-Rahmen (wenn Fragen zu Bewertungslogik)
- Screen 4: Zielprozess (wenn Beispiel hilfreich)
- Screen 5: Visualisierung (wenn Frage nach Endprodukt)

### B) Evaluator-Input (präzise, reduziert, maschinenlesbar)

```
┌─────────────────────────────────────────────────────────────┐
│  EVALUATOR-INPUT (JSON-Export aus Screen 6)                 │
│                                                             │
│  PFLICHTFELDER:                                             │
│  ├── problemTitel                                           │
│  ├── abteilungen[]                                          │
│  ├── ausgangslage                                           │
│  ├── problem                                                │
│  ├── haeufigkeit                                            │
│  ├── volumen                                                │
│  ├── zeitaufwand                                            │
│  ├── betroffenePersonen                                     │
│  ├── risiko                                                 │
│  ├── datenVerfuegbarkeit                                    │
│  └── governanceTrigger {                                    │
│        entscheidungswirkung,                                │
│        kritisRelevanz,                                      │
│        personenbezogen,                                     │
│        automationsgrad                                      │
│      }                                                      │
│                                                             │
│  OPTIONAL:                                                  │
│  ├── tools[]                                                │
│  ├── strategischeRelevanz                                   │
│  └── kiPotenzial                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### C) Ergebnis-Darstellung (nach KI-Bewertung)

```
┌─────────────────────────────────────────────────────────────┐
│  ERGEBNIS-MODUS (per E-Mail / Folgetermin)                  │
│                                                             │
│  Screen 6b: Bewertung                                       │
│  → Evaluator-Ergebnisse pro Case                            │
│  → Nutzen / Umsetzbarkeit / Prüfstatus / Entscheidung       │
│                                                             │
│  Screen 8: Matrix                                           │
│  → Priorisierungs-Visualisierung                            │
│  → Top-3 Empfehlungen                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Zusammenfassung: Nichts ist "zu viel"

### Das Framework ist bereits gut strukturiert:

| Aspekt | Bewertung |
|--------|-----------|
| **Überflüssig?** | Nein – alle Screens haben ihren Zweck |
| **Anpassung nötig?** | Screen 6b: Wird zur Ergebnis-Anzeige (statt manueller Eingabe) |
| **Reihenfolge im Workshop?** | 0 → 1 → 3 (kurz) → 6 → 7 |
| **Optionale Screens?** | 2, 4, 5 – nur bei Bedarf zeigen |

### Was sich ändert mit dem Evaluator:

| Vorher | Nachher |
|--------|---------|
| Screen 6b: Mensch trägt Bewertung ein | Screen 6b: Zeigt KI-Bewertung |
| Screen 8: Statische Demo-Daten | Screen 8: Dynamische Evaluator-Ergebnisse |
| Bewertung = menschliche Einschätzung | Bewertung = KI-Vorschlag + menschliche Validierung |

---

## Offene Punkte

1. **Export-Button in Screen 7:** Braucht "Export für Evaluator" Funktion
2. **Import-Button in Screen 6b:** Braucht "Evaluator-Ergebnis importieren" Funktion
3. **Screen 8:** Dynamische Positionierung basierend auf Evaluator-Ergebnissen

---

*Erstellt als Ergänzung zum AI Case Evaluator Blueprint*
