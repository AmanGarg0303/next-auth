Open the project and do `npm i` in terminal to install node_modules.

Create a `.env` file in root folder which includes -

> DATABASE_URL="postgresql://host:password@localhost:5432/dbName?schema=public"

> AUTH_SECRET= Random secret which will be used by jwt and in authentication

> GITHUB_CLIENT_ID=
> GITHUB_CLIENT_SECRET=

> GOOGLE_CLIENT_ID=
> GOOGLE_CLIENT_SECRET=

Then do `npm run dev` in terminal
