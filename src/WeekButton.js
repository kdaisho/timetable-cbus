import React from "react";

const WeekButton = props => {
    let weekBlur, weekendBlur;
    props.day === "weekend"
        ? (weekBlur = "is-blur")
        : (weekendBlur = "is-blur");
    return (
        <div className="week-btns">
            <button
                className={`${weekBlur} week-btn`}
                onClick={props.toggleDay}
                data-day="weekday"
            >
                平日
            </button>
            <button
                className={`${weekendBlur} week-btn`}
                onClick={props.toggleDay}
                data-day="weekend"
            >
                土休日
            </button>
        </div>
    );
};

export default WeekButton;
