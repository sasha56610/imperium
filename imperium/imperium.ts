/// <reference types="cypress" />
// @ts-check

describe('Производит заход на страничку ипериума"', () => {
  it("обходит диалоговое окно", () => {
    cy.visit("https://admin:admin@im.logistics.imperium.digital/");
  });

  it("Ввод символов в отдельные поля + вход", () => {
    cy.get("input[name=login]").type("johngold");
    cy.get("input[name=password]").type("Abc12345");
    cy.get(".dx-button-text.dx-template-wrapper").click();
  });

  it("переходит во вкладку регистрации"),
    () => {
      cy.get(
        ".dx-button.dx-button-normal.dx-button-mode-contained.dx-widget.dx-button-has-text"
      ).click();
    };

  it("Ввод неверных данных в поля ввода", () => {
    cy.get("input[name=login]").type("dsadasda");
    cy.get("input[name=password]").type("dsadassdas");
    cy.get(".dx-button-text.dx-template-wrapper").click();
    // следствием является ошибка входа по причине ввода неврных данных
  });

  it("Ввод недостаточного количества символов", () => {
    cy.get("input[name=login]").type("sad2");
    cy.get("input[name=password]").type("123s");
    cy.get(".dx-button-text.dx-template-wrapper").click();
    // следствием является ошибка: недостаточное количество символов(должно быть минимум 6)
  });

  it("Нажатие кнопки входа без ввода данных", () => {
    cy.get(".dx-button-text.dx-template-wrapper").click();
    // следствием являются красные указатели на панели ввода о необходимости ввести данные
  });

  it("Ввод символов только в логине", () => {
    cy.get("input[name=login]").type("sad2dsad");
    cy.get(".dx-button-text.dx-template-wrapper").click();
    // следствием является красный указатель,говорящий о том,что в пароле не были введены данные
  });

  it("Ввод символов только в пароле", () => {
    cy.get("input[name=password]").type("sad2dsad");
    cy.get(".dx-button-text.dx-template-wrapper").click();
    // следствием является красный указатель,говорящий о том,что в логине не были введены данные
  });
});
