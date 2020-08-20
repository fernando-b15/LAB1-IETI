import React from 'react';
import {TodoList} from './TodoList';
import moment from 'moment';
import DatePicker from 'react-date-picker';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.tempo = null;
  }
  render() {  
    return (
      <div>
        <h3>TODO</h3>
        <TodoList lista={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={(e)=>this.setText(e)}
            value={this.state.text}
          />
		   <label htmlFor="new-todo-priority">
            Priority 
          </label>
          <input
            id="new-todo-priority"
            onChange={(e)=>this.setPriority(e)}
            value={this.state.priotity}
          />
		   <label htmlFor="new-todo-dueDate">
            DueDate
          </label>
          <DatePicker
			  onChange={(e)=>this.setDueDate(e)}
			  value={this.state.dueDate}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
  setText(e){
	  this.setState({text: e.target.value});
  }
  setPriority(e){
	  this.setState({priority: e.target.value});
  }
  setDueDate(e){
		console.log(e);
		this.setState({dueDate: e});
	  

  }   
  handleChange(e) {
      this.setState({ text: e.target.value });
  }

  handleSubmit(e) { 
	console.log(this.state.items)
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
	  dueDate: this.state.dueDate,
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
	  priority: '',
	  dueDate: ''
    }));
  }
}