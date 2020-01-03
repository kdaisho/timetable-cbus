import React from "react";

const Table = props => {
    const { arrivals, direction, day, directionId, dayId } = props;
    return (
        <div className="container">
            <h2 className="title is-5">
                {direction} - {day}
            </h2>
            <div className="container-table section">
                <div className="table-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <td className="fixed">停留所</td>
                                <td colSpan="6">&nbsp;</td>
                            </tr>
                        </thead>
                        <tbody>
                            {arrivals[directionId][dayId].map(row => {
                                return (
                                    <tr key={row.id}>
                                        <td className="fixed">{row.name}</td>
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
