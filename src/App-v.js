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
        ]
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  
  updateInputValue(e) {
    e.preventDefault();
    let item = {
        text: e.target.text.value 
    }

    this.setState({
      items: this.state.items.concat([item])
    })

    e.target.text.value = '';
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
          <form onSubmit={this.updateInputValue}>
            <input type="text" id="new-task" name="text" placeholder="Ingresa una tarea y oprime Enter"/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
