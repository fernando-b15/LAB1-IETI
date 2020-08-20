import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{
	
   constructor(props) {
        super(props);
   }  
   render(){
	  const Todos = this.props.lista;
	  const listaTodos = this.props.lista.map((todo) =>
		<li key={todo.text}>
			<Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />
		</li>	
	  );
	  {console.log(listaTodos)}
	  return (
		<ul>{listaTodos}</ul>
	  );
   } 
} 

