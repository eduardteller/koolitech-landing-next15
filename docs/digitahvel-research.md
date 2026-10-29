# digitahvel.ee research: site and product catalog structure

Researched 2026-10-28 as the reference for KooliTech's product catalog (`/tooted`) and navbar split.

## Their stack

- Hostinger Horizons React SPA (client-side routing, no SSR).
- Products live in a PocketBase collection, `tooted`. The whole catalog loads client-side in one request (`/hcgi/platform/api/collections/tooted/records?perPage=1000&sort=jarjekord,nimi`).

## Site map compared with KooliTech

| digitahvel.ee | Purpose | KooliTech before | KooliTech now |
|---|---|---|---|
| `/` | Hero, 3 featured series, "how we help" in 3 steps, category tiles, school logos, CTA | `/` company landing | `/` unchanged; hardware cards link to categories |
| `/tooted` | Catalog: all products | – | `/tooted`: category overview, plus all products once data exists |
| `/tooted/{kategooria}` | Category listing (series chips for screens) | – | `/tooted/[kategooria]` |
| `/toode/{slug}` | Product detail | – | `/tooted/[kategooria]/[toode]` (nested for breadcrumbs) |
| `/ekraanid?seeria=` | Screen comparison by series | – | not needed; series chips cover it |
| `/koolidele` | Schools: 3 series, 4-step process, logos, "which board fits" picker | `#koolitehnika` section on `/` | `/koolidele` |
| `/ettevotetele` | Businesses | – | not planned |
| `/meist` = `/lahendused` | About (same page at two URLs) | `/` | unchanged |
| `/kontakt` (`?toode=`, `?siht=kool`) | Contact form with prefill | `/contact` (no prefill) | `/contact?toode=` / `?teema=` prefill the message |
| `/privaatsuspoliitika` | Legal | `/privacy`, `/terms`, `/cookies` | unchanged |
| – | – | `/ekell`, `/ekell/docs` | unchanged |

## Navigation

- **digitahvel desktop:** logo, 5 plain links (Tooted, Koolidele, Ettevõtetele, Meist, Kontakt; no dropdowns), a phone number, and an orange "Küsi pakkumist" button.
- **digitahvel mobile:** a hamburger ("Menüü") opens a full-width panel with the same links and a large phone CTA.
- **KooliTech before:** E-Kell, Kontakt and an [E-Kell Web] button. There was no mobile menu, so the text links disappeared below `md`.
- **KooliTech now:** E-Kell, Tooted, Koolidele, Kontakt and [E-Kell Web], with an active-section state and a hamburger panel on mobile.

## Product list (`/tooted`)

- **Layout:**
  - a hero (kicker "TOOTEVALIK", H1, lead);
  - a sticky left sidebar card, "Kategooriad", with Kõik tooted plus 7 categories. Each one is a real route, and the active one is filled;
  - a main column with a search input ("Otsi … SKU-d või seeriat") above a card grid that is 2 columns on tablet and 3 on desktop.
- **Filters:** series chips (Kõik / Value / Performance / Ultra), only in Interaktiivsed ekraanid, filtered client-side. There is no sorting and no pagination: 42 products, ordered by `jarjekord`, then `nimi`.
- **Empty category:** Dokumendikaamerad and Audiolahendused have no products. They show a "no products in the catalog right now, send us an enquiry" message.
- **Card:** the whole card is a link to the detail page. It has:
  - an image on a white tile with a ↗ corner icon;
  - a "Series · Size" badge;
  - the H3 name and a one-line tagline;
  - a "Küsi hinda" + "Vaata lähemalt" row;
  - 3 bullet highlights.
- **Detail page:** in order:
  - a "Tootevalik" back link, a "Series · Size" eyebrow, the H1 name, the tagline and a description;
  - "Küsi hinda", all highlights, and a "Küsi pakkumist" button that goes to `/kontakt?toode=<name>`;
  - a "Tehnilised andmed" key/value table (about 25 rows) and a disclaimer that specs may change;
  - 3 related product cards.
- **No prices.** Everything is quote-based ("Küsi hinda").

### Data model (PocketBase `tooted`)

| Field | Meaning | KooliTech `Product` |
|---|---|---|
| `nimi` | Name | `name` |
| `slug` | URL slug | `slug` |
| `sku` | Product code | `sku` |
| `kategooria` | Category slug | `category` (typed union) |
| `seeria` | Series or sub-type (Value, Kinnitused, LapCabby …) | `series` |
| `suurus` | Size (`65"`) | `size` |
| `tagline` | One line for the card | `tagline` |
| `kirjeldus` | Description paragraph | `description` |
| `esiletousted[]` | Highlights | `highlights` |
| `spetsifikatsioonid[{k,v}]` | Spec table | `specs[{label, value}]` |
| `pilt` | Image URL (hotlinked from the manufacturer) | `image` (local, under `public/`) |
| `jarjekord` | Sort order | `order` |
| `hind`, `hinnavahemik`, `varu`, `featured` | Price (always 0) / "Küsi hinda" / stock / featured | not modelled |

### Categories and counts on their site

| Category (slug) | Products | Series / sub-types |
|---|---|---|
| Interaktiivsed ekraanid (`interaktiivsed-ekraanid`) | 22 | Value 8, Performance 6, Ultra 8 |
| Lisad (`lisad`) | 12 | Kinnitused, OPS moodulid, Donglid, Pliiats, Kaugjuhtimispult, Lisavahendid |
| Dokid ja jaoturid (`dokid`) | 1 | |
| Dokumendikaamerad (`dokumendikaamerad`) | 0 | |
| Audiolahendused (`audiolahendused`) | 0 | |
| Videokonverentsiseadmed (`kaamerad`) | 2 | All-in-One, Webcam |
| Laadimiskärud (`laadimiskarud`) | 5 | LapCabby, Lyte, UniCabby, GO2 |

KooliTech uses these 7 (with the slug `videokonverentsiseadmed`) plus 3 of its own: Võrguseadmed, Interkomid, Projektorid. Indoor and outdoor speakers go under Audiolahendused. See `content/categories.ts`.

## Takeaways

**Copied:**
- a real route per category (SEO, shareable links);
- quote-only CTAs that prefill the contact form;
- `series` doubling as the sub-type badge and filter;
- an empty state that sells a consultation;
- a spec table on the detail page.

**Avoided:**
- loading the whole catalog client-side (we render it statically at build);
- the same About page at two URLs;
- a slug that doesn't match its label (`kaamerad` is labelled "Videokonverentsiseadmed");
- hotlinked manufacturer images.

**Not copied:** the dark/orange visual style and their marketing copy. KooliTech pages use the site's own tokens and its own wording.
