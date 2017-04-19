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
      this.list.push({row: text, editing: false});
      console.log(this.list);
    }
  }

  removeText(element: any){
    let index = this.list.indexOf(element);
    if(index != -1)
      this.list.splice( index, 1 );
  }

  editText (element: any){
    console.log(element);
    element.editing = true;
  }

  updateText (element: any, index: number, editedText: any){
    let editedElement = {row: editedText, editing: false};
    if (editedText == ''){
      this.removeText(element);
    } else {
      this.list.splice(index, 1, editedElement);
    }
  }

}
