describe('User Detail Flow', () => {
  it('load user detail page on  click view', () => {
    cy.visit('/');
    cy.get('table').find('tr').eq(1).find('td').eq(4).click();
    cy.url().should('include', '/details/1');
  });

  it.only('should contain valid user detail', () => {
    const user = {
      id: 1,
      firstName: 'Lara',
      lastName: 'Dutta',
      isAdmin: false,
      userName: 'lara550',
      department: 'Management',
    };

    cy.visit('/details/1');

    cy.get('#userid').should('contain.html', user.id);
    cy.get('#username').should('contain.html', user.userName);
    cy.get('#firstname').should('contain.html', user.firstName);
    cy.get('#lastname').should('contain.html', user.lastName);
    cy.get('#department').should('contain.html', user.department);
    cy.get('#isadmin').should('contain.html', user.isAdmin);
  });

  it.only('go back to list on click back to list button', () => {
    cy.visit('/details/1');
    cy.get('#back-btn').click();
    cy.url().should('not.include', '/details/1');
  });
});
