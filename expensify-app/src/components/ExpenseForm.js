import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();

export default class ExpenseForm extends React.Component {
    
    state = {
        description: '',
        textArea: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    componentDidMount = () => {
        console.log(this.state.createdAt)
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => (
            { description }
        ))
    };

    onTextAreaChange = (e) => {
        const textArea = e.target.value;
        this.setState(() => (
            { textArea }
        ))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => (
                { amount }
            ))
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused })) 
    }
    
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.textArea}
                        onChange={this.onTextAreaChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}