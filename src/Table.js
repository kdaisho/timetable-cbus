import React from "react";

const Table = props => {
    const { arrivals, directionId, dayId } = props;
    console.log(props.searchTerm);
    return (
        <div className="wrapper-table">
            <div className="table-scroll">
                <table className="table">
                    <thead>
                        <tr className="first-row">
                            <td className="fixed">
                                <span className="is-white">停留所</span>
                            </td>
                            <td colSpan="6">&nbsp;</td>
                        </tr>
                    </thead>
                    <tbody>
                        {arrivals[directionId][dayId]
                            .filter(
                                dest =>
                                    `${dest.name} ${dest.id}`.indexOf(
                                        props.searchTerm
                                    ) >= 0
                            )
                            .map(row => {
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
    );
};
export default Table;
