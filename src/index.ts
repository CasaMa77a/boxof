import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Inizializza l'ordine per prodotti esistenti
    const prodotti = await strapi.entityService.findMany('api::prodotti.prodotti', {
      sort: { id: 'asc' },
    });
    
    let prodottiOrdine = 1;
    for (const prodotto of prodotti) {
      if (!prodotto.ordine || prodotto.ordine === 0) {
        await strapi.entityService.update('api::prodotti.prodotti', prodotto.id, {
          data: { ordine: prodottiOrdine },
        });
      }
      prodottiOrdine++;
    }

    // Inizializza l'ordine per eventi esistenti
    const eventi = await strapi.entityService.findMany('api::eventi.eventi', {
      sort: { id: 'asc' },
    });
    
    let eventiOrdine = 1;
    for (const evento of eventi) {
      if (!evento.ordine || evento.ordine === 0) {
        await strapi.entityService.update('api::eventi.eventi', evento.id, {
          data: { ordine: eventiOrdine },
        });
      }
      eventiOrdine++;
    }
  },
};
