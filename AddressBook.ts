import * as readlineSync from 'readline-sync';

interface Contact{
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email:string;
}


class AddressBook{
    contacts: Contact[];

    constructor(){
        this.contacts =[];
    }

    addContact():void{
        console.log("\nEnter Contact Details");
        const firstName: string=  readlineSync.question("First Name:");
        const lastName:string = readlineSync.question("Last Name");
        const address:string = readlineSync.question("Address"); 
        const city: string = readlineSync.question("City: ");
        const state: string = readlineSync.question("State: ");
        const zip: string = readlineSync.question("ZIP Code: ");
        const phoneNumber: string = readlineSync.question("Phone Number (10 digits): ");
        const email: string = readlineSync.question("Email: ");
    
        const contact: Contact = { firstName, lastName, address, city, state, zip, phoneNumber, email };
    
        this.contacts.push(contact);
        console.log("Contact added successfully!");
        
    }

    displayContact():void{
        if(this.contacts.length === 0) {
            console.log("No contacts available");
        }
        else{
            console.log("\nContacts List:");
            for(let i=0; i < this.contacts.length; i++){
                const contact = this. contacts[i];
                console.log(`${i+1}).${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phoneNumber}, Email: ${contact.email}`);
                
            }
            
        }
    }

    menu():void{
        while(true){
            console.log("\nAddress Book Menu.");
            console.log("1. Add Contact");
            console.log("2. Display Contacts");
            console.log("3. Exit");
        
        
            const choice: string= readlineSync.question("Enter your choice:");

            switch(choice){
                case "1":
                    this.addContact();
                    break;
                case "2":
                    this.displayContact();
                    break;
                case "3":
                    console.log("Exiting...");
                    //process.exit(0);
                return;
                default:
                    console.log("Invalid choice ");                    
                    
          }
        }
    }

}

const addressBook = new AddressBook();
addressBook.menu();