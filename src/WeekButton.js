import React from "react";

const WeekButton = props => {
    return (
        <div>
            <button onClick={props.toggleDay} data-day="weekday">
                平日
            </button>
            <button onClick={props.toggleDay} data-day="weekend">
                土休日
            </button>
        </div>
    );
};

export default WeekButton;
