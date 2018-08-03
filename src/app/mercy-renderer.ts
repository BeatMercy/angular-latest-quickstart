import { Renderer2 } from '@angular/core';

export abstract class MercyRenderer extends Renderer2 {

    constructor(private delegate: Renderer2) {
        super();
    }

    createElement(name: string, namespace: string): any {
        const el = this.delegate.createElement(name, namespace);
        this.delegate.addClass(el, 'mercy-element');
        return el;
    }
}
