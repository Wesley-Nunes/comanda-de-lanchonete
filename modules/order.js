import { htmlElementsUtils } from "./html-elements-utils.js";

export class Order extends htmlElementsUtils {
  constructor() {
    super();
  }

  addItem(item, price) {
    this.item = item;
    this.price = parseFloat(price);

    this.valuesToHtmlElement();
    this.htmlElementToDom();
    this.sumTotalOrder();
  }

  removeItem() {
    if (event.target.localName === "button" && confirm("Remover Item?")) {
      const li = event.target.parentElement;
      const value = li.children[2].textContent;

      this.subtractsTotalOrder(value);
      li.remove();
    }
  }
}
