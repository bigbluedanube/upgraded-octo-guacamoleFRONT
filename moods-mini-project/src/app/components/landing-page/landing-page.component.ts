import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post('http://localhost:9000/fillDB', "").subscribe((r: any) => {
      console.log("We're good!");
    });
  }

  generate(): void {
    this.http.get('http://localhost:9000/mood').subscribe((r: any) => {
      document.getElementById("mood").innerText = r.name;
    });
    this.http.get('http://localhost:9000/message').subscribe((r: any) => {
      document.getElementById("message").innerText = r.text;
    });
  }
}