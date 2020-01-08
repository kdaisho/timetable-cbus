import React from "react";

const Table = props => {
    const { arrivals, direction, day, directionId, dayId } = props;
    return (
        <div className="wrapper is-main">
            <h2 className="direction-name">
                {direction} - {day}
            </h2>
            {/* <div>
                <button onClick={}>Weekday</button>
                <button onClick={}>Weekend</button>
            </div> */}
            <div className="wrapper-table">
                <div className="table-scroll">
                    <table className="table">
                        <thead>
                            <tr class="first-row">
                                <td className="fixed">
                                    <span>停留所</span>
                                </td>
                                <td colSpan="6">&nbsp;</td>
                            </tr>
                        </thead>
                        <tbody>
                            {arrivals[directionId][dayId].map(row => {
                                return (
                                    <tr key={row.id}>
                                        <td className="fixed">
                                            <span>{row.name}</span>
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
};
export default Table;
