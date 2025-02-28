import { map } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'maplibre-gl';
import { environment } from '../../../../environments/environments';

@Component({
  standalone: false,
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy{
 

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
      console.log('Mapa inicializado:', map);
   this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove(); //Remuevo todo el mapa
  }

  mapListeners(): void {
    if(!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() > 18) {
        this.map!.zoomOut();
      }
      if (this.map!.getZoom() < 0) {
        this.map!.zoomIn();
      }
    });

    this.map.on('move', () => {
      this.currentCenter = this.map!.getCenter();
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom = Number(value);
    //this.map?.setZoom(this.zoom); // Esta es otra forma
    this.map?.zoomTo(this.zoom);
  }
}
