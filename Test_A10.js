

describe('A10', function()  {
  it('A10_Flow', function()  {

    cy.visit({
      method:'GET',
      url: Cypress.config().baseUrl,
      failOnStatusCode: false
    });

    cy.get('.input--text')
      .type('buddy')
      .should('have.value', 'buddy')
    cy.get('.button').click()
    cy.get('#dispalyedText')
      .type('500,000')
      .should('have.value', '500,000')
    cy.get('.group-loan-fields-container > .dropdown-field-container > .dropdown-contatiner > .dropdown-body')
      .click()
    cy.contains('60.01% to 65%').click()
    cy.get('.group-property-fields-container > :nth-child(1) > .controls-container > :nth-child(1) > label > span')
      .click()
    cy.get(':nth-child(2) > .controls-container > :nth-child(1) > label > span')
      .click()
    cy.get('.state > :nth-child(1) > .dropdown-contatiner > .dropdown-body')
      .click()
    cy.contains('California').click()
    cy.get('.number-of-units')
      .type('son')
      .get('.i7-program-options > .dropdown-menu').click()
    cy.get('.state > :nth-child(3) > .dropdown-field-container > .dropdown-contatiner > .dropdown-body')
      .click()
      .contains('Single Family Detached').click()
    cy.get('.group-credit-fields-container > :nth-child(1) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('740 to 759').click()
    cy.get('.group-credit-fields-container > :nth-child(2) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('0 X 30 X 12').click()
    cy.get(':nth-child(3) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('More than 110% of loan principal').click()
    cy.get(':nth-child(4) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('Personally Owned by Borrowers').click()
    cy.get(':nth-child(5) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('One or more borrowers has been continuously self-employed for 3 or more years')
      .click()
    cy.get('.credit-event-history-block > .radio-button-group-container > .controls-container > :nth-child(2) > label')
      .click()
    cy.get(':nth-child(7) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('Less than 36%').click()
    cy.get(':nth-child(8) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('Bank Statement Income/1099, 24 mo or more')
      .click()
    cy.get(':nth-child(9) > .dropdown-contatiner > .dropdown-body')
      .click()
      cy.contains('All borrowers are US citizens or hold a non-student visa that permits US residency or hold a green card')
      .click()
    cy.get(':nth-child(10) > .radio-button-group-container > .controls-container > :nth-child(2) > label')
      .click()
    cy.get('.subordinate-financing > .controls-container > :nth-child(2) > label')
      .click()
    cy.get('.submit-form-button > button').click()

    cy.get('.title-content-text').then(($body) => {
          if ($body.text().includes('A10')) {
            cy.get('#get-pricing > .recomended-inner-button')
              .click()
        } else {
          throw new Error('Wrong Program')
        }
    });

    cy.get('.email-address-container > input')
      .type('employeeiqualifi@gmail.com')
      .should('have.value', 'employeeiqualifi@gmail.com')
    cy.get('.login-container > button').click()

    cy.pause()     // Pause here to get manually a random code from email 
                   
    cy.get('.login-container > button').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > .pricing-talbe > tbody > :nth-child(4) > :nth-child(5)')
      .click()
    cy.get('.email-me-buttons-container > :nth-child(1) > button')
      .click()
    cy.get('.submit-pdf-button').click()
    cy.wait(2000)
    cy.get('.email-me-buttons-container > :nth-child(2) > button')
      .click()
    cy.get('.submit-pdf-button').click()
    cy.wait(2000)
    cy.get('.pricing-table-options-toggle > .select-container > .switch-container > .switch > .slider')
      .click()
    cy.get(':nth-child(3) > .pricing-talbe > tbody > :nth-child(4) > :nth-child(5)')
      .click()
    cy.get('.email-me-buttons-container > :nth-child(1) > button')
      .click()
    cy.get('.submit-pdf-button').click()
    cy.wait(2000)
    cy.get('.email-me-buttons-container > :nth-child(2) > button')
      .click()
    cy.get('.submit-pdf-button').click()

  });
});    



