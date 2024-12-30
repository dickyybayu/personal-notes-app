import React, { act } from 'react';
import { getInitialData} from '../utils';
import SearchBar from './SearchBar';
import TabMenu from './TabMenu';
import NotesList from './NotesList';
import NotesInput from './NotesInput';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
      activeTab: 'notes',
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.searchHandler= this.searchHandler.bind(this);
    this.switchTabHandler = this.switchTabHandler.bind(this);
  }

    deleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    addNoteHandler({ title, body}) {
        this.setState((prevState) => { 
            return {
                notes: [
                    ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    archived: false,
                    createdAt: new Date().toISOString(),
                }
                ]
            }});
    }

    archiveNoteHandler(id) {
        const notes = this.state.notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
          );
        this.setState({ notes });
    }

    searchHandler(event) {
        this.setState({ search: event.target.value });
    }

    switchTabHandler(tab) {
        this.setState({ activeTab: tab });
    }


  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const visibleNotes = filteredNotes.filter((note) =>
        this.state.activeTab === 'notes' ? !note.archived : note.archived
      );
      

    return (
      <div className="notes-app">
        <h1>Personal Notes App</h1>
        <SearchBar search={this.state.search} onSearch={this.searchHandler} />
        <TabMenu activeTab={this.state.activeTab} onSwitchTab={this.switchTabHandler} />
        <NotesInput addNote={this.addNoteHandler} />
        <NotesList
          notes={visibleNotes}
          onDelete={this.deleteNoteHandler}
          onArchive={this.archiveNoteHandler}
        />
      </div>
    );
  }
}

export default NotesApp;