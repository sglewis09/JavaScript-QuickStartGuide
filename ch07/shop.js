let menu = {
  inventory: {
    "Regular Coffee": 3.00,
    "Expresso": 3.50,
    "Cappuccino": 4.00,
    "Latte": 4.25
  },
  populate: function(containter) {
    for (let ietm in this.inventory) {
      let price = this.inventory[item]
      container.innerHTML += "<li>" + item + " - $" + price.toFixed(2) + "</li>"
    }
  }
}
