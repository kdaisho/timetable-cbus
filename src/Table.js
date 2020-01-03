import React, { Component } from "react";

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dir = this.props.directionId;
        const day = this.props.dayId;
        return (
            <div className="container">
                <h2 className="title is-5">
                    {this.props.direction} - {this.props.day}
                </h2>
                <div className="container-table section">
                    <div className="table-scroll">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="fixed">Bus Stops</td>
                                    <td colSpan="6">&nbsp;</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.arrivals[dir][day].map(row => {
                                    return (
                                        <tr key={row.id}>
                                            <td className="fixed">
                                                {row.name}
                                            </td>
                                            {row.hours.map(h => (
                                                <td key={h}>{h}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
