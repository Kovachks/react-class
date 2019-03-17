import moment from 'moment'

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export default filtersReducer