import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  city: string;
  @Input()flag: any;

  constructor(private route: ActivatedRoute, private infoService: InfoService) { }

  ngOnInit() {
  }


}
