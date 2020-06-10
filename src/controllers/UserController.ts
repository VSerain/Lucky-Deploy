import { Subject } from "rxjs";
import * as sha256 from "sha256"
import { requestService } from "app/services";
import Vue from "vue";

declare const $Vue: Vue;

class UserController {
    connectedSubject: Subject<boolean> = new Subject<boolean>();
    _connected: boolean = localStorage.getItem("apikey") ? true : false;
    fetchingUserConnected: boolean = true;

    constructor() {
        requestService._sendGetRequest("user-connected").then((rep) => {
            this.fetchingUserConnected = false;

            if (rep.status === 200) {
                this.connected = true;
            }

            this.connectedSubject.next(this.connected);
        });
    }

    set connected(value) {
        this._connected = value;
        if (value) {
            this._afterConnected();
        }
        this.fetchingUserConnected = false;
        this.connectedSubject.next(this.connected);
    }

    get connected() {
        return this._connected;
    }

    _afterConnected() {
        document.cookie = "user=" + localStorage.getItem("apikey");
        $Vue.$router.push('/');
    }

    login(username: string, password: string) {
        this.fetchingUserConnected = true;

        const shPassword = sha256(password);
        requestService._sendPostRequest("user-connect", {
            username,
            password: shPassword
        }).then( rep => {
            if (rep.status === 200) {
                rep.json().then(body => {
                    localStorage.setItem("apikey", body.apikey);
                    this.connected = true;
                });
            }
            else {
                this.connected = false;
            }
        });
    }
}

export default new UserController();