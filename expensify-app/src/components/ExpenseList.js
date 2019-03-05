import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.map(expense => (
            <p>{expense.description} {expense.amount}</p>
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);