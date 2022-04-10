const Employee = require("../lib/Employee");

// Tests to write
// create employee positive and negative
// Test getName positive and negative
// Test getId positive and negative
// Test getEmail positive and negative
// Test getRole positice and negative
describe("Employee", () => {
   // TODO: Add a comment describing the purpose of the following test suite
   describe("Initialization", () => {
      it("should create a new employee object", () => {
         const newEmployee = new Employee('Sam', '2', 'sam@gmail.com');
         expect(typeof(newEmployee)).toBe("object");
      });
   });
   it("should return a name when getName() is called", () => {
      const newEmployee = new Employee('Sam', 2, 'sam@gmail.com');
      const name = 'Sam';
      expect(newEmployee.getName()).toEqual(name);
   });
   it("should return an id when getId() is called", () => {
      const newEmployee = new Employee('Sam', 2, 'sam@gmail.com');
      const id = 2;
      expect(newEmployee.getId()).toEqual(id);
   });
   it("should return 'Employee' when getRole() is called", () => {
      const newEmployee = new Employee('Sam', '2', 'sam@gmail.com');
      const role = 'Employee';
      expect(newEmployee.getRole()).toEqual(role);
   });
   it("should return an email when getEmail() is called", () => {
      const newEmployee = new Employee('Sam', '2', 'sam@gmail.com');
      const email = 'sam@gmail.com';
      expect(newEmployee.getEmail()).toEqual(email);
   });
});
