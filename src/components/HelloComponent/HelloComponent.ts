import { Component, Prop, Vue } from "vue-property-decorator";
import { enthusiasmController } from "app/controllers";

@Component({
    template: require('./HelloComponent.html'),
    style: require("./HelloComponent.scss"),
})
export class HelloComponent extends Vue {
    @Prop({ type: String , default: "Bictor"}) name!: string;
    private enthusiasmController = enthusiasmController;
    enthusiasm: number = 3;

    mounted() {
        this.enthusiasmController.enthusiasmSubject.subscribe( (enthusiasm: number) => {
            this.enthusiasm = enthusiasm;
        });
    }

    increment() {
        this.enthusiasmController.enthusiasm++;
    }

    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasmController.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}