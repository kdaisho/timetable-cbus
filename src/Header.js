import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        // console.log(props);
        super(props);
        this.state = {
            title: props.headerItem.title
        };
    }

    render() {
        return (
            <header>
                <div className="container">
                    <h1 className="title is-5 has-text-white">
                        {this.state.title}
                    </h1>
                    {this.props.headerItem.directions.map(direction => (
                        <div className="buttons" key={direction.id}>
                            <span className="buttons-title">
                                {direction.title}
                            </span>
                            <button
                                className="button is-light is-small"
                                onClick={this.props.toggleDirection}
                                data-direction={direction.title}
                                data-day={direction.weekday}
                                value={direction.type}
                            >
                                {direction.weekday.name}
                            </button>
                            <button
                                className="button is-light is-small"
                                onClick={this.props.toggleDirection}
                                data-direction={direction.title}
                                data-day={direction.weekend}
                                value={direction.type}
                            >
                                {direction.weekend.name}
                            </button>
                        </div>
                    ))}
                </div>
            </header>
        );
    }
}

export default Header;
