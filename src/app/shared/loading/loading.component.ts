import { Component, Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
@Component({ selector: 'loading', templateUrl: 'loading.component.html', styleUrls: ['loading.component.css'] })
export class LoadingComponent {

    static instance: LoadingComponent = null;

    state:boolean = false;
    subject: Subject<boolean> = new Subject<boolean>();

    constructor() {

        this.subject.subscribe((value) => { this.state = value; });
    }

    public static getInstance() : LoadingComponent {

        if (LoadingComponent.instance == null)
            LoadingComponent.instance = new LoadingComponent();

        return LoadingComponent.instance;
    }

    change() {

        this.subject.next(!this.state);
        console.log(this.state)
    }
}