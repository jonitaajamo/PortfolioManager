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
            ended: ""
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
            <div className="column is-vertical is-half is-offset-one-quarter has-text-left">
                <div className="box">
                    <strong>Add new workplace or education</strong>
                    <br/>
                    <br/>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div classaName="field">
                            <label className="label">Event name:</label>
                            <input
                                className="input"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Name"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="label">Started:</label>
                            <input
                                className="input"
                                type="text"
                                value={this.state.year}
                                onChange={this.handleYearChange}
                                placeholder="YYYY"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="label">Event length (yrs):</label>
                            <input
                                className="input"
                                type="number"
                                value={this.state.year}
                                onChange={this.handleLengthChange}/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="label">Event is still ongoing:</label>
                            <input
                                className="input"
                                type="text"
                                value={this.state.ended}
                                onChange={this.handleEndedChange}
                                placeholder="false"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="label">Type:</label>
                            <input
                                className="input"
                                type="text"
                                value={this.state.type}
                                onChange={this.handleTypeChange}
                                placeholder="school/work"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="label">Description:
                            </label>
                            <textarea
                                className="input"
                                type="text"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                                placeholder="Description"/>
                        </div>
                        <br/>
                        <input type="submit" className="button is-primary" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddEvent;
