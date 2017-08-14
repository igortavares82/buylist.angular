import { Component, Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
@Component({ selector: 'loading', templateUrl: 'loading.component.html', styleUrls: ['loading.component.css'] })
export class LoadingComponent {

    static instance: LoadingComponent = null;

    message: string = 'LOADING';
    cssClass: string = 'message message0';

    state:boolean = false;
    subject: Subject<boolean> = new Subject<boolean>();

    constructor() {

        if (LoadingComponent.instance == null) {

            LoadingComponent.instance = this;
            this.subject.subscribe((value) => { LoadingComponent.instance.state = value; });

            this.animate();
            this.dynamicClass();
        }
            
    }

    public static getInstance() : LoadingComponent {

        return LoadingComponent.instance;
    }

    public animate() : void {

        setInterval(() => {

            if (this.message.length == 10)
                this.message = 'LOADING';
            else
                this.message += '.'; 
        }, 1000);
    }

    public dynamicClass() : void {

        let count: number = 0;
        let factor: number = 1;

        setInterval(() => {

            if (count == 10)
                factor = -1;
            else if (count == 0)
                factor = 1;

            count = count + factor;
            this.cssClass = "message message" + count;
        }, 500);
    }

    public change(value: boolean) : void {

        LoadingComponent.instance.subject.next(value);
    }
}