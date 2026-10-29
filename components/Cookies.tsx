import Policies from "./Policies";

const Cookies = () => {
  return (
    <>
      <Policies eyebrow="Küpsised">
        <h1>Küpsiste kasutamine</h1>
        <h3>Mis on küpsised?</h3>
        <p>
          Küpsis on väike tekstifail, mille veebisait salvestab teie arvutisse
          või telefoni, kui külastate veebisaiti. Nii jätab veebisait mõneks
          ajaks meelde teie tegevused ja eelistused, näiteks kasutajanime,
          keele, fondi suuruse ja muud kuvamiseelistused. Tänu sellele ei pea
          te neid iga kord uuesti sisestama, kui naasete saidile või liigute
          lehelt lehele.
        </p>
        <h3>Kuidas me küpsiseid kasutame?</h3>
        <p>
          Kasutame <strong>seansiküpsiseid</strong>, mis kustutatakse
          automaatselt pärast igat külastust. Nende abil kogume järgmisi
          andmeid: kasutaja seansi ID, kaasturustaja ID, koolitech.ee
          kasutajatunnus ja parool krüpteeritud kujul (kui olete lubanud
          brauseril need meelde jätta) ning viimati külastatud koolitech.ee
          lehe aadress.
        </p>
        <h3>Kuidas küpsiseid hallata?</h3>
        <p>
          Küpsiseid saate hallata ja kustutada oma soovi järgi. Saate kustutada
          kõik küpsised, mis on juba teie seadmes, ja seadistada brauseri nii,
          et see küpsiseid ei salvestaks. Sel juhul peate aga tõenäoliselt
          mõned eelistused iga külastuse ajal uuesti käsitsi määrama. Kui
          küpsised on keelatud, ei pruugi kõik veebisaidi funktsioonid
          töötada.
        </p>
        <p>Juhised küpsiste keelamiseks eri brauserites:</p>
        <ul>
          <li>
            Google Chrome (
            <a href="https://support.google.com/accounts/answer/61416?hl=en">
              https://support.google.com/accounts/answer/61416?hl=en
            </a>
            )
          </li>
          <li>
            Mozilla Firefox (
            <a href="https://support.mozilla.org/et/kb/enable-and-disable-cookies-website-preferences">
              https://support.mozilla.org/et/kb/enable-and-disable-cookies-website-preferences
            </a>
            )
          </li>
          <li>
            Internet Explorer (
            <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">
              https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
            </a>
            )
          </li>
          <li>
            Safari (
            <a href="https://support.apple.com/kb/ph21411?locale=et_EE">
              https://support.apple.com/kb/ph21411?locale=et_EE
            </a>
            )
          </li>
        </ul>
        <p>
          Kui kasutate veebisaiti edasi brauseri seadeid muutmata, nõustute
          küpsiste kasutamisega.
        </p>
      </Policies>
    </>
  );
};

export default Cookies;
