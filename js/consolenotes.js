function StreetAddress(streetNumber, city, state, zip) {
  this.streetNumber = streetNumber;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

Contact.prototype.addStreetAddress = function(streetAddress) {
  // this.Contact = StreetAddress();
  this.address = streetAddress;
}
ƒ (streetAddress) {
  // this.Contact = StreetAddress();
  this.address = streetAddress;
}
let testContact = new Contact("Ella","Tanttu","555-555-5555", "ellajtanttu@gmail.com");
undefined
testContact;
Contact {firstName: 'Ella', lastName: 'Tanttu', phoneNumber: '555-555-5555', emailAddress: 'ellajtanttu@gmail.com'}
let testAddress = new StreetAddress( "1234 jkjlkjlk", "PDX", "OR", "97206");
undefined
testAddress;
StreetAddress {streetNumber: '1234 jkjlkjlk', city: 'PDX', state: 'OR', zip: '97206'}
testContact.addStreetAddress(testAddress);
undefined
testContact;
Contact {firstName: 'Ella', lastName: 'Tanttu', phoneNumber: '555-555-5555', emailAddress: 'ellajtanttu@gmail.com', address: StreetAddress}
address: StreetAddress
city: "PDX"
state: "OR"
streetNumber: "1234 jkjlkjlk"
zip: "97206"
[[Prototype]]: Object
emailAddress: "ellajtanttu@gmail.com"
firstName: "Ella"
lastName: "Tanttu"
phoneNumber: "555-555-5555"
[[Prototype]]: Object