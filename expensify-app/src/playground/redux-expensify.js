import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt    
    }
});

const removeExpense = ({
    id
}  = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

// SET_DATE_FILTER
const sortByDate = () => ({
    type: 'FILTER_DATE'
})

// SET_AMOUNT_FILTER
const sortByAmount = () => ({
    type: 'FILTER_AMOUNT'
})

// SET_START_DATE
const setStartDate = (date = undefined) => ({
    type: 'FILTER_START_DATE',
    date
});

// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'FILTER_END_DATE',
    date
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return  [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            });

        default:
            return state
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
        return {
            ...state,
            text: action.text
        };
        case 'FILTER_DATE':
        return {
            ...state,
             sortBy: 'date'
        };
        case 'FILTER_AMOUNT':
        return {
            ...state,
             sortBy: 'amount'
        };
        case 'FILTER_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'FILTER_END_DATE':
        return {
            ...state,
            endDate: action.date
        }
        default:
            return state
    }
};

// timestamps
// 33400, 10, -203



// Get visible epxenses
const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const expenseMatch = expense.description.toLowerCase()
        const textFilter = text.toLowerCase()
        const textMatch = typeof textFilter !== 'string' || expenseMatch.includes(textFilter);

        return startDateMatch && endDateMatch && textMatch;
    })
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibileExpenses)
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

store.dispatch(setTextFilter('rEnt'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'asdl;kjdasld',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};