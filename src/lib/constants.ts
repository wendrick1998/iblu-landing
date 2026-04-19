export const WHATSAPP_NUMBER = "5547992231192";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e quero saber quais iPhones estão disponíveis no momento."
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const STORE = {
  name: "iBlu Store",
  fullName: "iBlu Store.com",
  tagline: "Loja De iPhone Em Blumenau | iPad | MacBook",
  since: "2013",
  address: "R. São Valentim, 483 - Itoupava Norte",
  city: "Blumenau - SC",
  cep: "89053-330",
  phone: "(47) 99223-1192",
  rating: "4.9",
  reviews: "179",
  instagram: "iblu.store",
} as const;
