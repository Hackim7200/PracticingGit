import Items from './Items'
function DisplayItems(props){
    
    return(
        <div>
            <Items expenseItem={props.expenses[0]}/>
            <Items expenseItem={props.expenses[1]}/>
            <Items expenseItem={props.expenses[2]}/>
            <Items expenseItem={props.expenses[3]}/>
        </div>
    )

}
export default DisplayItems;