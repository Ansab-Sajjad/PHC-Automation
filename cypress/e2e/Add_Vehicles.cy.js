
import Random_Textt from "./Random_Text";

function Add_Vehicles(){

    it('V-1 Click on Settings.', () => {
        cy.get('.expand').click({force: true})
        expect(true).to.equal(true)
    });

    it('V-2 Click on Vechicles.', () => {
        cy.get(':nth-child(12) > .relative > .cursor-pointer > :nth-child(2)').click({force: true})
        cy.wait(3000)
    expect(true).to.equal(true)
    });

    it("V3- Click on '+ New Vehicle' button.", () => {
        cy.get('.text-end > .btn').click({force: true})
        cy.wait(3000) 
    expect(true).to.equal(true)
    });

    it('V-4 Add Vehicle Name.', () => {
        cy.get('[id="vehicleName"]').type("Vehicle " + Random_Textt(), {delay: 100})
        cy.wait(2000) 
        expect(true).to.equal(true)
    });

    it('V-6 Edit Vehicle type.', () => {
        cy.get('.w-100 > :nth-child(2)').click().wait(2000)//.type("wheelchair").type('{enter}').wait(4000)
        cy.get('#react-select-3-option-3').click()
    });
    

    it('V-6 Click on Add Vehicle button.', () => {
        cy.get('.footer-wrap > .btn-primary').click({force: true})
        cy.wait(3000) 
    expect(true).to.equal(true)
    });

    it("V7- Click on '+ New Vehicle' button.", () => {
        cy.get('.text-end > .btn').click({force: true})
        cy.wait(3000) 
    expect(true).to.equal(true)
    });

    it('V-8 Add Vehicle Name.', () => {
        cy.get('[id="vehicleName"]').type("Vehicle " + Random_Textt(), {delay: 100})
        cy.wait(2000) 
        expect(true).to.equal(true)
    });

    it('V-9 Click on cancel button. ', () => {
        cy.get('.btn-secondary').click({force: true})
        cy.wait(3000) 
    expect(true).to.equal(true)
    });





}
export default Add_Vehicles;