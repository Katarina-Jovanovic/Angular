import { Component, Input, OnInit } from '@angular/core';
import { ProizvodiService } from '../services/proizvodi/proizvodi.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{

  tags?:Tag[];
  constructor(private proizvodiService:ProizvodiService){}
  ngOnInit(): void {
    if(!this.proizvodiTags)
    this.tags=this.proizvodiService.getAllTags();
  }
@Input()
  proizvodiTags?:string[];

}
