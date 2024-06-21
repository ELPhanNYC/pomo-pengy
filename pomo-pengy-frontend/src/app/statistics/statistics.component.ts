import { Component , OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {

  constructor( private apiService:ApiService){

  }

  stats = {};

  ngOnInit(){
      this.getStats();
  }

  getStats() {
    this.apiService.getUserStats()
      .subscribe((response: any) => {  
        if(response){
          console.log(response)
          this.stats = response;
        }
      }, (error: any) => {
        console.error('Error:', error);
      });
  }

}
