import { createSSRApp } from "vue";

export const createApp = () => {
    return createSSRApp({
        data: () => ({ count: 1 }),
        template: `<button class="btn btn-primary" @click="count++">{{ count }}</button>`,
    });
};
