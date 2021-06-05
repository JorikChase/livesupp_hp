import React from "react";
import PercentageCircles from "../Circle/PercentageCircles";
import ButtonLink from "../Button/ButtonLink";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Carousel from "../Carousel/Carousel";

import "./Index.css";
import "./Index_responsive.css";
import References from "../References/References";
const openPilotForm = () => {
  const setOpen = ((window as unknown) as typeof window & {
    setActionMenuActive: ((isActive: boolean) => void) | undefined;
  }).setActionMenuActive;
  if (setOpen) {
    setOpen(true);
  } else {
    alert("Pilot form není k dispozici");
  }
};

export default function Index() {
  return (
    <>
      <section className="toplook">
        <div className="toplook_column">
          <h1>Odbavujte zákazníky jedním klikem v reálném čase.</h1>
          <p>
            LiveSupp je multifunkční platforma pro vzdálený prodej a zákaznickou
            péči.
          </p>
          <Button className="ButtonLink__primary_top" onClick={openPilotForm}>
            Ukázka a pilot zdarma
          </Button>
        </div>
        <img src="/images/toplook-image.png" alt="ukazka UI na telefonu a pc" />
      </section>
      <section className="circles">
        <ul className="circlesUL">
          <li>
            <PercentageCircles percentage={200} color="#40b1ba" /> Až 2x více
            konverzí z webu a volání.
          </li>
          <li>
            <PercentageCircles percentage={300} delay={200} color="#40b1ba" />{" "}
            Až 3x efektivnější než text chaty a chatboti.
          </li>
          <li>
            <PercentageCircles percentage={140} delay={400} color="#40b1ba" />{" "}
            Až 40% zvýšení hodnoty objednávek.
          </li>
          <li>
            <PercentageCircles percentage={160} delay={600} color="#40b1ba" />{" "}
            Až 60% zefektivnění práce zaměstnanců.
          </li>
          <li>
            <PercentageCircles percentage={190} delay={800} color="#40b1ba" />{" "}
            Až 90% urychlení obchodních procesů.
          </li>
        </ul>
      </section>
      <section className="communication">
        <div className="communication_text">
          <h1>Komunikace</h1>
          <ul className="communicationUL">
            <li>
              Hlasové a video hovory zdarma přes internet, textový chat,
              nahrávky.
            </li>
            <li>
              Jedním klikem bez jakékoli instalace, registrace nebo
              přihlašování.
            </li>
            <li>
              Nejen sdílení obrazu (screen sharing), ale společné ovládání
              webových stránek a dokumentů (cobrowsing).
            </li>
          </ul>
        </div>
        <ButtonLink className="communication_cta" type="primary" href="XXX">
          Ukázka a pilot zdarma
        </ButtonLink>
        <img
          className="communication_image"
          src="/images/section-images/communication-phone.png"
          alt="Phone interface example"
        />
      </section>
      <Carousel
        className="Carousel_conversion"
        id="boxes"
        slides={[
          <Box
            text="Maximalizace konverzí z webových stránek, telefonní komunikace a reklamních kampaní."
            img="../images/section-images/conversion.svg"
          />,
          <Box
            text="Prezentace nabídky přímo na displeji telefonu nebo jiného zařízení."
            img="../images/section-images/phone.svg"
          />,
          <Box
            text="Společné vyplnění objednávky zakončené online platbou nebo elektronickým podpisem dokumentů."
            img="../images/section-images/messaging.svg"
          />
        ]}
      />
      <section className="effectivity">
        <img
          src="/images/effectivity-image.png"
          className="effectivity_img"
          alt="obrazek efektivita"
        />
        <Carousel
          className="Carousel_references"
          id="effektivity"
          slides={[
            <div className="Carousel_references_slide">
              Zvýšení efektivity zaměstnanců a snížení ceny za jednu interakci
              se zákazníkem.
            </div>,
            <div className="Carousel_references_slide">
              Zaměstnanci mohou pracovat odkudkoli s kontrolou v reálném čase.
            </div>,
            <div className="Carousel_references_slide">
              Transformace obchodních procesů a přizpůsobení individuálním
              potřebám.
            </div>
          ]}
        />
      </section>
      <section className="happiness">
        <div className="happiness_text">
          <h1>Spokojenost</h1>
          <ul className="happinessUL">
            <li>
              Nahrazuje fyzické setkání a podporuje pozitivní vnímání
              společnosti.
            </li>
            <li>Budování důvěry a vztahu se zákazníkem.</li>
            <li>
              Zvýšení spokojenosti zákazníků díky nejrychlejší osobní asistenci.
            </li>
          </ul>
        </div>
        <ButtonLink className="happiness_cta" type="primary" href="XXX">
          Ukázka a pilot zdarma
        </ButtonLink>
        <img
          className="happiness_image"
          src="/images/section-images/happiness-phone.png"
          alt="Phone interface example"
        />
      </section>
      <section className="statistics">
        <img
          src="/images/section-images/stat.png"
          className="stat_img"
          alt="obrazek statiskiky"
        />
        <Carousel
          className="Carousel_references"
          id="stat"
          slides={[
            <div className="Carousel_references_slide">
              Sledování výsledků a jejich vyhodnocování pro rozvoj webu a
              obchodních procesů.
            </div>,
            <div className="Carousel_references_slide">
              Historie všech akcí, archivace nahrávek a hodnocení po spojení.
            </div>,
            <div className="Carousel_references_slide">
              Analýza výsledků a výkonnosti operátorů.
            </div>
          ]}
        />
      </section>
      <section className="programming">
        <div>
          {" "}
          <img src="../images/section-images/lock.svg" alt="" />{" "}
          <p>
            Využíváme WebRTC protokoly v prohlížeči (podpora 93%) pro bezpečné a
            šifrované peer-to-peer spojení.
          </p>{" "}
        </div>
        <div>
          {" "}
          <img src="../images/section-images/webrtc.svg" alt="" />{" "}
          <p>
            Využíváme WebRTC protokoly v prohlížeči (podpora 93%) pro bezpečné a
            šifrované peer-to-peer spojení.
          </p>{" "}
        </div>
        <div>
          {" "}
          <img src="../images/section-images/CRM.svg" alt="" />{" "}
          <p>
            Možnost napojení přes API do aktuálně používaných systémů (chatbot,
            CRM, rezervační systém apod.).
          </p>{" "}
        </div>
      </section>

      <section className="references">
        <div className="clients_items">
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/bm.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/c.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/me.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/nt.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/zfp.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/ca.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/ced.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/cpz.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/de.png" alt="Bondster" title="Bondster" />
          </a>
        </div>
        <References />
      </section>
      <ButtonLink type="primary_bottom" href="XXX" className="primary_bottom">
        Ukázka a pilot zdarma
      </ButtonLink>
    </>
  );
}
