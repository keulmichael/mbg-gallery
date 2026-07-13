export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/artistes", label: "Artistes" },
  { href: "/oeuvres", label: "Oeuvres" },
  { href: "/expositions", label: "Expositions" },
  { href: "/contact", label: "Contact" },
] as const;

export const galleryStatement = [
  "Rencontrer un artiste est toujours une aventure. Y croire et la montrer, c'est donner une forme tangible a cette aventure.",
  "MBG Gallery se pense comme une galerie itinerante: les oeuvres voyagent par le regard, par le numerique et par les grands rendez-vous internationaux ou la galerie se rend.",
  "Michel Kirch, artiste visuel photographe, est represente sur ce site. Son image convoque des mondes interieurs, ouvre des questions et laisse le cheminement prendre le pas sur la reponse.",
  "Le parcours de la fondatrice s'est d'abord construit pendant trente ans dans les antiquites et le commerce de tableaux, avec une attention particuliere pour les peintres asiatiques venus en Occident. La rencontre avec Michel Kirch a ouvert ce projet de galerie contemporaine.",
] as const;

export const artworks = [
  {
    title: "L'origine de la lumiere",
    artist: "Michel Kirch",
    image: "/mbg/origine-lumiere.jpg",
    alt: "Oeuvre photographique L'origine de la lumiere de Michel Kirch",
    ratio: "square",
  },
  {
    title: "La main qui frappe est aussi la main qui sauve",
    artist: "Michel Kirch",
    image: "/mbg/main-frappe-sauve.jpg",
    alt: "Oeuvre photographique La main qui frappe est aussi la main qui sauve de Michel Kirch",
    ratio: "square",
  },
  {
    title: "Jaffa 2",
    artist: "Michel Kirch",
    image: "/mbg/jaffa-2.jpg",
    alt: "Oeuvre photographique Jaffa 2 de Michel Kirch",
    ratio: "landscape",
  },
  {
    title: "Night Dance",
    artist: "Michel Kirch",
    image: "/mbg/night-dance.jpg",
    alt: "Oeuvre photographique Night Dance de Michel Kirch",
    ratio: "square",
  },
  {
    title: "Life is a game",
    artist: "Michel Kirch",
    image: "/mbg/life-is-a-game.jpg",
    alt: "Oeuvre photographique Life is a game de Michel Kirch",
    ratio: "square",
  },
] as const;

export const exhibitions = [
  {
    title: "Miami",
    description: "Rendez-vous annonce par la galerie parmi les foires ou suivre les oeuvres.",
    image: "/mbg/buzz-art-tours-argent.jpg",
    alt: "Visuel d'exposition reference par MBG Gallery",
  },
  {
    title: "Palm Beach Show",
    description: "Foire citee par MBG Gallery comme lieu de rencontre autour des oeuvres.",
    image: "/mbg/palm-beach-show.jpg",
    alt: "Visuel The Palm Beach Show reference par MBG Gallery",
  },
] as const;

export const videos = [
  { title: "Impasses", year: "2016", url: "https://vimeo.com/152714699" },
  { title: "Sous le cerisier", year: "2015", url: "https://vimeo.com/148358191" },
  { title: "Le jardin", year: "2014", url: "https://vimeo.com/111969253" },
  { title: "Homo Fukushima", year: "2014", url: "https://vimeo.com/111328603" },
] as const;

export const contactDetails = {
  email: "marie.battaglini@me.com",
  phone: "+1 (646) 275-6364",
  places: ["United States", "L'Isle-sur-la-Sorgue, France"],
} as const;
