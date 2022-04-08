// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.

class Employee {
   constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee"
   }

   // Function to access Employee name
   getName() {
      return this.name;
   }

   // Function to access Employee id
   getId() {
      return this.id;
   }

   // Function to access Employee email
   getEmail() {
      return this.email;
   }

   // Function to access Employee role
   getRole() {
      return this.role;
   }
}

module.exports = Employee;
