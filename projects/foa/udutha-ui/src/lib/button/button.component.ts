import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'uui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() placeHolder: string;
  @Input() isDisabled = false;
  @Output() buttonClick;

  constructor() {
  }

  ngOnInit(): void {
  }
}
