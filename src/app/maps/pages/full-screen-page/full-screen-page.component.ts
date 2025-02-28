import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Map } from 'maplibre-gl';


@Component({
  standalone: false,
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    
      if (!this.divMap) throw 'El elemento HTML no fue encontrado';

      const map = new Map({
        container: this.divMap.nativeElement, // container id
        style:
          'https://api.maptiler.com/maps/basic/style.json?key=dPx3ZgsnlO7XVPp3E8s3', //'https://demotiles.maplibre.org/style.json', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      console.log('Mapa inicializado:', map);
    
  }
}
