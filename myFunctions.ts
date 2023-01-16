function addTwo(num: number): number {
    return num + 2

    // return "hello"; wont let you return a string 
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

addTwo(5);
getUpper("Luigi");

signUpUser("Luigi", "1232@gmail.com", false);

// multiple types 
function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok"
 }

const getHello = (s: string): string => {
    return "Hello"
} 

// good practice 
const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})

// add void to let developer know this function will not return anyting
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}