let url_1 = "https://jsonplaceholder.typicode.com/todos/1";
let url_2 = "https://jsonplaceholder.typicode.com/users/1";

class TodoService {
    constructor() {
        this.todoUrl = url_1; 
    }

    async getTodo() {
        try {
            const response = await fetch(this.todoUrl);
            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching todo:", error);
            throw error;
        }
    }
}

class UserService {
    constructor() {
        this.userUrl = url_2; 
    }

    async getUser() {
        try {
            const response = await fetch(this.userUrl);
            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }
            return await response.json(); 
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    }
}

class PromiseService {
    constructor() {
        this.todoService = new TodoService();
        this.userService = new UserService();
    }

    async promiseResultByAll() {
        try {
            const results = await Promise.all([
                this.todoService.getTodo(),
                this.userService.getUser()
            ]);
            console.log("Promise all result:", results);
            return results;
        } catch (error) {
            console.error("Error in Promise.all:", error);
            throw error;
        }
    }

    async promiseResultByRace() {
        try {
            const firstResult = await Promise.race([
                this.todoService.getTodo(),
                this.userService.getUser()
            ]);
            console.log("Promise race result:", firstResult);
            return firstResult;
        } catch (error) {
            console.error("Error in Promise.race:", error);
            throw error;
        }
    }
}

// Тести
async function testClasses() {
    console.log("=== Testing TodoService ===");
    const todoService = new TodoService();
    try {
        const todo = await todoService.getTodo();
        console.log("Todo:", todo);
    } catch (error) {
        console.error("Todo test failed:", error);
    }

    console.log("\n=== Testing UserService ===");
    const userService = new UserService();
    try {
        const user = await userService.getUser();
        console.log("User:", user);
    } catch (error) {
        console.error("User test failed:", error);
    }

    console.log("\n=== Testing PromiseService ===");
    const promiseService = new PromiseService();
    
    console.log("\n--- Testing Promise.all ---");
    try {
        const allResults = await promiseService.promiseResultByAll();
        console.log("All results:", allResults);
    } catch (error) {
        console.error("Promise.all test failed:", error);
    }

    console.log("\n--- Testing Promise.race ---");
    try {
        const raceResult = await promiseService.promiseResultByRace();
        console.log("Race result:", raceResult);
    } catch (error) {
        console.error("Promise.race test failed:", error);
    }
}

// Запуск тестів
testClasses().catch(console.error);