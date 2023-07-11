import { Component,Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  @Input()
  imgSrc: string ;

  @Input()
  title: string;

  @Input()
  text: string;
}
