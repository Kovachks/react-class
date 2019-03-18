import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test(`should setup remove expense action object`, () => {
    const action = removeExpense({id: '123abc'})
    
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test(`should setup edit expense action object`, () => {
    const action = editExpense( `123abc`, {
            note: `new note value`
        }
    )

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    });
});

test(`should setup add exp ense action object`, () => {
    const action = addExpense({
        description: 'rent',
        note:  'test note',
        amount: 500,
        createdAt: 1000
    });

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'rent',
            note: 'test note',
            amount: 500,
            createdAt: 1000
        }
    });
});

test(`should setup blank add expense action object`, () => {
    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});