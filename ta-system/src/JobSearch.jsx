import React, { useState } from "react";

import "./JobSearch.css";

const JobSearch = ({ onFindJob }) => {
    const [expanded, setExpanded] = useState(false);

    const handleSearchClick = () => {
        setExpanded(true);
    };

    return (
        <div className="filter-area">
            <div className={`search-wrapper ${expanded ? 'expanded' : ''}`}>
               
                <input type="text" placeholder="Search by keyword" className="search-input" />
            </div>
            <select className="filter-dropdown">
                <option value="">Discipline</option>
                <option value="IT">IT</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
            </select>
            <select className="filter-dropdown">
                <option value="">Sort by: Most recent</option>
                <option value="most-relevant">Most relevant</option>
                <option value="least-recent">Least recent</option>
            </select>
            <button className="primary-button" onClick={onFindJob}>Find Job</button>
        </div>
    );
};
export default JobSearch;
