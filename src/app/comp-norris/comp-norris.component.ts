import { Component, OnInit } from '@angular/core';
import { ServJokesService } from './../serv-jokes.service';

@Component({
  selector: 'app-comp-norris',
  templateUrl: './comp-norris.component.html',
  styleUrls: ['./comp-norris.component.css']
})
export class CompNorrisComponent implements OnInit {

  public joke:string;
  public author:string;

  constructor(private service: ServJokesService) { }

  ngOnInit() {
    this.author = "By Melissa Cadavid.";
    this.service.jokes().subscribe( res => {
      this.joke = res.joke;
    });
  }

}
