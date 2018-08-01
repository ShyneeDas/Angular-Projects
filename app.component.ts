import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calender';
  months = ["January","February","March","April","May","June","July","August","September","Octber","November","December"];
  isavailable = true; //var
  myClickfunc(event){
  	alert("clicked booya!");
  	console.log(event);
  }
  changemonths(events){
  	alert("Changed months from the drop down");
  }
}
