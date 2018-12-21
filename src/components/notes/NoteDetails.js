import React from 'react';

const NoteDetails = (props) => {

    const id = props.match.params.id;
    return (
        <div className="container section note-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Note Title {id}</span>
                    <p>Irure ad ea nostrud sunt magna ea velit esse. Fugiat in do adipisicing nisi tempor. Dolor id quis veniam exercitation fugiat duis incididunt exercitation.</p>
                </div>
                <div className="card-action grey lighten-4 grey text">
                    <div>Posted by Henry Moland</div>
                    <div>16th December, 12pm</div>
                </div>
            </div>
        </div>
    )
}
export default NoteDetails;