import { Component } from '@angular/core';

export class Element {
    row: string;
    editing: boolean;
    completed: boolean;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent  {
    list: Element[] = [];

    addText(text: any) {
        if (text.trim().length) {
            this.list.push({
                row:       text,
                editing:   false,
                completed: false
            });
            console.log(this.list);
        }
    }

    removeText(index: number){
        this.list.splice( index, 1 );
    }

    editText(index: number, editedText: any){
        let editedElement = {
            row:       editedText,
            editing:   false,
            completed: false
        };
        if (editedText == ''){
            this.removeText(index);
        } else {
            this.list.splice(index, 1, editedElement);
        }
    }

    deleteCompleted() {
        this.list = this.list.filter(element => {
            return element.completed == false;
        });
    }
}
