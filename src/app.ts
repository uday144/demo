//our root app component
import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'myText',
    template:`
    <label>{{someLabel}}</label>
    <input id=myId type="text" [ngModel]=bindModelData (ngModelChange)="updateData($event)">
`
})
export class MyTextComponent {
    someLabel: string = "caption";
    @Input() myId : string;
    @Input() bindModelData: any;
    @Output() bindModelDataChange: EventEmitter = new EventEmitter();
    updateData(event) {
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }
}


@Component({
    selector: 'my-page',
    template:`
    <myText myId="id1" [(bindModelData)]="myString1"></myText><div>1: {{myString1}}</div>
    <myText myId="id2" [(bindModelData)]="myString2"></myText><div>2: {{myString2}}</div>
`,
    directives:[MyTextComponent]
})
export class MyPageComponent{
    myString1: string;
    myString2: string;
}

@Component({
    selector: 'my-app',
    directives: [MyPageComponent],
    template:`
    <my-page></my-page>
`
})
export class App {
}
