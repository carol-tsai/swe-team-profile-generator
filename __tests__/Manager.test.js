const Manager = require("../lib/Manager");

describe("Manager ", () => {
   // This test suite will test that the Manager constructor and methods work
   describe("Initialization", () => {
      it("should create a new employee object", () => {
         const newManager = new Manager('Sam', '2', 'sam@gmail.com', 1);
         expect(typeof (newManager)).toBe("object");
      });
   });
   it("should return a name when getName() is called", () => {
      const newManager = new Manager('Sam', 2, 'sam@gmail.com', 1);
      const name = 'Sam';
      expect(newManager.getName()).toEqual(name);
   });
   it("should return an id when getId() is called", () => {
      const newManager = new Manager('Sam', 2, 'sam@gmail.com', 1);
      const id = 2;
      expect(newManager.getId()).toEqual(id);
   });
   it("should return 'Manager' when getRole() is called", () => {
      const newManager = new Manager('Sam', '2', 'sam@gmail.com', 1);
      const role = 'Manager';
      expect(newManager.getRole()).toEqual(role);
   });
   it("should return an email when getEmail() is called", () => {
      const newManager = new Manager('Sam', '2', 'sam@gmail.com', 1);
      const email = 'sam@gmail.com';
      expect(newManager.getEmail()).toEqual(email);
   });
   it("should return a github user when getGithub() is called", () => {
      const newManager = new Manager('Sam', '2', 'sam@gmail.com', 1);
      const office = 1;
      expect(newManager.getOffice()).toEqual(office);
   });
});
