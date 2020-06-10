import { Subject } from "rxjs";

import { requestService } from "app/services";

class EnthusiasmController {
    public enthusiasmSubject: Subject<number> = new Subject<number>();
    public _enthusiasm: number = 3;

    constructor() {
    }

    set enthusiasm(n: number) {
        this._enthusiasm = n;
        this.enthusiasmSubject.next(n);
    }
    get enthusiasm() {
        return this._enthusiasm;
    }
}

export default new EnthusiasmController();