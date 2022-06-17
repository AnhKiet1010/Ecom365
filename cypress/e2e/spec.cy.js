describe('Products page', () => {
  it('should redirect to works', () => {
    cy.visit('http://localhost:3000')

    // Find a link with an href attribute containing "products" and click it
    cy.get('li.ant-menu-submenu').first().click()

    // Find a link with an href attribute containing "products" and click it
    cy.get('a[href*="/products"]').first().click()

    // The new url should include "/products"
    cy.url().should('include', '/products')

    // The new page should contain an span with "About page"
    cy.get('span').first().contains('Danh sách sản phẩm')
  })
})

const asModule = {}
export default asModule
