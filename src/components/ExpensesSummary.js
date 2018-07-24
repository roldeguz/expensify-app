import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseCount > 1 ? 'expenses' : 'expense'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    );
};
    
const mapStateToProps = (state) => {    
    const expenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesTotal: selectExpensesTotal(expenses),
        expenseCount: expenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);