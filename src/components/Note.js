import React, { Component } from 'react';

class Note extends Component {
	constructor(props) {
		super(props);

		this.state = { edit: false };
		this.toggleEdit = this.toggleEdit.bind(this);
		this.edit = this.edit.bind(this);
		this.display = this.display.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
	}

	toggleEdit() {
		this.setState({ edit: !this.state.edit });
	}

	display() {
		let note = this.props.note;

		return(
			<div className="col s12 m4">
	      <div className="card" style={{ backgroundColor: note.color }}>
	        <div className="card-content white-text">
	          <span className="card-title">{note.title}</span>
	          <p> { note.body } </p>
	          <i> { note.author} </i>
	        </div>
	        <div className="card-action">
	          <button className='btn green' onClick={this.toggleEdit}>Edit</button>
	          <button className='btn green' onClick={() => this.props.deleteNote(this.props.index)}>Delete</button>
	        </div>
	      </div>
      </div>
		);
	}

  handleEdit() {
    let { title, body, author} = this.refs
    let inputValue = {title: title.value, body: body.value, author: author.value };
    this.props.editItem(this.props.index, inputValue);
    this.toggleEdit();
  }

	edit() {
    let note = this.props.note;
    return(
			<div className="col s12 m4">
	      <div className="card" style={{ backgroundColor: note.color }}>
	        <div className="card-content white-text">
	          <input type='text' ref='title' defaultValue={note.title}/>
	          <input type='text' ref='body' defaultValue={note.body} />
	          <input type='text' ref='author' defaultValue={note.author} />
	        </div>
	        <div className="card-action">
	          <button className='btn green' onClick={this.toggleEdit}>Cancel</button>
	          <button className='btn green' onClick={this.handleEdit}>Submit</button>
	        </div>
	      </div>
      </div>
		);
	}

	render() {
		if(this.state.edit) {
			return(this.edit());
		} else {
			return(this.display());
		}
	}
}

export default Note;
