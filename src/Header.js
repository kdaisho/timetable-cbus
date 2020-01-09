import React from "react";

const Header = props => {
    const { directions, toggleDirection } = props;
    return (
        <header>
            <div className="wrapper main-padding">
                <h1 className="title">北谷町コミュニティバス</h1>
                {directions.map(dir => (
                    <div className="buttons" key={dir.id}>
                        <button
                            className="buttons-title"
                            onClick={toggleDirection}
                            data-dirname={dir.dirName}
                            data-dirid={dir.dirId}
                        >
                            {dir.dirName}
                        </button>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
