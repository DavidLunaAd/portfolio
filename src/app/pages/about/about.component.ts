import { Component, OnInit } from '@angular/core';
import 'animate.css';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor( public infoService: InfoPageService ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
