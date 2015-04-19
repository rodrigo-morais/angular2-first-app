import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@Template({
    url: 'app.html'
})

class MyAppComponent {
    constructor(){
        this.name = 'Rodrigo';
    }

    changeName($event, first){
        this.name = first.value;
    };
}

bootstrap(MyAppComponent);