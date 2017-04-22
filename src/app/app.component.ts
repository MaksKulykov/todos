import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent  {
    list: Array<any> = [];

    addText(text: any) {
        if (text.trim().length) {
            this.list.push({
                row:     text,
                editing: false
            });
            console.log(this.list);
        }
    }

    removeText(index: number){
        this.list.splice( index, 1 );
    }

    editText (index: number, editedText: any){
        let editedElement = {
            row:     editedText,
            editing: false
        };
        if (editedText == ''){
            this.removeText(index);
        } else {
            this.list.splice(index, 1, editedElement);
        }
    }
}
