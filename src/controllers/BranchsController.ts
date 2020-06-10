import Vue from "vue";
import { Subject } from "rxjs";

import { requestService } from "app/services";
import userController from "./UserController"

declare const $Vue: Vue;

class BranchsController {
    branchsSubject: Subject<Array<any>> = new Subject<Array<any>>();

    constructor() {
        userController.connectedSubject.subscribe((connected) => {
            if (!connected) return;
            this.fetchBranch();
        });
    }

    fetchBranch() {
        requestService._sendGetRequest("list").then(result => result.json()).then(body => {
            this.branchsSubject.next(body);

            setTimeout(() => { // Please clear this shit
                this.fetchBranch();
            }, 60000);
        });
    }
}

export default new BranchsController();