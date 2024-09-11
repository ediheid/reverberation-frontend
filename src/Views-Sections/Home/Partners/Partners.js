import React from "react";

import styles from "../Partners/partners.module.scss";

import artourette from "../Partners/Static/artourette.png";
import bytefm from "../Partners/Static/bytefm.png";
import dresdenerMagazin from "../Partners/Static/dresdner-kulturmagazin.png";
import kawa from "../Partners/Static/kawa.png";
import loessnitzpils from "../Partners/Static/loessnitzpils.png";
import rauze from "../Partners/Static/rauze.png";
import saechsischeKulturstiftung from "../Partners/Static/saechsische-Kulturstiftung.png";
import sachsen from "../Partners/Static/sachsen.png";
import sharewood from "../Partners/Static/sharewood.png";

const Partners = () => {
  const logos = [
    { logo: artourette, alt: "Artourette logo", id: 1 },
    { logo: bytefm, alt: "Bytefm logo", id: 3 },
    {
      logo: dresdenerMagazin,
      alt: "Dresdener Magazin logo",
      id: 5,
    },
    {
      logo: kawa,
      alt: "Kawa logo",
      id: 7,
    },
    {
      logo: loessnitzpils,
      alt: "Loessnitz pils logo",
      id: 8,
    },
    {
      logo: rauze,
      alt: "Rauze logo",
      id: 10,
    },
    {
      logo: saechsischeKulturstiftung,
      alt: "Saechsische Kulturstiftung logo",
      id: 12,
    },
    {
      logo: sachsen,
      alt: "Saechsische Kulturstiftung logo",
      id: 13,
    },

    {
      logo: sharewood,
      alt: "Sharewood logo",
      id: 11,
    },
  ];

  return (
    <div className={styles["partners-container"]}>
      <h2 className={styles["section-heading"]}>Partners</h2>
      <div className={styles["content-container"]}>
        {logos.map((logo) => {
          return (
            <img
              className={styles["logo-container"]}
              src={logo.logo}
              alt={logo.alt}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
