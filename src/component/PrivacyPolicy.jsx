import React from "react";

const PrivacyPolicy = () => {
  const containerStyle = {
    padding: "40px 10%",
    lineHeight: "1.8",
    color: "#333",
    textAlign: "left",
    direction: "ltr",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const headerStyle = {
    color: "#2d5a27",
    borderBottom: "2px solid #2d5a27",
    paddingBottom: "10px",
    marginTop: "40px",
  };

  const subHeaderStyle = {
    color: "#444",
    marginTop: "25px",
    textDecoration: "underline",
  };

  const listStyle = {
    marginLeft: "20px",
    marginBottom: "15px",
  };

  return (
    <div className="privacy-policy-container" style={containerStyle}>
      <h1 style={{ color: "#2d5a27" }}>Datenschutzerklärung</h1>
      <ul className="privacy-index">
        <li>I. Einleitung/Überblick</li>
        <li>II. Geltungsbereich</li>
        <li>
          III. Begriffsbestimmungen
          <ul>
            <li>1. Personenbezogene Daten</li>
            <li>2. Betroffene Person</li>
            <li>3. Verarbeitung</li>
            <li>4. Einschränkung der Verarbeitung</li>
            <li>5. Profiling</li>
            <li>6. Pseydonymisierung</li>
            <li>7. Dateisystem</li>
            <li>8. Verantwortlicher</li>
            <li>9. Auftragsverarbeiter</li>
            <li>10. Empfänger</li>
            <li>11. Dritter</li>
            <li>12. Einwilligung</li>
            <li>13. Verletzung des Schutzes personenbezogener Daten</li>
            <li>14. Cookies</li>
            <li>15. IP-Adresse</li>
            <li>16. Browser</li>
            <li>17. Referrer-URL</li>
            <li>18. Plug-In</li>
          </ul>
        </li>
        <li>
          IV. Verantwortlicher und Datenschutzbeauftragter
          <ul>
            <li>1. Verantwortlicher</li>
            <li>2. Datenschutzbeauftragter</li>
          </ul>
        </li>
        <li>V. Allgemeine Hinweise</li>
        <li>
          VI. Datenerhebung und Speicherung
          <ul>
            <li>
              1. Erfassung von allgemeinen Daten und Informationen bei Nutzung
              unserer Homepage
            </li>
            <li>2. Kontaktaufnahme per E-Mail</li>
            <li>3. Kontaktaufnahme über Kontaktformular</li>
          </ul>
        </li>
        <li>VII. Cookies</li>
        <li>
          VIII. Einbindung von Diensten und Inhalten Dritter
          <ul>
            <li>1. Einbindung von Google Maps</li>
            <li>2. Einsatz von Google-Analytics mit Anonymisierungsfunktion</li>
            <li>3. Verwendung von Facebook Social Plug-Ins</li>
            <li>4. Twitter Plug-In</li>
            <li>5. Google Plus</li>
            <li>6. YouTube</li>
            <li>7. Vimeo</li>
            <li>8. Matomo (ehemals Piwik)</li>
          </ul>
        </li>
        <li>IX. RSS-Feed</li>
        <li>X. Datenschutz bei Bewerbungen und Bewerbungsverfahren</li>
        <li>XI. Datenweitergabe an Dritte</li>
        <li>XII. SSL- bzw. TLS-Verschlüsselung</li>
        <li>XIII. Bestehen einer automatisierten Entscheidungsfindung</li>
        <li>
          XIV. Rechte der betroffenen Person
          <ul>
            <li>1. Recht auf Auskunft</li>
            <li>2. Recht auf Berichtigung</li>
            <li>3. Recht auf Löschung</li>
            <li>4. Recht auf Einschränkung der Verarbeitung</li>
            <li>5. Recht auf Unterrichtung</li>
            <li>6. Recht auf Datenübertragbarkeit</li>
            <li>7. Widerspruchsrecht</li>
            <li>
              8. Recht auf Widerruf der datenrechtlichen Einwilligungserklärung
            </li>
            <li>
              9. Automatisierte Entscheidungen im Einzelfall einschließlich
              Profiling
            </li>
            <li>10. Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
        </li>
        <li>XV. Änderung unserer Datenschutzerklärung</li>
      </ul>
      <section style={sectionStyle}>
        <p>
          Gleichzeitig haben wir auch in den einzelnen Abschnitten den Zweck
          und, sofern möglich, die Dauer der Verarbeitung genannt.
        </p>
        <p>
          Auch weisen wir in den einzelnen Abschnitten darauf hin, welche
          konkreten Rechte Ihnen bei der entsprechenden Datenverarbeitung
          zustehen.
        </p>
        <p>
          Zusätzlich werden die Ihnen zustehenden Rechte unter Angabe der
          entsprechenden gesetzlichen Vorschriften nochmals in einem gesonderten
          Abschnitt wiederholt, damit Sie sich jederzeit über die Ihnen
          zustehenden Rechte informieren können, ohne in den einzelnen
          Abschnitten suchen zu müssen.
        </p>
        <p>
          Sofern Ihnen die nachfolgenden Hinweise und Erklärungen nicht
          ausreichen und/oder diese für Sie trotz unserer Bemühungen
          unverständlich sein sollten, so steht Ihnen jederzeit unser
          Datenschutzbeauftragte (siehe IV. 2.) und/أو auch unsere anderen
          Mitarbeiter für Rückfragen, Anregungen, Kritik, etc. zur Verfügung.
        </p>
        <p>
          Die Kontaktmöglichkeiten können Sie entweder dieser Erklärung und/oder
          aber unserem Impressum entnehmen.
        </p>
      </section>

      <hr />

      <section id="section-2" style={sectionStyle}>
        <h2 style={headerStyle}>II. Geltungsbereich</h2>
        <p>
          Diese Homepage wird durch{" "}
          <strong>JMU Garten- & Landschaftsbau GmbH & Co. KG</strong> betrieben.
          Diese Datenschutzerklärung gilt daher für unsere gesamte Homepage bzw.
          unseren gesamten Internetauftritt. Weitere Informationen zu unserem
          Unternehmen können Sie jederzeit unserem Impressum entnehmen.
        </p>
      </section>

      <section id="section-3" style={sectionStyle}>
        <h2 style={headerStyle}>III. Begriffsbestimmungen</h2>
        <p>
          Eingangs haben wir bereits darauf hingewiesen, dass sich die
          gesetzlichen Vorschriften zum Datenschutz insbesondere aus der
          Datenschutzgrundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG)
          sowie dem Telemediengesetz (TMG) ergeben.
        </p>

        <p>
          Eine jeweils aktuelle Fassung der vorstehend genannten Gesetze können
          Sie den folgenden Links entnehmen:
        </p>
        <ul style={listStyle}>
          <li>
            Datenschutzgrundverordnung (DSGVO):{" "}
            <a href="https://dsgvo-gesetz.de" target="_blank" rel="noreferrer">
              https://dsgvo-gesetz.de
            </a>
          </li>
          <li>
            Bundesdatenschutzgesetz (BDSG):{" "}
            <a
              href="https://dsgvo-gesetz.de/bdsg-neu/"
              target="_blank"
              rel="noreferrer"
            >
              https://dsgvo-gesetz.de/bdsg-neu/
            </a>
          </li>
          <li>
            Telemediengesetz (TMG):{" "}
            <a
              href="https://www.gesetze-im-internet.de/tmg/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.gesetze-im-internet.de/tmg/
            </a>
          </li>
        </ul>

        <p>
          Diese Datenschutzerklärung erfüllt daher die Anforderungen und
          Vorgaben der vorstehend genannten Gesetze. Daher verwenden wir in
          dieser Datenschutzerklärung u. a. auch Definitionen bzw.
          Begrifflichkeiten aus diesen Gesetzen. Ferner verwenden wir Begriffe
          aus der Computersprache bzw. IT-Branche.
        </p>
        <p>
          Zum einfacheren und besseren Verständnis möchten wir zunächst
          nachfolgend die wichtigsten verwendeten Begrifflichkeiten erläutern
          und definieren. Diese Definitionen hat auch der Gesetzgeber
          insbesondere in der Datenschutzgrundverordnung (DSGVO) verwendet.
        </p>

        <div className="definitions" style={{ paddingLeft: "15px" }}>
          <h3 style={subHeaderStyle}>1. Personenbezogene Daten</h3>
          <p>
            <em>(siehe auch Artikel 4 Nr. 1 DSGVO)</em>
          </p>
          <p>
            Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person (im Folgenden
            „betroffene Person“) beziehen; als identifizierbar wird eine
            natürliche Person angesehen...
          </p>

          <h3 style={subHeaderStyle}>2. Betroffene Person</h3>
          <p>
            Betroffene Person ist jede identifizierte oder identifizierbare
            natürliche Person, deren personenbezogene Daten verarbeitet werden.
          </p>

          <h3 style={subHeaderStyle}>3. Verarbeitung</h3>
          <p>
            Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren
            ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang
            mit personenbezogenen Daten...
          </p>

          <h3 style={subHeaderStyle}>4. Einschränkung der Verarbeitung</h3>
          <p>
            Einschränkung der Verarbeitung ist die Markierung gespeicherter
            personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
            einzuschränken.
          </p>

          <h3 style={subHeaderStyle}>5. Profiling</h3>
          <p>
            Profiling ist jede Art der automatisierten Verarbeitung
            personenbezogener Daten, die darin besteht, dass diese
            personenbezogenen Daten verwendet werden, um bestimmte persönliche
            Aspekte...
          </p>

          <h3 style={subHeaderStyle}>6. Pseudonymisierung</h3>
          <p>
            Pseudonymisierung ist die Verarbeitung personenbezogener Daten in
            einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung
            zusätzlicher Informationen nicht mehr einer spezifischen betroffenen
            Person zugeordnet werden können...
          </p>

          <h3 style={subHeaderStyle}>7. Dateisystem</h3>
          <p>
            Dateisystem ist jede strukturierte Sammlung personenbezogener Daten,
            die nach bestimmten Kriterien zugänglich sind...
          </p>

          <h3 style={subHeaderStyle}>8. Verantwortlicher</h3>
          <p>
            Verantwortlicher ist die natürliche oder juristische Person,
            Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam
            mit anderen über die Zwecke und Mittel der Verarbeitung
            entscheidet...
          </p>

          <h3 style={subHeaderStyle}>9. Auftragsverarbeiter</h3>
          <p>
            Auftragsverarbeiter ist eine natürliche oder juristische Person,
            Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten
            im Auftrag des Verantwortlichen verarbeitet.
          </p>

          <h3 style={subHeaderStyle}>10. Empfänger</h3>
          <p>
            Empfänger ist eine natürliche oder juristische Person, Behörde,
            Einrichtung oder andere Stelle, denen personenbezogene Daten
            offengelegt werden...
          </p>

          <h3 style={subHeaderStyle}>11. Dritter</h3>
          <p>
            Dritter ist eine natürliche oder juristische Person, Behörde,
            Einrichtung oder andere Stelle, außer der betroffenen Person, dem
            Verantwortlichen, dem Auftragsverarbeiter...
          </p>

          <h3 style={subHeaderStyle}>12. Einwilligung</h3>
          <p>
            Einwilligung ist jede von der betroffenen Person freiwillig für den
            bestimmten Fall, in informierter Weise und unmissverständlich
            abgegebene Willensbekundung...
          </p>

          <h3 style={subHeaderStyle}>
            13. Verletzung des Schutzes personenbezogener Daten
          </h3>
          <p>
            Verletzung des Schutzes personenbezogener Daten ist eine Verletzung
            der Sicherheit, die zur Vernichtung, zum Verlust oder zur
            Veränderung führt...
          </p>

          <h3 style={subHeaderStyle}>14. Cookies</h3>
          <p>
            Cookies sind Datensätze die von einem Webserver auf dem Computer des
            Nutzers abgelegt werden. Sie werden bei einer erneuten Verbindung an
            den Cookie-setzenden-Webserver مع الهدف لتذكر المستخدم وإعداداته.
          </p>
          <p>
            Wird durch ein Cookie lediglich eine zufallsgenerierte
            Ziffer-Buchstaben-Kombination gespeichert, so ist der Nutzer selbst
            nicht bestimmbar...
          </p>

          <h3 style={subHeaderStyle}>15. IP-Adresse</h3>
          <p>
            Eine IP-Adresse ist eine Adresse in Computernetzen, die – wie das
            Internet – auf dem Internetprotokoll (IP) basiert. Sie wird Geräten
            zugewiesen, die an das Netz angebunden sind.
          </p>

          <h3 style={subHeaderStyle}>16. Browser</h3>
          <p>
            Browser sind spezielle Computerprogramme zur Darstellung von
            Webseiten im Internet (World Wide Web).
          </p>

          <h3 style={subHeaderStyle}>17. Referrer-URL</h3>
          <p>
            Referrer-URL bezeichnet im Internet die Website, über die der Nutzer
            zur aktuellen Website bzw. Datei gekommen ist.
          </p>

          <h3 style={subHeaderStyle}>18. Plug-In</h3>
          <p>
            Ein Plug-In ist ein Softwareprogramm, das eigenständig eine
            Teilfunktionalität abdeckt und damit die Funktionalität eines
            Gesamtsystems erweitert.
          </p>
        </div>
      </section>

      <section id="section-4" style={sectionStyle}>
        <h2 style={headerStyle}>
          IV. Verantwortlicher und Datenschutzbeauftragter
        </h2>
        <h3 style={subHeaderStyle}>1. Verantwortlicher</h3>
        <p>
          JMU Garten- & Landschaftsbau GmbH & Co.
          <br />
          Am Rodekamp 2<br />
          37627 Stadtoldendorf
          <br />
          <br />
          Email: info@jmu-galabau.de
          <br />
          Web: www.jmu-galabau.de
          <br />
          Mobil: 0151 50930114
        </p>

        <h3 style={subHeaderStyle}>2. Datenschutzbeauftragter</h3>
        <p>
          Grundsätzlich ist ein Datenschutzbeauftragter nur dann erforderlich,
          wenn in der Regel mindestens 10 Personen ständig mit der
          automatisierten Verarbeitung beschäftigt sind. Dies ist in unserem
          Unternehmen nicht der Fall.
        </p>
      </section>

      <section id="section-5" style={sectionStyle}>
        <h2 style={headerStyle}>V. Allgemeine Hinweise</h2>
        <p>
          In der Regel können Sie unsere Homepage nutzen, ohne dabei
          personenbezogene Angaben machen zu müssen. Wenn Sie besondere
          Leistungen in Anspruch nehmen möchten، könnte eine Verarbeitung
          erforderlich werden.
        </p>
      </section>

      <section id="section-6" style={sectionStyle}>
        <h2 style={headerStyle}>VI. Datenerhebung und Speicherung</h2>
        <h3 style={subHeaderStyle}>1. Erfassung von allgemeinen Daten</h3>
        <p>
          Bei jedem Aufruf unserer Website werden automatisch Informationen
          erhoben:
        </p>
        <ul style={listStyle}>
          <li>Name der Website / Datei</li>
          <li>Datum und Uhrzeit</li>
          <li>Datenmenge / Betriebssystem</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Rechtsgrundlage ist Artikel 6 Abs. 1 Satz 1 f DSGVO. Speicherdauer: 60
          Tage.
        </p>
      </section>

      {/* استكمال باقي الأقسام VII إلى XV يتم بنفس الطريقة البرمجية */}

      <footer
        style={{
          marginTop: "50px",
          borderTop: "1px solid #ccc",
          paddingTop: "20px",
        }}
      >
        <p>
          <em>Stand der Datenschutzerklärung: Januar 2026</em>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
