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
            <li>1. Einbindung von OpenStreetMap</li>
            <li>2. Kontaktformular-Versand über EmailJS</li>
            <li>3. Schriftarten (lokal eingebunden)</li>
            <li>4. Facebook, Instagram, TikTok (einfache Verlinkung)</li>
            <li>5. Twitter Plug-In</li>
            <li>6. Google Plus</li>
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
          <strong>BROTHERS Garten-Landschaftsbau</strong> betrieben.
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
          BROTHERS Garten-Landschaftsbau
          <br />
          Grünstraße 10<br />
          37632 Eschershausen
          <br />
          <br />
          Email: brothersgartenbau@gmail.com
          <br />
          Web: brothersgartenbau.de
          <br />
          Mobil: +49 1577 9878532
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
        <p>
          Die vorstehenden Daten bzw. Informationen werden durch Ihren Browser
          automatisch an uns übermittelt.
        </p>
        <p>
          Diese Informationen sind allgemein und erlauben uns keinerlei
          Rückschlüsse auf Ihre Person; Sie bleiben also anonym. Eine
          Zusammenführung dieser Daten bzw. Informationen mit anderen
          Datenquellen wird nicht vorgenommen.
        </p>
        <p>
          Wir behalten uns allerdings in diesem Zusammenhang das Recht vor,
          diese Informationen, auch Server-Logfiles genannt, nachträglich zu
          kontrollieren, wenn uns konkrete Anhaltspunkte für eine rechtswidrige
          Nutzung bekannt werden oder wenn wir durch Dritte rechtskräftig dazu
          verpflichtet werden.
        </p>
        <p>
          Diese Datenerhebung dient dazu, die Inhalte dieser Homepage
          darzustellen sowie für statistische Zwecke. Die Datenerhebung hilft
          uns insbesondere bei der Optimierung der Technik. Die Erfassung der
          vorstehend genannten Daten ist also zwingend notwendig.
        </p>
        <p>
          Rechtsgrundlage für die vorstehend genannte Datenerhebung ist Artikel
          6 Abs. 1 Satz 1 f DSGVO.
        </p>
      </section>
      <p>
        Diese Daten werden von uns grundsätzlich für die Dauer von 60 Tagen
        gespeichert und anschließend gelöscht, es sei denn wir sind durch Dritte
        rechtskräftig dazu verpflichtet worden, diese Daten weiterhin zu
        speichern und/oder es liegen uns konkrete Anhaltspunkte für eine
        rechtswidrige Nutzung vor.
      </p>
      <p>
        Die Erhebung und Speicherung dieser Daten ist zur Bereitstellung und für
        den Betrieb unserer Homepage zwingend erforderlich. Es besteht somit
        keine Widerspruchs- und/oder Beseitigungsmöglichkeit.
      </p>
      <p>2. Kontaktaufnahme per E-Mail</p>
      <p>
        Eine schnelle elektronische Kontaktaufnahme mit uns ist jederzeit per
        E-Mail möglich. Bei einer Kontaktaufnahme mit uns per E-Mail wird
        insbesondere Ihre E-Mail-Adresse, Ihr Name und, sofern Sie andere
        personenbezogene Daten angeben, auch diese automatisch gespeichert.

        Diese auf freiwilliger Basis von Ihnen an uns übermittelten
        personenbezogenen Daten werden für die Zwecke der Bearbeitung und/oder
        der Kontaktaufnahme zu Ihnen gespeichert. Es erfolgt insoweit keine
        Weitergabe dieser personenbezogenen Daten an Dritte. Rechtsgrundlage
        dieser Datenerhebung ist Artikel 6 Abs. 1 f DSGVO. Zielt der
        E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzlich
        Rechtsgrundlage für die Verarbeitung Artikel 6 Abs. 1 b DSGVO. Diese
        Daten werden von uns gelöscht, sobald sie für die Erreichung des Zwecks
        ihrer Erhebung nicht mehr erforderlich sind. Dies ist dann der Fall,
        wenn die jeweilige E-Mail-Konversation mit dem Nutzer beendet ist.

        Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen
        lässt, dass der betroffene Sachverhalt abschließend geklärt ist. Sie
        haben jederzeit die Möglichkeit, Ihre Einwilligung zur Verarbeitung der
        personenbezogenen Daten zu widerrufen. Nehmen Sie also per E-Mail
        Kontakt mit uns auf, so können Sie der Speicherung Ihrer
        personenbezogenen Daten jederzeit widersprechen. In einem solchen Fall
        kann die Kommunikation nicht fortgeführt werden. Der Widerruf der
        Einwilligung ist formlos möglich. Sie können diesen Widerruf also
        schriftlich, per E-Mail, per Telefon, etc. direkt an unseren
        Datenschutzbeauftragten übersenden und/oder einem unserer anderen
        Mitarbeiter. Die entsprechenden Kontaktdaten entnehmen Sie bitte dieser
        Erklärung und/oder aber unserem Impressum. Im Fall des Widerrufs werden
        alle personenbezogenen Daten, die bt5im Zuge der Kontaktaufnahme von uns
        gespeichert wurden, von uns gelöscht.
      </p>
      <p>3. Kontaktaufnahme über Kontaktformular</p>
      <p>
        Außerdem kann über unsere Homepage über ein von uns auf dieser zur
        Verfügung gestelltes Kontaktformular mit uns Kontakt aufgenommen werden.
        Wenn Sie über das Kontaktformular mit uns Kontakt aufnehmen, werden die
        von Ihnen insoweit übermittelten personenbezogenen Daten automatisch
        gespeichert. Im Einzelnen geht es um folgende Daten. – Name – E-Mail –
        Telefon – Nachricht Im Übrigen ergeben sich die erhobenen und
        personenbezogenen Daten auch aus der Eingabemaske unseres
        Kontaktformulars. Diese auf freiwilliger Basis von Ihnen an uns
        übermittelten personenbezogenen Daten werden für die Zwecke der
        Bearbeitung und/oder der Kontaktaufnahme zu Ihnen gespeichert. Es
        erfolgt jedoch insoweit keine Weitergabe dieser personenbezogenen Daten
        an Dritte. Rechtsgrundlage dieser Datenerhebung ist Artikel 6 Abs. 1 f
        DSGVO. Zielt der Kontakt über das Kontaktformular auf den Abschluss
        eines Vertrages ab, so ist zusätzlich Rechtsgrundlage für die
        Verarbeitung Artikel 6 Abs. 1 b DSGVO. Diese Daten werden von uns
        gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht
        mehr erforderlich sind. Dies ist dann der Fall, wenn die jeweilige
        Konversation, die sodann regelmäßig über E-Mail erfolgt, mit dem Nutzer
        beendet ist. Beendet ist die Konversation dann, wenn sich aus den
        Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend
        geklärt ist. Sie haben jederzeit die Möglichkeit, Ihre Einwilligung zur
        Verarbeitung der personenbezogenen Daten zu widerrufen. Nehmen Sie also
        per Kontaktformular Kontakt mit uns auf, so können Sie der Speicherung
        Ihrer personenbezogenen Daten jederzeit widersprechen. In einem solchen
        Fall kann die Kommunikation nicht fortgeführt werden. Der Widerruf der
        Einwilligung ist formlos möglich. Sie können diesen Widerruf also
        schriftlich, per E-Mail, per Telefon, etc. direkt an unseren
        Datenschutzbeauftragten übersenden und/oder einem unserer anderen
        Mitarbeiter. Die entsprechenden Kontaktdaten entnehmen Sie bitte dieser
        Erklärung und/oder aber unserem Impressum. Im Fall des Widerrufs werden
        alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme von uns
        gespeichert wurden, von uns gelöscht.
      </p>
      <section id="section-7" style={sectionStyle}>
      <h2>VII. Cookies</h2>
      <p>
        Wir verwenden auf unserer Homepage bzw. auf unseren Internetseiten
        derzeit keine Cookies (Definition siehe III.14.). Insbesondere setzen
        wir keine Cookies zu Analyse-, Tracking- oder
        Optimierungszwecken ein und zeigen daher auch keinen
        Cookie-Consent-Banner an. Die von uns eingebundenen Dienste (siehe
        VIII.) setzen ebenfalls keine Cookies. Sollte sich dies zukünftig
        ändern, etwa durch die Einbindung neuer Dienste, werden wir diese
        Datenschutzerklärung entsprechend aktualisieren und Sie, sofern
        gesetzlich erforderlich, um Ihre Einwilligung bitten.
      </p>
      </section>
      <section id="section-8" style={sectionStyle}>
      <h2>VIII. Einbindung von Diensten und Inhalten Dritter</h2>
      <p>
        Wir haben auf unserer Homepage die nachfolgend beschriebenen Dienste
        Dritter eingebunden. Wir setzen bewusst keine Analyse- oder
        Tracking-Dienste (wie z. B. Google Analytics oder vergleichbare
        Tools) und keine Social-Media-Plug-Ins ein. 1. Einbindung von
        OpenStreetMap Auf unserer Homepage nutzen wir für die Darstellung
        unseres Standorts das Kartenmaterial von OpenStreetMap, einem
        offenen, gemeinnützigen Kartenprojekt (OpenStreetMap Foundation, St
        John&apos;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS,
        Vereinigtes Königreich). Beim Aufruf der Kartenansicht wird eine
        Verbindung zu den Kartenservern von OpenStreetMap hergestellt, wobei
        Ihre IP-Adresse sowie technische Informationen zu Ihrem Endgerät
        (z. B. Browsertyp) an OpenStreetMap übertragen werden, damit die
        Karte korrekt angezeigt werden kann. Es werden dabei keine Cookies
        gesetzt. Rechtsgrundlage ist Artikel 6 Abs. 1 f DSGVO, unser
        berechtigtes Interesse liegt in einer für Sie verständlichen und
        komfortablen Darstellung unseres Standorts. Weitere Informationen
        zum Datenschutz bei OpenStreetMap finden Sie unter
        https://wiki.osmfoundation.org/wiki/Privacy_Policy. 2.
        Kontaktformular-Versand über EmailJS Für die technische Zustellung
        von Anfragen über unser Kontaktformular nutzen wir den Dienst
        EmailJS (EmailJS Corp., USA). Die von Ihnen im Kontaktformular
        eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht)
        werden dabei über die Server von EmailJS an unsere E-Mail-Adresse
        weitergeleitet, damit wir Ihre Anfrage beantworten können. EmailJS
        speichert diese Daten nicht dauerhaft, sondern verarbeitet sie
        ausschließlich zum Zweck der Zustellung. Rechtsgrundlage ist Artikel
        6 Abs. 1 b DSGVO, da die Verarbeitung der Anbahnung bzw. Erfüllung
        eines Vertrags oder einer Anfrage dient. Weitere Informationen
        erhalten Sie in der Datenschutzerklärung von EmailJS unter
        https://www.emailjs.com/legal/privacy-policy/. 3. Schriftarten Wir
        binden auf unserer Homepage Schriftarten (Fraunces, Work Sans) ein.
        Diese Schriftarten werden lokal von unserem eigenen Server
        ausgeliefert, nicht von einem externen Anbieter wie z. B. Google
        Fonts. Es findet daher beim Laden unserer Schriftarten keine
        Verbindung zu und keine Datenübertragung an einen Drittanbieter
        statt. 4. Facebook, Instagram, TikTok Wir verlinken auf unserer
        Homepage (insbesondere im Footer) auf unsere Profile bei Facebook,
        Instagram und TikTok. Hierbei handelt es sich um einfache Hyperlinks
        und nicht um eingebundene Social-Media-Plug-Ins. Es wird beim bloßen
        Aufruf unserer Homepage keine Verbindung zu den Servern dieser
        Anbieter hergestellt und keine Daten an diese übermittelt. Erst wenn
        Sie aktiv auf einen dieser Links klicken und die jeweilige Plattform
        besuchen, gelten die Datenschutzbestimmungen des jeweiligen
        Anbieters (Meta Platforms Ireland Limited für Facebook und
        Instagram, TikTok Technology Limited für TikTok). 5. Twitter Plug-In
        Derzeit ohne Anwendung. 6. Google Plus Derzeit ohne Anwendung.
      </p>
      </section>

      <section id="section-9" style={sectionStyle}>
        <h2>IX. RSS-Feed</h2>
        <p>Derzeit ohne Anwendung.</p>
        </section>
        <section id="section-10" style={sectionStyle}>
          <h2>X. Datenschutz bei Bewerbungen und Bewerbungsverfahren</h2>
          <p>
            Wir bieten an, dass uns Bewerbungen elektronisch per E-Mail und/oder
            über unser Kontaktformular übermittelt werden. Wir erheben,
            speichern und verarbeiten die personenbezogenen Daten von Bewerbern
            zum Zwecke der Abwicklung des Bewerbungsverfahrens. Schließen wir
            einen Arbeitsvertrag mit einem Bewerber, werden die uns im
            Bewerbungsverfahren übermittelten Daten zum Zwecke der Abwicklung
            des Arbeitsverhältnisses unter Beachtung der gesetzlichen
            Vorschriften gespeichert. Wird von uns kein Arbeitsvertrag mit dem
            Bewerber geschlossen, so werden die Bewerbungsunterlagen 6 Monate
            nach Bekanntgabe der Absageentscheidung gelöscht, wenn einer
            Löschung unsererseits keine sonstigen berechtigten Interessen
            entgegenstehen, wie beispielsweise eine Beweispflicht in einem
            gerichtlichen Verfahren. Rechtsgrundlage dafür ist Artikel 6 Abs. 1
            f DSGVO sowie Artikel 6 Abs. 1 b DSGVO. Sie haben jederzeit die
            Möglichkeit, Ihre Einwilligung zur Verarbeitung der
            personenbezogenen Daten zu widerrufen. Bewerben Sie sich also per
            E-Mail und/oder über das Kontaktformular bei uns, so können Sie der
            Speicherung Ihrer personenbezogenen Daten jederzeit widersprechen.
            In einem solchen Fall kann die Kommunikation nicht fortgeführt
            werden, d. h. es kann auch Ihre Bewerbung nicht weiter bearbeitet
            werden, was zur Folge hat, dass es ggf. nicht zu einem
            Arbeitsverhältnis kommt. Der Widerruf der Einwilligung ist formlos
            möglich. Sie können diesen Widerruf also schriftlich, per E-Mail,
            per Telefon, etc. direkt an unseren Datenschutzbeauftragten
            übersenden und/oder einem unserer anderen Mitarbeiter. Die
            entsprechenden Kontaktdaten entnehmen Sie bitte dieser Erklärung
            und/oder aber unserem Impressum. Im Fall des Widerrufs werden
            grundsätzlich alle personenbezogenen Daten, die im Zuge der
            Bewerbung von uns gespeichert wurden, von uns gelöscht, es sei denn,
            unsererseits steht dem ein berechtigtes Interesse entgegen, wie
            beispielsweise die Beweispflicht in einem gerichtlichen Verfahren.
          </p>
        </section>

        <section id="section-11" style={sectionStyle}>
          <h2>XI. Datenweitergabe an Dritte</h2>
          <p>
            Wir werden Ihre personenbezogenen Daten nicht an Dritte weitergeben,
            es sei denn, wir informieren Sie über eine Weitergabe. Unser
            IT-Dienstleister besitzt Zugriff auf unsere gespeicherten Daten, um
            Fehler zu beheben und uns zu ermöglichen, die geforderten technisch
            organisatorischen Maßnahmen durchzuführen. Rechtsgrundlage hierfür
            sind Artikel 6 Abs. 1 f DSGVO sowie Artikel 6 Abs. 1 b DSGVO. Unser
            IT-Dienstleister wurde von uns sorgfältig ausgewählt und schriftlich
            beauftragt. Er ist an unsere Weisungen gebunden und wird von uns
            regelmäßig kontrolliert. Der Dienstleister wird diese Daten nicht an
            Dritte weitergeben. Außer den in dieser Datenschutzerklärung
            erläuterten Fällen geben wir ohne die ausdrückliche Einwilligung des
            Nutzers Daten nur an Dritte weiter, wenn wir dazu durch Gesetz oder
            eine behördliche oder gerichtliche Anordnung verpflichtet werden.
            Die Erhebung und Speicherung dieser Daten ist für den Betrieb und
            die Wartung unserer gesamten IT zwingend erforderlich. Es besteht
            somit keine Widerspruchs- und/oder Beseitigungsmöglichkeit
          </p>
        </section>
        <section id="section-12" style={sectionStyle}>
          <h2>XII. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie z. B. Anfragen, die Sie an
            uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von http:// auf https:// wechselt und an
            dem Schlosssymbol in Ihrer Browserzeile. Wenn die SSL- bzw.
            TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
            übermitteln, grundsätzlich nicht von Dritten mitgelesen werden
          </p>
        </section>
      

      <section id="section-13" style={sectionStyle}>
        ¨<h2>XIII. Bestehen einer automatisierten Entscheidungsfindung</h2>
        <p>
          Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
          automatische Entscheidungsfindung oder ein Profiling.
        </p>
      </section>
      <section id="section-14" style={sectionStyle}>
        <h2>XIV. Rechte der betroffenen Person</h2>
        <p>
          Die Rechte der betroffenen Person sind uns ein besonderes Anliegen.
          Die Rechte der betroffenen Person sind eines der wichtigsten Elemente
          der gesetzlichen Vorgaben. Wir möchten die Rechte der betroffenen
          Person daher an dieser Stelle besonders hervorheben. Wir haben deshalb
          darauf verzichtet, die Rechte der betroffenen Person in den
          vorstehenden Hinweisen darzustellen. Nach unserer Auffassung sind die
          Rechte der betroffenen Person an dieser Stelle in einem gesonderten
          Gliederungspunkt darzulegen, um zu gewährleisten, dass die Rechte der
          betroffenen Person problemlos, jederzeit aufgefunden und nachgelesen
          werden können. Die Rechte der betroffenen Person ergeben sich explizit
          aus der Datenschutzgrundverordnung (DSGVO). Sie sind in den Artikeln
          12 bis 23 der Datenschutzgrundverordnung (DSGVO) geregelt. Im
          Einzelnen bestehen folgende Rechte der betroffenen Person: 
            1. Recht
          auf Auskunft (siehe auch Artikel 15 DSGVO) Jede betroffene Person hat
          das Recht, von uns, also dem Verantwortlichen, eine Bestätigung
          darüber zu verlangen, ob personenbezogene Daten, die die betroffene
          Person betreffen, von uns verarbeitet werden (sogenanntes Recht auf
          Bestätigung). Die Auskunft hat dabei unentgeltlich zu erfolgen. Liegt
          eine solche Verarbeitung vor, können Sie gem. Artikel 15 DSGVO von uns
          Auskunft über folgende Informatio verlangen: 
          <br />
            (1) die Verarbeitungszwecke; 
            <br />
          (2) die Kategorien personenbezogener Datn, die
          verarbeitet werden; 
          <br />
          (3) die Empfänger oder Kategorien von Empfängern,
          gegenüber denen die personenbezogen Daten offengelegt worden sind oder
          noch offengelegt werden, insbesondere bei Empfängern in Drittländern
          oder bei internationalen Organisationen; 
          <br />
          (4) falls möglich, die
          geplante Dauer, für die die personenbezogenen Daten gespeichert
          werden, oder, falls dies nicht möglich ist, die Kriterien für die
          Festlegung dieser Dauer; 
          <br />
          (5) das Bestehen eines Rechts auf
          Berichtigung oder Löschung der sie betreffenden personenbezogenen
          Daten oder auf Einschränkung der Verarbeitung durch den
          Verantwortlichen oder eines Widerspruchsrechts gegen diese
          Verarbeitung; 
            <br />
          (6) das Bestehen eines Beschwerderechts bei einer
          Aufsichtsbehörde; 
          <br />
          (7) wenn die personenbezogenen Daten nicht bei der
          betroffenen Person erhoben werden, alle verfügbaren Informationen über
          die Herkunft der Daten; 
          <br />
          (8) das Bestehen einer automatisierten
          Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs. 1
          u. 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige
          Informationen über die involvierte Logik sowie die Tragweite und die
          angestrebten Auswirkungen einer derartigen Verarbeitung für die
          betroffene Person. Darüber hinaus steht der betroffenen Person ein
          Auskunftsrechts darüber zu, ob personenbezogene Daten in ein Drittland
          oder an eine internationale Organisation übermittelt werden bzw.
          wurden. In diesem Zusammenhang kann die betroffene Person verlangen,
          über die geeigneten Garantien gem. Artikel 46 DSGVO im Zusammenhang
          mit der Übermittlung unterrichtet zu werden. Beabsichtigt eine
          betroffene Person, dieses Auskunftsrecht in Anspruch zu nehmen, kann
          sie sich hierzu jederzeit an unseren Datenschutzbeauftragten
          (Definition siehe IV. 2.) und/oder einen unserer anderen Mitarbeiter
          wenden. Die entsprechenden Kontaktdaten können Sie dieser Erklärung
          entnehmen und/oder unserem Impressum. 2. Recht auf Berichtigung (siehe
          auch Artikel 16 DSGVO) Jede betroffene Person hat das Recht, von uns,
          also dem Verantwortlichen, unverzüglich die Berichtigung und/oder
          Vervollständigung zu verlangen, sofern die verarbeiteten
          personenbezogenen Daten, die sie betreffen, unrichtig oder
          unvollständig sind. Sofern von uns die Berichtigung und/oder
          Vervollständigung verlangt wird, haben wir diese Berichtigung
          unverzüglich vorzunehmen. Beabsichtigt eine betroffene Person, diesen
          Berichtigungsanspruch bzw. Vervollständigungsanspruch geltend zu
          machen, kann sie sich hierzu jederzeit an unseren
          Datenschutzbeauftragten (Definition siehe IV. 2.) und/oder an einen
          anderen unserer Mitarbeiter wenden. Die entsprechenden Kontaktdaten
          entnehmen Sie bitte dieser Erklärung und/oder aber unserem Impressum.
          3. Recht auf Löschung („Recht auf Vergessenwerden“) (siehe auch
          Artikel 17 DSGVO) Jede betroffene Person hat das Recht, von uns, also
          dem Verantwortlichen, zu verlangen, dass die sie betreffenden
          personenbezogenen Daten unverzüglich gelöscht werden, wenn einer der
          folgenden Gründe zutrifft, soweit die Verarbeitung nicht erforderlich
          ist: 
          <br />
          (1) Die personenbezogenen Daten sind für die Zwecke, für die sie
          erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr
          notwendig. <br />
         (2) Die betroffene Person widerruft ihre Einwilligung, auf
          die sich die Verarbeitung gem. Artikel 6 Abs. 1 a oder Artikel 9 Abs.
          2 a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage
          für die Verarbeitung. <br />
         (3) Die betroffene Person legt gem. Artikel 21
          Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen
          keine vorrangigen berechtigten Gründe für die Verarbeitung vor oder
          die betroffene Person legt gem. Artikel 21 Abs. 2 DSGVO Widerspruch
          gegen die Verarbeitung ein. <br />
         (4) Die personenbezogenen Daten wurden
          unrechtmäßig verarbeitet. <br />
         (5) Die Löschung der personenbezogenen Daten
          ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht
          oder dem Recht der Mitgliedstaaten erforderlich, dem der
          Verantwortliche unterliegt. <br />
         (6) Die personenbezogene Daten wurden in
          Bezug auf angebotene Dienste der Informationsgesellschaft gem. Artikel
          8 Abs. 1 DSGVO erhoben. Haben wir, also der Verantwortliche, die
          personenbezogenen Daten öffentlich gemacht und sind wir gem. Artikel
          17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so treffen wir unter
          Berücksichtigung der verfügbaren Technologie und der
          Implementierungskosten angemessene Maßnahmen, auch technischer Art, um
          für die Datenverarbeitung Verantwortliche, die die personenbezogenen
          Daten verarbeiten, darüber zu informieren, dass eine betroffene Person
          von ihnen die Löschung aller Links zu diesen personenbezogenen Daten
          oder von Kopien oder Replikationen dieser personenbezogenen Daten
          verlangt hat. Das Recht auf Löschung besteht allerdings dann nicht,
          soweit die Verarbeitung erforderlich ist  <br />
         (1) zur Ausübung des Rechts
          auf freie Meinungsäußerung und Information; (2) zur Erfüllung einer
          rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der
          Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt,
          erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen
          Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem
          Verantwortlichen übertragen wurde; (3) aus Gründen des öffentlichen
          Interesses im Bereich der öffentlichen Gesundheit gem. Artikel 9 Abs.
          2 a und i DSGVO sowie Artikel 9 Abs. 3 DSGVO; (4) für im öffentlichen
          Interesse liegende Archivzwecke, wissenschaftliche oder historische
          Forschungszwecke oder für statistische Zwecke gem. Artikel 89 Abs. 1
          DSGVO, soweit das in Artikel 17 Abs. 1 DSGVO genannte Recht (Recht auf
          Löschung) voraussichtlich die Verwirklichung der Ziele dieser
          Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder (5)
          zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          Beabsichtigt eine betroffene Person dieses Recht auf Löschung in
          Anspruch zu nehmen, kann sie sich hierzu jederzeit an unseren
          Datenschutzbeauftragten (siehe IV. 2.) und/oder einen anderen unserer
          Mitarbeiter wenden. Die entsprechenden Kontaktdaten entnehmen Sie
          bitte dieser Erklärung und/oder aber unserem Impressum. 4. Recht auf
          Einschränkung der Verarbeitung (siehe auch Artikel 18 DSGVO) Jede
          betroffene Person hat das Recht, von uns, also dem Verantwortlichen,
          die Einschränkung der Verarbeitung zu verlangen, wenn eine der
          folgenden Voraussetzungen gegeben ist: (1) die Richtigkeit der
          personenbezogenen Daten von der betroffenen Person bestritten wird und
          zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die
          Richtigkeit der personenbezogenen Daten zu überprüfen; (2) die
          Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung
          der personenbezogenen Daten ablehnt und stattdessen die Einschränkung
          der Nutzung der personenbezogenen Daten verlangt; (3) der
          Verantwortliche die personenbezogenen Daten für die Zwecke der
          Verarbeitung nicht länger benötigt, die betroffene Person sie jedoch
          zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          benötigt oder (4) die betroffene Person Widerspruch gegen die
          Verarbeitung gem. Artikel 21 Abs. 1 DSGVO eingelegt hat, solange noch
          nicht feststeht, ob die berechtigten Gründe des Verantwortlichen
          gegenüber denen der betroffenen Person überwiegen. Wurde die
          Verarbeitung der Sie betreffenden personenbezogenen Daten
          eingeschränkt, so dürfen diese personenbezogenen Daten – von ihrer
          Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder
          zum Schutz der Rechte einer anderen natürlichen oder juristischen
          Person oder aus Gründen eines wichtigen öffentlichen Interesses der
          Union oder eines Mitgliedstaats verarbeitet werden. Wurde die
          Einschränkung der Verarbeitung nach den o. g. Voraussetzungen
          eingeschränkt, werden Sie von uns unterrichtet, bevor die
          Einschränkung aufgehoben wird. Wenn eine der vorstehend genannten
          Voraussetzungen gegeben ist und eine betroffene Person die
          Einschränkung von personenbezogenen Daten, die bei uns gespeichert
          sind, verlangen möchte, so kann die betroffene Person sich hierzu
          jederzeit an unseren Datenschutzbeauftragten (siehe IV. 2.) und/oder
          einen unserer anderen Mitarbeiter wenden. Die entsprechenden
          Kontaktdaten entnehmen Sie bitte dieser Erklärung und/oder aber
          unserem Impressum. 5. Recht auf Unterrichtung (siehe auch Artikel 19
          DSGVO) Haben Sie das Recht auf Berichtigung, Löschung oder
          Einschränkung der Verarbeitung gegenüber uns, also dem
          Verantwortlichen, geltend gemacht, so sind wir verpflichtet, allen
          Empfängern, denen die Sie betreffenden personenbezogenen Daten
          offengelegt wurden, diese Berichtigung oder Löschung der Daten oder
          Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist
          sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand
          verbunden. Ihnen steht uns gegenüber daher das Recht zu, über diese
          Empfänger unterrichtet zu werden. Sofern Sie von diesem Recht auf
          Unterrichtung Gebrauch machen wollen, so können Sie sich jederzeit an
          unseren Datenschutzbeauftragten (siehe IV. 2) und/oder einen anderen
          unserer Mitarbeiter wenden. Die Kontaktdaten entnehmen Sie bitte
          dieser Erklärung und/oder aber unserem Impressum. 6. Recht auf
          Datenübertragbarkeit (siehe auch Artikel 20 DSGVO) Jede betroffene
          Person hat das Recht, die sie betreffenden personenbezogenen Daten,
          die sie dem Verantwortlichen, also uns, bereitgestellt hat, in einem
          strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
          Außerdem hat jede betroffene Person das Recht, diese Daten einem
          anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen,
          dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
          sofern (1) die Verarbeitung auf einer Einwilligung gem. Artikel 6 Abs.
          1 a DSGVO oder Artikel 9 Abs. 2 a DSGVO oder auf einem Vertrag gem.
          Artikel 6 Abs. 1 b DSGVO beruht und (2) die Verarbeitung mit Hilfe
          automatisierter Verfahren erfolgt. In Ausübung dieses Rechts hat die
          betroffene Person zudem das Recht, zu bewirken, dass die sie
          betreffenden personenbezogenen Daten direkt von einem Verantwortlichen
          einem anderen Verantwortlichen übermittelt werden, soweit dies
          technisch machbar ist. Voraussetzung dafür ist allerdings, dass
          Freiheiten und Rechte anderer Personen dadurch nicht beeinträchtigt
          werden. Dieses Recht auf Datenübertragbarkeit gilt allerdings nicht
          für eine Verarbeitung personenbezogener Daten, die für die Wahrnehmung
          einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt
          oder in Ausübung öffentlicher Gewalt erfolgt, die dem
          Verantwortlichen, also uns, übertragen wurde. Wenn eine betroffene
          Person beabsichtigt, dieses Recht auf Datenübertragbarkeit geltend zu
          machen, so kann sie sich hierzu jederzeit an unseren
          Datenschutzbeauftragten (siehe IV. 2.) und/oder einen anderen unserer
          Mitarbeiter wenden. Die entsprechenden Kontaktdaten entnehmen Sie
          bitte dieser Erklärung und/oder aber unserem Impressum. 7.
          Widerspruchsrecht (siehe auch Artikel 21 DSGVO) Jede betroffene Person
          hat das Recht, aus Gründen, die sich aus ihrer besonderen Situation
          ergeben, jederzeit gegen die Verarbeitung sie betreffender
          personenbezogener Daten, die aufgrund von Artikel 6 Abs. 1 e oder f
          DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
          diese Bestimmungen gestütztes Profiling. Wir, als der Verantwortliche,
          verarbeiten die personenbezogenen Daten nicht mehr, es sei denn, wir
          können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
          die die Interessen, Rechte und Freiheiten der betroffenen Person
          überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen. Werden die personenbezogenen
          Daten verarbeitet, um direkt Werbung zu betreiben, hat jede betroffene
          Person das Recht, jederzeit Widerspruch gegen die Verarbeitung sie
          betreffender personenbezogener Daten zum Zwecke derartiger Werbung
          einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
          Direktwerbung in Verbindung steht. Widerspricht die betroffene Person
          der Verarbeitung für Zwecke der Direktwerbung, so werden die
          personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
          Ferner hat die betroffene Person das Recht, aus Gründen, die sich aus
          ihrer besonderen Situation ergeben, gegen die sie betreffende
          Verarbeitung sie betreffender personenbezogener Daten, die zu
          wissenschaftlichen oder historischen Forschungszwecken oder zu
          statistischen Zwecken gem. Artikel 89 Abs. 1 DSGVO erfolgt,
          Widerspruch einzulegen, es sei denn die Verarbeitung ist zur Erfüllung
          einer im öffentlichen Interesse liegenden Aufgabe erforderlich. Jede
          betroffene Person hat dabei die Möglichkeit, im Zusammenhang mit der
          Nutzung von Diensten der Informationsgesellschaft – ungeachtet der
          Richtlinie 2002/58/EG – ihr Widerspruchsrecht mittels automatisierter
          Verfahren auszuüben, bei denen technische Spezifikationen verwendet
          werden. Zur Ausübung des Rechts auf Widerspruch kann sich die
          betroffene Person natürlich auch direkt an unseren
          Datenschutzbeauftragten (siehe IV. 2) oder einen anderen unserer
          Mitarbeiter wenden. Die entsprechenden Kontaktdaten entnehmen Sie
          bitte dieser Erklärung und/oder aber unserem Impressum. 8. Recht auf
          Widerruf der datenrechtlichen Einwilligungserklärung (siehe auch
          Artikel 21 DSGVO) Jede betroffene Person hat das Recht, ihre
          datenschutzrechtliche Einwilligung jederzeit zu widerrufen. Durch den
          Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
          Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
          Zur Ausübung dieses Rechts kann sich die betroffene Person jederzeit
          direkt an unseren Datenschutzbeauftragten (siehe IV. 2.) und/oder
          einen anderen unserer Mitarbeiter wenden. Die entsprechenden
          Kontaktdaten entnehmen Sie bitte dieser Erklärung und/oder aber
          unserem Impressum. 9. Automatisierte Entscheidungen im Einzelfall
          einschließlich Profiling (siehe auch Artikel 22 DSGVO) Jede betroffene
          Person hat das Recht, nicht einer ausschließlich auf einer
          automatisierten Verarbeitung – einschließlich Profiling – beruhenden
          Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche
          Wirkung entfaltet oder sie in ähnlicher Weise erheblich
          beeinträchtigt. Dies gilt nicht, wenn die Entscheidung (1) für den
          Abschluss oder die Erfüllung eines Vertrages zwischen der betroffenen
          Person und dem Verantwortlichen erforderlich ist, (2) aufgrund von
          Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
          Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften
          angemessene Maßnahmen zur Wahrung ihrer Rechte und Freiheiten sowie
          ihrer berechtigten Interessen enthalten oder (3) mit ihrer
          ausdrücklichen Einwilligung erfolgt. Allerdings dürfen diese
          Entscheidungen nicht auf besonderen Kategorien personenbezogener Daten
          nach Artikel 9 Abs. 1 DSGVO beruhen, sofern nicht Artikel 9 Abs. 2 a
          oder b DSGVO gilt und angemessene Maßnahmen zum Schutz der Rechte und
          Freiheiten sowie ihrer berechtigten Interessen getroffen wurden.
          Hinsichtlich der in (1) und (3) genannten Fälle treffen wir, also der
          Verantwortliche, angemessene Maßnahmen, um die Rechte und Freiheiten
          sowie die berechtigten Interessen der betroffenen Person zu wahren,
          wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person
          seitens des Verantwortlichen, also von uns, auf Darlegung des eigenen
          Standpunkts und auf Anfechtung der Entscheidung gehört. 10. Recht auf
          Beschwerde bei einer Aufsichtsbehörde (siehe auch Artikel 51 ff.
          DSGVO) Unbeschadet anderer Rechte und/oder Rechtsbehelfe, steht jeder
          betroffenen Person im Falle datenschutzrechtlicher Verstöße ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Die
          zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
          Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
          Unternehmen seinen Sitz hat, also der Landesdatenschutzbeauftragte von
          Niedersachsen. Der Landesdatenschutzbeauftragte für den Datenschutz
          Niedersachsen ist wie folgt zu erreichen: Prinzenstraße 5, 30159
          Hannover Telefon: +49(0)511-1204500 Telefax: +49(0)511-1204599. Die
          vorstehende Aufsichtsbehörde, bei der eine Beschwerde eingereicht
          wird, unterrichtet im Übrigen den Beschwerdeführer über den Stand und
          die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines
          gerichtlichen Rechtsbehelfs nach Artikel 78 DSGVO.
        </p>
      </section>
      <section id="section-15" style={sectionStyle}>
        <h2>XV. Änderung unserer Datenschutzerklärung</h2>
        <p>
          Um zu gewährleisten, dass unsere Datenschutzerklärung stets den
          aktuellen gesetzlichen Vorgaben entspricht, behalten wir uns jederzeit
          Änderungen vor. Das gilt auch für den Fall, dass die
          Datenschutzerklärung aufgrund neuer oder überarbeiteter Leistungen
          angepasst werden muss. Die neue Datenschutzerklärung greift dann bei
          Ihrem nächsten Besuch auf unserer Homepage.
        </p>
      </section>

      <footer
        style={{
          marginTop: "50px",
          borderTop: "1px solid #ccc",
          paddingTop: "20px",
        }}
      >
        <p>
          <em>Stand der Datenschutzerklärung: September 2026</em>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
