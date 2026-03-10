dayNumber = 1

for (let day in salesReport.coffeeSales) {
  console.log("Day " + dayNumber + ":")
  console.log("Blend: " + salesReport.coffeeSales[day].blanedName +
              ", Cups Sold: " + salesReport.coffeeSales[day].cupsSold)
  dayNumber++
}
