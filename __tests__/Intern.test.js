const Intern = require("../lib/Intern");

describe("Intern ", () => {
   // This test suite will test that the Intern constructor and methods work
   describe("Initialization", () => {
      it("should create a new employee object", () => {
         const newIntern = new Intern('Sam', '2', 'sam@gmail.com', 'UC Berkeley');
         expect(typeof (newIntern)).toBe("object");
      });
   });
   it("should return a name when getName() is called", () => {
      const newIntern = new Intern('Sam', 2, 'sam@gmail.com', 'UC Berkeley');
      const name = 'Sam';
      expect(newIntern.getName()).toEqual(name);
   });
   it("should return an id when getId() is called", () => {
      const newIntern = new Intern('Sam', 2, 'sam@gmail.com', 'UC Berkeley');
      const id = 2;
      expect(newIntern.getId()).toEqual(id);
   });
   it("should return 'Intern' when getRole() is called", () => {
      const newIntern = new Intern('Sam', '2', 'sam@gmail.com', 'UC Berkeley');
      const role = 'Intern';
      expect(newIntern.getRole()).toEqual(role);
   });
   it("should return an email when getEmail() is called", () => {
      const newIntern = new Intern('Sam', '2', 'sam@gmail.com', 'UC Berkeley');
      const email = 'sam@gmail.com';
      expect(newIntern.getEmail()).toEqual(email);
   });
   it("should return a github user when getGithub() is called", () => {
      const newIntern = new Intern('Sam', '2', 'sam@gmail.com', 'UC Berkeley');
      const school = 'UC Berkeley';
      expect(newIntern.getSchool()).toEqual(school);
   });
});
