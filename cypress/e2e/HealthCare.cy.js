describe("Health Checkup Appointment",()=>{

    it('Visit the URL & Login for appointment', function () {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.wait(2000)
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get("select").select('Hongkong CURA Healthcare Center')
        cy.get("#chk_hospotal_readmission").click()
        cy.get("#radio_program_medicare").click()
        cy.get("#txt_visit_date").type('20/09/2024')
        cy.get("#txt_comment").click({force:true})
        cy.get("#txt_comment").type('Booking Appointment')
        cy.get("#btn-book-appointment").click()
        cy.get("h2").contains("Appointment Confirmation")
    });

   /* it('Schedule appointment', function () {
      
        cy.get("select").select('Hongkong CURA Healthcare Center')
    });*/
    
})