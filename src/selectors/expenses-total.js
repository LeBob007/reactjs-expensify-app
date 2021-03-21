// export default (expenses) => {
//     // if (expenses.length > 0) {
//     //     // const amounts = expenses.map(expense => expense.amount)
//     //     // const totalAmount = amounts.reduce((acc, amount) => acc + amount, 0)
//     //     const totalAmount = expenses.map(expense => expense.amount).reduce((acc, amount) => acc + amount, 0)
//     //     return totalAmount
//     // }
//     // return 0
//     return expenses.map(expense => expense.amount).reduce((acc, amount) => acc + amount, 0) || 0
// }

export default (expenses) => expenses.map(expense => expense.amount).reduce((acc, amount) => acc + amount, 0)