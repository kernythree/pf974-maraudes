export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;

export const site = {
  name: 'Maraudes Planning Familial 974',
  title: "Maraudes Planning Familial 974",
  description: 'Site Maraudes Planning Familial 974',
  lang: 'fr',
  email: 'https://www.planning-familial.org/',
  logo: withBase('/logo/logo_pf974_white.jpg'),
  home: {
    title: "PAPILLONS DE NUIT",
    intro:
      "planning des maraudes et infos utiles !",
    cover: {
      src: withBase('/logo/baniere_infos.png'),
      alt: "Photographie de couverture",
      width: 4206,
      height: 2804,
    },
  },
};

export const menuItems = [
  { label: 'Page 1', href: withBase('/first-page/'), description: 'Page generique' },
];
