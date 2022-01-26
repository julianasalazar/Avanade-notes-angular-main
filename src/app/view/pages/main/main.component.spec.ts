import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { NoteComponent } from '../../shared/note/note.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent, NoteComponent ],
      imports: [
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //detecta as alterações depois de alguma alteração
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar a tag title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector("h1");


    expect(h1?.textContent).toEqual("Avanade Notes");
   });

   it('deve ser possível criar uma nova nota', () => {
     //configuração
    const compiled = fixture.nativeElement as HTMLElement;

    const newNoteMock = {
      id: 1,
      text: "Minha nova nota",
      date: new Date()
    }

    //ação
    component.notes.push(newNoteMock);

    fixture.detectChanges();

    //o que é esperado como resultado
    expect(compiled.querySelector("article")).toBeTruthy();
    expect(compiled.querySelector("article p:nth-child(2)")?.textContent).toEqual("Minha nova nota");
  });
});
