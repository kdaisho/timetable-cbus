import React, { Component } from "react";
import Modal from "./Modal";

class Table extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            showModal: false
        };

        this.toggleModal = event => {
            this.setState({ showModal: !this.state.showModal });
        };
    }
    render() {
        const { arrivals, directionId, dayId, searchTerm } = this.props;
        const map = (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.345362205833!2d127.74513113827034!3d26.323703566801786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e513a2fdacb529%3A0x78a615d9ac2980ea!2zU3VuYWJlIENodWtpam_vvIh2aWEgWW9taXRhbu-8iQ!5e0!3m2!1sen!2sca!4v1578778488631!5m2!1sen!2sca"
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
                                                className="fixed is-first"
                                                onClick={this.toggleModal}
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
                                {map}
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
