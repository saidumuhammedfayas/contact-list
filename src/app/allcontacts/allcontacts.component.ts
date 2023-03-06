import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit {
  allcontacts:any
  



  constructor(private api:ApiServicesService){}
    ngOnInit():void{
      this.api.allcontacts().subscribe((data:any)=>{
        this.allcontacts=data.users
        console.log(this.allcontacts);
        
      })
    }

  }


