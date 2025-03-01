import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  imports: [RouterModule, CommonModule]
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
  },
  {
    name: 'Alone',
    route: '/alone'
  }
]
}
