import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.less']
})
export class PackageComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  public package:any = []
  constructor(private route: ActivatedRoute, private DataService$ : DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.package = this.DataService$.getData()[this.id]
    console.log(this.package)
  }
  ngOnDestroy() {
  }

}
