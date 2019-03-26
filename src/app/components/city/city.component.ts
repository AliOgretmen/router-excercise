import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  city: string;
  flag: any;

  constructor(private route: ActivatedRoute, private infoService: InfoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params.city;
      this.infoService.getFlag(this.city).subscribe(flag => {
        console.log('aliyeeah', this.flag, params )
        this.flag = flag;
      })
   });
  }

}
