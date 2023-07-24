describe('User List Flow', () => {
  it('load user list page', () => {
    cy.visit('/');
    cy.contains('UM 1.0');
  });

  it('load user list', () => {
    cy.visit('/');
    cy.get('tbody').find('tr').should('have.length', 2);
  });
});
