import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import footerData from '../../assets/data/data-footer/footer.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vakko-footer.component.html',
  styleUrl: './vakko-footer.component.css'
})

export class VakkoFooterComponent implements OnInit {

  isLargeScreen: boolean = false

  ngOnInit() {
    this.checkScreenSize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('onResize called');
    this.checkScreenSize();
  }

  checkScreenSize() {
    const currentWidth = window.innerWidth;
    this.isLargeScreen = currentWidth > 991;
  }

  footerTopItems = footerData.footerTopItems;
  footerLinks = footerData.footerLinks;
  footerMedia = footerData.footerMedia;
  appDescription = footerData.appDescription;
  appStores = footerData.appStores;
  copyrightText = footerData.copyrightText;
  etbisImage = footerData.etbisImage;
  footerBottomLinks = footerData.footerBottomLinks;
  cookiePreferences = footerData.cookiePreferences;
  languages = footerData.languages;

  
}
