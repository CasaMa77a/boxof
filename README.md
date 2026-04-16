# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

### Deploy su Railway

Questo progetto e pronto per Railway con Postgres.

1. Crea un servizio `Postgres` su Railway.
2. Collega questo repository come servizio `Node`.
3. Imposta queste variabili nel servizio Strapi:

```
NODE_ENV=production
HOST=0.0.0.0
PORT=${{PORT}}
PUBLIC_URL=https://<tuo-dominio-railway>
APP_KEYS=<chiave1>,<chiave2>,<chiave3>,<chiave4>
API_TOKEN_SALT=<valore-lungo-casuale>
ADMIN_JWT_SECRET=<valore-lungo-casuale>
TRANSFER_TOKEN_SALT=<valore-lungo-casuale>
JWT_SECRET=<valore-lungo-casuale>
ENCRYPTION_KEY=<valore-lungo-casuale>
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

Note:

- Se `DATABASE_URL` e presente, l'app usa `postgres` automaticamente anche senza `DATABASE_CLIENT=postgres`.
- Railway ha filesystem effimero: gli upload locali di Strapi in `public/uploads` non sono persistenti. Per produzione usa un volume Railway oppure un provider esterno come S3 o Cloudinary.
- Railway rileva gia `npm run build` e `npm run start`; non serve altro file di deploy per l'avvio base.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
