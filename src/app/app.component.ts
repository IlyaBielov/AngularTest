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
    this.service.get().subscribe(el => {
      this.setIntervalText(el);
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  setIntervalText(text) {
    setTimeout(() =>{ 
      this.text = text; 
    }, 3000);
  }
}
