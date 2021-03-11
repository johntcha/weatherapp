describe('citypicker test', () => {
	it('Capitalize test input', ()=> {
		cy.visit('http://localhost:3000/');
		cy.get('input:first')
      .type('tokyo')
      .should('have.value', 'Tokyo')
	});
})