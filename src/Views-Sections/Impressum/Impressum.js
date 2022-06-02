import React from "react";

import styles from "../Impressum/impressum.module.scss";

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

        <span className={styles["spans"]}>
          Festival posters (excluding 2021) and artworks:
          <a
            className={styles["anchor-tags"]}
            href="https://artourette.com/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to artist website"
          >
            {" "}
            Artourette
          </a>
        </span>

        <span className={styles["spans"]}>
          Gallery event photography:
          <a
            className={styles["anchor-tags"]}
            href="https://instagram.com/annieanback?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to artist website"
          >
            {" "}
            Aneta Navrátilová
          </a>
        </span>

        <span className={styles["spans"]}>Line-up Fotos: Bands</span>

        <span className={styles["spans"]}>
          Web design & web development:
          <a
            className={styles["anchor-tags"]}
            href="https://www.edithsdev.com/"
            target="_blank"
            rel="noreferrer noopener"
            alt="Link to designer/developer website"
          >
            {" "}
            Edith Heidmann
          </a>
        </span>

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
        
      </div>
    </div>
  );
};

export default Impressum;
