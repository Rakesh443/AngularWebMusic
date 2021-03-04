import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  audios = new Audio();
  songs=[
    {
      url: './assets/Mem-Vayasuku-Vachcham.mp3',
      name: 'song1'
    }
  ]

  openSong(song){

    this.audios.src=song.url;
    this.audios.load();
    this.audios.play();
  }

  play(){
    this.audios.play();
    console.log('btn clicked')
  }

  pause(){
    this.audios.pause();
    console.log('btn clicked')
  }

  stop(){
    this.audios.pause();
    this.audios.currentTime=0;
    console.log('btn clicked')
  }

}
