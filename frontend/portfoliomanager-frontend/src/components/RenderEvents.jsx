import React, {Component} from 'react';

class RenderEvents extends Component {

    renderEvents() {
        return this
            .props
            .eventData
            .map((item, key) => {
                const endYear = item.ended
                    ? item.year + item.length
                    : "";

                const eventType = item.type === "work"
                    ? "Workplace"
                    : "School";

                return (
                    <div className="box has-text-left">
                        <article>
                            <div className="media-content">
                                <p>
                                    <strong>{item.name}</strong>
                                    <small>
                                        <br/> {item.year}
                                        &nbsp;- {endYear},
                                    </small>
                                    <small>
                                        &nbsp;&nbsp;{eventType}
                                    </small>
                                    <br/>{item.description}
                                </p>
                                <div className="has-text-right">
                                    <button
                                        className="button is-danger"
                                        onClick={() => this.props.onEventDelete(item.id)}>X</button>
                                </div>
                            </div>

                        </article>
                    </div>
                )
            })
    }

    render() {
        return (
            <div className="column is-vertical is-half is-offset-one-quarter">
                {this.renderEvents()}
            </div>
        );
    }
}

export default RenderEvents;
