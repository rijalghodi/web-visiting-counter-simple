# Web Visiting Counter

## Description

This app will display the number of your visiting time.

## How to use

- Configure the environment variables by creating .env file from template provided by .env-example file.

  - PORT : port you want to connect
  - SECRET_CODE: fill

- install all packages. Run `npm install` or `yarn`
- Run `npm run dev` or `yarn dev`
- Go to `localhost:[PORT]`
- Try to refresh the page to see the increment of your visits
- Try to open `localhost:[PORT]` in different tabs, and see the difference

## What I Learn

- Session and cookies in express by using `express-session` module
