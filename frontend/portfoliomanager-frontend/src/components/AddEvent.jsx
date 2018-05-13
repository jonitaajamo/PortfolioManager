import React, {Component} from 'react';

class AddEvent extends Component {

    constructor() {
        super();
        this.state = ({
            year: 0,
            length: 0,
            name: "",
            type: "",
            description: "",
            ended: false
        })
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleYearChange(event) {
        this.setState({year: event.target.value});
    }

    handleLengthChange(event) {
        this.setState({length: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this
            .props
            .onEventAdd(this.state.year, this.state.length, this.state.name, this.state.type, this.state.description, this.state.ended);
    }

    render() {
        return (
            <div className="column is-vertical is-half has-text-left">
                <div className="box">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label>
                            Event name:
                            <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                        </label>
                        <br/>
                        <label>
                            Starting (YYYY):
                            <input type="number" value={this.state.year} onChange={this.handleYearChange}/>
                        </label>
                        <br/>
                        <label>
                            Event length (yrs):
                            <input
                                type="number"
                                value={this.state.year}
                                onChange={this.handleLengthChange}/>
                        </label>
                        <br/>
                        <label>
                            Event is still ongoing:
                            <input type="text" value={this.state.ended} onChange={this.handleEndedChange}/>
                        </label>
                        <br/>
                        <label>
                            Type:
                            <input type="number" value={this.state.year} onChange={this.handleTypeChange}/>
                        </label>
                        <br/>
                        <label>
                            Description:
                            <input
                                type="text"
                                value={this.state.year}
                                onChange={this.handleDescriptionChange}/>
                        </label>
                        <br/>
                        <input type="submit" className="button is-primary" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddEvent;
