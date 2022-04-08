const Employee = require('./Employee');

class Engineer extends Employee {

   // Creates an Engineer with name, id, email, github, and role
   constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
      this.role = "Engineer";
   }

   // Function to access Engineer github
   getGithub() {
      return this.github;
   }

}

module.exports = Engineer;