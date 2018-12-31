import React, { Component } from 'react';
import { createNote } from '../../store/actions/noteActions';
import { connect } from 'react-redux';

class CreateNote extends Component {
    state= {
        title: '',
        content:''
    };

    handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit= (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createNote(this.state)
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Note</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Note</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNote: (note) => dispatch(createNote(note))
    }
}

export default connect(null,mapDispatchToProps) (CreateNote);