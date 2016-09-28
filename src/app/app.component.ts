import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  color_options =['black', 'red', 'green']
}

onBack(data){
  if(Number(data) %2 == 0)
    this.counter++;
}
