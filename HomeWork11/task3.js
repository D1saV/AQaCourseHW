/**Завдання 3

Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити */

let url_1 = "https://jsonplaceholder.typicode.com/todos/1";
let url_2 = "https://jsonplaceholder.typicode.com/users/1";

async function getTodo(){

    try {
    const response = await fetch(url_1);
        if(!response.ok){
            throw new Error(`Something wrong. Error status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error fetching", error);
        throw error;
    }

}

async function getUser(){
   try {
    const response = await fetch(url_2);
        if(!response.ok){
            throw new Error(`Something wrong. Error status: ${response.status}`);
        }
        const data2 = await response.json();
        return data2;
    } catch (error) {
        console.error("error fetching", error);
        throw error;
    }
}

async function promiseResultByAll() {
    try {
        const results = Promise.all([getTodo(), getUser()]);
        console.log("Promise all result is:", results);
        return results;
    } catch(error) {
    console.error("Error at promise all:", error);
    throw error;
}
}

async function promiseResultByRace() {
    try {
        const firstResults = await Promise.race([getTodo(), getUser()]);
        console.log("Promise race result is:", firstResults);
        return firstResults;
    } catch(error) {
    console.error("Error at promise race:", error);
    throw error;
}
}

//test
async function testFunctions() {
    console.log("=== Testing Promise.all ===");
    const allResults = await promiseResultByAll();
    console.log("All results:", allResults);
    
    console.log("\n=== Testing Promise.race ===");
    const raceResult = await promiseResultByRace();
    console.log("Race result:", raceResult);
    
    console.log("\n=== Testing individual functions ===");
    const todo = await getTodo();
    console.log("Todo:", todo);
    
    const user = await getUser();
    console.log("User:", user);
}
testFunctions().catch(console.error);