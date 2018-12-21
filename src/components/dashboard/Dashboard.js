import React, { Component } from 'react';
import Notifications from './Notifications';
import NoteList from '../notes/NoteList';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {

        const { notes } = this.props;
        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col sm-12 m6">
                        <NoteList notes={ notes } />
                    </div>

                    <div className="col sm-12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        notes: state.note.notes
    }
}

export default connect(mapStateToProps)(Dashboard);