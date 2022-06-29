class AddressBook{

    constructor(...params){
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }

    get firstName() { return this._firstName }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(firstNameRegex.test(firstName)){
            this._firstName = firstName
        }
        else throw "firstName is in incorrect format"
    }

    get lastName() { return this._lastName }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName
        }
        else throw "lastName is in incorrect format"
    }

    get address() { return this._address }
    set address(address) {
        let addressRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(addressRegex.test(address)){
            this._address = address
        }
        else throw "address is in incorrect format"
    }

    get city() { return this._city }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(cityRegex.test(city)){
            this._city = city
        }
        else throw "city is in incorrect format"
    }

    get state() { return this._state }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(stateRegex.test(state)){
            this._state = state
        }
        else throw "state is in incorrect format"
    }

    get zip() {return this._zip }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$')
        if(zipRegex.test(zip)){
            this._zip = zip
        }
        else throw "Zip is not in correct format"
    }

    get phoneNumber() {return this._phoneNumber }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp('^[6-9]{1}[0-9]{9}$')
        if(phoneNumberRegex.test(phoneNumber)){
            this._phoneNumber = phoneNumber
        }
        else throw "phoneNumber is not in correct format"
    }

    get email() {return this._email }
    set email(email){
        let zipRegex = RegExp('^([A-Za-z]){3,}([_.+-]?)([0-9A-Za-z]{1,})@[a-z0-9]+[.](co|net|gov|com|net){0,1}([.]((com)|([a-z]{2}){0,1})){0,1}$')
        if(zipRegex.test(email)){
            this._email = email
        }
        else throw "email is not in correct format"
    }

    toString(){
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address +
         ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + 
         ", email : " + this.email + "\n"
    }
}
let addressBookArray = new Array()
prompt = require('readline-sync')
addressBookArray.push(new AddressBook("Lokesh", "Sonawane", "Warje", "Pune", "Maharashtra", 411058, 9876543210, "lokesh.sonawane@gmail.com"))
addressBookArray.push(new AddressBook("Mohak", "Mangal", "Hennur", "Bengaluru", "Karnataka", 415263, 9630258741, "mohak.mangal@gmail.com"))
addressBookArray.push(new AddressBook("John", "Connor", "Andheri", "Mumbai", "Maharashtra", 400006, 9512036478, "john.connor@gmail.com"))
while(true){
    try{
        let stop = prompt.question("Press enter to stop inserting and see the contacts\nEnter other value to start inserting : ")
        if(stop == "")
            break
        let firstName = prompt.question("Enter first name : ")
        let lastName = prompt.question("Enter last name : ")
        let address = prompt.question("Enter address : ")
        let city = prompt.question("Enter city : ")
        let state = prompt.question("Enter state : ")
        let zip = prompt.question("Enter zip : ")
        let phoneNumber = prompt.question("Enter phoneNumber : ")
        let email = prompt.question("Enter email : ")
        let addressBook = new AddressBook(firstName, lastName, address, city, state, zip, phoneNumber, email)
        
        //UC7
        if(addressBookArray.find(contact => contact.firstName == addressBook.firstName && contact.lastName == addressBook.lastName)){
            throw "Same person already exists"
        }
        else
            addressBookArray.push(addressBook)
    }
    catch(e){
        console.error(e)
        console.log("Press Enter to stop")  
    }
}
try{
    // addressBookArray.push(new AddressBook("Lokesh", "Sonawane", "Warje", "Pune", "Maharashtra", 411058, 9876543210, "lokesh.sonawane@gmail.com"))
    // addressBookArray.push(new AddressBook("Mohak", "Mangal", "Hennur", "Bengaluru", "Karnataka", 415263, 9630258741, "mohak.mangal@gmail.com"))
    // addressBookArray.push(new AddressBook("John", "Connor", "Andheri", "Mumbai", "Maharashtra", 400006, 9512036478, "john.connor@gmail.com"))
    console.log("Contact details are")
    addressBookArray.forEach(contact => console.log(contact.toString()))

    console.log("After editing, contact details are")
    addressBookArray.filter(contact => contact.firstName == "Lokesh").forEach(contact => contact.city = "Mumbai")
    addressBookArray.forEach(contact => console.log(contact.toString()))

    console.log("After deleting contact details with firestname = Lokesh the remaining contact details are")
    for(let contact = 0; contact < addressBookArray.length; contact++){
        if(addressBookArray[contact].firstName == "Lokesh")
            addressBookArray.splice(contact, 1)
    }
    addressBookArray.forEach(contact => console.log(contact.toString()))

    //UC6
    //counting by reduce method         reduce((previousValue, currentValue) => ,initialValue)
    let countContacts = addressBookArray.reduce((count, contact) => count += 1, 0)
    console.log("Total contacts present in Address Book : " + countContacts)

    //UC8 search contact by city or state
    //Adding 1 contact agin
    console.log("Persons in city Mumbai or state Maharashtra are")
    addressBookArray.push(new AddressBook("Lokesh", "Sonawane", "Warje", "Pune", "Maharashtra", 411058, 9876543210, "lokesh.sonawane@gmail.com"))
    addressBookArray.filter(contact => contact.city == "Mumbai" || contact.state == "Maharashtra").forEach(contact => console.log(contact.firstName))
    console.log("\n")
    
    //UC9 view contact by City and state
    console.log("Contact details by city Mumbai or state Maharashtra")
    addressBookArray.filter(contact => contact.city == "Mumbai" || contact.state == "Maharashtra").forEach(contact => console.log(contact.toString()))

    //UC10 count contacts
    let countContactByCityOrState = addressBookArray.filter(contact => contact.city == "Mumbai" || contact.state == "Maharashtra").reduce((count, contact) => count += 1, 0)
    console.log("Count of contact details by city Mumbai or state Maharashtra is : " + countContactByCityOrState)
}
catch(e){
    console.error(e)
}