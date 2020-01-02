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
            // arrivals: schedules.rojin.weekdays,
            arrivals: schedules,
            direction: headerItem.directions[0].title,
            directionId: headerItem.directions[0].type,
            day: headerItem.directions[0].weekday.name,
            dayId: headerItem.directions[0].weekday.value
        };
        this.toggleDirection = event => {
            this.setState({
                // arrivals: schedules.arrivals,
                direction: event.target.dataset.direction,
                directionId: event.target.value,
                day: event.target.dataset.day
            });
        };
    }

    render() {
        return (
            <section>
                <Header
                    headerItem={headerItem}
                    toggleDirection={this.toggleDirection}
                />
                <Table
                    arrivals={this.state.arrivals}
                    headerItem={headerItem}
                    direction={this.state.direction}
                    directionId={this.state.directionId}
                    day={this.state.day}
                    dayId={this.state.dayId}
                />
            </section>
        );
    }
}

render(<App />, document.getElementById("root"));
