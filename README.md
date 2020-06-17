# Datawiza Access Broker Documentation#

Welcome to the open-source [documentation](https://docs.datawiza.com) of [Datawiza Access Broker](https://datawiza.com)
It's built with [Vuepress](https://vuepress.vuejs.org/).


## Prerequisites
You need yarn to work on this project. You can get yarn [here](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

Install vuepress as a local dependency:
```
yarn add -D vuepress
```

## Run the documentation app with dev mode
Run the documentation app locally for dev:

```
yarn docs:dev
```
Then you should be able to access the documentation at http://localhost:8080/.

## Deploy the documentation on Firebase
```
yarn docs:build
```
```
firebase deploy
```

