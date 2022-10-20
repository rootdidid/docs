---
sidebar_position: 2
---

# Installing Ararat
<!-- The easiest way to install Ararat is one-click deployment to Hye Cloud over the Hye Speed Network-->

### Get Source Ready
Enter the directory you want to install Ararat to, and clone the repository.

```
git clone https://github.com/Hye-Ararat/Ararat.git
```

Now let's install Ararat's dependencies

```
npm install
```


### Ararat Setup
Now it's time to setup Ararat. Make sure you already have either a PostgreSQL or CockroachDB database ready for deployment. Let's run the setup wizard to get everything ready.

```
node configure.js
```

Fill out the information which the setup wizard asks of you.

After the setup wizard is complete, we're ready to build Ararat.

```
npm run build
```

### Congratulations
Congrats! Your done! You can start your shiny new Ararat instance with `npm run start`. 

The Ararat client has a 1-click command for installing Hye Lava.
