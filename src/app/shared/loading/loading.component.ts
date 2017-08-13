import { Component, Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
@Component({ selector: 'loading', templateUrl: 'loading.component.html', styleUrls: ['loading.component.css'] })
export class LoadingComponent {

    static instance: LoadingComponent = null;

    state:boolean = false;
    subject: Subject<boolean> = new Subject<boolean>();

    constructor() {

        if (LoadingComponent.instance == null) {

            LoadingComponent.instance = this;
            this.subject.subscribe((value) => { LoadingComponent.instance.state = value; });
        }
            
    }

    public static getInstance() : LoadingComponent {

        return LoadingComponent.instance;
    }

    change() {

        LoadingComponent.instance.subject.next(!LoadingComponent.instance.state);
        console.log(LoadingComponent.instance.state)
    }
}