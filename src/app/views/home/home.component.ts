import { Component, OnInit } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputField: string;

  constructor() { }

  ngOnInit() {
    const header = document.querySelector('.header') as HTMLDivElement;
    const internally = document.querySelector('.internally') as HTMLDivElement;
    let kd = window.innerHeight - header.offsetHeight;
    internally.style.height = `${kd - 50}px`;
    window.onresize = () => {
      kd = window.innerHeight - header.offsetHeight;
      internally.style.height = `${kd - 50}px`;
    };
  }

  empty(e: string): boolean {
    if (e === undefined || e.length === 0) { return true; } else { return false; }
  }

  generateHTML(val: string): void {
    let mk = '';
    if (!this.empty(this.inputField)) {
      mk = new MarkdownIt().render(val);
      mk = mk.split('<pre>').join('<pre style="background: #eee; padding: 5px;">');
      console.log(mk);
    }
    document.querySelector('#resultField').innerHTML = `${mk}`;
  }

}
