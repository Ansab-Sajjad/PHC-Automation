
function Visit_URL() {

it('Visit to the URL.', () => {
    cy.visit('https://phc-admin-qa.troonlab.io/', {failOnStatusCode: false});
});

}
export default Visit_URL;