
import Random_Textt from "./Random_Text";

function Edit_Vehicles(){

    it('V-1 Click on Settings.', () => {
        cy.get('.expand').click({force: true})
        expect(true).to.equal(true)
    });

    it('V-2 Click on Vechicles.', () => {
        cy.get(':nth-child(12) > .relative > .cursor-pointer > :nth-child(2)').click({force: true})
        cy.wait(3000)
        expect(true).to.equal(true)
    });

it('V-3 Click on Actions button.', () => {
    cy.get(':nth-child(3) > :nth-child(6) > .table-dropdown > #dropdown-basic').click({force: true})
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('V-4 Click on Edit Vehicle.', () => {
    cy.get('[test-id="ti-edit-vehicle"]').click({force: true})
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('V-5 Edit Vehicle Name.', () => {
    cy.get('[id="vehicleName"]').clear().wait(2000).type("Vehicle " + Random_Textt(), {delay: 100})
    cy.wait(2000) 
    expect(true).to.equal(true)
});

it('V-6 Edit Vehicle type.', () => {
    cy.get('.w-100 > :nth-child(2)').click().wait(2000)//.type("wheelchair").type('{enter}').wait(4000)
    cy.get('#react-select-3-option-1').click()
});

it('V-7 Click on save button.', () => {
    cy.get('.footer-wrap > .btn-primary').click({force: true})
    cy.wait(3000)
    expect(true).to.equal(true)
});


}
export default Edit_Vehicles;