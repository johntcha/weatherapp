describe('test todays weather content', () => {
	it('should never be empty and have 8 elements', ()=> {
		cy.visit('http://localhost:3000/week');
		cy.get('.week-weather-card')
      .should('not.be.empty');
      cy.get('.week-weather-card')
      .find('ul')
      .should('have.length',8);
	});

	it('should display the last element when horizotal scroll', ()=> {
		cy.visit('http://localhost:3000/week');
		cy.get('.week-weather-card')
      	.scrollTo('right');
      	cy.get('.week-weather-card>ul:last').should('be.visible');
	});
})