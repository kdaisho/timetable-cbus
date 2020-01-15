import React, { Component } from "react";
import Modal from "./Modal";
import mapList from "../data/mapList.js";

class Table extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            mapUrl: ""
        };

        this.toggleModal = id => {
            if (!this.state.showModal) {
                const selectedObj = mapList.filter(obj => {
                    return obj.id === id;
                });
                console.log(selectedObj[0].url);
                this.setState({ mapUrl: selectedObj[0].url });
            }
            this.setState({
                showModal: !this.state.showModal
            });
        };
    }
    render() {
        const { arrivals, directionId, dayId, searchTerm } = this.props;
        console.log("URL", this.state.mapUrl);
        const googleMaps = (
            <iframe
                src={`https://www.google.com/maps/embed?${this.state.mapUrl}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
            ></iframe>
        );
        return (
            <div className="wrapper-table">
                <div className="table-scroll">
                    <div className="scrollbar-wrapper">
                        <p className="hint">スクロールできます</p>
                        <div className="scrollbar">
                            <div className="triangle is-left"></div>
                            <div className="bar"></div>
                            <div className="triangle is-right"></div>
                        </div>
                    </div>
                    <table
                        className={
                            "table" + (dayId === "weekend" ? " is-weekend" : "")
                        }
                    >
                        <thead>
                            <tr className="first-row">
                                <td className="fixed is-first">
                                    <span className="absolute is-white">
                                        地図
                                    </span>
                                </td>
                                <td className="fixed">
                                    <span className="absolute is-white">
                                        停留所
                                    </span>
                                </td>
                                <td colSpan="6"></td>
                            </tr>
                        </thead>
                        <tbody>
                            {arrivals[directionId][dayId]
                                .filter(
                                    dest =>
                                        `${dest.name}`.indexOf(searchTerm) >= 0
                                )
                                .map(row => {
                                    return (
                                        <tr key={row.id}>
                                            <td
                                                className="fixed is-first hover-cursor"
                                                data-id={row.id}
                                                onClick={() =>
                                                    this.toggleModal(row.id)
                                                }
                                            >
                                                <span className="absolute icon-map">
                                                    📌
                                                </span>
                                            </td>
                                            <td className="fixed">
                                                <span className="absolute">
                                                    {row.name}
                                                </span>
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
                {this.state.showModal ? (
                    <Modal>
                        <div className="modal" onClick={this.toggleModal}>
                            <div
                                className="modal-content"
                                onClick={event => event.stopPropagation()}
                            >
                                {googleMaps}
                            </div>
                        </div>
                    </Modal>
                ) : (
                    ""
                )}
            </div>
        );
    }
}
export default Table;
