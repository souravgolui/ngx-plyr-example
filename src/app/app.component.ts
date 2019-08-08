import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Plyr from 'plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'video-player';

  vidObj: any;

  poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  // URL do video a ser reproduzido.
  // tslint:disable-next-line:max-line-length
  video = 'https://r5---sn-cvh76nez.googlevideo.com/videoplayback?expire=1563988787&ei=0z44XefnLoXN8wTG-KeACQ&ip=204.14.87.172&id=o-AJeg5LmfYZcl3kE8ZEkksOax1hZaSnhfoWw4q27Taz6d&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=2551854&ratebypass=yes&dur=29.048&lmt=1563714245214172&fvip=5&c=WEB&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAObwsR8yx-uHrw_ENyjcH7A2i0zaEWp1U_Nj1hTG0UEhAiAUE2iwia4Z7LYSX3ixDllpyoYU9PK2yy4lJtiMqJjxaw%3D%3D&video_id=pgiMjJGeik4&title=Super+30+Unstoppable+Whatsapp+Status+--+Ab+Raja+Ka+Beta+Raja+Nahi+Banega+Whatsapp+Status&redirect_counter=1&rm=sn-vgqeez76&req_id=18116428e870a3ee&cms_redirect=yes&ipbypass=yes&mip=103.94.84.2&mm=31&mn=sn-cvh76nez&ms=au&mt=1563967011&mv=m&mvi=4&pl=24&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgBf6zMxE_xhx2zc8_tPmO4s1wXnwaNPIgGCVLfbnfPC0CIDqoKfnEZizuuJxs5DAM_J-UbDebCC6hs2Y8jiIhzndm';

  ngAfterViewInit() {
    const player = new Plyr(document.getElementById('player'));
    console.log(player);
  }
}
