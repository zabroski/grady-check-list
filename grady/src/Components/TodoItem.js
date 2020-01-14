import React from "react"

function TododItem (props) {

    const compledStyle = {
        fontStyle: "italic",
        color: "red",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item" >
            <input type="checkbox" 
            checked={props.item.completed} 
             onChange={() => props.handleChange(props.item.id)}/>
            <p style={props.item.completed ? compledStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default TododItem;