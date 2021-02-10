# monero-dashboard

The Monero Dashboard was designed to be a nicely formatted viewport into your local Monero node.

![screenshot](readme_assets/screenshot.png)

# Getting Started

The dashboard is a node application that runs on port `3000` and connects to a full node running at `localhost:18081`. These defaults can be changed by creating a `.env` file (copied from`sample.env`).

**.env**

```
MONERO_HOST=10.1.1.1
MONERO_PORT=18081
```

All Settings:

```
MONERO_HOST=<IP of remote node> | defaults to localhost
MONERO_PORT=<port of remote node> | defaults to 18081
TICKER=<enable XMR ticker> | defaults to false
PORT=<port to run the app> | defaults to 3000, needs elevated access to run at 80
```

That said, the host machine will need to have `node` and `npm` installed.

To Start the dashboard, run `npm start`

# Contributing

Please feel free to either submit issues for improvements, or fork the repo and make pull requests.

The client will also need a .env file created in `client/` to allow the react server and node api servers to co-exist.

```
PORT=3001
```

To get started, run the following commands:

```
npm run init:dev
npm run dev
```

This will start the api server on port `3000`, and the react server on `3001`. Do your testing/dev against `localhost:3001`

Prettier and eslint will keep your code in line with the coding standards for the project.

### Donate

8Adfyz4eUijhttLTa4W3Vzj2SFZGVWyT6GX4HADXScQ1d5FgyGssQETHwKZhSn7CStWafUcXzr6758njdqXPsYMdSEkLMyb

![qr](client/src/qr.jpg)
