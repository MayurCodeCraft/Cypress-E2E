describe("Upload File",()=>{

it("Upload File",()=>{

    const filepath = 'abc.gif';
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile(filepath)
    cy.get("#file-submit").click()
    cy.get('#uploaded-files').contains('abc')

})

})