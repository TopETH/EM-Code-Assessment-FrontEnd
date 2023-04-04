# Code Assessment for Front-end Engineer

## Goal

The goal of this technical assessment is to evaluate ability and core competency in areas relevant to the front-end development at EventMobi.

These include:

1. Ability to use JavaScript MVC frameworks to interact with APIs.
2. Competence with creation and implementation of basic designs.
3. Aptitude with HTML and CSS to create clean, readable and performant code.

Through the completion of this test, you will be able to demonstrate your abilities as a developer.

## Description

Use the API provided by GitHub Gist API (which is documented [here](https://docs.github.com/en/free-pro-team@latest/rest/reference/gists)), create a basic website as a single-page app with React.

Your task is to use Gist API to create a simple single-page application. A user should be able to enter a username and get the full list of public Gists for that user. The following are a list of functional requirements for this assignment:

1. Search: When a user enters a username, it should be able to get a full list of public Gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges).
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

## How to test

1. Install node modules by `npm install` or `yarn`
2. Run the project by `npm run dev` or `yarn dev`
3. It will open [`http://localhost:3000`](https://localhost:3000)
4. You can input any github username you want to search.
5. It will show his all gists and if you want to check every gist detail, you can just click on it.
