import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Štrukturálna direktíva "opakuj n-krát". Škoda, že angular nemá takú direktívu
 * a v tomto príklade ju musím písať a vysvetliť.
 * V angular2 sa nesmie pristupovať priamo na DOM a na browser. Dôvodom je,
 * že kód direktívy nemusí bežať len v browseri, ale aj na servri, alebo v
 * ServiceWorker vlákne.
 * Preto máme abstrakcie na elementy, deti elementov, na miesto kam sa elementy
 * umiestnia, atď. Viac v dokumentácii.
 */
@Directive({ selector: '[biRepeat]' })
export class RepeatDirective {


    /**
     * @param templateRef abstrakcia obsahu elementu.
     * @param viewContainer abstrakcia vyrenderovaného rodičovského komponentu
     */
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    /**
     * naša direktíva sa aktivuje atribútom repeat a jeho hodnota bude počet
     * opakovaní.
     * Zapíšeme ju ako property setter, aby sme hneď reagovali na zmenu
     * vytvorením obsahu.
     * Pri väzbe na atribút používame prefix aby sme celkom isto neboli v
     * konflikte s nejakým HTML atribútom.
     */
    @Input('biRepeat') set count(c: number) {
        this.viewContainer.clear();
        for (var i = 0; i < c; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
