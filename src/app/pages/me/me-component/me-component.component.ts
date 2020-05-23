  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-component',
  templateUrl: './me-component.component.html',
  styleUrls: ['./me-component.component.css']
})
export class MeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openSocial(link) {
    var win = window.open(link, '_blank');
    win.focus();
  }
}
