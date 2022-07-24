import {
  Component,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  SimpleChanges,
  OnInit,
  ViewEncapsulation,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild

} from '@angular/core';
import {Element} from "@angular/compiler";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: any;
  @Input() name!: string;
  @ViewChild('heading', {static: true}) header!: ElementRef;
  @ContentChild('contentP', {static: true}) paragraph!: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges called')
  }

  ngOnInit(): void {
    console.log('nginit called');
  }

  ngDoCheck(){
    console.log('ngdoCheck called');
  }

  ngAfterContentInit(){
    console.log('aftercontentInit called');
  }
  ngAfterContentChecked(){
    console.log('aftercontentInit checked');
  }

  ngAfterViewInit() {
    console.log('after viewinit called');
    console.log('Text Content of header: '+this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('afterviewchecked called');
  }

  ngOnDestroy() {
    console.log('destroyed called');
  }
}
