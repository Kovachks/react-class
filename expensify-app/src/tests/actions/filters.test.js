import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test(`should generate set start date action object`, () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'FILTER_START_DATE',
        date: moment(0)
    })
});

test(`shou ld generate set end date action object`, () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'FILTER_END_DATE',
        date: moment(0)
    })
});

test(`expect filter text to return action object`, () => {
    const action = setTextFilter('filter')

    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: 'filter'
    })
});

test(`expect filter text to return empty action object`, () => {
    const action = setTextFilter('')

    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: ''
    })
});

test(`should set sortByDate action object`, () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'FILTER_DATE'
    });
});

test(`should set sortByAmount action object`, () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'FILTER_AMOUNT'
    });
});
