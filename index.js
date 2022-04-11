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
      message: "What is the team manager's name?",
      name: 'name',
   },
   {
      type: 'input',
      message: "What is the team manager's id?",
      name: 'id',
   },
   {
      type: 'input',
      message: "What is the team manager's email?",
      name: 'email',
   },
   {
      type: 'input',
      message: "What is the team manager's office number?",
      name: 'office',
   },
];

//todo write this
const engineerq = [
   {
      type: 'input',
      message: "What is your engineer's name?",
      name: 'name',
   },
   {
      type: 'input',
      message: "What is your engineer's id?",
      name: 'id',
   },
   {
      type: 'input',
      message: "What is your engineer's email?",
      name: 'email',
   },
   {
      type: 'input',
      message: "What is your engineer's github username?",
      name: 'github',
   },
];

//todo write this
const internq = [
   {
      type: 'input',
      message: "What is your intern's name?",
      name: 'name',
   },
   {
      type: 'input',
      message: "What is your intern's id?",
      name: 'id',
   },
   {
      type: 'input',
      message: "What is your intern's email?",
      name: 'email',
   },
   {
      type: 'input',
      message: "What is your intern's school?",
      name: 'school',
   },
];

//todo write this
// Function that takes in user input and returns a manger object
function addManager() {
   inquirer.prompt(managerq)
      .then((response) => {
         const newManager = new Manager(response.name, response.id, response.email, response.office)
         writeManager(newManager);
         addTeamMates();

         // let team = [newManager];
         // const restOfTeam = addTeamMates();
         // team.concat(restOfTeam);
      })
   return;
}

//todo write this
// Function that takes in used input and returns and array of intern and engineer objects
function addTeamMates() {
   inquirer.prompt([
      {
         type: 'list',
         message: 'Which type of team member would you like to add?',
         name: 'member',
         choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
      }
   ])
      .then((response) => {
         if (response.member === "Engineer") {
            inquirer.prompt(engineerq)
               .then(response => {
                  const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                  writeEngineer();
               })
         } else if (response.member === "Intern") {
            inquirer.prompt(internq)
               .then(response => {
                  const newIntern = new Intern(response.name, response.id, response.email, response.school);
                  writeIntern();
               })
         } else {
            finishHTML();
         }
      })
}

//todo write this
// Takes in user input, returns an array of employee objects
function makeTeam() {
   console.log('Please build your team 👥')
   let team = [];
   const manager = addManager();
   //console.log(manager);
   //const teamMates = addTeamMates();
   //team.concat(teamMates);
}

//todo write this
// Function that takes in an array of Employees and writes an HTML file
function writeHTML() {
   return;
}

function writeManager(manager) {
   return;
}

function writeEngineer(engineer) {
   return;
}

function writeInter(intern) {
   return;
}

function finishHTML() {
   return;
}

// Runs the application
function init() {
   const team = makeTeam();
   writeHTML(team);
}

makeTeam();