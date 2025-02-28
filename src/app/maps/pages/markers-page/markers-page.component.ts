import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environments';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  standalone: false,
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public map?: Map;
  public currentCenter: LngLat = new LngLat(
    -63.17603657179461,
    9.748762730497646
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container id
      style: `https://api.maptiler.com/maps/basic/style.json?key=${environment.mapbox_key}`, //'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    //REferencia para la creacion y personlización de los marcadores
    /*   const makerHtml = document.createElement('div');
    makerHtml.innerHTML = 'Hola Mundo';

    const marker = new Marker({
      element: makerHtml
      // color: 'red'
    }).setLngLat(this.currentCenter).addTo(this.map); */
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) throw 'Mapa no inicializado';

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

      this.markers.push({color, marker});
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);    
  }
}
