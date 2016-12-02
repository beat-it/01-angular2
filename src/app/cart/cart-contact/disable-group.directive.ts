import { Directive, Input, Host, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { NgModelGroup, FormGroup } from '@angular/forms';

@Directive({
    selector: '[biDisableGroup]',
})
export class DisableGroupDirective implements DoCheck, OnChanges {
    @Input('biDisableGroup') disable: boolean;

    private formGroup: FormGroup | undefined;

    constructor( @Host() public group: NgModelGroup) { }

    ngDoCheck() {
        if (!this.formGroup) {
            this.formGroup = this.group.control;
            // formgroup is registered at first onChanges cycle, so we need to watch
            // for this moment
            if (this.formGroup) {
                this.ngOnChanges();
            }
        }
    }

    ngOnChanges(changes?: SimpleChanges) {
        if (this.formGroup) {
            if (this.disable) {
                this.formGroup.reset();
                this.formGroup.disable();
            } else {
                this.formGroup.enable();
            }
        }
    }
}