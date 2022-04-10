const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
   // This test suite will test that the Engineer constructor and methods work
   describe("Initialization", () => {
      it("should create a new employee object", () => {
         const newEngineer = new Engineer('Sam', '2', 'sam@gmail.com', 'sam-codes');
         expect(typeof (newEngineer)).toBe("object");
      });
   });
   it("should return a name when getName() is called", () => {
      const newEngineer = new Engineer('Sam', 2, 'sam@gmail.com', 'sam-codes');
      const name = 'Sam';
      expect(newEngineer.getName()).toEqual(name);
   });
   it("should return an id when getId() is called", () => {
      const newEngineer = new Engineer('Sam', 2, 'sam@gmail.com', 'sam-codes');
      const id = 2;
      expect(newEngineer.getId()).toEqual(id);
   });
   it("should return 'Engineer' when getRole() is called", () => {
      const newEngineer = new Engineer('Sam', '2', 'sam@gmail.com', 'sam-codes');
      const role = 'Engineer';
      expect(newEngineer.getRole()).toEqual(role);
   });
   it("should return an email when getEmail() is called", () => {
      const newEngineer = new Engineer('Sam', '2', 'sam@gmail.com', 'sam-codes');
      const email = 'sam@gmail.com';
      expect(newEngineer.getEmail()).toEqual(email);
   });
   it("should return a github user when getGithub() is called", () => {
      const newEngineer = new Engineer('Sam', '2', 'sam@gmail.com', 'sam-codes');
      const github = 'sam-codes';
      expect(newEngineer.getGithub()).toEqual(github);
   });
});
