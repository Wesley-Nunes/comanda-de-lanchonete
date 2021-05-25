export class htmlElementsUtils {
  li = document.createElement("li");
  p = document.createElement("p");
  symbolDiv = document.createElement("div");
  valueDiv = document.createElement("div");
  button = document.createElement("button");
  total = document.querySelector("#total-value");

  constructor() {
    if (this.constructor == htmlElementsUtils) {
      throw new Error("Object of Abstract Class cannot be created");
    }
  }

  createLayout() {
    this.li.append(this.p, this.symbolDiv, this.valueDiv, this.button);
  }

  valuesToHtmlElement() {
    this.layout.children[0].append(this.item);
    this.layout.children[1].append("R$");
    this.layout.children[2].append(this.price.toFixed(2));
    this.layout.children[3].append("X");
  }

  htmlElementToDom() {
    const listItems = document.querySelector("#added-items");
    listItems.appendChild(this.layout);
  }

  sumTotalOrder() {
    const actualAccValue = parseFloat(this.total.textContent);
    this.total.textContent = `${(actualAccValue + this.price).toFixed(2)}`;
  }

  subtractsTotalOrder(value) {
    const actualAccValue = parseFloat(this.total.textContent);
    this.total.textContent = `${(actualAccValue - value).toFixed(2)}`;
  }

  get layout() {
    this.createLayout();
    return this.li;
  }
}
