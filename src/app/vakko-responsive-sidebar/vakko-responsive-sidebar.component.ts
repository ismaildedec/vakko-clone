import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import womendata from "../../assets/data/data-responsive-sidebar/women-sidebar.json"
import mendata from "../../assets/data/data-responsive-sidebar/men-sidebar.json"
import bagsdata from "../../assets/data/data-responsive-sidebar/bags-sidebar.json"
import v2kdata from "../../assets/data/data-responsive-sidebar/v2k-sidebar.json"
import couturedata from "../../assets/data/data-responsive-sidebar/couture-sidebar.json"
import homedata from "../../assets/data/data-responsive-sidebar/home-sidebar.json"
import cosmeticdata from "../../assets/data/data-responsive-sidebar/cosmetic-sidebar.json"
import latelierdata from "../../assets/data/data-responsive-sidebar/latelier-sidebar.json"
import outletdata from "../../assets/data/data-responsive-sidebar/outlet-sidebar.json"
import aboudata from "../../assets/data/data-responsive-sidebar/about-sidebar.json"
import menudata from "../../assets/data/data-responsive-sidebar/menu.json"

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vakko-responsive-sidebar.component.html',
  styleUrls: ['./vakko-responsive-sidebar.component.css']
})
export class VakkoResponsiveSidebar {
  @Input() isOpen: boolean = false;
  @Output() dataEvent: EventEmitter<boolean> = new EventEmitter();


  closeSidenav() {
    this.isOpen = false;
    this.dataEvent.emit(this.isOpen);
  }

  activeDropdown: string | null = null;

  showDropdown(menu: string) {
    this.activeDropdown = menu;
  }

  womenSidebarData = womendata;
  menSidebarData = mendata;
  bagsSidebarData = bagsdata ; 
  v2kSidebarData = v2kdata
  coutureSidebarData = couturedata;
  homeSidebarData = homedata;
  cosmeticSidebarData = cosmeticdata;
  latelierSidebarData = latelierdata;
  outletSidebarData = outletdata;
  aboutSidebarData = aboudata;
  menuData = menudata ;
}
