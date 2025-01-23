"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addContact() {
        console.log("\nEnter Contact Details:");
        const firstName = readline_sync_1.default.question("First Name: ");
        const lastName = readline_sync_1.default.question("Last Name: ");
        const address = readline_sync_1.default.question("Address: ");
        const city = readline_sync_1.default.question("City: ");
        const state = readline_sync_1.default.question("State: ");
        const zip = readline_sync_1.default.question("ZIP Code: ");
        const phoneNumber = readline_sync_1.default.question("Phone Number (10 digits): ");
        const email = readline_sync_1.default.question("Email: ");
        const contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
        this.contacts.push(contact);
        console.log("Contact added successfully");
    }
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
        }
        else {
            console.log("\nContacts List:");
            for (let i = 0; i < this.contacts.length; i++) {
                const contact = this.contacts[i];
                console.log(`${i + 1}. ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`);
            }
        }
    }
}
const addressBook = new AddressBook();
