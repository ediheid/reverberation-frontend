import React from "react";

import styles from "../Impressum/impressum.module.scss";

// !
// Todo - style Impressum page and Link to footer
const Impressum = () => {
  return (
    <div className={styles["impressum-page-container"]}>
      <div className={styles["content-container"]}>
        <h4 className={styles["main-headings"]}>Impressum</h4>
        <h2 className={styles["company-name-heading"]}>
          Reverberation Festival
        </h2>
        <span className={styles["spans"]}>
          Dresden Psych Family e.V. Sternstraße 35 01139 Dresden
        </span>

        <span className={styles["spans"]}>
          {" "}
          Planung: Dresden Psych Family e.V.
        </span>

        <span className={styles["spans"]}>Fotos: Bands</span>

        <h3 className={styles["sub-headings"]}>Kontakt:</h3>

        <span className={styles["spans"]}>
          Mobil:
          <a
            className={styles["anchor-tags"]}
            href="tel:+49-1520-442-3612"
            alt="Click to call"
          >
            {" "}
            +49 1520 442 3612{" "}
          </a>
        </span>

        <span className={styles["spans"]}>
          E-mail:
          <a
            className={styles["anchor-tags"]}
            href="mailto:booking@reverberationfest.de"
            alt="Email link to bookings"
          >
            {" "}
            booking@reverberationfest.de
          </a>
        </span>

        <span className={styles["spans"]}>
          Web design & web development:
          <a
            className={styles["anchor-tags"]}
            href="https://www.edithsdev.com/home/contact"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to Edith Heidmann's contact page"
          >
            {" "}
            Edith Heidmann
          </a>
        </span>

        <h4 className={styles["main-headings"]}>Haftungsausschluss</h4>
        <span className={styles["spans"]}>Inhalt des Onlineangebotes</span>
        <p className={styles["paragraphs"]}>
          Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit,
          Vollständigkeit oder Qualität der bereitgestellten Informationen.
          Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller
          oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
          der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
          unvollständiger Informationen verursacht wurden, sind grundsätzlich
          ausgeschlossen, sofern seitens des Autors kein nachweislich
          vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
        </p>
        <p className={styles["paragraphs"]}>
          Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es
          sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
          gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
          Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
        <h5 className={styles["sub-headings"]}>2. Verweise und Links</h5>
        <p className={styles["paragraphs"]}>
          Bei direkten oder indirekten Verweisen auf fremde Webseiten
          („Hyperlinks“), die außerhalb des Verantwortungsbereiches des Autors
          liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in
          Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es
          ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
          rechtswidriger Inhalte zu verhindern.
        </p>
        <p className={styles["paragraphs"]}>
          Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
          Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
          erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
          Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat
          der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit
          ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten,
          die nach der Linksetzung verändert wurden. Diese Feststellung gilt für
          alle innerhalb des eigenen Internetangebotes gesetzten Links und
          Verweise sowie für Fremdeinträge in vom Autor eingerichteten
          Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und
          in allen anderen Formen von Datenbanken, auf deren Inhalt externe
          Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder
          unvollständige Inhalte und insbesondere für Schäden, die aus der
          Nutzung oder Nichtnutzung solcherart dargebotener Informationen
          entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen
          wurde, nicht derjenige, der über Links auf die jeweilige
          Veröffentlichung lediglich verweist.
        </p>
        <h5 className={styles["sub-headings"]}>
          3. Urheber- und Kennzeichenrecht
        </h5>
        <p className={styles["paragraphs"]}>
          Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
          verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte
          zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente,
          Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
          Tondokumente, Videosequenzen und Texte zurückzugreifen.
        </p>
        <p className={styles["paragraphs"]}>
          Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
          geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
          Bestimmungen des jeweils gültigen Kennzeichenrechts und den
          Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund
          der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen
          nicht durch Rechte Dritter geschützt sind!
        </p>
        <p className={styles["paragraphs"]}>
          Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
          bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
          Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in
          anderen elektronischen oder gedruckten Publikationen ist ohne
          ausdrückliche Zustimmung des Autors nicht gestattet.
        </p>
        <h5 className={styles["sub-headings"]}>
          4. Rechtswirksamkeit dieses Haftungsausschlusses
        </h5>
        <p className={styles["paragraphs"]}>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
          betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile
          oder einzelne Formulierungen dieses Textes der geltenden Rechtslage
          nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben
          die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
          davon unberührt.
        </p>
        <h4 className={styles["main-headings"]}>Datenschutzhinweis</h4>
        <p className={styles["paragraphs"]}>
          Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
          persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
          Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
          des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme
          und Bezahlung aller angebotenen Dienste ist – soweit technisch möglich
          und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe
          anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der
          im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten
          Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie
          Emailadressen durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderten Informationen ist nicht gestattet. Rechtliche Schritte
          gegen die Versender von sogenannten Spam-Mails bei Verstössen gegen
          dieses Verbot sind ausdrücklich vorbehalten. Datenschutzerklärung für
          die Nutzung von Facebook-Plugins (Like-Button) Auf unseren Seiten sind
          Plugins des sozialen Netzwerks Facebook, 1601 South California Avenue,
          Palo Alto, CA 94304, USA integriert. Die Facebook-Plugins erkennen Sie
          an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf
          unserer Seite.
          <span className={styles["spans"]}>
            Eine Übersicht über die Facebook-Plugins finden Sie hier:
            <a
              className={styles["anchor-tags"]}
              href="http://developers.facebook.com/docs/plugins/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Facebook plugins"
            >
              {" "}
              http://developers.facebook.com/docs/plugins/
            </a>
          </span>
          . Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte
          Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt.
          Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse
          unsere Seite besucht haben. Wenn Sie den Facebook „Like-Button“
          anklicken während Sie in Ihrem Facebook-Account eingeloggt sind,
          können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil
          verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem
          Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter
          der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie
          deren Nutzung durch Facebook erhalten.
          <span className={styles["spans"]}>
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von facebook unter:
            <a
              className={styles["anchor-tags"]}
              href="http://de-de.facebook.com/policy.php"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Facebook privacy policy"
            >
              {" "}
              http://de-de.facebook.com/policy.php
            </a>
          </span>
          Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem
          Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem
          Facebook-Benutzerkonto aus. Datenschutzerklärung für die Nutzung von
          Google Analytics Diese Website benutzt Google Analytics, einen
          Webanalysedienst der Google Inc. („Google“). Google Analytics
          verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer
          gespeichert werden und die eine Analyse der Benutzung der Website
          durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen
          über Ihre Benutzung dieser Website werden in der Regel an einen Server
          von Google in den USA übertragen und dort gespeichert. Im Falle der
          Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre
          IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der
          Europäischen Union oder in anderen Vertragsstaaten des Abkommens über
          den Europäischen Wirtschaftsraum zuvor gekürzt.
        </p>
        <p className={styles["paragraphs"]}>
          Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
          Google in den USA übertragen und dort gekürzt. Im Auftrag des
          Betreibers dieser Website wird Google diese Informationen benutzen, um
          Ihre Nutzung der Website auszuwerten, um Reports über die
          Websiteaktivitäten zusammenzustellen und um weitere mit der
          Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
          Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
          anderen Daten von Google zusammengeführt. Sie können die Speicherung
          der Cookies durch eine entsprechende Einstellung Ihrer
          Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass
          Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
          Website vollumfänglich werden nutzen können. Sie können darüber hinaus
          die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der
          Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
          Verarbeitung dieser Daten durch Google verhindern, indem sie das unter
          dem folgenden Link verfügbare Browser-Plugin herunterladen und
          installieren:
          <a
            className={styles["anchor-tags"]}
            href="http://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            alt="Link to Google tools"
          >
            {" "}
            http://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          . Datenschutzerklärung für die Nutzung von Google +1 – Google wird
          betrieben von Google inc. 1600 Amphitheatre Parkway. Mountain View, CA
          94043, USA – wenn eine Seite mit Google+ Plugin aufgerufen wird, wird
          eine Verbindung zu den Google-Servern hergestellt und es werden Daten
          an diese übermittelt – im eingeloggten Zustand ist eine unmittelbare
          Zuordnung der Daten zum Google+ Profil möglich – das Ausloggen bei
          Google+ verhindert die Zuordnung der Daten zum Google+ Profil –
          <span className={styles["spans"]}>
            Die Datenschutzhinweise von Google finden Sie unter
            <a
              className={styles["anchor-tags"]}
              href="  http://www.google.com/intl/de/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Google privacy policy"
            >
              {" "}
              http://www.google.com/intl/de/policies/privacy/
            </a>
          </span>
          Erfassung und Weitergabe von Informationen: Mithilfe der Google
          +1-Schaltfläche können Sie Informationen weltweit veröffentlichen.
          über die Google +1-Schaltfläche erhalten Sie und andere Nutzer
          personalisierte Inhalte von Google und unseren Partnern. Google
          speichert sowohl die Information, dass Sie für einen Inhalt +1 gegeben
          haben, als auch Informationen über die Seite, die Sie beim Klicken auf
          +1 angesehen haben. Ihre +1 können als Hinweise zusammen mit Ihrem
          Profilnamen und Ihrem Foto in Google-Diensten, wie etwa in
          Suchergebnissen oder in Ihrem Google-Profil, oder an anderen Stellen
          auf Websites und Anzeigen im Internet eingeblendet werden. Google
          zeichnet Informationen über Ihre +1-Aktivitäten auf, um die
          Google-Dienste für Sie und andere zu verbessern. Um die Google
          +1-Schaltfläche verwenden zu können, benötigen Sie ein weltweit
          sichtbares, öffentliches Google-Profil, das zumindest den für das
          Profil gewählten Namen enthalten muss. Dieser Name wird in allen
          Google-Diensten verwendet. In manchen Fällen kann dieser Name auch
          einen anderen Namen ersetzen, den Sie beim Teilen von Inhalten über
          Ihr Google-Konto verwendet haben. Die Identität Ihres Google-Profils
          kann Nutzern angezeigt werden, die Ihre E-Mail-Adresse kennen oder
          über andere identifizierende Informationen von Ihnen verfügen.
          Verwendung der erfassten Informationen: Neben den oben erläuterten
          Verwendungszwecken werden die von Ihnen bereitgestellten Informationen
          gemäß den geltenden Google-Datenschutzbestimmungen genutzt. Google
          veröffentlicht möglicherweise zusammengefasste Statistiken über die
          +1-Aktivitäten der Nutzer bzw. gibt diese an Nutzer und Partner
          weiter, wie etwa Publisher, Inserenten oder verbundene Websites.
          Datenschutzerklärung für die Nutzung von Instagram Auf unseren Seiten
          sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen
          werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo
          Park, CA, 94025, USA integriert. Wenn Sie in Ihrem Instagram – Account
          eingeloggt sind können Sie durch Anklicken des Instagram – Buttons die
          Inhalte unserer Seiten mit Ihrem Instagram – Profil verlinken. Dadurch
          kann Instagram den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
          Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
          vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram
          erhalten.
          <span className={styles["spans"]}>
            Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
            von Instagram:
            <a
              className={styles["anchor-tags"]}
              href="http://instagram.com/about/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Instagram privacy policy"
            >
              {" "}
              http://instagram.com/about/legal/privacy/
            </a>
          </span>
          <span className={styles["spans"]}>
            Quellverweis:
            <a
              className={styles["anchor-tags"]}
              href="https://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              alt="Link to Quellverweis"
            >
              {" "}
              https://www.e-recht24.de
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Impressum;
