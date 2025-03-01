import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-mini-map',
  standalone: false,
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{
  
  @Input() lngLat?: [number, number] = [0, 0];

  @ViewChild('map') divMap?: ElementRef;

  

  ngAfterViewInit(): void {
    
    if(!this.divMap?.nativeElement ) throw ("Map Div not found");
    if(!this.lngLat) throw ("LngLat not found");

    const map = new Map({
      container: this.divMap.nativeElement, // container id
      style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapbox_key}`, //'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.lngLat, // starting position [lng, lat]
      zoom: 10, // starting zoom
      interactive: false
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map);
   
  }




}
