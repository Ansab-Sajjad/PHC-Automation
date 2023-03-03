import Random_Textt from "./Random_Text";

function Add_New_Crews(){

    it('NC-1 Click on Settings.', () => {
        cy.get('.expand').click({force: true})
        expect(true).to.equal(true)
    });

    it('NC-2 Click on Vechicles.', () => {
        cy.get(':nth-child(11) > .relative > .cursor-pointer > :nth-child(2)').click({force: true})
        cy.wait(3000)
        expect(true).to.equal(true)
    });
    
    it('NC-3 Click on New Crew button.', () => {
        cy.get('.text-end > .btn').click({force: true})
        cy.wait(3000) 
        expect(true).to.equal(true)
    });

    it('NC-4 Add Crew Name.', () => {
        cy.get('[id="crewName"]').type("Crew " + Random_Textt(), {delay: 100})
        cy.wait(4000) 
        expect(true).to.equal(true)
    });

    it('NC-5 Enter Password.', () => {
        cy.get('[id="password"]').type("Admin@123")
        cy.wait(2000) 
        expect(true).to.equal(true)
    });

    it('NC-6 Enter Confirm Password.', () => {
        cy.get('[id="cpassword"]').type("Admin@123")
        cy.wait(2000) 
        expect(true).to.equal(true)
    });

    it('NC-7 Select Vehicle.', () => {
        cy.get('[class="custom-select__indicators css-1wy0on6"]').click().wait(2000)
        cy.get('#react-select-3-option-0').click()
        cy.wait(2000) 
        expect(true).to.equal(true)
    });

    it('NC-8 Add Attendants.', () => {
        cy.get('[id="react-select-4-input"]').click().type("Test").type('{enter}').wait(2000)
    });

    it('NC-9 Click on Add Crew button.', () => {
        cy.get('.footer-wrap > .btn-primary').click({force: true})
        cy.wait(3000) 
        expect(true).to.equal(true)
    });

it('5- Verifying the Toast message', () => {
    cy.wait(1000);
   cy.get('.Toastify__toast-body',{timeout: 10000}).should('be.visible').should('have.text','Crew record added successfully')
    
});


}
export default Add_New_Crews;