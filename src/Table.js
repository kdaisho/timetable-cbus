import React from "react";
import time from "./data/schedules.json";

// const Table = props => (
//     <div>
//         <h2 className="title is-5">{props.direction}</h2>
//         <div className="container-table section">
//             <div className="table-scroll">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <td className="fixed">Stop</td>
//                             <td colSpan="6">Time</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="fixed">
//                                 {/* {times.map(t => t.name)} */}
//                             </td>
//                             {/* {times.map(h =>
//                                 h.hours.map(time => <td key={time}>{time}</td>)
//                             )} */}
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// );
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.direction
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        return { title: nextProps.direction };
    }

    render() {
        const times = time.arrivals;
        return (
            <div>
                <h2 className="title is-5">{this.state.title}</h2>
                <div className="container-table section">
                    <div className="table-scroll">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td className="fixed">Stop</td>
                                    <td colSpan="6">Time</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fixed">
                                        {/* <span className="po"> */}
                                        {times.map(t => t.name)}
                                        {/* </span> */}
                                    </td>
                                    {/* {times.map(h => h.hours.map(h => <td>h</td>))} */}
                                    {times.map(h =>
                                        h.hours.map(time => (
                                            <td key={time}>{time}</td>
                                        ))
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
