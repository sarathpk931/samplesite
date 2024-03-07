import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isOpen = true;
constructor(private router:Router)
{

}
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
    // Initialization code if needed
  }
  navigateToForm() {
    debugger;
    // Navigate to the task detail page using Angular Router
    this.router.navigate(['/form']);
  }
}
