import type { StrapiApp } from '@strapi/strapi/admin';
import Logo from './extensions/boxf.png';

export default {
  config: {
    locales: ['it'],
    theme: {
      light: {
        colors: {
          // Colori primari - tutto bianco
          primary100: '#ffffff',
          primary200: '#f5f5f5',
          primary500: '#000000',
          primary600: '#000000',
          primary700: '#000000',
          
          // Sfondi - bianco
          neutral0: '#ffffff',
          neutral100: '#ffffff',
          neutral150: '#fafafa',
          neutral200: '#f5f5f5',
          neutral300: '#eeeeee',
          neutral400: '#cccccc',
          neutral500: '#888888',
          neutral600: '#666666',
          neutral700: '#444444',
          neutral800: '#222222',
          neutral900: '#000000',
          neutral1000: '#000000',
          
          // Testo - nero
          buttonNeutral0: '#ffffff',
          buttonPrimary500: '#000000',
          buttonPrimary600: '#222222',
          
          // Sidebar e header - bianco
          alternative100: '#ffffff',
          alternative200: '#f5f5f5',
          alternative500: '#000000',
          alternative600: '#000000',
          alternative700: '#000000',
          
          // Danger colors (per azioni di cancellazione)
          danger100: '#ffeaea',
          danger200: '#ffcccc',
          danger500: '#cc0000',
          danger600: '#aa0000',
          danger700: '#880000',
          
          // Success colors
          success100: '#eaffea',
          success200: '#ccffcc',
          success500: '#008800',
          success600: '#006600',
          success700: '#004400',
          
          // Warning colors
          warning100: '#fff8e6',
          warning200: '#ffedcc',
          warning500: '#cc8800',
          warning600: '#aa7700',
          warning700: '#886600',
        },
      },
      dark: {
        colors: {
          // Mantieni il tema dark simile ma con meno blu
          primary100: '#1a1a1a',
          primary200: '#2a2a2a',
          primary500: '#ffffff',
          primary600: '#ffffff',
          primary700: '#eeeeee',
          
          neutral0: '#0a0a0a',
          neutral100: '#1a1a1a',
          neutral150: '#222222',
          neutral200: '#2a2a2a',
          neutral300: '#3a3a3a',
          neutral400: '#4a4a4a',
          neutral500: '#888888',
          neutral600: '#aaaaaa',
          neutral700: '#cccccc',
          neutral800: '#dddddd',
          neutral900: '#eeeeee',
          neutral1000: '#ffffff',
        },
      },
    },
    tutorials: false,
    notifications: { releases: false },
    head: {
      favicon: Logo,
    },
    menu: {
      logo: Logo,
    },
    auth: {
      logo: Logo,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log('Admin panel initialized');
  },
};
