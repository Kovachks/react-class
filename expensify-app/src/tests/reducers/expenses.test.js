import expensesReducer from '../../reducers/expenses';
import uuid from 'uuid';

test('should add expense', () => {
    const currentState = [];
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: 'Rent',
            note: '',
            amount: 100,
            createdAt: 1000  
        }
    }
    const state = expensesReducer(currentState, action)
    expect(state[0]).toEqual({
        id: expect.any(String),
        description: 'Rent',
        note: '',
        amount: 100,
        createdAt: 1000
    });
});

test('shold remove expense', () => {
    const currentState = [{
        id: 'test',
        description: 'Rent',
        note: '',
        amount: 100,
        createdAt: 1000
    }]
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'test'
    }
    const state = expensesReducer(currentState, action);
    expect(state[0]).toBe(undefined)
});

test('shold modify expense', () => {
    const currentState = [{
        id: 'test',
        description: 'Rent',
        note: '',
        amount: 100,
        createdAt: 1000
    }]
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'test',
        updates: {
            description: 'Cable'
        }
    }
    const state = expensesReducer(currentState, action)
    expect(state[0]).toEqual({
        id: 'test',
        description: 'Cable',
        note: '',
        amount: 100,
        createdAt: 1000
    });
});