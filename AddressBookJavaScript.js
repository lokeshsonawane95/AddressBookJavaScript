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

    toString(){
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nAddress : " + this.address +
         "\nCity " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhone Number : " + this.phoneNumber + 
         "\nemail : " + this.email
    }
}
let addressBook = new AddressBook("Lokesh", "Sonawane", "Warje", "Pune", "Maharashtra", 411058, 9876543210, "lokesh.sonawane@gmail.com")
console.log(addressBook.toString())