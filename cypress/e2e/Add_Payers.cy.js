
import Random_Textt from "./Random_Text";

function Add_Payers() {

    it('P1 - Click on the Payers.', () => {
    cy.get(':nth-child(4) > li > .undefined > :nth-child(3)').click()
    cy.wait(2000)
    expect(true).to.equal(true)

});

    it('P2 - Click on New Payer Button.', () => {
        cy.get('.text-end > .btn').click()
        cy.wait(3000)
        expect(true).to.equal(true)
});

    it('P3 - Enter Name,.', () => {
    cy.get('[id="name"]').type("ANSAB " + Random_Textt());
    cy.wait(2000)
    expect(true).to.equal(true)
});
it('P4 - Enter First Name.', () => {
    cy.get('[id="firstName"]').type("ANSAB");
    cy.wait(2000)
    expect(true).to.equal(true)
});

it('P5 - Enter Last Name.', () => {
    cy.get('[id="lastName"]').type("Sajjad")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P6 - Enter Email.', () => {
    cy.get('[id="email"]').type("ansab@troontechnologies.com")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P7 - Enter Phone Number.', () => {
    cy.get('[type="tel"]').type("3483745911")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P8 - Enter Credit info.', () => {
    cy.get('[id="creditInfo"]').type("230")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P9 - Enter PAyer ID.', () => {
    cy.get('[id="payerId"]').type(Random_Textt())
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P10 - Enter Password.', () => {
    cy.get('[id="password"]').type("Admin@123")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P11 - Enter Confirm Password.', () => {
    cy.get('[id="cpassword"]').type("Admin@123")
  cy.wait(2000)
    expect(true).to.equal(true)
});

it('P12 - Click on Add Payer button.', () => {
    cy.get('[type="submit"]').click();
});

it('13- Verifying the Toast message => Login Successful.', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Payer record updated successfully')
    cy.wait(2000)
});



}
export default Add_Payers;