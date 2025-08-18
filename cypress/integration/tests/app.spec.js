describe("React App Tests", () => {
  beforeEach(() => {
    
    cy.visit("http://localhost:3000");
  });

  it("should display correct intro text", () => {
    
    cy.get("h4.intro-text")
      .should("be.visible")
      .and("have.text", "A short Narration of Lorem Ipsum");
  });

  it("should show loading state initially", () => {
    
    cy.get("h4.loading-text").should("be.visible").and("contain", "Loading");
  });

  it("should display posts after loading", () => {
    
    cy.get("li.post-item", { timeout: 10000 }) 
      .should("have.length.greaterThan", 0);
  });

  it("should display post titles correctly", () => {
    
    cy.get("li.post-item .title", { timeout: 10000 })
      .first()
      .should("be.visible")
      .and("not.be.empty");
  });
});
