"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addContacts() {
        console.log("\nAdd Multiple Contacts:");
        while (true) {
            console.log("\nEnter Contact Details:");
            const firstName = readlineSync.question("First Name: ");
            const lastName = readlineSync.question("Last Name: ");
            const address = readlineSync.question("Address: ");
            const city = readlineSync.question("City: ");
            const state = readlineSync.question("State: ");
            const zip = readlineSync.question("ZIP Code: ");
            const phoneNumber = readlineSync.question("Phone Number (10 digits): ");
            const email = readlineSync.question("Email: ");
            const contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
            this.contacts.push(contact);
            console.log("Contact added successfully!");
            const addAnother = readlineSync.question("Do you want to add another contact? (y/n): ");
            if (addAnother === "n")
                break;
        }
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
    editContact() {
        const nameToSearch = readlineSync.question("\nEnter the first name of the contact you want to edit: ");
        const filteredContacts = this.contacts.filter((c) => c.firstName.toLowerCase() === nameToSearch.toLowerCase());
        if (filteredContacts.length > 0) {
            const contact = filteredContacts[0];
            console.log("\nEditing Contact:");
            contact.firstName = readlineSync.question(`First Name (${contact.firstName}): `, { defaultInput: contact.firstName });
            contact.lastName = readlineSync.question(`Last Name (${contact.lastName}): `, { defaultInput: contact.lastName });
            contact.address = readlineSync.question(`Address (${contact.address}): `, { defaultInput: contact.address });
            contact.city = readlineSync.question(`City (${contact.city}): `, { defaultInput: contact.city });
            contact.state = readlineSync.question(`State (${contact.state}): `, { defaultInput: contact.state });
            contact.zip = readlineSync.question(`ZIP Code (${contact.zip}): `, { defaultInput: contact.zip });
            contact.phoneNumber = readlineSync.question(`Phone Number (${contact.phoneNumber}): `, { defaultInput: contact.phoneNumber });
            contact.email = readlineSync.question(`Email (${contact.email}): `, { defaultInput: contact.email });
            console.log("Contact updated successfully!");
        }
        else {
            console.log("Contact not found.");
        }
    }
    deleteContact() {
        const nameToDelete = readlineSync.question("\nEnter the first name of the contact you want to delete: ");
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter((c) => c.firstName.toLowerCase() !== nameToDelete.toLowerCase());
        if (this.contacts.length < initialLength) {
            console.log("Contact deleted successfully!");
        }
        else {
            console.log("Contact not found.");
        }
    }
    menu() {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. Add Contact");
            console.log("2. Display Contacts");
            console.log("3. Edit Contact");
            console.log("4. Delete Contact");
            console.log("5. Exit");
            const choice = readlineSync.question("Enter your choice: ");
            switch (choice) {
                case "1":
                    this.addContacts();
                    break;
                case "2":
                    this.displayContacts();
                    break;
                case "3":
                    this.editContact();
                    break;
                case "4":
                    this.deleteContact();
                    break;
                case "5":
                    console.log("Exiting....");
                    return;
                default:
                    console.log("Invalid choice.");
            }
        }
    }
}
const addressBook = new AddressBook();
addressBook.menu();
