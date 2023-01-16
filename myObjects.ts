const User = {
    name: "Luigi",
    email: "luigi@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {
    
}

let newUser = {name: "luigi", isPaid: false, email: "luigi@gmail.com"}

createUser(newUser);


function createCourse(): { name: string, price: number } {
    return {name: "Luigi", price:100000000000}
}

type Profile = {
    name: string;
    email: string;
    isActive: boolean;
}

function createProfile(profile: Profile): Profile {
    return { name: "", email: "", isActive: true }
}

export {}