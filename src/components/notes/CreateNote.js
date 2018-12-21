import React, { Component } from 'react';

class CreateNote extends Component {
    state= {
        title: '',
        content:''
    };

    handleChange= (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit= (e) => {
        e.preventdefault();
        console.log(this.state);
    };

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
                        <textArea id="content" className="materialize-textarea"></textArea>
                    </div>
                    <div className="input-field">
                        <btn className="btn z-depth-0">Create</btn>
                    </div>
                </form>
            </div>
        )
    }
};
export default CreateNote;