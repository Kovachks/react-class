import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            textArea: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => (
                { amount }
            ))
        }
    };

    onDateChange = (createdAt) => {
         if (createdAt) {
            this.setState(() => ({ createdAt }))
         }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused })) 
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {          
            this.setState(() => ({error: 'Please post a valid description and value'}))
        } else {
            // Clear the error
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description, 
                amount: parseFloat(this.state.amount, 10) * 100,
                textArea: this.state.textArea,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.textArea
            })
        };
    };

    render() {
        return (
            <div>
                {!this.state.error == '' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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