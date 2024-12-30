import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            charLimit: 50, 
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleTitleChange(event) {
        const input = event.target.value;
        if (input.length <= this.state.charLimit) {
            this.setState({ title: input });
        }
    }
    
    handleBodyChange(event) {
        this.setState({ body: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({ title: '', body: '' });
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div className="input-title">
                <p>
                    {this.state.charLimit - this.state.title.length} characters remaining
                </p>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    placeholder="Title"
                    required
                />
            </div>
            <textarea
            value={this.state.body}
            onChange={this.handleBodyChange}
            placeholder="Note"
            required
            />
            <button type="submit">Add Note</button>
        </form>
        );
    }
}

export default NotesInput;
