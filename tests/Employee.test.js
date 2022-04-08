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
      // TODO: Test if can instantiate Employee positive
      it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
         // Arrange
         const text = 'Pick up milk';

         // Act
         const obj = new Todo(text);

         // Assert
         expect(obj.text).toEqual(text);
      });

      // TODO: Test if can instantiate Employee negavtive
      it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
         // Arrange
         const text = 'Pick up milk';

         // Act
         const obj = new Todo(text);

         // Assert
         expect(obj.text).toEqual(text);
      });
   });
});
