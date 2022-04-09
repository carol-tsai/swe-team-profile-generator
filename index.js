// Install packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { ADDRGETNETWORKPARAMS } = require('dns');

// Questions for user input
//todo write this
const managerq = [
   {
      type: 'input',
      message: "What is your team manager's name",
      name: 'name',
   },
   {
      type: 'input',
      message: 'Enter a short description of your project:',
      name: 'id',
   },
   {
      type: 'input',
      message: 'Enter command for installing dependencies:',
      name: 'office',
   },
   {
      type: 'input',
      message: 'Enter instructions for using this application:',
      name: 'next',
   },
];

//todo write this
const engineerq = [
   {
      type: 'input',
      message: "What is your team manager's name",
      name: 'name',
   },
   {
      type: 'input',
      message: 'Enter a short description of your project:',
      name: 'id',
   },
   {
      type: 'input',
      message: 'Enter command for installing dependencies:',
      name: 'office',
   },
   {
      type: 'input',
      message: 'Enter instructions for using this application:',
      name: 'next',
   },
];

//todo write this
const internq = [
   {
      type: 'input',
      message: "What is your team manager's name",
      name: 'name',
   },
   {
      type: 'input',
      message: 'Enter a short description of your project:',
      name: 'id',
   },
   {
      type: 'input',
      message: 'Enter command for installing dependencies:',
      name: 'office',
   },
   {
      type: 'input',
      message: 'Enter instructions for using this application:',
      name: 'next',
   },
];

//todo write this
// Function that takes in user input and returns a manger object
function addManager() {
   return;
}

//todo write this
// Function that takes in used input and returns and array of intern and engineer objects
function addTeamMates() {
   return [];
}

//todo write this
// Takes in user input, returns an array of employee objects
function makeTeam() {
   let team = [];
   const manager = addManager();
   team.push(manager);
   const teamMates = addTeamMates();
   team.concat(teamMates);
}

//todo write this
// Function that takes in an array of Employees and writes an HTML file
function writeHTML() {
   return;
}

// Runs the application
function init() {
   const team = makeTeam();
   writeHTML(team);
}