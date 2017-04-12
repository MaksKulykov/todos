import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent  {
  list: Array<string> = [];
  newText = '';

  addText(text: any) {
    if (text.trim().length) {
      this.list.push(text);
      this.newText = '';
      console.log(this.list);
    }
  }

}
