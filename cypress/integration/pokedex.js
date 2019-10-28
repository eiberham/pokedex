describe('Pokedex', function() {
    it('Displays all pokemons accurately', function() {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="list-items"]').should('have.length', 1)
        cy.get('img[data-testid="image"]').should('have.length', 150)
        cy.get('img[data-testid="image"]').first().click()
        cy.get('.details').should('have.length', 1)
        expect(true).to.equal(true)
    });
});