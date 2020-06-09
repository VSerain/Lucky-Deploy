import Vue from 'vue';

declare module "*.vue" {
    export default Vue
}

declare module "*.html" {
    const content: string;
    export default content;
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        style?: any;
    }
}