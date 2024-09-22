/// <reference types = "Cypress"/>

describe('My Sample Test',()=>{

    it.skip('Check Url',()=>{

        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').should('exist')
        let myurl= cy.url(); //Get webpage url

        cy.url().should('include', 'google'); //Assert URL
        cy.get('#APjFqb',{timeout : 100}).should('be.visible');
     //   let browsername = cypress.browser.name
    })

    it.skip('Demo Website',()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.wait(500)
       /* cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click() */
    })

    it.skip("Vegetable Shopping",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.get(".product:visible").should("have.length",4)
        cy.get('.products').find('.product').should("have.length",4)
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
    })

    it('Verify the checkbox alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(str)=>{

            expect(str).equals('I am a JS Alert')
        });

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
})