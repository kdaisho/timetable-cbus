import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Table from "./Table";
import headerItem from "../data/headerItem.json";
import schedules from "../data/schedules.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivals: schedules,
            direction: headerItem.directions[0].dirName,
            directionId: headerItem.directions[0].dirId,
            day: headerItem.directions[0].weekday.name,
            dayId: headerItem.directions[0].weekday.value
        };

        this.toggleDirection = event => {
            this.setState({
                direction: event.target.dataset.dirname,
                directionId: event.target.dataset.dirid,
                type: event.target.dataset.type,
                day: event.target.dataset.day,
                dayId: event.target.dataset.dayid
            });
        };
    }

    render() {
        return (
            <section>
                <Header
                    directions={headerItem.directions}
                    toggleDirection={this.toggleDirection}
                />
                <Table
                    arrivals={this.state.arrivals}
                    direction={this.state.direction}
                    directionId={this.state.directionId}
                    day={this.state.day}
                    dayId={this.state.dayId}
                    // toggleDay={this.toggleDay}
                />
            </section>
        );
    }
}

render(<App />, document.getElementById("root"));
