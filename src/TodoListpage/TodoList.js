import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text"/>
                    </label>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
