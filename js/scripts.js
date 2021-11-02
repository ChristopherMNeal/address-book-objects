/*
address book
  contact
    addresses
      email
        1
        2
        3
      physical
        1
        2
        3
*/

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
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

// AddressBook.prototype.addContact = function(contact) {
//   this.contacts[contact.firstName] = contact;
// };

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// StreetAddress.prototype.fullStreetAddress = function() {
//   return this.streetNumber + "</br>" + this.city + ", " + this.state + " " + this.zip;
// };

// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

StreetAddress.prototype.fullStreetAddress = function() {
  return this.streetNumber + "</br>" + this.city + ", " + this.state + " " + this.zip;
};

function showFullStreetAddress(contact) {
  let htmlForAddressInfo = "";
  Object.keys(contact.streetAddress).forEach(function(key) {
    const address = contact.StreetAddress(key);
    htmlForAddressInfo.fullStreetAddress();
  });
}
//  Object.keys(streetAddress.details).forEach(function(key)

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  console.log("contact = " + contact);
  const fullAddressToShow = contactId.streetAddress.showFullStreetAddress();
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.emailAddress);
  $(".street-address").html(fullAddressToShow);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmailAddress = $("input#new-email-address").val();
    const inputtedStreetNumber = $("input#new-street-number").val();
    const inputtedCity= $("input#new-city").val();
    const inputtedState = $("input#new-state").val();
    const inputtedZip = $("input#new-zip").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email-address").val("");
    $("input#new-street-number").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress);
    console.log("newContact = " + newContact);
    const newStreetAddress = new StreetAddress(inputtedStreetNumber, inputtedCity, inputtedState, inputtedZip);
    console.log("newStreetAddress = " + newStreetAddress);
    newContact.addStreetAddress(newStreetAddress);
    console.log("newContact after add street address function is ran = " + newContact);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});
