describe('User Add Flow', () => {
  it('load user add page on click add new user button', () => {
    cy.visit('/');
    cy.get('#add-user-btn').click();
    cy.url().should('include', '/add');
  });

  it.only('should goto list page if submit is done with valid user form', () => {
    cy.visit('/add');

    // Fill valid form value
    cy.get(`[formcontrolname="userName"]`).type('newuser');
    cy.get(`[formcontrolname="firstName"]`).type('new');
    cy.get(`[formcontrolname="lastName"]`).type('user');
    cy.get(`[formcontrolname="isAdmin"]`).type('false');
    cy.get(`select`).select('Marketing');

    cy.get('button').click();
    cy.url().should('not.include', '/add');

    // Check if add works or not
    cy.get('tbody').find('tr').should('have.length', 3);
  });

  it.only('should not goto list page if submit is done with invalid user form', () => {
    cy.visit('/add');

    cy.get('button').click();
    cy.url().should('include', '/add');
  });

  it.only('go back to list on click back to list button', () => {
    cy.visit('/add');
    cy.get('#back-btn').click();
    cy.url().should('not.include', '/add');
  });
});
