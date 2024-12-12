import { Component, AfterViewInit } from '@angular/core';
import { VakkoHeaderComponent } from './vakko-header/vakko-header.component';
import { VakkoResponsiveSidebar } from './vakko-responsive-sidebar/vakko-responsive-sidebar.component';
import { VakkoFooterComponent } from './vakko-footer/vakko-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VakkoHeaderComponent, VakkoResponsiveSidebar, VakkoFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    (window as any).fullpage_api?.destroy('all'); 

    new (window as any).fullpage('#fullpage', {
      licenseKey: 'LICENSE_KEY',
      navigation: true,
      scrollHorizontally: true,
      autoScrolling: false,
      fitToSection: false,
      scrollingSpeed: 900,
      showActiveTooltip: true,
      navigationPosition: 'right',
      easingcss3: 'cubic-bezier(.825,0,.5,1)',

      onLeave: (origin: any, destination: any, direction: any) => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          video.play();
        });
      }
    });
  }
}


