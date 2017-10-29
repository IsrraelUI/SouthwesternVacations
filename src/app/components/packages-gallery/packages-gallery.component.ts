import { Component, OnInit } from '@angular/core';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'app-packages-gallery',
  templateUrl: './packages-gallery.component.html',
  styleUrls: ['./packages-gallery.component.less']
})
export class PackagesGalleryComponent implements OnInit {

  constructor(public DataService$ : DataService) { }
  public images:any = []
  ngOnInit() {
    this.images = this.DataService$.getData();
  }
  
  public imageIndex:any = 0;
  public showImage(i){
    this.imageIndex = i;
    for( let x in this.images){
      if(i == x){
        this.images[x].status = 'active';
      }else{
        this.images[x].status = null;
      }
    }
  }
}
