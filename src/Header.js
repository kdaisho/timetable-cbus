import React from "react";

const Header = props => {
    const { directions, toggleDirection } = props;
    return (
        <header>
            <div className="container">
                <h1 className="title">北谷町コミュニティバス</h1>
                {directions.map(dir => (
                    <div className="buttons" key={dir.id}>
                        <span className="buttons-title">{dir.dirName}</span>
                        <button
                            onClick={toggleDirection}
                            data-dirname={dir.dirName}
                            data-dirid={dir.dirId}
                            data-day={dir.weekday.name}
                            data-dayid={dir.weekday.value}
                        >
                            {dir.weekday.name}
                        </button>
                        <button
                            onClick={toggleDirection}
                            data-dirname={dir.dirName}
                            data-dirid={dir.dirId}
                            data-day={dir.weekend.name}
                            data-dayid={dir.weekend.value}
                        >
                            {dir.weekend.name}
                        </button>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
