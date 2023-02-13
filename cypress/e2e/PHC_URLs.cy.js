
function Visit_URL() {

it('Visit to the URL.', () => {
    cy.visit('https://phc-admin-qa.troonlab.io/', {failOnStatusCode: false});            // ==> QA Enviroment
    // cy.visit('https://phc-admin-dev.troonlab.io/', {failOnStatusCode: false});       // ==> DEV Enviroment

});

}
export default Visit_URL;