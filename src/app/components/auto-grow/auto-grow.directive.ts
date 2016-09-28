import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrow {
    constructor(private el: ElementRef, private renderer: Renderer)
    {

    }

    onfocus()
    {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur()
    {
        this.renderer.setElementStyle(this.el, 'width', '120');
    }
}