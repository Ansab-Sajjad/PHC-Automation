
/// <reference types="Cypress" /> 

import Super_Admin_data from "./PHC_Data.cy";

function PHC_Login() {
   

 

  it('2- Logo should be present.', () => {
    cy.get('.img-fluid').should('be.visible')
      
  });

  it('3- Blue Backgound should be present.', () => {
    cy.wait(1000)
    cy.get('.authleftside').should('be.visible')
  });

  it('2- Enter Correct Email.', () => {
    cy.wait(2000);
   cy.get('#username').clear().type(Super_Admin_data.Correct_UserName, {delay: 100})
    expect(true).to.equal(true)
    
});

it('3- Enter Wrong password.', () => {
   cy.get(':nth-child(2) > .form-floating > .form-control').clear().type(Super_Admin_data.wrong_Password , {delay: 100})
    cy.get('.ico').click()
    expect(true).to.equal(true)
   
});

it('4- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    
});

it('5- Verifying the Toast message', () => {
    cy.wait(1000);
   cy.get('.Toastify__toast-body',{timeout: 10000}).should('be.visible').should('have.text','Incorrect username or password.')
    
});

it('6- Enter wrong Email.', () => {
    cy.wait(2000);
   cy.get('#username').clear().type(Super_Admin_data.wrong_UserName, {delay: 100})
    expect(true).to.equal(true)
   
});

it('7- Enter Correct Password.', () => {
   cy.get(':nth-child(2) > .form-floating > .form-control').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('8- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)

});


it('5- Verifying the Toast message', () => {
    cy.wait(1000);
   cy.get('.Toastify__toast-body',{timeout: 10000}).should('be.visible').should('have.text','Incorrect username or password.')
    
});

it('10- Enter Correct Email.', () => {
    cy.wait(2000);
   cy.get('#username').clear().type(Super_Admin_data.Correct_UserName, {delay: 100})
    expect(true).to.equal(true)
   
});

it('11- Enter Correct Password.', () => {
   cy.get(':nth-child(2) > .form-floating > .form-control').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('12- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)
});

it('13- Verifying the Toast message => Login Successful.', () => {
    cy.wait(1000);
   cy.get('.Toastify__toast-body',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
    cy.wait(2000)
});

} 
export default PHC_Login;
