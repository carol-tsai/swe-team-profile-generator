// Install packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { ADDRGETNETWORKPARAMS } = require('dns');

// Questions for user input
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

// Function that takes in user input and returns a manger object
function addManager() {
   inquirer.prompt(managerq)
      .then((response) => {
         const newManager = new Manager(response.name, response.id, response.email, response.office)
         writeManager(newManager);
         addTeamMates();
      })
   return;
}

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
                  //team.push(newEngineer);
                  writeEngineer(newEngineer);
                  addTeamMates();
               })
         } else if (response.member === "Intern") {
            inquirer.prompt(internq)
               .then(response => {
                  const newIntern = new Intern(response.name, response.id, response.email, response.school);
                  //team.push(newIntern)
                  writeIntern(newIntern);
                  addTeamMates();
               })
         } else {
            finishHTML();
         }
      })
}

// Takes in user input, returns an array of employee objects
function makeTeam() {
   console.log('Please build your team 👥')
   startHTML();
   let team = [];
   const manager = addManager();
   //console.log(manager);
   //const teamMates = addTeamMates();
   //team.concat(teamMates);
}

// Function that takes in an array of Employees and starts to write an HTML file
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
   return fs.appendFile('./dist/team.html', data, (err) => {
      if (err) {
         console.log(err);
      } 
   });
}

// Function that appends a manager card to the html file
function writeManager(manager) {
   const data = `
       <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class = "card-subtitle">Manager</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${manager.id}</li>
               <li class="list-group-item">email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
               <li class="list-group-item">office number: ${manager.office}</li>
            </ul>
         </div>
      </div>
   `;
   fs.appendFile('./dist/team.html', data, (err) => {
      if (err) {
         console.log(err);
      } 
   });
}

// Function that appends a engineer card to the html file
function writeEngineer(engineer) {
   const data = `
         <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle">Engineer</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${engineer.id}</li>
               <li class="list-group-item">email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
               <li class="list-group-item">github: <a href = "https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
         </div>
      </div>`;
   fs.appendFile('./dist/team.html', data, (err) => {
      if (err) {
         console.log(err);
      } 
   });
}

// Function that appends a intern card to the html file
function writeIntern(intern) {
   const data = `      <div class="card m-2" style="width: 18rem;">
         <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle">Intern</h6>
            <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${intern.id}</li>
               <li class="list-group-item">email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
               <li class="list-group-item">school: ${intern.school}</li>
            </ul>
         </div>
      </div>`
   fs.appendFile('./dist/team.html', data, (err) => {
      if (err) {
         console.log(err);
      }
   });
   return;
}

// Function that writes the bottom of the html file
function finishHTML() {
   fs.appendFile('./dist/team.html', `      </section>
   </section>
</body>`, (err) => {
      if (err) {
         console.log(err);
      }
   })
   console.log('Generated team profile page, output is in the dist folder');
}

makeTeam();