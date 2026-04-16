import type { Schema, Struct } from '@strapi/strapi';

export interface ProdottoProdotto extends Struct.ComponentSchema {
  collectionName: 'components_prodotto_prodottos';
  info: {
    displayName: 'prodotto';
  };
  attributes: {
    anno: Schema.Attribute.String;
    descrizione: Schema.Attribute.Text;
    genere: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listen: Schema.Attribute.Text;
    nome: Schema.Attribute.String;
    tipo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prodotto.prodotto': ProdottoProdotto;
    }
  }
}
