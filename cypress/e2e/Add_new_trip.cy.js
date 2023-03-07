import Random_Textt from "./Random_Text";

function Add_new_trip(){

    it('NT-1 Click on Control Center.', () => {
        cy.get('[id="Control Center"]').click({force:true})
    });
    it('NT-2 Click on New Trip button.', () => {
        cy.get('.text-end > .btn').click({force:true})
        cy.wait(3000)
    });


    it('NT-3 Select Payer ID.', () => {
        cy.get('#payerId > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        // cy.get('#react-select-3-option-2').click()
    });


    it('NT-4 Wait for 2 seconds. ', () => {
        cy.wait(2000);   
    });

    it('NT-5 Select Private from the dropdown.', () => {
             
        cy.get('#react-select-3-option-2').click({force:true})
        
    });


    it('NT-6 Enter Cost Center. ', () => {
        cy.get('#costCenter').type(Random_Textt())
    });


    it('NT-7 Enter Patient ID. ', () => {
        cy.get('#patientId').type(Random_Textt())
    });


    it('NT-8 Enter Last Name.', () => {
        cy.get('#lastName > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()
        cy.get('#react-select-4-option-0').click()
    });



    //============================================= Trip 1 Info =============================================
        

    it('NT-9 Enter Facility. ', () => {
        cy.get('[id="react-select-6-input"]').click()
        cy.get('#react-select-6-option-0').click()
    });


    it('NT-10 Enter Floor. ', () => {
        cy.get('[id="trips.0.pickUpFloor"]').click().type("1st").wait(2000)
    });


    it('NT-11 Enter Room. ', () => {
        cy.get('[id="trips.0.pickUpRoom"]').click().type("201").wait(2000)
    });


    it('NT-12 Enter Bed Number.', () => {
        cy.get('[id="trips.0.pickUpBed"]').click().type("15").wait(2000)
    });


    it('NT-13 Enter Apt / Suit.', () => {
        cy.get('[id="trips.0.pickUpApt"]').click().type("15").wait(2000)
    });


    it('NT-14 Enter Stairs.', () => {
        cy.get('[id="trips.0.pickUpStairs"]').click().type("10").wait(2000)
    });


    it('NT-15 Enter Pick up date. ', () => {
        cy.get('[name="trips.0.pickUpDate"]').click().type("04/30/2023").wait(2000).type('{enter}')
    });

    it('NT-16  ', () => {
        cy.get('[name="trips.0.pickUpTime"]').click().type("18:57").wait(2000).type('{enter}')
    });


    it('NT-17 Enter Patient Mobility. ', () => {
        cy.get('[id="react-select-8-input"]').click().wait(2000)
        cy.get('#react-select-8-option-0').click()
    });


    it('NT-18 Enter DNR. ', () => {
        cy.get('[id="react-select-9-input"]').click().wait(2000)
        cy.get('#react-select-9-option-0').click()
    });


    it('NT-19 Enter Britric.', () => {
        cy.get('[id="react-select-10-input"]').click().wait(2000)
        cy.get('#react-select-10-option-1').click()
    });


    it('NT-20 Enter Escort. ', () => {
        cy.get('[id="react-select-11-input"]').click().wait(2000)
        cy.get('#react-select-11-option-0').click()

    });


    it('NT-21 Enter Oxygen. ', () => {
        cy.get('[id="react-select-12-input"]').click().wait(2000)
        cy.get('#react-select-12-option-0').click()
    });
    
    it('NT-22 Enter Precaution. ', () => {
        cy.get('[id="react-select-13-input"]').click().wait(2000)
        cy.get('#react-select-13-option-0').click()
    });

    it('NT-23 Enter Interventions. ', () => {
        cy.get('[id="react-select-14-input"]').click().wait(2000)
        cy.get('#react-select-14-option-0').click()
    });


    it('NT-22 Enter LMP.  ', () => {
        cy.get('[id="trips.0.oxygenQuantity"]').click().type("52").wait(2000)
    });

    it('NT-23 Enter Dispatcher Note. ', () => {
        cy.get('[id="trips.0.dispatcherNote"]').click().type("This is a Dispatcher Note testing...")
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });


    it('NT- ', () => {
        
    });











}

export default Add_new_trip;
