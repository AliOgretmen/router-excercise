import { Component, OnInit } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cityFlag';
  kantons: any [];

  constructor(private infoService: InfoService) {

  }

  ngOnInit() {
    this.infoService.getKantons().subscribe(result => {
      this.kantons = result;  
    });
  }
}
