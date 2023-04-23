import { Component, OnInit } from '@angular/core';
import { SuppService } from '../services/supplements/supp.service';
import { Supp } from '../shared/models/Supp';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  supps:Supp[] = [];
  constructor(private suppService:SuppService, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.supps = this.suppService.getAllSuppsBySearchTerm(params['searchTerm'])
      else if(params['tag'])
      this.supps = this.suppService.getAllSuppsByTag(params['tag']);
      else
       this.supps = this.suppService.getAll();
      })

  }

}
