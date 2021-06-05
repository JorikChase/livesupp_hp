import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import "./References.css";

export type ReferencesProps = {};

/*
App > Routes/Index > References > Carousel
*/

export default function References() {
  return (
    <section className="references">
      <div className="references_div">
        <img src="/images/section-images/references-bondster.png" alt="" />
        <div>
          <p>
            "Zavedení sdílení webových stránek s klienty nám přineslo zrychlení
            a zkvalitnění služeb pro naše klienty. Klient už nám nemusí dlouze
            popisovat, co má za problém, jednoduše se připojíme na jeho
            obrazovku, můžeme problém vyřešit a navést klienta s ukázkou
            funkcionality. Nové funkce si chválí i naši klienti."
          </p>
          <p>- Filip Čermák, COO, BONDSTER Marketplace s.r.o.</p>
        </div>
      </div>
    </section>
  );
}
