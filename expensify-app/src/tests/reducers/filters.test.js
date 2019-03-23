import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'FILTER_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'FILTER_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should return text to be test', () => {
    const text = 'test'
    const action = { 
        type: 'FILTER_TEXT',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text);
});

test('should set start date filter ', () => {
    const date = 100
    const action = {
        type: 'FILTER_START_DATE',
        date
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(date)
});

test('should set end date filter', () => {
    const date = 500
    const action = {
        type: 'FILTER_END_DATE',
        date: 500
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(date)
});