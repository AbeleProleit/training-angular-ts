describe('test app component', () => {
  it('visit init page', () => {
    cy.visit('/');
    cy.get('h1').contains('Hello, proleit');
  });
});
