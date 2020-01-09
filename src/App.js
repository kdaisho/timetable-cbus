import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Table from "./Table";
import WeekButton from "./WeekButton";
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
            dayId: headerItem.directions[0].weekday.value,
            searchTerm: ""
        };

        this.toggleDirection = event => {
            this.setState({
                direction: event.target.dataset.dirname,
                directionId: event.target.dataset.dirid,
                type: event.target.dataset.type
            });
        };

        this.toggleDay = event => {
            const day = event.target.dataset.day;
            this.setState({
                day: headerItem[day].name,
                dayId: day
            });
        };

        this.handleSearch = event => {
            console.log(event.target.value);
            this.setState({
                searchTerm: event.target.value
            });
        };
    }

    render() {
        return (
            <section>
                <Header
                    searchTerm={this.state.searchTerm}
                    handleSearch={this.handleSearch}
                    directions={headerItem.directions}
                    toggleDirection={this.toggleDirection}
                />
                <div className="wrapper main-padding">
                    <h2 className="direction-name">{this.state.direction}</h2>
                    <WeekButton
                        day={this.state.dayId}
                        toggleDay={this.toggleDay}
                    />
                    <Table
                        searchTerm={this.state.searchTerm}
                        arrivals={this.state.arrivals}
                        directionId={this.state.directionId}
                        dayId={this.state.dayId}
                    />
                </div>
            </section>
        );
    }
}

render(<App />, document.getElementById("root"));
