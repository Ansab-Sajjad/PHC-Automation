import Random_Textt from "./Random_Text";

function Add_Facilities(){

    it('F-1 Click on Facilities.', () => {
        cy.get('[id="Facilities"]').click()
            expect(true).to.equal(true)
  });

    it('F-2 Click on Add New Facility.', () => {
        cy.get('#openPopup').click({force: true})
        cy.wait(3000)
            expect(true).to.equal(true)
  });

    it('F-3 Add Facility Name.', () => {
        cy.get('[test-id="ti-facility-name"]').click().type("Facility" + Random_Textt())
            expect(true).to.equal(true)
  });

    it('F-4 Add Facility Address.', () => {
        cy.get('[test-id="ti-facility-address"]').type("Facility Address" + Random_Textt())
            expect(true).to.equal(true)
  });

    it('F-5 Add Entrance Name.', () => {
        cy.get('[id="react-select-3-input"]').type("North").type('{enter}').wait(2000)
        cy.get('[id="react-select-3-input"]').type("West").type('{enter}').wait(2000)
            expect(true).to.equal(true)
  });

    it('F-6 Click on Add Facility. ', () => {
        cy.get('[id="submitButton"]').click({force: true})
            expect(true).to.equal(true)
  });



}

export default Add_Facilities;