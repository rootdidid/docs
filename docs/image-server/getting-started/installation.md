---
sidebar_position: 2
---

# Installation
<!-- The easiest way to install Ararat is one-click deployment to Hye Cloud over the Hye Speed Network-->

### Get Source Ready
Enter the directory you want to install the image server to to, and clone the repository.

```
git clone https://github.com/Hye-Ararat/Image-Server.git
```

Now let's install it's dependencies

```
npm install
```

### Database Setup
Now it's time to setup your database. Create a new file called `.env` with the following contents (replace the database url with your own database information):

```env title=".env"
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Now it's time to initilize our database.
```
npx prisma db push
```

### Congratulations
Congrats! Your done! You can start your brand new image server with `node index.js`. 