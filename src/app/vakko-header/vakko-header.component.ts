import { Component  } from '@angular/core';
import { VakkoResponsiveSidebar } from '../vakko-responsive-sidebar/vakko-responsive-sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [VakkoResponsiveSidebar],
  templateUrl: './vakko-header.component.html',
  styleUrls: ['./vakko-header.component.css']
})
export class VakkoHeaderComponent {

  isOpen=false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSidenavClose(isOpen: boolean) {
    this.isOpen = isOpen;
  }

}
