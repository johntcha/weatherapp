describe('test todays weather content', () => {
	it('should never be empty and have 8 elements', async ()=> {
		cy.visit('http://localhost:3000/week');
		cy.get('.week-weather-card')
      .should('not.be.empty');
      cy.get('.week-weather-card')
      .find('ul')
      .should('have.length',8);
	})
})