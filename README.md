# Getting Started

## Prerequisites

You need a working version of docker-compose.
To see if you have docker-composed installed, run `docker-compose --version`.
If you don't have docker-compose installed, follow the instructions here: https://docs.docker.com/compose/install/

## Running the app

In the root project directory, run:

### `docker-compose -f docker-compose.yml up`

Runs the app in the development mode.

## Manually testing the app

1. Run `docker-compose -f docker-compose.yml up`.

2. Once webpack compiles successfully, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. Type in a valid IP address and click `Search`. If the IP Address is a public address, it should give the latitude and longitude information. If the IP Address is private (ex: `234.1.2.2`), it should show an error message.

## Automated testing

This project uses jest for unit tests. To run the tests, run: 
### `npm run test:unit`
