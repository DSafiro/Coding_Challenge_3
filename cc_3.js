// Task 1: Product Price Management
let price = [120, 350, 657, 751, 965] // Initial array of prices
price.push(75) // Adds new price to array
price.splice(0, 1) // Removes first price in array
console.log("Updated Prices:", price) //  Outputs updated prices into console

// Task 2: Modifying Customer Orders
let orders = [12, 49, 57, 69, 25] // Initial array of order
orders[2] = orders[2] + 5 // Increases the third order quantity by 5
let totalOrderCount = orders.reduce((acc, order) => acc + order) // Sums up order quanitites together
console.log("Updated Orders:", orders) // Outputs updated order array
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

// Task 4: Customer Feedback Records
let feedback = [
    {customerName: "Clark Kent", feedbackText: "Great job!", rating: 5},
    {customerName: "Bruce Wayne", feedbackText: "Good but can be better.", rating: 3},
    {customerName: "Barry Allen", feedbackText: "Nice work!", rating: 5}
] // Initial array of customer feedback
feedback.push({customerName: "Diana Prince", feedbackText: "Excellent work!", rating: 4.5}) // Adds new feedback object to array
console.log("Customer Feedback", feedback) // Outputs updated customer feedback