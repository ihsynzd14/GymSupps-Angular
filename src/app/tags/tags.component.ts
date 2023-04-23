import { Component,Input, OnInit } from '@angular/core';
import { SuppService } from '../services/supplements/supp.service';
import { Tag } from '../shared/models/Tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  suppPageTags?:string[];
  tags?:Tag[];
  constructor(private suppService:SuppService) { }
  
  ngOnInit(): void{
    if(!this.suppPageTags)
    this.tags = this.suppService.getAllTags();
  }
}
