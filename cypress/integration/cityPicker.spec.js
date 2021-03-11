describe('test citypicker', () => {
	it('should always capitalize the city name and display it in title', ()=> {
		cy.visit('http://localhost:3000/');
		cy.get('input:first')
      .type('tokyo')
      .should('have.value', 'Tokyo');
      cy.get('input[value=Search]').click();
      cy.get('h2').contains('Tokyo');
	})
})