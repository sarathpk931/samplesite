import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidebarOpen = true;
  imageArray = [
    { id: 1, src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4263086bb4657bfc.jpg?q=20', alt: 'Image 1' },
    { id: 2, src: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4263086bb4657bfc.jpg?q=20', alt: 'Image 2' },
    // Add more images as needed
  ];

  isLoading: { [key: number]: boolean } = {};

  // Simulate loading data for a specific image
  loadData(imageId: number) {
    debugger;
    this.isLoading[imageId] = true;
    setTimeout(() => {
      this.isLoading[imageId] = false;
    }, 3000); // Simulating a 3-second delay
  }
  toggleSidebar() {
    debugger
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidenav.toggle();
  }
  ngOnInit() {
    this.loadData(1);
    // Initialize data or make API calls if needed
  }

   
}
