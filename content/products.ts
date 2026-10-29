import type { Product } from "@/lib/catalog";

/* The product catalog. Adding a product is data entry: append an entry,
   put its image in public/assets/products/, and the category page, the
   product page and the "Sarnased tooted" row pick it up.

   {
     slug: "hikvision-ds-d5b65rb-ep",      // URL: /tooted/<category>/<slug>
     name: "Hikvision DS-D5B65RB/EP",
     sku: "DS-D5B65RB/EP",                 // searchable
     category: "interaktiivsed-ekraanid",  // a slug from content/categories.ts
     series: "Performance",                // badge + filter chip (or a sub-type, e.g. "Kinnitused")
     size: '65"',
     tagline: "…",                         // one line on the card
     description: "…",                     // paragraph on the product page
     highlights: ["…", "…", "…"],          // the first 3 show on the card
     specs: [{ label: "Diagonaal", value: '65"' }],
     image: "/assets/products/ds-d5b65rb-ep.png",
     order: 1,                             // lower comes first; then by name
   },
*/
export const products: Product[] = [];
