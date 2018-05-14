import React, {Component} from 'react';
import './App.css';
import "bulma/css/bulma.css";
import RenderEvents from './components/RenderEvents.jsx';
import AddEvent from './components/AddEvent.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: []
    };
  }

  fetchEventData() {
    const url = "http://localhost:8080/rest/events/"
    fetch(url, {
        method: "GET",
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        this.setState({eventData: result});
      });
  }

  componentDidMount() {
    this.fetchEventData();
  }

  deleteEvent(id) {
    const url = "http://localhost:8080/rest/events"

    fetch(url + "/" + id, {method: "DELETE"})
      .then(response => response.json())
      .then(response => {
        this.setState({eventData: response})
      })
      .catch(error => error);
  }

  addEvent(year, length, name, type, description, ended) {
    const url = "http://localhost:8080/rest/events";

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON
        .stringify({
        year: year,
        length: length,
        name: name,
        type: type,
        description: description,
        ended: ended
      })
        .then(response => response.json())
        .then(response => this.setState({
          eventData: [
            ...this.state.response,
            response
          ]
        }))
    })
  }

  onEventDelete(id) {
    this.deleteEvent(id);
  }

  onEventAdd(year, length, name, type, description, ended) {
    this.addEvent(year, length, name, type, description, ended);
  }

  render() {
    return (
      <div className="App container is-fluid">
        <h1>Joni Taajamo's CV</h1>
        <RenderEvents
          eventData={this.state.eventData}
          onEventDelete={this
          .onEventDelete
          .bind(this)}/>
        <AddEvent onEventAdd={this
          .onEventAdd
          .bind(this)}/>
      </div>
    );
  }
}

export default App;
