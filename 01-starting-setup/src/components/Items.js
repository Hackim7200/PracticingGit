import './Items.css'
function Items(props){

    return(
        <div className="items">
            <div className='itemsName'>{props.expenseItem.title}
            <button onClick={()=>{alert("clicked")}}>change title</button>
            </div>
            <div className='itemsDate'>{props.expenseItem.date.getDate()+"/"+props.expenseItem.date.getMonth()+"/"+props.expenseItem.date.getFullYear()}</div>
            <div className='itemsPrice'>£{props.expenseItem.amount}</div>

        </div>
    )

}
export default Items;