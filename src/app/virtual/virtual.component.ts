import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  personas = Array(1000).fill(0);


  // Esto hace referencia a cdk-virtual-scroll-viewport del html
  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal() {
    this.viewport.scrollToIndex( this.personas.length );
  }

  irInicio() {
    this.viewport.scrollToIndex( 0 );
  }

  irMitad() {
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }



}
