import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'

const ListItem = function({ onRemove, onUpdate, item: { id, value } }) {

    return (
        <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
            <span>id : {id}</span><br />
            <span>value : {value}</span><br />
            <button onClick={() => onRemove(id)}>remove</button>&nbsp;
            <button onClick={() => onUpdate(id, { id: id, value: value + 1 })}>update</button>
        </div>
    )
}

const ListComponent = function(props) {
    const [list, setList] =  useState([])

    const handleCreateItem = () => setList(state => state.concat({ id: v4(), value: 0 }))
    const handleRemoveItem = (uuid) => setList(state => state.filter((item) => item.id !== uuid))
    const handleUpdateItem = (uuid, updated) => setList(state => state.map(item => (item.id === uuid) ? updated : item))

    return (
        <div>
            <button onClick={handleCreateItem}>add</button>
            <ul>
                {
                    list.map(item => {
                        return <li key={item.id}>
                            <ListItem item={item} onRemove={handleRemoveItem} onUpdate={handleUpdateItem} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

ReactDOM.render(<ListComponent />, document.getElementById("root"))