import { Component } from '@angular/core';

export class ModalComponent {

    private title: string;
    private body: string;
    private footer: any[];

    constructor(title: string, body: string, footer: any[]) {

        this.title = title;
        this.body = body;
        this.footer = footer;
    }

    init(){
        
    }

    end() {

    }
}