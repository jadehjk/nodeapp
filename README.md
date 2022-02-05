# Getting Started

## Running the app

In the root project directory, run:

### `docker-compose -f docker-compose.yml up`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Manually testing the app

1. Run `docker-compose -f docker-compose.yml up`. This should open up the app in a web browser

2. Type in a valid IP address and click `Search`. If the IP Address is a public address, it should give the latitude and longitude information. If the IP Address is private, it should show an error message.

## Automated testing

This project uses jest for unit tests. To run the tests, run: 
### `cd censys && npm test`
