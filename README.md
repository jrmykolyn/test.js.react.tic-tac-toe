# Tic-Tac-Toe

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Attribution](#attribution)

## About
This repository features a tic-tac-toe-style game, implemented in React. This game is browser-based, and can be played by one or two human players.

## Prerequisites
In order to run this project, please ensure that both Node and npm are installed on your system.

## Installation
To install the dependencies for this project, complete the following steps:
  - Download or clone the repository to your local file system.
  - Using the command line, navigate to the root of the repository.
  - Run `npm install`.

## Usage
To being a new game, run the following command: `npm run start`. This command will create a new local game server, which will listen for requests at `http://localhost:3000/`. If the `start` command does not automatically open the default browser, do so and navigate to the correct URL.

By default, the game runs in 'two player' mode. In this mode, two human players take turns placing donut ('O') and celery ('X') tokens on the board.

To enable 'single player' mode, navigate to the following url: `http://localhost:3000/mode=single`. In this mode, a single human player places the donut tokens, and the celery tokens are placed by the game itself.

In the case of a win or draw, play is stopped, the appropriate message is displayed, and the player is prompted to restart.

## Documentation
Currently, this project does not include any external documentation.

For an overview of the project's evolution, please consult the CHANGELOG.

## Attribution
- `donut.svg` and `celery.svg` assets provided by KitchenMate.
