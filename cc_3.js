// Task 1: Product Price Management
let price = [120, 350, 657, 751, 965] // Initial array of prices
price.push(75) // Adds new price to array
price.splice(0, 1) // Removes first price in array
console.log("Updated Prices:", price) //  Outputs updated prices into console

// Task 2: Modifying Customer Orders
let orders = [12, 49, 57, 69, 25] // Initial array of order
orders[2] = orders[2] + 5 // Increases the third order quantity by 5
let totalOrderCount = orders.reduce((acc, order) => acc + order) // Sums up order quanitites together
console.log("Updated Orders:", orders) // Outputs updates order array
console.log("Total Order Count:", totalOrderCount) // Outputs total order count

// Task 3: Employee Performance Tracking
let employee = {
    name: "Peter Parker",
    role: "Photographer",
    perfomanceScore: 75,
    isActive: true
} // Initial employee object
employee.perfomanceScore = 84 // Updates employee performance score
employee.promotionEligible = true // Adds new property of propmotionEligible to employee object
console.log("Employee:", employee) // Outputs employee information