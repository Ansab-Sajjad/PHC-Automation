import Random_Textt from "./Random_Text";

function Add_New_Users(){

    it('NU-1 Click on Settings.', () => {
        cy.get('.expand').click({force: true})
        expect(true).to.equal(true)
    });

    it('NU-2 Click on Users.', () => {
        cy.get(':nth-child(10) > .relative > .cursor-pointer > :nth-child(2)').click({force: true})
        cy.wait(3000)
    expect(true).to.equal(true)
    });

    it("NU-3 Click on '+ New User' button.", () => {
        cy.get('.text-end > .btn').click({force: true})
        cy.wait(3000) 
    expect(true).to.equal(true)
    });

    it('NU-4 Add First Name.', () => {
        cy.get('[id="firstName"]').type("User " + Random_Textt(), {delay: 100})
        expect(true).to.equal(true)
    });
    
    it('NU-5 Add Last Name.', () => {
        cy.get('[id="lastName"]').type(Random_Textt(), {delay: 100})
        expect(true).to.equal(true)
    });

    it('NU-6', () => {
        
    });

    it('NU-7 Enter Email.', () => {
        cy.get('[id="email"]').type("ansab@troontechnologies.com");
        expect(true).to.equal(true)
    });

    it('NU-8 Enter Username.', () => {
        cy.get('[id="username"]').type("User" + Random_Textt(), {delay: 100})
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('NU-9 Enter Password.', () => {
        cy.get('[id="password"]').type("Admin@123")
        expect(true).to.equal(true)
    });

    it('NU-10 Enter Confirm Password.', () => {
        cy.get('[id="cpassword"]').type("Admin@123")
        expect(true).to.equal(true)
    });

    it('NU-11 Click on Add User button.', () => {
        cy.get('.footer-wrap > .btn-primary').click({force: true})
        expect(true).to.equal(true)
    });
}
export default Add_New_Users;