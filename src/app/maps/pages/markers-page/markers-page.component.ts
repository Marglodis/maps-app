import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environments';

@Component({
  standalone: false,
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {
@ViewChild('map') divMap?: ElementRef;

public zoom: number = 10;
public map?: Map;
public currentCenter: LngLat = new LngLat(-63.17603657179461, 9.748762730497646);

ngAfterViewInit(): void {
 
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style:
        `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapbox_key}`, //'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    //REferencia para la creacion y personlización de los marcadores
  /*   const makerHtml = document.createElement('div');
    makerHtml.innerHTML = 'Hola Mundo';

    const marker = new Marker({
      element: makerHtml
      // color: 'red'
    }).setLngLat(this.currentCenter).addTo(this.map); */

}

}
