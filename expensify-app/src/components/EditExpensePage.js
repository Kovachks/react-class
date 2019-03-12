import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {

    return (
        <div>
            Editing component with an id of {props.match.params.id}
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log(`this is a test ${JSON.stringify(state)}`)
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

export default connect(mapStateToProps)(EditExpensePage)