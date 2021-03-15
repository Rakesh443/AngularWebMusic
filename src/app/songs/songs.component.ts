import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// player = new PlayerComponent();

// openSongs(song){
//   this.player.openSong(song)
// }

  
opened=false
title = 'Player';

audios = new Audio();
audioEvents = [
  "ended",
  "error",
  "play",
  "playing",
  "pause",
  "timeupdate",
  "canplay",
  "loadedmetadata",
  "loadstart"
];
songs=[
  {
    url: './assets/Mem-Vayasuku-Vachcham.mp3',
    name: 'Mem Vayasuku Vachcham'
  },
  {
    url: './assets/Kannula-Baasalu-Theliyavule.mp3',
    name: 'Kannula Baasalu Theliyavule123'
  }

]

currentTime = '00:00';
duration ='00:00';
absduration = 0
seek = 0;


streamObserver(song){
  return new Observable(observer =>{
    this.audios.src= song.url;
    this.audios.load();
    this.audios.play();
    

    const handler = (event:Event) =>{
      this.seek=this.audios.currentTime;
      this.absduration = this.audios.duration;
      this.duration=this.timeFormate(this.audios.duration).substring(3,);
      this.currentTime = this.timeFormate(this.audios.currentTime).substring(3,);
     
    }

    this.addEvents(this.audios, this.audioEvents,handler);
    return () =>{
      this.audios.pause();
      this.audios.currentTime=0;

      this.removeEvents(this.audios, this.audioEvents,handler);
    }
  });
}

addEvents(obj, events, handler){
  events.forEach(event => {
    obj.addEventListener(event, handler)
  });

}
removeEvents(obj, events, handler){
  events.forEach(event => {
    obj.removeEventListener(event, handler)
  });
}


setSeek(event){
  this.audios.currentTime= event.target.value;
}

setVolume(event){
  this.audios.volume =event.target.value ;
}
openSong(song){

  this.streamObserver(song).subscribe();
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

timeFormate(time, format="HH:mm:ss"){
  const momentTime = time*1000;
  return moment.utc(momentTime).format(format);
}
}
