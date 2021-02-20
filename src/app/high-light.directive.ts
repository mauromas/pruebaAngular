import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(element: ElementRef ) { 
    element.nativeElement.style.backgroundColor = 'green';
  }

}
