import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  kanton: string;
  cities: any [];

  constructor(private route: ActivatedRoute, private infoService: InfoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.kanton = params.kanton;
       this.infoService.getCities(this.kanton).subscribe(cities => {
         this.cities = cities;
       })
    });
  }

}
