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
            this.setState({
                searchTerm: event.target.value
            });
        };

        this.clearSearch = () => {
            this.setState({ searchTerm: "" });
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
                    clearSearch={this.clearSearch}
                />
                <div className="wrapper main-padding">
                    <h2 className="direction-name">{this.state.direction}</h2>
                    <p
                        className="search-display"
                        style={{ display: !this.state.searchTerm && "none" }}
                    >
                        検索ワード：{this.state.searchTerm}
                    </p>
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
