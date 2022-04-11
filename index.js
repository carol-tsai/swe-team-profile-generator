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
                  addTeamMates();
               })
         } else if (response.member === "Intern") {
            inquirer.prompt(internq)
               .then(response => {
                  const newIntern = new Intern(response.name, response.id, response.email, response.school);
                  writeIntern();
                  addTeamMates();
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
function startHTML() {
   const data = `
   <!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />

   <title>Team Profile</title>
</head>

<body>
   <header class="jumbotron jumbotron-fluid bg-dark text-light text-center">
      <h1>
         My Team
      </h1>
   </header>
   <section class="container">
      <section class="row justify-content-center">
   `
   fs.appendFile('./dist/team.html', data);
}

function writeManager(manager) {
   const data = `
       <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class = "card-subtitle">Manager</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${manager.id}</li>
               <li class="list-group-item">email: ${manager.email}</li>
               <li class="list-group-item">office number: ${manager.office}</li>
            </ul>
         </div>
      </div>
   `;
   fs.appendFile('./dist/team.html', data);
}

function writeEngineer(engineer) {
   const data = `
         <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle">Engineer</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${engineer.id}</li>
               <li class="list-group-item">email: ${engineer.email}</li>
               <li class="list-group-item">github: ${engineer.github}</li>
            </ul>
         </div>
      </div>`;
   fs.appendFile('./dist/team.html', data);
}

function writeIntern(intern) {
   const data = `      <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle">Intern</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${intern.id}</li>
               <li class="list-group-item">email: ${intern.email}</li>
               <li class="list-group-item">school: ${intern.school}</li>
            </ul>
         </div>
      </div>`
   fs.appendFile('./dist/team.html', data);
}

function finishHTML() {
   return;
}

// Runs the application
function init() {
   startHTML();
   const team = makeTeam();
   
}

makeTeam();