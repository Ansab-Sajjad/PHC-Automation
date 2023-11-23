import Add_new_trip from "./Add_new_trip.cy";

function round_trip(){
    
    Add_new_trip()

    it('R-1 Click on Rpound Trip radio button. ', () => {
        cy.get('.slider').click().wait(2000)
    });


    it('R-2 Select Trip Type.', () => {
        cy.get('[id="trips.1.tripType"]').click()
        cy.get('#react-select-25-option-0').click()
        cy.wait(4000)

    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });


    it('R- ', () => {
        
    });



}
export default round_trip;