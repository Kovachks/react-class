import expensesReducer from '../../reducers/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses'

test('should setup default filter values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

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

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(2)
});

test('shold not remove expenses if id isnot found', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'teadsasa'
    }
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(3)
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