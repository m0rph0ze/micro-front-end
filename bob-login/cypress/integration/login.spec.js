/// <reference types="Cypress" />

context('Login', () => {
    before(() => {
      cy.visit('http://localhost:4200/')
    })
  
    describe('Should open login sreen', () => {
      it('Title should be loaded', () => {
          cy.get("h1")
          .should("be.visible")
          .should("have.text", "Bob the builder")
      });

      it("Subtitle should be loaded", () => {
        cy.get("h2")
        .should("be.visible")
        .should("be", "Zaloguj się do aplikacji")
      });

      it("Login input should be loaded", () => {
        cy.get("#login-input")
        .should("be.visible")
        .should("be.empty")
        .should("be.enabled")
      });

      it("Password input should be loaded", () => {
        cy.get("#password-input")
        .should("be.visible")
        .should("be.empty")
        .should("be.enabled")
      });

      it("Log in button should be loaded", () => {
        cy.get("#login-button")
        .should("be.visible")
        .should("be.have.text", "Zaloguj się")
        .should("be.enabled")
      });

      it("Create account button should be loaded", () => {
        cy.get("#create-account-button")
        .should("be.visible")
        .should("be.have.text", "Utwórz konto")
        .should("be.enabled")
      });

    });

    describe('Should unsuccessfully login', () => {
      it("Should write 'a.chyra' as login", () => {
        cy.get("#login-input")
          .type("a.chyra")
      });

      it("Should has typped 'a.chyra' as login", () => {
        cy.get("#login-input")
          .should("be.have.value", "a.chyra")
      });

      it("Should write 'haslo' as password", () => {
        cy.get("#password-input")
          .type("haslo")
      });

      it("Should has typped 'haslo' as password", () => {
        cy.get("#password-input")
          .should("be.have.value", "haslo")
      });

      it("Should click login button", () => {
        cy.get("#login-button")
          .click()
      });

      it("Should click login button", () => {
        cy.get("#info")
          .should("be.have.text", "Brak użytkownika lub błędne dane")
      });

    });

    describe('Should write wrong value to inputs', () => {
      it("Should write login", () => {
        cy.get("#login-input")
        .clear()
        .type("jan.")
      });

      it("Should show error in login input", () => {
        cy.get(".input-error-text")
        .should("be.have.text", "Zbyt krótki login")
      });

      it("Should write password", () => {
        cy.get("#password-input")
        .clear()
        .type("1we")
      });

      it("Should show error in password input", () => {
        cy.get("#password-input-wrapper")
        .children(".input-error-text")
        .should("be.have.text", "Zbyt krótkie hasło")
      });

    });

    describe('Should login successfully', () => {
      it("Should write login", () => {
        cy.get("#login-input")
        .clear()
        .type("jan.k")
      });

      it("Should write password", () => {
        cy.get("#password-input")
        .clear()
        .type("123qwe")
      });

      it("Should click login button", () => {
        cy.get("#login-button")
          .click()
      });

      it("Should change port", () => {
        cy.url()
          .should('include', 'http://localhost:5000/')
      })

    });

  });