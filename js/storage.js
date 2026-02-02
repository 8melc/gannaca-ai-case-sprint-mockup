/* ============================================
   GANNACA AI-CASE SPRINT - LOCAL STORAGE
   Speichert Cases im Browser (offline-fähig!)
   ============================================ */

const STORAGE_KEY = 'gannaca_cases';

/**
 * Alle Cases aus localStorage laden
 * @returns {Array} Array mit allen gespeicherten Cases
 */
function getAllCases() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Neuen Case speichern
 * @param {Object} caseData - Die Formulardaten
 * @returns {number} Aktuelle Anzahl der Cases
 */
function saveCase(caseData) {
  const cases = getAllCases();
  
  // Case-Nummer und Timestamp hinzufügen
  caseData.caseNumber = cases.length + 1;
  caseData.timestamp = new Date().toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  caseData.erfasstVon = 'Melissa Conrads';
  
  cases.push(caseData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  
  return cases.length;
}

/**
 * Alle Cases löschen (für neuen Workshop)
 */
function clearAllCases() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Letzten Case löschen (falls Fehler)
 */
function deleteLastCase() {
  const cases = getAllCases();
  if (cases.length > 0) {
    cases.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  }
  return cases.length;
}

/**
 * Bestimmten Case löschen
 * @param {number} caseNumber - Die Case-Nummer
 */
function deleteCase(caseNumber) {
  let cases = getAllCases();
  cases = cases.filter(c => c.caseNumber !== caseNumber);
  
  // Case-Nummern neu vergeben
  cases.forEach((c, index) => {
    c.caseNumber = index + 1;
  });
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  return cases.length;
}

/**
 * Case aktualisieren
 * @param {number} caseNumber - Die Case-Nummer
 * @param {Object} updatedData - Die aktualisierten Daten
 */
function updateCase(caseNumber, updatedData) {
  const cases = getAllCases();
  const index = cases.findIndex(c => c.caseNumber === caseNumber);
  
  if (index !== -1) {
    cases[index] = { ...cases[index], ...updatedData };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
  }
}

/**
 * Nächste Case-Nummer ermitteln
 * @returns {number} Nächste verfügbare Case-Nummer
 */
function getNextCaseNumber() {
  return getAllCases().length + 1;
}

/**
 * Cases als JSON exportieren
 * @returns {string} JSON-String aller Cases
 */
function exportCasesAsJSON() {
  return JSON.stringify(getAllCases(), null, 2);
}

/**
 * Demo-Daten laden (für Testing)
 */
function loadDemoData() {
  const demoCases = [
    {
      caseNumber: 1,
      timestamp: '04.02.2026, 10:15',
      erfasstVon: 'Melissa Conrads',
      teilnehmer: 'Dr. Thomas Müller',
      problemTitel: 'Vertragsanalyse & Risikoprüfung',
      abteilungen: ['Legal'],
      ausgangslage: 'Aktuell werden alle eingehenden Verträge und Vertragsänderungen manuell von Juristen durchgelesen...',
      problem: 'Hoher Zeitaufwand (25 Min/Vertrag), Wissen bei Einzelpersonen, Inkonsistente Bewertungen',
      haeufigkeit: 'Täglich',
      anzahlVorgaenge: '15',
      betroffenePersonen: '3',
      zeitaufwandWert: '25',
      zeitaufwandEinheit: 'minutes',
      strategischeRelevanz: 'Hoch',
      risiko: '4',
      risikoBegruendung: 'Compliance-Risiken bei Übersehen kritischer Klauseln',
      vorhandeneLoesung: 'no',
      vorhandeneLösungBeschreibung: '',
      datenVerfuegbarkeit: 'partial',
      kiPotenzial: 'Automatische Erkennung kritischer Klauseln, Risiko-Scoring',
      // GOVERNANCE TRIGGER
      entscheidungswirkung: 'ja',
      kritisRelevanz: 'unklar',
      personenbezogen: 'nein',
      besondereKategorien: 'nein',
      automationsgrad: 'entscheidungsunterstuetzend',
      // BEWERTUNG (von Prüfinstanz)
      bewertungNutzen: 'hoch',
      bewertungUmsetzbarkeit: 'hoch',
      pruefstatus: 'pruefbedarf',
      prueffelder: ['KRITIS', 'Audit'],
      entscheidungsstatus: 'go'
    },
    {
      caseNumber: 2,
      timestamp: '04.02.2026, 10:32',
      erfasstVon: 'Melissa Conrads',
      teilnehmer: 'Anna Schmidt',
      problemTitel: 'Reisekostenabrechnung',
      abteilungen: ['Finance', 'HR'],
      ausgangslage: 'Mitarbeiter reichen Reisekostenabrechnungen per E-Mail ein. Sachbearbeiter prüfen gegen Richtlinien...',
      problem: 'Viele Rückfragen, unvollständige Belege, zeitaufwendige Prüfung',
      haeufigkeit: 'Wöchentlich',
      anzahlVorgaenge: '50',
      betroffenePersonen: '2',
      zeitaufwandWert: '20',
      zeitaufwandEinheit: 'minutes',
      strategischeRelevanz: 'Mittel',
      risiko: '3',
      risikoBegruendung: 'Audit-Findings bei Betriebsprüfungen',
      vorhandeneLoesung: 'yes',
      vorhandeneLösungBeschreibung: 'Excel-Liste für Tracking',
      datenVerfuegbarkeit: 'full_digital',
      kiPotenzial: 'Automatische Vollständigkeitsprüfung, Plausibilitätscheck',
      // GOVERNANCE TRIGGER
      entscheidungswirkung: 'nein',
      kritisRelevanz: 'nein',
      personenbezogen: 'ja',
      besondereKategorien: 'nein',
      automationsgrad: 'teilautomatisiert',
      // BEWERTUNG (von Prüfinstanz)
      bewertungNutzen: 'mittel',
      bewertungUmsetzbarkeit: 'hoch',
      pruefstatus: 'kein-pruefbedarf',
      prueffelder: ['DSGVO'],
      entscheidungsstatus: 'go'
    },
    {
      caseNumber: 3,
      timestamp: '04.02.2026, 10:48',
      erfasstVon: 'Melissa Conrads',
      teilnehmer: 'Peter Weber',
      problemTitel: 'Compliance-Reporting',
      abteilungen: ['Compliance'],
      ausgangslage: 'Quartalsweise müssen diverse Compliance-Reports erstellt werden...',
      problem: 'Daten aus verschiedenen Quellen, manuelle Zusammenführung, Fehleranfällig',
      haeufigkeit: 'Quartalsweise',
      anzahlVorgaenge: '8',
      betroffenePersonen: '4',
      zeitaufwandWert: '45',
      zeitaufwandEinheit: 'minutes',
      strategischeRelevanz: 'Hoch',
      risiko: '5',
      risikoBegruendung: 'Regulatorische Anforderungen, Bußgelder bei Fehlern',
      vorhandeneLoesung: 'no',
      vorhandeneLösungBeschreibung: '',
      datenVerfuegbarkeit: 'partial',
      kiPotenzial: 'Automatische Datenkonsolidierung, Report-Generierung',
      // GOVERNANCE TRIGGER
      entscheidungswirkung: 'ja',
      kritisRelevanz: 'ja',
      personenbezogen: 'unklar',
      besondereKategorien: 'nein',
      automationsgrad: 'entscheidungsunterstuetzend',
      // BEWERTUNG (von Prüfinstanz)
      bewertungNutzen: 'hoch',
      bewertungUmsetzbarkeit: 'mittel',
      pruefstatus: 'pruefbedarf',
      prueffelder: ['KRITIS', 'AI Act', 'Audit'],
      entscheidungsstatus: 'go-auflagen'
    }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(demoCases));
  return demoCases.length;
}
