import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  standalone: false,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
public menuItems: MenuItem[] = [
  {
    name: 'Full Screen',
    route: '/maps/fullscreen'
  },
  {
    name: 'Zoom Range',
    route: '/maps/zoom-range'
  },
  {
    name: 'Markers',
    route: '/maps/markers'
  },
  {
    name: 'Properties',
    route: '/maps/properties'
  }
]
}
