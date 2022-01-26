import { Injectable } from '@angular/core';
import { Note } from '../domain/note';

function* generateId(){
  let id = 1;
  while(true){
    yield id;
    id++;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  generateId = generateId();

  private notes: Note[] = [];

  constructor() { }

  getNotes(){
    return this.notes;
  }

  addNote(note: Note){
    note.id = this.generateId.next().value || 1;
    note.date = new Date();
    this.notes.push(note);
    console.log(this.notes)
    return this.notes;
  }

  removeNote(noteId: number){
    this.notes = this.notes.filter(note => note.id !== noteId);
    return this.notes;
  }
}
