# Conductivity Frontend
Single page application to create, import and visualize continuous conductive paths using the web browser 

## Features

- Create grid manually
- Visualize the visualize continuous conductive in real time
- Create grid importing a text file
- Store history of grid
- Visualize list of grids created in the past
- Clean history of grids

## Tech

Technologies, libraries, gems and other tools used for this development:

- ReactJS: JavaScript library for building user interfaces 
- Material UI: Open-source React component library that implements Google's Material Design
- Npm - Javascript package manager

## Installation

Conductivity Frontend requires [NodeJS](https://nodejs.org) +v18.18.0 to run and [NPM](https://www.npmjs.com/) +9.8.1
Install the dependencies and and start the server

```sh
cd conductivity-frontend
npm install
npm start
```

## How to use

### New Grid

#### Common
- Click on the "New Grid" tab
- Click on "SAVE IN HISTORY" button to persist the current grid

#### File import mode
- Click on "READ FROM FILE" button and pick a text file
- If the file format is correct, the data in file will be displayed in the grid

#### Manual mode
- By default the size input field value is 5 but you can change it
- The grid initially is filled of zeros, clicking on the cell the cell will change from 0 to 1 and vice versa

#### Random mode
- By default the size input field value is 5 but you can change it
- Click on "GENERATE RANDOM" button to randomize the data in grid

## File upload format
- Check the following examples of [grid1.txt](/examples/grid1.txt) [grid2.txt](/examples/grid2.txt)
- The file should have the .txt extension
- The file should separate the row values using a coma ","
- The file should separate columns using new line char ""\n"
### History
- Click on the "History" tab
- If there are no data in database the message "You don't have any grid records" will be displayed
- When data is available in database, a table should be displayed with all the records created in the past
- Click on the "Display" button to display the associated grid to the record
- Click on the "CLEAR DATA" button to clear all records in database

## License
MIT