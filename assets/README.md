# gannaca AI-Case Sprint Framework – Mockup

## 🎯 Was ist das?

Ein digitales, **nicht-funktionales** Mockup zur Visualisierung des standardisierten "gannaca AI-Case Sprint" Frameworks für KI-Use-Case-Identifikation in regulierten Unternehmen.

**Aktueller Kunde:** Trianel (Workshop am 4. Februar 2026)

> ⚠️ **WICHTIG:** Dies ist KEIN lauffähiges Produkt, sondern eine rein konzeptionelle Visualisierung für Workshop-Zwecke. Keine Echtdaten, keine Backend-Funktionalität.

---

## 📅 Deadlines

| Phase | Deadline | Zweck |
|-------|----------|-------|
| **Phase 1 (KRITISCH)** | 3. Feb 2026, 18:00 Uhr | Workshop-Präsentation (4. Feb) |
| **Phase 2 (WICHTIG)** | 5. Feb 2026, 12:00 Uhr | CEO-Präsentation (5. Feb) |
| Phase 3 (Optional) | Nach Workshop | Finale Dokumentation |

---

## 🚀 Quick Start

### Voraussetzungen
- Moderner Browser (Chrome empfohlen, Firefox als Backup)
- Keine Installation nötig (Static HTML)

### Starten
```bash
# Option 1: Einfach öffnen
open index.html

# Option 2: Mit lokalem Server (für bessere Kompatibilität)
python3 -m http.server 8000
# Dann öffnen: http://localhost:8000
```

### Für Beamer/Präsentation
1. `index.html` in Chrome öffnen
2. F11 drücken (Fullscreen-Modus)
3. Mit Tab-Navigation zwischen Screens wechseln

---

## 📂 Projekt-Struktur

```
/26 01 28 AI Case Sprint - Mockup/
├── README.md
├── PROJECT_PLAN.md
├── index.html                    # Einstiegsseite
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
├── assets/
│   ├── logos/
│   │   ├── gannaca-logo.png
│   │   ├── trianel-logo.png
│   │   └── trianel-logo.svg
│   └── fonts/
│       └── inter/
│
├── styles/
│   ├── main.css
│   ├── variables.css
│   ├── components.css
│   ├── screens.css
│   ├── forms.css
│   └── beamer.css
│
└── js/
    ├── navigation.js
    └── form-progress.js
```

---

## 🖥️ Screen-Übersicht

### Phase 1 (KRITISCH – bis 3. Feb)

| Screen | Name | Beschreibung |
|--------|------|--------------|
| 0 | Workshop-Prozess | 3-Phasen-Timeline mit "Wir sind hier" Markierung |
| 1 | Übersicht & Denkmodell | Ausgangslage + KI/Mensch-Trennung |
| **6** | **Case-Erfassungs-Formular** | ⭐ **HERZSTÜCK** – Live-Eingabe im Workshop |
| 7 | Workshop-Ergebnis | Kachel-Ansicht aller erfassten Cases |

### Phase 2 (WICHTIG – bis 5. Feb)

| Screen | Name | Beschreibung |
|--------|------|--------------|
| 2 | KPI-Rahmen | 4-Säulen: Zeit, Kosten, Qualität, Risiko |
| 3 | Governance & Rollen | Mensch vs. KI Tabelle + Prinzipien |
| 4 | Zielprozess | 6-Schritt-Flowchart (Reisekosten-Beispiel) |
| 8 | Priorisierungs-Matrix | 2D-Matrix mit Top-3 Empfehlungen |

### Phase 3 (OPTIONAL)

| Screen | Name | Beschreibung |
|--------|------|--------------|
| 5 | Mockup-Visualisierung | 5 Interface-Screenshots |
| 9 | Finaler Case-Mockup | Detaillierte Ausarbeitung eines Cases |

---

## 🎨 Design-System

### Farben

```css
:root {
  /* Primary */
  --primary-blue: #0A1F3F;
  --accent-blue: #4A90E2;
  
  /* Status */
  --success-green: #28A745;
  --warning-yellow: #FFC107;
  --danger-red: #DC3545;
  
  /* Neutral */
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: #F8F9FA;
  --bg-white: #FFFFFF;
  --border-light: #E0E0E0;
}
```

### Typografie

| Element | Font | Größe | Gewicht |
|---------|------|-------|---------|
| H1 (Titel) | Inter | 32-36pt | Bold (700) |
| H2 (Untertitel) | Inter | 24pt | Medium (500) |
| H3 (Section) | Inter | 20pt | Semi-Bold (600) |
| Body | Inter | 16pt | Regular (400) |
| Formular-Labels | Inter | 16pt | Medium (500) |

> ⚠️ **BEAMER-REGEL:** Mindestens 14pt für alle Texte, 16pt für Formular-Labels!

### Spacing

```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  
  --border-radius: 8px;
  --max-width: 1400px;
}
```

---

## ⚠️ WICHTIGE HINWEISE

### Was dieses Mockup IST:
- ✅ Konzeptionelle Visualisierung
- ✅ Workshop-Unterstützungs-Tool
- ✅ Denkmodell für KI-Governance
- ✅ Wiederverwendbares Framework-Template

### Was dieses Mockup NICHT IST:
- ❌ KEIN lauffähiges Produkt
- ❌ KEINE Echtdaten-Verarbeitung
- ❌ KEINE Backend-Funktionalität
- ❌ KEINE Systemanbindung
- ❌ KEINE automatisierten KI-Entscheidungen

### Datenschutz-Banner (PFLICHT auf jedem Screen!)

```
🔒 DATENSCHUTZ-KONFORM | KEINE PRODUKTIVDATEN
Dieses Mockup dient ausschließlich zur Visualisierung.
Alle gezeigten Beispiele sind fiktiv.
Keine Erfassung, Verarbeitung oder Speicherung von produktiven Trianel-Daten.
```

---

## 🧪 Testing

### Beamer-Test (KRITISCH!)

Screen 6 (Formular) **MUSS** auf einem Projektor/großen Monitor getestet werden:

- [ ] Schriftgröße mind. 16pt
- [ ] Hoher Kontrast (dunkler Text auf hellem Grund)
- [ ] Alle 11 Felder sichtbar und lesbar
- [ ] Buttons groß genug (48px Höhe)
- [ ] Aus 3-5m Entfernung lesbar

### Offline-Test

- [ ] WLAN deaktivieren
- [ ] index.html öffnen
- [ ] Alle Screens durchklicken
- [ ] Alle Logos/Fonts laden korrekt

---

## 📦 Export & Übergabe

### Für Workshop (4. Feb)
- Fullscreen-HTML im Browser (F11)
- Backup: Screenshots aller Screens als PDF
- USB-Stick mit kompletten Projekt-Ordner

### Für CEO (5. Feb)
- PDF-Export: Browser → Drucken → Als PDF speichern
- PowerPoint-Version (optional): Screenshots + Erklärtext

---

## 👥 Team & Kontakt

| Rolle | Person |
|-------|--------|
| Entwicklung | [Cursor/AI-unterstützt] |
| Projekt-Lead | Melissa Conrads |
| Stakeholder | Christopher (CEO) |

---

## 📋 Checkliste vor Workshop

### 3. Februar, 17:00 Uhr – FINAL CHECK

**Screens:**
- [ ] Screen 0 (Workshop-Prozess) lädt korrekt
- [ ] Screen 1 (Übersicht) lädt korrekt
- [ ] Screen 6 (Formular) lädt korrekt ⭐
- [ ] Screen 7 (Ergebnis) lädt korrekt

**Komponenten:**
- [ ] Datenschutz-Banner auf ALLEN Screens
- [ ] Header mit gannaca-Logo (links) + Trianel-Logo (rechts)
- [ ] Tab-Navigation funktioniert (alle Klicks)

**Qualität:**
- [ ] Beamer-Test bestanden (Schrift lesbar)
- [ ] Offline-Modus funktioniert
- [ ] Backup-Screenshots erstellt
- [ ] USB-Stick vorbereitet

**Übergabe:**
- [ ] Anleitung für Melissa geschrieben
- [ ] Notfall-Kontakt hinterlegt

> ✅ Wenn ALLE Punkte abgehakt → **READY FÜR WORKSHOP!**

---

## 🐛 Bekannte Einschränkungen

| Einschränkung | Erklärung |
|---------------|-----------|
| Formular speichert nicht | Rein visuell, keine Datenbank |
| Matrix ist statisch | Keine automatische Berechnung |
| PDF-Export manuell | Via Browser → Drucken → PDF |
| Nur Desktop | Keine mobile/Tablet-Optimierung |
| Keine Echtzeit-Updates | Statische HTML-Seiten |

---

## 📄 Lizenz & Nutzung

Dieses Mockup ist ausschließlich für interne Verwendung bei gannaca/Trianel bestimmt.

**Nicht zur Weiterverbreitung oder kommerziellen Nutzung außerhalb des vereinbarten Projektrahmens.**

---

## 🔗 Weiterführende Dokumente

- [PROJECT_PLAN.md](./PROJECT_PLAN.md) – Detaillierter Entwicklungsplan
- [Design-Spezifikation](./docs/design-spec.md) – (falls erstellt)
- [Workshop-Anleitung](./docs/workshop-guide.md) – (falls erstellt)
