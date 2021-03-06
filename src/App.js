import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
            {text:'Sacar la ropa'},
            {text:'Hacer la cama'},
            {text:'Leer un rato'}
        ],
        value: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let item = {
        text: this.state.value 
    }

    this.setState({
      items: this.state.items.concat([item])
    })
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
              {this.state.items.map((item, i) =>{
                return(
                    <li key={i}>{item.text}</li>
                )
              })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.value} onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
