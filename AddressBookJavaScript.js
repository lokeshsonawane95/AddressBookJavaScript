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
        return "\nFirst Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nAddress : " + this.address +
         "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhone Number : " + this.phoneNumber + 
         "\nemail : " + this.email + "\n"
    }
}
let addressBookArray = new Array()
prompt = require('readline-sync')
while(true){
    try{
        let stop = prompt.question("Press 0 to stop inserting\nPress other key to start inserting : ")
        if(stop == 0)
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
        addressBookArray.push(addressBook)
    }
    catch(e){
        console.error(e)
        console.log("Press Enter to stop")  
    }
}
addressBookArray.forEach(contact => console.log(contact.toString()))
