// destructuring --> it unpack object properties into a new variable

const Account = {
    AccountHolder : "Aryan Chaudhary",
    AccoutNumber : 48951605410124,
    Branch : "PNB"
}

// lets destructure
// const AccoutNumber = Account.AccoutNumber;
// console.log(AccoutNumber)

let {AccountHolder, AccoutNumber} = Account;
