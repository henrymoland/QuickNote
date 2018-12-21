import React, { Component } from 'react';
import Notifications from './Notifications';
import NoteList from '../notes/NoteList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col sm-12 m6">
                        <NoteList />
                    </div>

                    <div className="col sm-12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    };
}

export default Dashboard;