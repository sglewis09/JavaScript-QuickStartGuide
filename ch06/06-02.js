const robert = {
  firstName: "Robert",
  lastName: "Oliver",
  zipCode: 12345,
  zodiacSign: "Aquarius",
  phoneNumber: "(555) 555-1212",

  greeting: function() {
    console.log(`Hello, ${this.firstName}!`)
  },

  sayPhoneNumber: function() {
    console.log(this.phoneNumber)
  }
}
