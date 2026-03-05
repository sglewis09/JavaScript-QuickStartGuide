const cartItem = (function(price, quantity = 1) {
  let totalQuantity = 0
  let lineCost = 0.0

  function calculateLineCost() {
    lineCost = price * totalQuantity
  }

  function getFormattedCurrency(region = "en-US") {
    return lineCost.toLocaleString(region, {maximumFractionDigits:2})
  }

  return function() {
    totalQuantity += quantity
    calculateLineCost()
    return getFormattedCurrency()
  }
})
