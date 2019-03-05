// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'FILTER_TEXT',
    text
});

// SET_DATE_FILTER
export const sortByDate = () => ({
    type: 'FILTER_DATE'
})

// SET_AMOUNT_FILTER
export const sortByAmount = () => ({
    type: 'FILTER_AMOUNT'
})

// SET_START_DATE
export const setStartDate = (date = undefined) => ({
    type: 'FILTER_START_DATE',
    date
});

// SET_END_DATE
export const setEndDate = (date = undefined) => ({
    type: 'FILTER_END_DATE',
    date
});