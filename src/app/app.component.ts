import { Component, OnInit } from '@angular/core';
import { ServiceService } from './core/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  text: string = null;

  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe((el) => {
      console.log(el);
      this.setIntervalText(el);
    });
  }

  getRandomNumber() {
    let number = Math.floor(Math.random() * 10 + 1);
    console.log(number)
    return number;
  }

  setIntervalText(text) {
    setTimeout(() =>{ 
      this.text = text; 
    }, this.getRandomNumber() * 1000);
  }
}
