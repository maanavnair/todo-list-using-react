export default function Input(props){
    return(
        <div>
            <div className="input">
                <input className="input-region" placeholder="Enter a task.." value = {props.val} onChange={
                    e => {
                        props.setVal(e.target.value)
                    }}
                />
                <button className="add-btn" onClick={props.onSmash}>ADD</button>
            </div>
            <div className="parent">
                <h2>TASKS</h2>
                <ul>
                    {props.item.map((a, index) => (
                        <div key={index} className="tasks">
                        <li key = {props.item.length}>{a.value}</li>
                        <button className="delete-btn" onClick={() => props.handleDelete(a.key)}>DELETE</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}