describe('test switcher', () => {
	it('should redirect to /week', ()=> {
		cy.visit('http://localhost:3000/');
		cy.contains('Week').click();
		cy.url().should('include', '/week');
	});
	it('should redirect to /', ()=> {
		cy.visit('http://localhost:3000/week');
		cy.contains('Today').click();
		cy.url().should('include', '/');
	});
})