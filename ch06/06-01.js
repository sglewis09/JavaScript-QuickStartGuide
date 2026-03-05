class Address {
  constructor(firstName, lastName) {
    this.fistName = firstName
    this.lastName = lastName
  }
}

let customer = new Address("Robert", "Oliver")

for (let detail in customer) {
  console.log(detail)
  console.log(customer[detail])
  console.log('\n')
}
