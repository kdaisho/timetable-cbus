import React from "react";

const WeekButton = props => {
    return (
        <div className="week-btns">
            <button
                className={
                    "week-btn is-weekday" +
                    (props.day === "weekday" ? " active" : "")
                }
                onClick={props.toggleDay}
                data-day="weekday"
            >
                平日
            </button>
            <button
                className={
                    "week-btn is-weekend" +
                    (props.day === "weekend" ? " active" : "")
                }
                onClick={props.toggleDay}
                data-day="weekend"
            >
                土休日
            </button>
        </div>
    );
};

export default WeekButton;
