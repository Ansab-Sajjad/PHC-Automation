import Random_Textt from "./Random_Text";

function Add_Patient(){

    it('P-1 Click on Patients.', () => {
        cy.get('#Patients').click({force: true})
        cy.wait(3000)
            expect(true).to.equal(true)
  });

    it('P-2 Click on Add New Patient.', () => {
        cy.get('#openPopup').click({force: true})
        cy.wait(2000)
            expect(true).to.equal(true)
  });

    it('P-3 Enter First Name.', () => {
        cy.get('[id="firstName"]').type(Random_Textt())
        cy.wait(2000)
            expect(true).to.equal(true)
  });

    it('P-4 Enter Last Name.', () => {
        cy.get('[id="lastName"]').type(Random_Textt())
        cy.wait(2000)
            expect(true).to.equal(true)
  });

    it('P-5 Enter Phone Number.', () => {
        cy.get('[id="phoneNumber"]').type("4569871236")
        cy.wait(2000)
            expect(true).to.equal(true)
  });
    
    it('P-6 Enter Email.', () => {
        cy.get('[id="email"]').type("ansab@troontechnologies.com")
        cy.wait(2000)
            expect(true).to.equal(true)
  });

    it('P-7 Enter weight.', () => {
        cy.get('[id="weight"]').type("46")
        cy.wait(2000)
            expect(true).to.equal(true)
  });

    it('P-8 Enter Date of Birth.', () => {
        cy.get('[id="dob"]').click().type("03/08/2005").type('{enter}')
        cy.wait(2000)

            expect(true).to.equal(true)
  });

  it('P-9 Click on Add Patient button.', () => {
    cy.get('#submitButton').click({force: true})
  });


}

export default Add_Patient;