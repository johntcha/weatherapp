describe('test todays weather content', () => {
	it('should never be empty', ()=> {
		cy.visit('http://localhost:3000/');
		cy.get('.today-weather-card')
      .should('not.be.empty');
      expect(cy.get('.today-weather-card')).not.to.be.empty;
	});

	it('should display the last element when horizotal scroll', ()=> {
		cy.visit('http://localhost:3000/');
		cy.get('.today-weather-card')
      	.scrollTo('right');
      	cy.get('.today-weather-card>ul:last').should('be.visible');
	});


})