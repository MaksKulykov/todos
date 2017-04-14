import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent  {
  list: Array<string> = [];

  addText(text: any) {
    if (text.trim().length) {
      this.list.push(text);
      console.log(this.list);
    }
  }

  removeText(element: any){
    let index = this.list.indexOf(element);
    if(index != -1)
      this.list.splice( index, 1 );
  }

}
