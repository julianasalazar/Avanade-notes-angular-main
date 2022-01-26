import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/domain/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  notes: Note[] = [];
  noteForm: FormGroup;

  constructor(
    private noteService: NotesService, 
    private formBuilder: FormBuilder
  ) {
    this.noteForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  deleteNote(noteId: number) {
    this.notes = this.noteService.removeNote(noteId);
  }

  addNote() {
    const note = this.noteForm.value;

    this.notes = this.noteService.addNote(note);

    this.noteForm.reset();
  }

  sendByKey(event: KeyboardEvent){
    if(event.ctrlKey && event.code === "Enter"){
      this.addNote();
    }
  }

}
