import React from "react";

const Header = props => {
    const { directions, toggleDirection } = props;
    return (
        <header>
            <div className="wrapper main-padding">
                <div className="title-group">
                    <h1 className="title is-white">
                        北谷町コミュニティバス{" "}
                        <span className="nowrap is-white">北ルート&nbsp;</span>
                        <span className="date is-white">2019/6/1&nbsp;-</span>
                    </h1>
                </div>
                <div className="search-container">
                    <label className="is-white">
                        停留所検索&nbsp;
                        <input
                            type="text"
                            className="search"
                            onChange={props.handleSearch}
                            value={props.searchTerm}
                            placeholder="バス停名をどうぞ。"
                        />
                    </label>
                    <button
                        className={
                            "clear-search " +
                            (props.searchTerm.length && "show")
                        }
                        onClick={props.clearSearch}
                    >
                        &times;
                    </button>
                </div>
                <div className="header-buttons">
                    {directions.map(dir => (
                        <button
                            key={dir.id}
                            className={
                                "header-button " +
                                (props.directionId === dir.dirId && "active")
                            }
                            onClick={toggleDirection}
                            data-dirname={dir.dirName}
                            data-dirid={dir.dirId}
                        >
                            {dir.dirName}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
