# E-Kell kasutusjuhend

E-Kell on KooliTechi töölauarakendus ja veebiliides, millega saab hallata koolikella ajakavu, helisid, raadiot, salvestusi ja häireid.

See juhend on mõeldud neile, kes hakkavad E-Kella igapäevaselt kasutama või seadistama. Kui alles alustad, vaata enne [samm-sammult kiirjuhendit](/ekell/kuidas-kasutada).

## Ülevaade

E-Kell aitab koolil hallata koolikella süsteemi ühest kohast. Rakenduse kaudu saab luua tunniplaane, lisada kellaaegu, valida helisid, esitada teateid, mängida raadiot ja käivitada häiresignaale.

E-Kell koosneb kahest peamisest osast:

| Osa | Kirjeldus |
|---|---|
| E-Kell töölauarakendus | Arvutis töötav programm, mis juhib koolikella, helisid, raadiot ja häireid. |
| E-Kell Web | Veebiliides, mille kaudu saab ajakavasid ja seadeid hallata brauserist. |

### Põhifunktsioonid

E-Kellaga saab:

- luua ja muuta koolikella plaane;
- lisada tundide, vahetundide ja erisündmuste kellaaegu;
- määrata igale ajale eraldi heli;
- kasutada eelkella ja järelkella;
- salvestada ja esitada teateid;
- laadida üles MP3- ja WAV-helifaile;
- mängida raadiot;
- luua valmis häireid ja neid käivitada;
- kasutada veebiliidest kaugjuhtimiseks.

## Alustamine

### Paigaldamine

E-Kell paigaldatakse sellesse Windowsi arvutisse, mis on ühendatud kooli helisüsteemiga.

1. Laadi paigaldusfail alla [allalaadimise lehelt](/ekell/laadi-alla).
2. Tee allalaaditud failil topeltklõps.
3. Kui Windows näitab teadet „Windows kaitses teie arvutit“, vali **Lisateave** ja siis **Käivita siiski**.
4. Oota, kuni paigaldus lõpeb ja E-Kell avaneb.

Edaspidi käivitub E-Kell koos Windowsiga ise ja uueneb automaatselt.

### Litsentsivõtme sisestamine

Esimesel käivitusel küsib E-Kell litsentsivõtit. Selle saad KooliTechilt.

1. Sisesta litsentsivõti kujul `XXXXX-XXXXX-XXXXX-XXXXX`.
2. Vajuta **Jätka**.

![E-Kella litsentsivõtme aken, väljale on sisestatud litsentsivõti](/assets/guide/desktop/litsents.webp "window 28rem")

Kui võti ei sobi, ütleb E-Kell põhjuse:

| Teade | Mida teha |
|---|---|
| Vigane litsentsivõti | Kontrolli, kas võti on õigesti sisestatud. |
| Litsentsivõtme kehtivus on lõppenud | Võta ühendust KooliTechiga ja uuenda litsentsi. |
| Serveriga ei õnnestunud ühendust saada | Kontrolli internetiühendust ja proovi uuesti. |

Pärast võtme kinnitamist avaneb E-Kella peavaade ehk **Töölaud**.

### Serveri ühenduse kontrollimine

Serveri ühenduse olekut näed vasakul üleval.

![Roheline kast: Serveri ühendus. Andmed on sünkroniseeritud.](/assets/guide/desktop/uhendus-ok.webp "plain 16rem") ![Kollane kast: Serveri ühendus. Andmed ei salvestu pilve.](/assets/guide/desktop/uhendus-viga.webp "plain 16rem")

Roheline kast tähendab, et rakendus on serveriga ühendatud ja E-Kell Web näeb samu andmeid.

Kollane kast tähendab, et ühendus puudub. Kellad mängivad edasi, kuid osa andmeid võib jääda ainult sellesse arvutisse ja E-Kell Web ei pruugi töölauarakendusega sünkroonida.

### Mida teha, kui serveri ühendus puudub?

Kontrolli järjekorras:

1. kas arvutil on internetiühendus;
2. kas E-Kell Web või server on töös;
3. kas seadetes on õiged sisselogimis- või ühendusandmed;
4. kas tulemüür või viirusetõrje ei blokeeri ühendust.

### Rakendus töötab taustal

Kellad helisevad ainult siis, kui E-Kell töötab.

- Akna sulgemine peidab E-Kella teavitusalale kella kõrvale. Kellad mängivad edasi.
- Akna saad tagasi, kui klõpsad teavitusalal E-Kella ikoonil.
- Teavitusala menüüst **Välju** peatab E-Kella. Kellad ei helise enne, kui rakendus uuesti avatakse. Järgmisel hommikul käivitub E-Kell ise.

## Töölaud

Töölaud on E-Kella peamine vaade. Siin näed tänast ajakava, saad vahetada aktiivset plaani ja liikuda kiiresti teiste funktsioonide juurde.

![E-Kella töölaud: tänane ajakava, kiired toimingud ja plaanide ülevaade](/assets/guide/desktop/toolaud.webp)

### Töölaud sisaldab

| Ala | Kirjeldus |
|---|---|
| Tänane ajakava | Näitab aktiivset plaani ja tänase päeva kellaaegu. Möödunud ajad on hallid. |
| Kiired toimingud | Siit saad vahetada aktiivset plaani ning avada plaanide muutmise või häiresüsteemi. |
| Plaanide ülevaade | Näitab loodud plaane ja seda, milline neist on aktiivne. |

### Aktiivse plaani muutmine

1. Ava **Töölaud**.
2. Leia jaotis **Kiired toimingud**.
3. Ava rippmenüü **Aktiivne plaan**.
4. Vali plaan, mida soovid kasutada.

![Kiired toimingud: aktiivseks plaaniks on valitud Tavaplaan](/assets/guide/desktop/aktiivne-plaan.webp "plain 28rem")

Koolikell hakkab helisema valitud plaani järgi. Valik **Kellad väljas** vaigistab kellad näiteks aktuse ajaks. Plaanid jäävad alles.

### Plaani muutmine töölaualt

1. Ava **Töölaud**.
2. Vajuta **Lisa või muuda plaane**.
3. Avaneb plaanide haldamise vaade.

### Häiresüsteemi avamine töölaualt

1. Ava **Töölaud**.
2. Vajuta **Häiresüsteem**.
3. Avaneb häirete haldamise vaade.

## Plaanide loomine ja muutmine

Plaan määrab, millal koolikell mängib. Iga plaan koosneb nädalapäevadest ja iga päev võib sisaldada mitut kellaaega.

### Enne alustamist

Pane enne valmis:

- tundide algusajad;
- vahetundide algusajad;
- vajadusel eelkella ja järelkella ajad;
- helid, mida soovid kasutada.

### Uue plaani loomine

1. Ava vasakust menüüst **Loo / muuda plaane**.
2. Paremal paanis **Plaanid** vajuta **Uus**.
3. Sisesta plaani nimi.
4. Vajuta **OK**.

![Aken Loo uus plaan, plaani nimeks on kirjutatud Tavaplaan](/assets/guide/desktop/plaan-uus.webp "dialog 30rem")

Plaani nimes võivad olla ainult tähed, numbrid ja alakriips. Tühiku asemel kasuta alakriipsu, näiteks `Tavaline_nädal`.

Kui plaan on loodud, ilmub see parempoolsesse plaanide nimekirja.

### Nädalapäeva valimine

Plaani sees on nädalapäevad esmaspäevast pühapäevani. Vali päev, mille kellaaegu soovid muuta.

![Plaanide vaade: Tavaplaani esmaspäeva tunnid koos eelkella ja järelkellaga](/assets/guide/desktop/plaanid.webp)

### Uue elemendi lisamine

Element tähistab ühte koolikella kirjet, näiteks tunni algust, vahetunni algust või muud sündmust.

1. Ava **Loo / muuda plaane**.
2. Vali soovitud plaan.
3. Vali nädalapäev.
4. Vajuta **Lisa uus**.
5. Sisesta elemendi nimi.
6. Lisa vajadusel kirjeldus.
7. Määra põhiline kellaaeg.
8. Vali helifail.
9. Vajuta **Lisa**.

![Aken Lisa uus element: nimi 8. tund, eelkell 14:55, põhikell 15:00 ja järelkell 15:45 koos helidega](/assets/guide/desktop/plaan-element.webp "dialog 22rem")

### Eelkella lisamine

Eelkell mängib enne põhilist kellaaega.

1. Märgi valik **Lisa eelkell**.
2. Sisesta eelkella kellaaeg.
3. Vali eelkella helifail.

### Järelkella lisamine

Järelkell mängib pärast põhilist kellaaega.

1. Märgi valik **Lisa järelkell**.
2. Sisesta järelkella kellaaeg.
3. Vali järelkella helifail.

### Helifaili eelkuulamine

Põhikella helivaliku kõrval on esitusnupp. Vajuta seda, et kuulata, kas valisid õige heli.

Kui heliks on valitud **Vaikimisi**, mängib kell seadetes määratud vaikimisi heli.

### Elemendi muutmine

1. Leia ajakavas element, mida soovid muuta.
2. Vajuta muutmise ikooni.
3. Tee vajalikud muudatused.
4. Salvesta muudatused.

### Elemendi kustutamine

1. Leia ajakavas element, mida soovid kustutada.
2. Vajuta prügikasti ikooni.
3. Kinnita kustutamine, kui programm seda küsib.

### Päeva kopeerimine

Kui mitmel päeval on sama ajakava, kopeeri ajad teisest päevast.

1. Vali plaan ja päev, kuhu soovid ajad kopeerida.
2. Vajuta **Kopeeri päev**.
3. Vali **Lähteplaan** ja **Lähtepäev**, kust ajad võetakse.
4. Vajuta **Kopeeri**.

![Aken Kopeeri ajad: lähteplaan Tavaplaan, lähtepäev esmaspäev, sihtkoht Tavaplaan teisipäev](/assets/guide/desktop/plaan-kopeeri.webp "dialog 26rem")

Valitud päeva senised ajad asendatakse lähtepäeva aegadega. Ajad saab kopeerida ka teisest plaanist.

## Häälesalvestus

Häälesalvestuse vaates saab salvestada ja esitada kooli teateid ning rääkida mikrofoni kaudu otse kõlaritesse.

![Häälesalvestuse vaade kolme salvestatud teatega](/assets/guide/desktop/haalesalvestus.webp)

### Häälesalvestuse avamine

1. Ava vasakust menüüst **Häälesalvestus**.
2. Vali, kas soovid teate otse edastada või salvestada selle helifailina.

### Hääleedastamine otse kõlarisse

Sobib kiireks teateks, näiteks kui on vaja koolipäeva jooksul midagi teada anda.

1. Vajuta **Hääleedastamine otse kõlarisse**.
2. Vali mikrofoni seade.
3. Vajuta **Alusta hääleedastamist**.
4. Räägi mikrofoni.
5. Kui teade on läbi, vajuta **Peata hääleedastamine**.

![Hääleedastamise aken mikrofoni valikuga](/assets/guide/desktop/otseedastus.webp "dialog 30rem")

### Teate salvestamine

1. Vajuta **Salvesta helifailina**.
2. Vali mikrofoni seade.
3. Vajuta **Alusta heli salvestamist** ja räägi mikrofoni.
4. Vajuta **Lõpeta salvestamine**.

### Salvestuse eelkuulamine

Pärast salvestamist kuvatakse heliriba.

Saad:

- salvestust kuulata;
- salvestuse asukohta kerimisribalt muuta;
- helitugevust reguleerida;
- anda salvestusele nime ja selle salvestada.

### Salvestatud heli kasutamine

Kui salvestus on loodud, ilmub see jaotisesse **Teie salvestused**. Seal saab salvestust mängida või kustutada.

## MP3-helifailid

MP3-helifailide vaates saab koolikella helisid lisada, esitada ja hallata.

![MP3-helifailide vaade kolme üleslaaditud failiga ja helimängijaga](/assets/guide/desktop/mp3-failid.webp)

### Helifaili üleslaadimine

1. Ava vasakust menüüst **MP3-helifailid**.
2. Vajuta **Lae üles**.
3. Vali arvutist helifail.
4. Vajuta **Ava**.

Programm lisab valitud faili helide nimekirja.

### Toetatud failid

Üles saab laadida MP3- ja WAV-faile:

```txt
.mp3 või .wav
```

### Helifaili esitamine

1. Ava **MP3-helifailid**.
2. Klõpsa helifailil nimekirjas.

Ekraani allosas on helimängija, kus saab heli peatada, jätkata, kerida ja helitugevust muuta. Nupp **Raadio (juhuslik)** mängib kõiki faile juhuslikus järjekorras.

### Helifaili kustutamine

1. Leia helifail nimekirjast.
2. Vajuta prügikasti ikooni.
3. Kinnita kustutamine, kui programm seda küsib.

## Raadio

Raadio vaates saab valida ja mängida eelmääratud raadiojaamu.

![Raadio vaade raadiojaamade nimekirjaga](/assets/guide/desktop/raadio.webp)

### Raadio avamine

1. Ava vasakust menüüst **Raadio**.
2. Esimesel avamisel näitab E-Kell autoriõiguse teadet. Raadio mängimine kooli kõlaritest on avalik esitus. Loe teade läbi ja vajuta **Saan aru**.
3. Avaneb raadiojaamade nimekiri.

### Raadiojaama mängimine

1. Leia soovitud raadiojaam.
2. Vajuta jaama kõrval olevat esitamise nuppu.
3. Reguleeri vajadusel helitugevust liuguriga üleval.

### Raadio peatamine

Raadio peatamiseks vajuta mängiva jaama kõrval olevat peatamise nuppu.

### Režiimid

Raadiol on kaks režiimi:

| Režiim | Kirjeldus |
|---|---|
| Otseülekanne | Mängib valitud raadiojaama kohe. |
| Ajakava | Mängib ja peatab raadio kindlatel kellaaegadel, näiteks vahetundides. |

### Raadio ajakava

1. Ava vaheleht **Ajakava**.
2. Vajuta **Lisa uus**. Vali kellaaeg, raadiojaam ja tegevus: **Mängi** või **Peata**.
3. Vajuta **Salvesta**.
4. Lülita ajakava sisse nupust **Ajakava väljas**. Kui ajakava töötab, on nupul kiri **Ajakava sees**.

![Raadio ajakava: RETRO FM kell 10.50, peatus 11.15, SKY PLUS kell 12.05](/assets/guide/desktop/raadio-ajakava.webp)

## Häired

Häirete vaates saab luua valmis häireid ehk presette ja neid vajadusel käivitada.

![Häirete vaade nelja valmis häirega](/assets/guide/desktop/haire.webp)

Iga preset määrab:

- häire nime;
- ikooni;
- kasutatava helifaili;
- korduste arvu;
- viivituse sekundites.

### Uue häirepreseti loomine

1. Ava vasakust menüüst **Häire**.
2. Vajuta **Uus preset**.
3. Sisesta preseti nimi.
4. Vali ikoon.
5. Vali helifail.
6. Sisesta **Korduste arv**.
7. Sisesta **Viivitus (s)**.
8. Vajuta **Loo preset**.

![Uue preseti aken: nimi Tulekahju, tuleikoon, fire_alarm.mp3, 3 kordust ja 2 sekundi viivitus](/assets/guide/desktop/haire-uus.webp "dialog 32rem")

### Häirepreseti muutmine

1. Ava **Häire**.
2. Leia soovitud preset.
3. Vajuta kolme punktiga menüüd.
4. Vali **Muuda**.
5. Tee muudatused.
6. Vajuta **Uuenda**.

### Häire käivitamine

1. Ava **Häire**.
2. Leia preset, mida soovid käivitada.
3. Vajuta **Käivita**.
4. Avaneb kinnituse aken.
5. Vajuta **Käivita häire**.

![Häire käivitamise kinnitus: Tulekahju, fire_alarm.mp3, 3 kordust](/assets/guide/desktop/haire-kaivita.webp)

### Häire kustutamine

1. Ava **Häire**.
2. Leia preset.
3. Vajuta kolme punktiga menüüd.
4. Vali **Kustuta**.

> Kasuta häireid ainult kooli sisekorra- ja ohutusreeglite järgi.

## Kontakt

Kontaktivaates saad saata KooliTechile sõnumi otse programmist.

### Sõnumi saatmine

1. Ava vasakust menüüst **Kontakt**.
2. Sisesta nimi.
3. Sisesta e-posti aadress.
4. Kirjuta sõnum.
5. Vajuta **Saada**.

Kontaktivaates on ka KooliTechi kontaktandmed:

```txt
info@koolitech.ee
www.koolitech.ee
```

## Seaded

Seaded avanevad vasaku menüü allosast. Seal saab muuta programmi üldiseid ja heliga seotud seadeid.

![E-Kella seadete aken, vaikimisi heliväljundiks on valitud Koolikõlarid](/assets/guide/desktop/seaded.webp "dialog 34rem")

| Seade | Kirjeldus |
|---|---|
| Teema | Hele või tume välimus. |
| Vaikimisi heliväljund | Seade, mille kaudu E-Kell heli mängib. Vali siit kooli helisüsteem. |
| Vaikimisi koolikell, eelkell ja järelkell | Helid, mida mängivad kirjed, mille heliks on valitud **Vaikimisi**. |
| Korduste arv | Mitu korda kell järjest mängib. |
| Lähtesta rakendus | Kustutab kõik kohalikud andmed ja küsib uut litsentsivõtit. |

Akna allosas on rakenduse versioon ja litsentsi kehtivusaeg.

Kui mõni funktsioon ei tööta ootuspäraselt, kontrolli esmalt seadete vaadet ja serveri ühenduse olekut.

## E-Kell Web

E-Kell Web on brauseripõhine liides, mille kaudu saab E-Kella hallata eemalt. Kellad, raadio, häired ja teated mängivad siiski kooli arvutis, seega peab töölauarakendus töötama.

### Sisselogimine

1. Ava brauseris [dashboard.koolitech.ee](https://dashboard.koolitech.ee).
2. Sisesta kasutajanimi.
3. Sisesta salasõna.
4. Vajuta **Logi sisse**.

![E-Kell Webi sisselogimise kaart kasutajanime ja salasõnaga](/assets/guide/web/login.webp "dialog 18rem")

Kui sisselogimine ebaõnnestub, kuvatakse teade:

```txt
Vale kasutajanimi või salasõna
```

Sellisel juhul kontrolli sisestatud andmeid ja proovi uuesti.

### Peavaade

Veebiliidese peavaates näed tänast ajakava, aktiivset plaani ja plaanide ülevaadet, nagu töölauarakenduses.

![E-Kell Webi peavaade: tänane ajakava, aktiivne plaan ja plaanide ülevaade](/assets/guide/web/peavaade.webp)

Kui plaane pole veel loodud, kuvatakse teade:

```txt
Plaane pole loodud
Loo esimene plaan, et alustada
```

Plaanide loomiseks vajuta **Loo Plaan**.

### Plaanide haldamine veebis

1. Ava vasakust menüüst **Loo / muuda plaane**.
2. Vajuta **Uus**.
3. Sisesta plaani nimi ja kinnita.
4. Lisa plaani vajalikud kellaajad.

![Plaanide muutmine E-Kell Webis: Tavaplaani esmaspäev](/assets/guide/web/plaanid.webp)

Muudatused jõuavad kooli arvutisse kohe, kui see on serveriga ühendatud.

### Häired veebis

1. Ava vasakust menüüst **Häire**.
2. Vajuta **Lae presetid**. Presetid laaditakse kooli arvutist.
3. Vajuta soovitud preseti juures **Käivita** ja kinnita.

Kõik mängivad häired saab peatada nupuga **Peata kõik häired**.

![Häired E-Kell Webis: neli valmis häiret käivitusnuppudega](/assets/guide/web/haire.webp)

### Salvestused veebis

1. Ava vasakust menüüst **Salvestused**.
2. Vajuta **Lae salvestused**, et laadida salvestused kooli arvutist.
3. Salvestuse mängimiseks vajuta selle juures **Käivita**.
4. Uue salvestuse tegemiseks vajuta **Salvesta uus**.

![Salvestused E-Kell Webis: kolm teadet käivitusnuppudega](/assets/guide/web/salvestused.webp)

### Raadio veebis

1. Ava vasakust menüüst **Raadio**.
2. Vali **Otseülekanne**, kui soovid raadiot kohe mängida.
3. Vali **Ajakava**, kui soovid seadistada raadio mängimist ajakava järgi.
4. Raadio peatamiseks vajuta **Peata raadio**.

### Kui töölauarakendus pole ühendatud

Kui kooli arvuti on välja lülitatud või ilma internetita, näitab veeb hoiatust ja käivitusnupud ei tööta. Plaane saab siiski muuta. Muudatused jõuavad kooli arvutisse, kui see on taas ühendatud.

![Hoiatus E-Kell Webis: Töölauarakendus pole ühendatud](/assets/guide/web/raadio-offline.webp "plain")

### Telefonis

E-Kell Web töötab ka telefonis. Menüü avaneb vasakul üleval oleva nupuga.

![E-Kell Webi peavaade telefonis](/assets/guide/web/mobiil.webp "phone 13rem") ![E-Kell Webi avatud menüü telefonis](/assets/guide/web/mobiil-menuu.webp "phone 13rem")

### Haldus

Haldusvaates saab hallata süsteemi ja kasutajatega seotud seadeid. See osa on mõeldud administraatorile.

## Tõrkeotsing

### Andmed ei salvestu pilve

Kui töölauarakenduses on kollane teade **Andmed ei salvestu pilve**, ei ole rakendus serveriga ühendatud.

Kontrolli:

- internetiühendust;
- kas server töötab;
- sisselogimis- või ühendusandmeid;
- tulemüüri ja viirusetõrje seadeid.

### Kell ei mängi õigel ajal

Kontrolli:

- kas õige plaan on aktiivne;
- kas tänase nädalapäeva ajad on lisatud;
- kas arvuti kellaaeg on õige;
- kas helifail on olemas;
- kas helitugevus ei ole nullis;
- kas kõlarid või helisüsteem on ühendatud.

### Plaan on tühi

Kui töölaual kuvatakse **Plaan on tühi**, pole aktiivses plaanis tänase päeva jaoks kellaaegu lisatud.

Lahendus:

1. Ava **Loo / muuda plaane**.
2. Vali aktiivne plaan.
3. Vali tänane nädalapäev.
4. Lisa vajalikud kellaajad.

### Helifaili ei saa lisada

Kontrolli:

- kas fail on MP3- või WAV-vormingus;
- kas fail ei ole samal ajal teises programmis avatud;
- kas failinimes pole erimärke;
- kas rakendusel on õigus faili lugeda.

### Raadio ei mängi

Kontrolli:

- internetiühendust;
- helitugevust;
- kas mõni teine heli juba mängib;
- kas raadiojaam praegu töötab.

### Vale kasutajanimi või salasõna

Kui E-Kell Web kuvab teate **Vale kasutajanimi või salasõna**, kontrolli:

- kasutajanime kirjapilti;
- salasõna;
- kas Caps Lock on sisse lülitatud;
- kas kasutajal on ligipääs veebiliidesele.
