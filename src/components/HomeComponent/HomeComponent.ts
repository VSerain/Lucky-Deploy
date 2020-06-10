import { Component, Vue } from "vue-property-decorator";
import { branchsController } from "app/controllers";

@Component({
    template: require('./HomeComponent.html'),
    style: require("./HomeComponent.scss"),
})
export default class HomeComponent extends Vue {
    branchs: Array<any> = [];

    mounted() {
        branchsController.branchsSubject.subscribe((branchs) => {
            this.branchs = branchs;
        });
    }

    showBranchView(branch) {
        location.href = window.location.origin + "/branch/" + branch.title;
    }
}