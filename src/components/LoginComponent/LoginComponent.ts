import { Component, Vue } from "vue-property-decorator";
import { userController } from "app/controllers";

@Component({
    template: require('./LoginComponent.html'),
    style: require("./LoginComponent.scss"),
})
export default class LoginComponent extends Vue {
    loading: boolean = true;
    username: string = "";
    password: string = "";
    mounted() {
        userController.connectedSubject.subscribe( () => {
            this.loading = userController.fetchingUserConnected;
            this.username = "";
            this.password = "";
        });
    }

    login() {
        this.loading = true;
        userController.login(this.username, this.password);
    }

}