describe('Производит заход на страничку ипериума"', () => {
  it("обходит диалоговое окно", () => {
    // cy.visit('https://im.logistics.imperium.digital/')
    cy.visit("https://admin:admin@im.logistics.imperium.digital/");
    // cy.get('input[id=signInFormUsername]').type('jjacallen+cypress@gmail.com')
    // cy.get(".dx-texteditor-input").type("johngold");

    it("ввод символов в отдельные поля и вход"), () => {
    cy.get("input[name=login]").type("johngold");
    cy.get("input[name=password]").type("Abc12345");
    cy.get(
      "span[class=(.dx-button-text > dx-template-wrapper).should('Войти')]"
    ).click();
  });
});
