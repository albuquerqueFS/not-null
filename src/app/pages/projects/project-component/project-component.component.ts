import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  knowMore(id) {
    var img = document.getElementById(id + '_img');
    var title = document.getElementById(id + '_title');
    var description = document.getElementById(id + '_description');
    var details = document.getElementById(id + '_details');

    if (img.classList.contains('blur_it')) 
      img.className = 'clear_it';
      img.classList.remove('blur_it');
      title.className = 'gone';
      description.className = 'gone';

      details.style.opacity = '100%';
      details.style.height = 'auto';
  }

  
  openGit(link) {
    var win = window.open(link, '_blank');
    win.focus();
  }
}
