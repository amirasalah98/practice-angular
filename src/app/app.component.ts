import { Component } from '@angular/core';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  faCoffee = faCoffee;

   login={
    av: true
  }
  
  change(){
    this.login.av=!this.login.av 
    console.log(this.login.av)
  }

 
}
