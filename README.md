# Getting Started

## Prerequisites

You need a working version of docker-compose and nodejs.

You can see your version of docker-compose by running `docker-compose --version`.

To install docker-compose, follow the download instructions here: https://docs.docker.com/compose/install/

You can see your version of nodejs by running `node -v`.

To install nodejs, follow the download instructions here: https://nodejs.org/en/download/

## Running the app

In the root project directory, run: `docker-compose -f docker-compose.yml up`

This runs the app in development mode. Changes should automatically reload the app.

## Manually testing the app

1. Run `docker-compose -f docker-compose.yml up`.

2. Once webpack compiles successfully, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. Type in a valid IP address and click `Search` or press `Enter`. If the IP Address is a public address (ex: `142.1.1.1`), it should give the latitude and longitude information.

4. If the IP Address is private (ex: `234.1.2.2`), it should show an error message.

5. The app should prevent users from entering malformed IP addresses. It uses the `is-ip` npm package for determining if an address has the correct format.

## Automated testing

This project uses jest for unit tests. The front-end unit test suite is inside `client/src`. The back-end unit test suite is inside `server/locations`. To run both front-end and back-end tests, run `npm run test:unit`. To run only the front-end test suite, run `npm run test:unit:frontend`. To run only the back-end test suite, run `npm run test:unit:backend:`

Note that you need to have run the compose command at least once before running the tests in order for the tests to have the correct packages installed.
