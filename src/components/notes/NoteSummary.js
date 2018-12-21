import React from 'react';

const NoteSummary = ({ note }) => {
    return (
        <div className=" card z-depth-0 note-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{note.title}</span>
                <p>Posted by Henry Moland</p>
                <p className="grey-text">16th December, 10am</p>
            </div>
        </div>
    
    )
};

export default NoteSummary;