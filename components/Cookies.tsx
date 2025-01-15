import Policies from "./Policies";

const Cookies = () => {
  return (
    <>
      <Policies>
        <h1>Küpsiste kasutamine</h1>
        <h3>MIS ON KÜPSISED?</h3>
        <p>
          Küpsis on väike tekstifail, mille veebileht salvestab teie arvutisse
          või mobiiliseadmesse, kui külastate veebisaiti. See võimaldab
          veebisaidil meelde jätta teie tegevused ja eelistused (näiteks
          kasutajanimi, keel, fondi suurus ja muud kuvamise eelistused) teatud
          aja jooksul. Tänu sellele ei pea te neid iga kord uuesti sisestama,
          kui naasete saidile või sirvite erinevaid lehekülgi.
        </p>
        <h3>KUIDAS ME KÜPSISEID KASUTAME?</h3>
        <p>
          Me kasutame <strong>seansiküpsiseid</strong>, mis kustutatakse
          automaatselt pärast igat külastust. Nende abil kogume järgmisi
          andmeid: kasutaja sessiooni ID, kaasturustaja ID, koolitech.ee
          kasutajatunnus ja parool krüpteeritud kujul (kui brauseris on määratud
          nende meelde jätmine), viimati külastatud KooliTech domeeni all oleva
          lehe asukoht.
        </p>
        <h3>KUIDAS KÜPSISEID KONTROLLIDA?</h3>
        <p>
          Teil on võimalik küpsiseid kontrollida ja/või kustutada vastavalt oma
          soovile. Saate kustutada kõik küpsised, mis juba on teie seadmes, ning
          enamikke brausereid saate seadistada nii, et küpsiste paigaldamine
          oleks tõkestatud. Sellisel juhul peate aga tõenäoliselt kohandama
          teatavaid eelistusi käsitsi iga kord, kui saiti külastate. Küpsiste
          keelamisel ei pruugi kõik veebilehe funktsioonid täielikult toimida.
        </p>
        <p>
          Täpsemad juhised küpsiste keelamiseks erinevatel veebibrauseritel:
        </p>
        <ul>
          <li>
            Google Chrome (
            <a
              className="text-blue-500"
              href="https://support.google.com/accounts/answer/61416?hl=en"
            >
              https://support.google.com/accounts/answer/61416?hl=en
            </a>
            )
          </li>
          <li>
            Mozilla Firefox (
            <a
              className="text-blue-500"
              href="https://support.mozilla.org/et/kb/enable-and-disable-cookies-website-preferences"
            >
              https://support.mozilla.org/et/kb/enable-and-disable-cookies-website-preferences
            </a>
            )
          </li>
          <li>
            Internet Explorer (
            <a
              className="text-blue-500"
              href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
            >
              https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            </a>
            )
          </li>
          <li>
            Safari (
            <a
              className="text-blue-500"
              href="https://support.apple.com/kb/ph21411?locale=et_EE"
            >
              https://support.apple.com/kb/ph21411?locale=et_EE
            </a>
            )
          </li>
        </ul>
        <p>
          Kui jätkate veebilehe kasutamist ilma brauseri seadeid muutmata,
          nõustute küpsiste kasutamisega.
        </p>
      </Policies>
    </>
  );
};

export default Cookies;
