# E-Kell kasutusjuhend

E-Kell on KooliTechi töölauarakendus ja veebiliides, millega saab hallata koolikella ajakavu, helisid, raadiot, salvestusi ja häireid.

See juhend on mõeldud neile, kes hakkavad E-Kella igapäevaselt kasutama või seadistama.

---

# Ülevaade

E-Kell aitab koolil hallata koolikella süsteemi ühest kohast. Rakenduse kaudu saab luua tunniplaane, lisada kellaaegu, valida helisid, esitada teateid, mängida raadiot ja käivitada häiresignaale.

E-Kell koosneb kahest peamisest osast:

| Osa | Kirjeldus |
|---|---|
| E-Kell töölauarakendus | Arvutis töötav programm, mis juhib koolikella, helisid, raadiot ja häireid. |
| E-Kell Web | Veebiliides, mille kaudu saab ajakavasid ja seadeid hallata brauserist. |

## Põhifunktsioonid

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

---

# Alustamine

## Programmi käivitamine

E-Kella saab käivitada Windowsi arvutis rakenduse failist.

## Sammud

1. Ava kaust, kuhu E-Kell on alla laaditud.
2. Leia fail **E-Kell.exe** või E-Kella paigaldusfail.
3. Tee failil topeltklõps.
4. Oota, kuni programm avaneb.

Pärast käivitamist avaneb E-Kella peavaade ehk **Töölaud**.

## Serveri ühenduse kontrollimine

Serveri ühenduse olekut näed vasakul üleval.

Kui näed kollast teadet:

```txt
Serveri ühendus
Andmed ei salvestu pilve.
```

siis ei ole rakendus serveriga ühendatud. Sel juhul võib osa andmeid jääda ainult sellesse arvutisse ja E-Kell Web ei pruugi töölauarakendusega sünkroonida.

## Mida teha, kui serveri ühendus puudub?

Kontrolli järjekorras:

1. kas arvutil on internetiühendus;
2. kas E-Kell Web või server on töös;
3. kas seadetes on õiged sisselogimis- või ühendusandmed;
4. kas tulemüür või viirusetõrje ei blokeeri ühendust.

---

# Töölaud

Töölaud on E-Kella peamine vaade. Siin näed tänast ajakava, saad vahetada aktiivset plaani ja liikuda kiiresti teiste funktsioonide juurde.

## Töölaud sisaldab

| Ala | Kirjeldus |
|---|---|
| Tänane ajakava | Näitab aktiivset plaani ja tänase päeva kellaaegu. |
| Kiired toimingud | Siit saad vahetada aktiivset plaani ning avada plaanide muutmise või häiresüsteemi. |
| Plaanide ülevaade | Näitab loodud plaane ja nende olekut. |

## Aktiivse plaani muutmine

1. Ava **Töölaud**.
2. Leia jaotis **Kiired toimingud**.
3. Ava rippmenüü **Aktiivne plaan**.
4. Vali plaan, mida soovid kasutada.

Koolikell hakkab helisema valitud plaani järgi.

## Plaani muutmine töölaualt

1. Ava **Töölaud**.
2. Vajuta **Lisa/Muuda plaan**.
3. Avaneb plaanide haldamise vaade.

## Häiresüsteemi avamine töölaualt

1. Ava **Töölaud**.
2. Vajuta **Häiresüsteem**.
3. Avaneb häirete haldamise vaade.

---

# Plaanide loomine ja muutmine

Plaan määrab, millal koolikell mängib. Iga plaan koosneb nädalapäevadest ja iga päev võib sisaldada mitut kellaaega.

## Enne alustamist

Pane enne valmis:

- tundide algusajad;
- vahetundide algusajad;
- vajadusel eelkella ja järelkella ajad;
- helid, mida soovid kasutada.

## Uue plaani loomine

1. Ava vasakust menüüst **Loo / Muuda Plaanid**.
2. Paremal paanis **Plaanid** vajuta **Uus**.
3. Sisesta plaani nimi.
4. Kinnita plaani loomine.

Kui plaan on loodud, ilmub see parempoolsesse plaanide nimekirja.

## Nädalapäeva valimine

Plaani sees kuvatakse nädalapäevad:

```txt
Esmaspäev, Teisipäev, Kolmapäev, Neljapäev, Reede, Laupäev, Pühapäev
```

Vali päev, mille kellaaegu soovid muuta.

## Uue elemendi lisamine

Element tähistab ühte koolikella kirjet, näiteks tunni algust, vahetunni algust või muud sündmust.

1. Ava **Loo / Muuda Plaanid**.
2. Vali soovitud plaan.
3. Vali nädalapäev.
4. Vajuta **Lisa Uus**.
5. Sisesta elemendi nimi.
6. Lisa vajadusel kirjeldus.
7. Määra põhiline kellaaeg.
8. Vali helifail.
9. Vajuta **Lisa**.

## Eelkella lisamine

Eelkell mängib enne põhilist kellaaega.

1. Märgi valik **Lisa Eelkell**.
2. Sisesta eelkella kellaaeg.
3. Vali eelkella helifail.

## Järelkella lisamine

Järelkell mängib pärast põhilist kellaaega.

1. Märgi valik **Lisa Järelkell**.
2. Sisesta järelkella kellaaeg.
3. Vali järelkella helifail.

## Helifaili eelkuulamine

Helivaliku kõrval on esitusnupp. Vajuta seda, et kuulata, kas valisid õige heli.

## Elemendi muutmine

1. Leia ajakavas element, mida soovid muuta.
2. Vajuta muutmise ikooni.
3. Tee vajalikud muudatused.
4. Salvesta muudatused.

## Elemendi kustutamine

1. Leia ajakavas element, mida soovid kustutada.
2. Vajuta prügikasti ikooni.
3. Kinnita kustutamine, kui programm seda küsib.

## Päeva kopeerimine

Kui mitmel päeval on sama ajakava, kasuta nuppu **Kopeeri Päev**.

1. Vali päev, mille ajakava soovid kopeerida.
2. Vajuta **Kopeeri Päev**.
3. Vali päev või päevad, kuhu ajad kopeerida.
4. Kinnita tegevus.

---

# Häälesalvestus

Häälesalvestuse vaates saab salvestada ja esitada kooli teateid ning rääkida mikrofoni kaudu otse kõlaritesse.

## Häälesalvestuse avamine

1. Ava vasakust menüüst **Häälesalvestus**.
2. Vali, kas soovid teate otse edastada või salvestada selle helifailina.

## Heliedastamine otse kõlarisse

Sobib kiireks teateks, näiteks kui on vaja koolipäeva jooksul midagi teada anda.

1. Vajuta **Heliedastamine otse kõlarisse**.
2. Vali mikrofoni seade.
3. Vajuta **Alusta heli salvestamist**.
4. Räägi mikrofoni.
5. Peata salvestus või edastus, kui teade on lõppenud.

## Salvestuse eelkuulamine

Pärast salvestamist kuvatakse heliriba.

Saad:

- salvestust kuulata;
- salvestuse asukohta kerimisribalt muuta;
- helitugevust reguleerida;
- anda salvestusele nime ja selle salvestada.

## Salvestatud heli kasutamine

Kui salvestus on loodud, ilmub see jaotisesse **Teie salvestused**. Seal saab salvestust mängida või kustutada.

---

# MP3-helifailid

MP3-helifailide vaates saab koolikella helisid lisada, esitada ja hallata.

## Helifaili üleslaadimine

1. Ava vasakust menüüst **MP3 Helifailid**.
2. Vajuta **Lae üles** või **Lae fail üles**.
3. Vali arvutist helifail.
4. Vajuta **Ava**.

Programm lisab valitud faili helide nimekirja.

## Toetatud failid

Üles saab laadida MP3- ja WAV-faile:

```txt
.mp3 või .wav
```

## Helifaili esitamine

1. Ava **MP3 Helifailid**.
2. Vali helifail nimekirjast.
3. Vajuta esitamise nuppu.

Ekraani allosas kuvatakse helimängija, kus saab heli peatada, jätkata, kerida ja helitugevust muuta.

## Helifaili kustutamine

1. Leia helifail nimekirjast.
2. Vajuta prügikasti ikooni.
3. Kinnita kustutamine, kui programm seda küsib.

---

# Raadio

Raadio vaates saab valida ja mängida eelmääratud raadiojaamu.

## Raadio avamine

1. Ava vasakust menüüst **Raadio**.
2. Avaneb raadiojaamade nimekiri.

## Raadiojaama mängimine

1. Leia soovitud raadiojaam.
2. Vajuta jaama kõrval olevat esitamise nuppu.
3. Reguleeri vajadusel helitugevust.

## Raadio peatamine

Raadio peatamiseks vajuta **Peata raadio**.

## Režiimid

Raadiol on kaks režiimi:

| Režiim | Kirjeldus |
|---|---|
| Otseülekanne | Mängib valitud raadiojaama kohe. |
| Ajakava | Võimaldab seadistada raadio mängimist ajakava järgi. |

---

# Häired

Häirete vaates saab luua valmis häireid ehk presette ja neid vajadusel käivitada.

Iga preset määrab:

- häire nime;
- ikooni;
- kasutatava helifaili;
- korduste arvu;
- viivituse sekundites.

## Uue häirepreseti loomine

1. Ava vasakust menüüst **Häire**.
2. Vajuta **Uus Preset**.
3. Sisesta preseti nimi.
4. Vali ikoon.
5. Vali helifail.
6. Sisesta **Korduste arv**.
7. Sisesta **Viivitus (s)**.
8. Salvesta preset.

## Häirepreseti muutmine

1. Ava **Häire**.
2. Leia soovitud preset.
3. Vajuta kolme punktiga menüüd.
4. Vali **Muuda**.
5. Tee muudatused.
6. Vajuta **Uuenda**.

## Häire käivitamine

1. Ava **Häire**.
2. Leia preset, mida soovid käivitada.
3. Vajuta **Käivita**.
4. Avaneb kinnituse aken.
5. Vajuta **Käivita häire**.

## Häire kustutamine

1. Ava **Häire**.
2. Leia preset.
3. Vajuta kolme punktiga menüüd.
4. Vali **Kustuta**.

> Kasuta häireid ainult kooli sisekorra- ja ohutusreeglite järgi.

---

# Kontakt

Kontaktivaates saad saata KooliTechile sõnumi otse programmist.

## Sõnumi saatmine

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

---

# Seaded

Seadete vaates saab muuta programmi üldiseid ja ühendusega seotud seadeid.

Kui mõni funktsioon ei tööta ootuspäraselt, kontrolli esmalt seadete vaadet ja serveri ühenduse olekut.

---

# E-Kell Web

E-Kell Web on brauseripõhine liides, mille kaudu saab E-Kella hallata eemalt.

## Sisselogimine

1. Ava E-Kell Web.
2. Sisesta kasutajanimi.
3. Sisesta salasõna.
4. Vajuta **Logi sisse**.

Kui sisselogimine ebaõnnestub, kuvatakse teade:

```txt
Vale kasutajanimi või salasõna
```

Sellisel juhul kontrolli sisestatud andmeid ja proovi uuesti.

## Peavaade

Veebiliidese peavaates näeb ülevaadet E-Kella andmetest. Kui plaane pole veel loodud, kuvatakse teade:

```txt
Plaane pole loodud
Loo esimene plaan, et alustada
```

Plaanide loomiseks vajuta **Loo Plaan**.

## Plaanide haldamine veebis

1. Ava vasakust menüüst **Loo / Muuda Plaanid**.
2. Vajuta **Uus**.
3. Sisesta plaani nimi.
4. Salvesta plaan.
5. Lisa plaani vajalikud kellaajad.

## Salvestused veebis

1. Ava vasakust menüüst **Salvestused**.
2. Vajuta **Lae salvestused**, et laadida salvestused serverist.
3. Uue salvestuse tegemiseks vajuta **Salvesta uus**.

## Raadio veebis

1. Ava vasakust menüüst **Raadio**.
2. Vali **Otseülekanne**, kui soovid raadiot kohe mängida.
3. Vali **Ajakava**, kui soovid seadistada raadio mängimist ajakava järgi.
4. Raadio peatamiseks vajuta **Peata raadio**.

## Haldus

Haldusvaates saab hallata süsteemi ja kasutajatega seotud seadeid. See osa on mõeldud administraatorile.

---

# Tõrkeotsing

## Andmed ei salvestu pilve

Kui töölauarakenduses on kollane teade **Andmed ei salvestu pilve**, ei ole rakendus serveriga ühendatud.

Kontrolli:

- internetiühendust;
- kas server töötab;
- sisselogimis- või ühendusandmeid;
- tulemüüri ja viirusetõrje seadeid.

## Kell ei mängi õigel ajal

Kontrolli:

- kas õige plaan on aktiivne;
- kas tänase nädalapäeva ajad on lisatud;
- kas arvuti kellaaeg on õige;
- kas helifail on olemas;
- kas helitugevus ei ole nullis;
- kas kõlarid või helisüsteem on ühendatud.

## Plaan on tühi

Kui töölaual kuvatakse **Plaan on tühi**, pole aktiivses plaanis tänase päeva jaoks kellaaegu lisatud.

Lahendus:

1. Ava **Loo / Muuda Plaanid**.
2. Vali aktiivne plaan.
3. Vali tänane nädalapäev.
4. Lisa vajalikud kellaajad.

## Helifaili ei saa lisada

Kontrolli:

- kas fail on MP3- või WAV-vormingus;
- kas fail ei ole samal ajal teises programmis avatud;
- kas failinimes pole erimärke;
- kas rakendusel on õigus faili lugeda.

## Raadio ei mängi

Kontrolli:

- internetiühendust;
- helitugevust;
- kas mõni teine heli juba mängib;
- kas raadiojaam praegu töötab.

## Vale kasutajanimi või salasõna

Kui E-Kell Web kuvab teate **Vale kasutajanimi või salasõna**, kontrolli:

- kasutajanime kirjapilti;
- salasõna;
- kas Caps Lock on sisse lülitatud;
- kas kasutajal on ligipääs veebiliidesele.
