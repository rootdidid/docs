---
sidebar_position: 2
---

# Installing Ararat
<!-- The easiest way to install Ararat is one-click deployment to Hye Cloud over the Hye Speed Network-->
:::tip

We reccomend using the most recent **LTS release of Node.JS**.

:::

### Get Source Ready
Enter the directory you want to install Ararat to, and clone the repository.

```
git clone https://github.com/Hye-Ararat/Ararat.git
```

Now let's install Ararat's dependencies

```
npm install
```

### Database Setup
Now it's time to setup your database. Create a new file called `.env` with the following contents (replace the database url with your own PostgreSQL database information):

```env title=".env"
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Now it's time to initilize our database.
```
npx prisma db push
```

### Ararat Setup
Now it's time to setup Ararat. Create a new file called `.env.local` with the following contents (replace environment variables with your appropriate data. You can generate an ENC_KEY **[here](https://www.browserling.com/tools/random-hex)**.)

```env title=".env.local"
ENC_KEY=replacewithrandom32characterstring
PANEL_URL=http://example.com:3000
```

Now we're ready to build Ararat.
```
npm run build
```

### Congratulations
Congrats! Your done! You can start your shiny new Ararat instance with `npm run start`. 

The Ararat client has a 1-click command for installing Hye Lava.