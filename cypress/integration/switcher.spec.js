describe('testcypress', () => {
	it('test weatherapp', ()=> {
		cy.visit('http://localhost:3000/');
		cy.contains('Weather App');
		// cy.contains('Week').click();
		// cy.url().should('include', '/week');
		cy.get('input:first')
      .type('tokyo')
      .should('have.value', 'Tokyo')
	})
})