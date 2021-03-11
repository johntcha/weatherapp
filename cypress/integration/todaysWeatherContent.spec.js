describe('test todays weather content', () => {
	it('should never be empty', async ()=> {
		cy.visit('http://localhost:3000/');
		cy.get('.today-weather-card')
      .should('not.be.empty');
	})
})