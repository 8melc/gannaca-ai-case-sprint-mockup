# PROJECT PLAN: gannaca AI-Case Sprint Framework Mockup

## 1. PROJEKT-ÜBERSICHT

### Projektziel
Erstellung eines digitalen, nicht-funktionalen Mockups zur Visualisierung des "gannaca AI-Case Sprint" Frameworks für den Workshop am 4. Februar 2026 bei Trianel.

### Deadlines
| Phase | Deadline | Zweck |
|-------|----------|-------|
| **Phase 1 (KRITISCH)** | 3. Feb 2026, 18:00 Uhr | Workshop-Präsentation |
| **Phase 2 (WICHTIG)** | 5. Feb 2026, 12:00 Uhr | CEO-Präsentation |
| Phase 3 (Optional) | Nach Workshop | Finale Dokumentation |

### Technologie-Stack
- **Frontend:** HTML5 + CSS3 + Vanilla JavaScript
- **Styling:** Custom CSS mit CSS Variables (Design-System)
- **Icons:** Font Awesome (lokal eingebunden)
- **Fonts:** Inter (lokal eingebunden für Offline-Fähigkeit)
- **Build:** Keine Build-Tools nötig (Static HTML)

**Begründung:** Plain HTML/CSS garantiert maximale Stabilität, Offline-Fähigkeit und keine Abhängigkeit von Node.js/npm. Für ein nicht-funktionales Mockup ist dies der robusteste Ansatz.

---

## 2. PHASEN-ÜBERSICHT

### PHASE 1: KRITISCH FÜR WORKSHOP (bis 3. Feb 18:00 Uhr)

**Screens die FERTIG sein MÜSSEN:**
- [ ] Screen 0: Workshop-Prozess-Übersicht (3-Phasen-Timeline)
- [ ] Screen 1: Übersicht & Denkmodell (2-Spalten-Layout)
- [ ] Screen 6: Case-Erfassungs-Formular ⭐ (HERZSTÜCK!)
- [ ] Screen 7: Workshop-Ergebnis-Übersicht (17 Case-Kacheln)

**Komponenten die FERTIG sein MÜSSEN:**
- [ ] Header mit Logos (gannaca links + Trianel rechts)
- [ ] Datenschutz-Banner (auf ALLEN Screens!)
- [ ] Tab-Navigation zwischen Screens
- [ ] Beamer-optimiertes Design (min. 16pt Schrift, hoher Kontrast)

**Geschätzter Zeitaufwand:** 16-20 Stunden

---

### PHASE 2: WICHTIG FÜR POST-WORKSHOP (bis 5. Feb 12:00 Uhr)

**Screens für CEO-Präsentation:**
- [ ] Screen 2: Strategischer KPI-Rahmen (4-Säulen-Darstellung)
- [ ] Screen 3: Governance & Rollen (Mensch vs. KI Tabelle)
- [ ] Screen 4: Zielprozess (6-Schritt-Flowchart)
- [ ] Screen 8: KI-gestützte Priorisierungs-Matrix (2D-Matrix)

**Geschätzter Zeitaufwand:** 10-12 Stunden

---

### PHASE 3: OPTIONAL (nach Workshop)

**Nice-to-have Screens:**
- [ ] Screen 5: Mockup-Visualisierung (5 Interface-Screens)
- [ ] Screen 9: Finaler Case-Mockup (detailliert)
- [ ] PDF-Export-Funktion (via Browser-Druck optimiert)

**Geschätzter Zeitaufwand:** 8-10 Stunden

---

## 3. TECHNISCHE ARCHITEKTUR

### Ordnerstruktur

```
/26 01 28 AI Case Sprint - Mockup/
├── README.md
├── PROJECT_PLAN.md
├── index.html                    # Einstiegsseite (Redirect zu Screen 0)
│
├── screens/
│   ├── screen-0-workshop-process.html
│   ├── screen-1-overview.html
│   ├── screen-2-kpi.html
│   ├── screen-3-governance.html
│   ├── screen-4-process.html
│   ├── screen-5-mockup.html
│   ├── screen-6-form.html        # ⭐ HERZSTÜCK
│   ├── screen-7-results.html
│   ├── screen-8-matrix.html
│   └── screen-9-final-case.html
│
├── components/
│   ├── header.html               # Wiederverwendbarer Header
│   ├── navigation.html           # Tab-Navigation
│   └── data-protection-banner.html
│
├── assets/
│   ├── logos/
│   │   ├── gannaca-logo.png
│   │   ├── gannaca-logo.svg      # (falls verfügbar)
│   │   ├── trianel-logo.png
│   │   └── trianel-logo.svg
│   │
│   ├── fonts/
│   │   └── inter/                # Lokal für Offline-Fähigkeit
│   │       ├── Inter-Regular.woff2
│   │       ├── Inter-Medium.woff2
│   │       └── Inter-Bold.woff2
│   │
│   └── icons/
│       └── fontawesome/          # Lokal eingebunden
│
├── styles/
│   ├── main.css                  # Haupt-Stylesheet
│   ├── variables.css             # CSS Custom Properties (Farben, Fonts)
│   ├── components.css            # Header, Banner, Navigation
│   ├── screens.css               # Screen-spezifische Styles
│   ├── forms.css                 # Formular-Styles (Screen 6)
│   └── beamer.css                # Beamer-Optimierungen (große Schrift)
│
└── js/
    ├── navigation.js             # Tab-Navigation Logic
    └── form-progress.js          # Formular-Fortschrittsanzeige
```

---

## 4. ENTWICKLUNGS-REIHENFOLGE (STEP-BY-STEP)

### TAG 1 (29. Januar - HEUTE)

**Block 1 (2h): Setup & Design-System**
- [ ] Projekt-Struktur aufsetzen
- [ ] `variables.css` erstellen (Farben, Typografie, Spacing)
- [ ] `main.css` mit Reset und Basis-Styles
- [ ] Font "Inter" lokal einbinden

**Block 2 (2h): Komponenten**
- [ ] Header-Komponente (gannaca Logo links, Trianel Logo rechts)
- [ ] Datenschutz-Banner-Komponente
- [ ] Tab-Navigation-Komponente
- [ ] Footer (optional)

**Block 3 (4h): Screen 6 - Formular (KRITISCH!)**
- [ ] HTML-Struktur für 11 Formularfelder
- [ ] Beamer-optimierte Schriftgrößen (min. 16pt)
- [ ] Fortschrittsanzeige ("Erfasste Cases: 3 von ~20")
- [ ] Hinweis-Box (Transparenz-Disclaimer)
- [ ] Buttons: "Vorheriger Case", "Speichern & Nächster", "Zwischenspeichern"
- [ ] Placeholder-Texte für alle Felder

---

### TAG 2 (30. Januar)

**Block 1 (3h): Screen 0 - Workshop-Prozess**
- [ ] 3-Phasen-Timeline (Phase 1 hervorgehoben)
- [ ] "Wir sind jetzt hier" Markierung
- [ ] Detaillierte Beschreibung jeder Phase
- [ ] Wichtiger-Hinweis-Box unten

**Block 2 (3h): Screen 1 - Übersicht**
- [ ] 2-Spalten-Layout
- [ ] Linke Spalte: Ausgangslage (Ist-Problem)
- [ ] Rechte Spalte: Denkmodell-Box (KI → Mensch)
- [ ] Framework-Wiederverwendbarkeits-Text

**Block 3 (2h): Screen 7 - Workshop-Ergebnis**
- [ ] Karten-Ansicht (Grid mit Case-Kacheln)
- [ ] 6 Beispiel-Kacheln (Case #01 bis #06)
- [ ] Filter/Sortier-Buttons (visuell, nicht funktional)
- [ ] Nächste-Schritte-Box
- [ ] Export-Buttons (Platzhalter)

---

### TAG 3 (31. Januar)

**Block 1 (3h): Screen 2 - KPI-Rahmen**
- [ ] 4-Säulen-Darstellung (Zeit, Kosten, Qualität, Risiko)
- [ ] Icons für jede Dimension
- [ ] Beispiel-Metriken
- [ ] Abgrenzungs-Box ("Was dieser Case NICHT ist")

**Block 2 (3h): Screen 3 - Governance**
- [ ] Tabelle: KI vs. Mensch (Aufgaben, Entscheidungen, Output)
- [ ] Governance-Prinzipien-Boxen (Explainability, Human-in-Loop, Audit-Trail, DSGVO)
- [ ] Eskalations-Matrix (Ampel-Logik)

**Block 3 (2h): Screen 4 - Zielprozess**
- [ ] 6-Schritt-Flowchart (vertikal mit Pfeilen)
- [ ] Icons für jeden Schritt
- [ ] Detaillierte Beschreibungen in Boxen
- [ ] Highlight: "KI trifft KEINE Entscheidung"

---

### TAG 4 (1. Februar)

**Block 1 (4h): Screen 8 - Matrix**
- [ ] 2D-Matrix-Visualisierung (Nutzen × Machbarkeit)
- [ ] Punkte für Cases (farbcodiert: Grün, Gelb, Rot)
- [ ] Legende
- [ ] Top-3 Empfehlungen-Boxen mit Begründung
- [ ] Bewertungs-Balken für jede Dimension

**Block 2 (4h): Polish & Integration**
- [ ] Alle Screens durchgehen
- [ ] Navigation testen
- [ ] Konsistenz prüfen (Logos, Banner, Farben)
- [ ] Responsive-Check (1920×1080, 1280×720)

---

### TAG 5 (2. Februar)

**Ganztägig: Testing & Feinschliff**
- [ ] Beamer-Test (auf großem Monitor simulieren)
- [ ] Schriftgrößen-Check (lesbar aus 3-5m Entfernung?)
- [ ] Kontrast-Check (Farben gut unterscheidbar?)
- [ ] Offline-Test (kein Internet, alles lädt?)
- [ ] Screenshots als Backup erstellen
- [ ] Übergabe-Anleitung für Melissa schreiben

---

### TAG 6 (3. Februar - DEADLINE 18:00 Uhr)

**FINAL CHECKS**
- [ ] Alle Phase-1-Screens funktionieren
- [ ] Navigation flüssig (keine broken Links)
- [ ] Datenschutz-Banner auf JEDEM Screen
- [ ] Logos korrekt platziert (gannaca links, Trianel rechts)
- [ ] Offline-Modus getestet
- [ ] Backup-Ordner mit Screenshots erstellt
- [ ] USB-Stick mit Projekt vorbereitet

---

## 5. KRITISCHE ANFORDERUNGEN (NON-NEGOTIABLE)

### Screen 6 (Formular) - MUSS erfüllen:
| Anforderung | Status |
|-------------|--------|
| Mindestens 16pt Schriftgröße für Labels | ⬜ |
| 11 Formular-Felder (siehe Spec) | ⬜ |
| Fortschrittsanzeige ("X von ~20 Cases") | ⬜ |
| Hinweis-Box (Transparenz-Disclaimer) | ⬜ |
| Große Buttons (48px Höhe, gut klickbar) | ⬜ |
| Hoher Kontrast (Dunkelgrau auf Weiß) | ⬜ |

### Alle Screens - MUSS erfüllen:
| Anforderung | Status |
|-------------|--------|
| Datenschutz-Banner sichtbar | ⬜ |
| Header mit beiden Logos | ⬜ |
| Tab-Navigation funktioniert | ⬜ |
| Offline-fähig (keine externen Dependencies) | ⬜ |
| KEINE Backend-Funktionalität | ⬜ |

---

## 6. RISIKEN & MITIGATION

| RISIKO | WAHRSCHEINLICHKEIT | IMPACT | MITIGATION |
|--------|-------------------|--------|------------|
| Trianel-Logo nicht in guter Qualität | Mittel | Niedrig | SVG bereits erstellt, PNG als Backup |
| Beamer-Lesbarkeit schlecht | Niedrig | HOCH | Frühzeitig testen (Tag 5), Schrift ≥16pt |
| Zeit zu knapp für alle Screens | Mittel | Mittel | Strikter Fokus auf Phase 1, Rest optional |
| Browser-Kompatibilität | Niedrig | Mittel | Chrome als Standard, Firefox als Backup |
| Internet im Workshop nicht verfügbar | Mittel | HOCH | Alles lokal, keine CDN-Dependencies |
| Tech-Probleme während Workshop | Niedrig | HOCH | Screenshots als PDF-Backup |

---

## 7. TESTING-CHECKLISTE

### Vor Workshop (3. Feb, 17:00 Uhr):
- [ ] Screen 0, 1, 6, 7 laden korrekt
- [ ] Navigation funktioniert (alle Tab-Klicks)
- [ ] Formular (Screen 6) auf 1920×1080 getestet
- [ ] Schrift aus 3m Entfernung lesbar?
- [ ] Offline-Modus (WLAN aus, alles lädt?)
- [ ] Screenshots für Backup erstellt
- [ ] USB-Stick vorbereitet

### Vor CEO-Präsentation (5. Feb, 11:00 Uhr):
- [ ] Screen 2, 3, 4, 8 fertig
- [ ] Matrix (Screen 8) korrekt dargestellt
- [ ] PDF-Export via Browser-Druck getestet
- [ ] Alle Screens als PDF gespeichert

---

## 8. ÜBERGABE & DOKUMENTATION

### Für Melissa (Workshop-Moderatorin):
- [ ] Anleitung: "Wie starte ich das Mockup?" (index.html öffnen)
- [ ] Anleitung: "Wie navigiere ich?" (Tab-Klicks erklären)
- [ ] Anleitung: "Was tun bei Tech-Problemen?" (Screenshots öffnen)
- [ ] Kontakt für Notfälle während Workshop

### Für Christopher (CEO):
- [ ] 1-Seiter: Was zeigt dieses Mockup?
- [ ] PDF mit allen Screens
- [ ] Hinweis: "Dies ist ein Konzept-Mockup, kein Produkt"

---

## 9. ABHÄNGIGKEITEN & VORAUSSETZUNGEN

### Bereits vorhanden:
- ✅ gannaca-logo.png
- ✅ trianel-logo.png
- ✅ trianel-logo.svg

### Noch zu erledigen:
- ⬜ gannaca-logo.svg (oder PNG ausreichend?)
- ⬜ Inter Font lokal herunterladen
- ⬜ Font Awesome lokal einbinden (optional, Emojis als Alternative)

---

## 10. KOMMUNIKATION

### Tägliche Updates an:
- Melissa Conrads (Projekt-Lead)

### Bei Problemen sofort melden:
- Kritische Blocker (z.B. Logo nicht verfügbar)
- Zeitverzug >4 Stunden
- Technische Entscheidungen mit Impact

---

**NÄCHSTER SCHRITT:** Design-System aufsetzen (variables.css, main.css)
