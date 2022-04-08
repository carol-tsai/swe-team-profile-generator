const Employee = require('./Employee');

class Intern extends Employee {

   // Creates an Intern with name, id, email, school, and role
   constructor(name, id, email, school) {
      super(name, id, email);
      this.github = school;
   }

   // Function to access Intern github
   getSchool() {
      return this.school;
   }

   //Function returns Engineer as role
   getRole() {
      return "Intern";
   }

}

module.exports = Intern;