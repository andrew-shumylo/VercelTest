//#region Fields and Constants

//Basic URL
let url = 'https://demo.vercel.store'

//Test values for fields from form
let testEmail = 'test@email.com'
let testFirstName = 'Name'
let testLastName = 'Lastname'
let testAddress = 'Steet, 01'
let testCity = 'Lviv'
let testPostalCode = '12345'

//Variable for loop
var changeQuantity
//#endregion

//#region Methods
describe('Test task for GlobalTeam.', () => {
  it('Compeleted by Andrii Shumylo', () => {
    cy.visit(url)
    cy.viewport(1600, 900)
    cy.wait(1000)

  //Go to New Arrivals -> ACME Cup
    cy.contains('New Arrivals')
      .click()
    cy.contains('ACME Cup')
      .click()

  //Add ACME Cup to the Cart
    cy.contains('Add To Cart')
      .click()

  //Change it quantity to 5 items'
    for (changeQuantity=0; changeQuantity<4; changeQuantity++)
    {
      cy.get('.h-9 > :nth-child(4)')
      .click({ force: true }) 
    }

  //Verify that total price is correct (should be cup price * 25)
    //Validate total price;
    cy.get('.flex-shrink-0 > .border-t > :nth-child(2)')
      .should('have.text', '$125.00')
    //Validate total price is equal "25$"
    //I'm working with C#, and don't have a lot of experience with JS (Cypress.io). I don't have a time to find how to implement this feature :)
    
  //Close cart menu'
    cy.contains('Close')
      .click()

  //Go to Featured → Quarter Zip
    cy.contains('Featured')
      .click({force: true})
    cy.contains('Quarter Zip')
      .click({force: true})

  //Select M Size and add to cart
    cy.get('[aria-label="size m"]')
      .click()
    cy.contains('Add To Cart')
      .click()

  //Verify that Both articles are present in the cart'
    cy.contains('ACME Cup')
      .should('be.visible')
    cy.contains('Quarter Zip')
      .should('be.visible')

  //Verify that Quarter Zip is exactly M size
    cy.get('[class="mx-2 rounded-full bg-transparent border h-5 p-1 text-accent-9 inline-flex items-center justify-center overflow-hidden"]')
      .should('have.text', 'M')

  //Verify that total price in cart is correct
    cy.get('.flex-shrink-0 > .border-t > :nth-child(2)')
    .should('have.text', '$215.00')

  //Press "Proceed to checkout"
    cy.get('.flex-shrink-0 > :nth-child(3) > .Button_root__G_l9X')
      .click()
    cy.wait(2000)

  //Fill form with random values
    cy.get("input[placeholder='Email or mobile phone number']")
      .type(testEmail)
    cy.get("input[placeholder='First name (optional)']")
      .type(testFirstName)
    cy.get("input[placeholder='Last name']")
      .type(testLastName)
    cy.get("input[placeholder='Address']")
      .type(testAddress)
    cy.get("input[placeholder='City']")
      .type(testCity)
    cy.get("input[placeholder='Postal code']")
      .type(testPostalCode)

  //Proceed to checkout'
    cy.get('.btn__content')
      .click({ force: true })

  //#endregion
  })
})
