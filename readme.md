# MovieIn

Webapp to share videos, short-films, animations, anything. Like a `Netflix` and `Kickstarter` together.

## Getting Started

For get up and running this application in your machine, you need to do some steps before. 


### Prerequisites

```
MongoDB
NodeJS and NPM/Yarn
```

### Installing

First of all you need to install MongoDB running as a service in your environment. For that I recommend the [oficial documentation](https://docs.mongodb.com/manual/installation/).

Then you can download the repo files or clone it. When you have this project running in your local machine, make sure you have nodejs installed running `node -v` in your terminal.

Navigate into the folder and install the dependencies for server sides, then serve it:
```
cd Movie-In/server
npm i
npm run dev
```
Then install the client dependencies, but for that I recommend you have yarn installed. If not, just run `npm i -g yarn`. After that, just run:
```
cd Movie-In/client
yarn install
yarn dev
```

After these steps, you'll be able to access client side at port `3000` and server side at `3001`

## Built With

* [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces
* [GraphQL](http://graphql.org) - A query language for API construction
* [Apollo](https://www.apollographql.com/) - Used for connect frontend to GraphQL API
