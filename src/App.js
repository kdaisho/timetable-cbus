import React from "react";
import { render } from "react-dom";
import Table from "./Table";

// const App = () => {
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: "北谷町老人福祉センター方面",
            day: "平日"
        };
        // this.toggleDirection = event => {
        this.toggleDirection = event => {
            const selected =
                event.target.value[0] === "r"
                    ? "北谷町老人福祉センター方面"
                    : "砂辺区公民館方面";
            this.setState({
                direction: selected,
                day: event.target.innerHTML
            });
        };
    }
    render() {
        return (
            <section>
                <header>
                    <div className="container">
                        <h1 className="title is-5 has-text-white">
                            北谷町コミュニティバス
                        </h1>
                        <div className="buttons">
                            <span className="buttons-title">
                                北谷町老人福祉センター方面
                            </span>
                            <button
                                className="button is-light is-small"
                                onClick={this.toggleDirection}
                                value="rojin_weekdays"
                            >
                                平日
                            </button>
                            <button
                                className="button is-light is-small"
                                onClick={this.toggleDirection}
                                value="rojin_holidays"
                            >
                                土休日
                            </button>
                        </div>
                        <div className="buttons">
                            <span className="buttons-title">
                                砂辺区公民館方面
                            </span>
                            <button
                                className="button is-light is-small"
                                onClick={this.toggleDirection}
                                value="sunabe_weekdays"
                            >
                                平日
                            </button>
                            <button
                                className="button is-light is-small"
                                onClick={this.toggleDirection}
                                value="sunabe_holidays"
                            >
                                土休日
                            </button>
                        </div>
                        <h2 className="title is-5 has-text-white">
                            {this.state.direction} {this.state.day}
                        </h2>
                    </div>
                </header>
                <div className="container" data-sense={this.state.direction}>
                    {/* <Table direction={this.state.direction} /> */}
                    <Table direction={this.state.direction} />
                </div>
            </section>
        );
    }
}

render(<App />, document.getElementById("root"));
