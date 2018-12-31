import React, { Component } from 'react';
import Notifications from './Notifications';
import NoteList from '../notes/NoteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
    console.log(state)
    return {
        notes: state.firestore.ordered.notes
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notes' }
    ])
    )(Dashboard);