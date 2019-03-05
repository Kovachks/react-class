// Get visible epxenses
const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const expenseMatch = expense.description.toLowerCase();
        const textFilter = text.toLowerCase();
        const textMatch = typeof textFilter !== 'string' || expenseMatch.includes(textFilter);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if ( sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibileExpenses