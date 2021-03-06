const Employee = require('./Employee');

class Manager extends Employee {

   // Creates an Manager with name, id, email, office number, and role
   constructor(name, id, email, office) {
      super(name, id, email);
      this.office = office;
   }

   // Function to access Manager github
   getOffice() {
      return this.office;
   }

   //Function returns Engineer as role
   getRole() {
      return "Manager";
   }

}

module.exports = Manager;