import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from '../services/proizvodi/proizvodi.service';
import { Proizvod } from '../shared/models/proizvod';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.scss']
})
export class ProizvodiComponent implements OnInit{

proizvodi:Proizvod[]=[]
  constructor(private proizvodiService:ProizvodiService, private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['SearchTerm'])
      this.proizvodi=this.proizvodiService.getAll().filter(proizvodi=>proizvodi.ime.toLowerCase().includes(params['SearchTerm'].toLowerCase()))
      else if(params['tag'])
      this.proizvodi=this.proizvodiService.getAllProizvodiByTag(params['tag']);
      
      else
      this.proizvodi=this.proizvodiService.getAll();
    })
    
   
     }
     
   
   
  }
  

