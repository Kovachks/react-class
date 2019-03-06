import React from 'react';

export default class ExpenseForm extends React.Component {
    
    state = {
        description: '',
        textArea: '',
        amount: ''
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
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => (
                { amount }
            ))
        }
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