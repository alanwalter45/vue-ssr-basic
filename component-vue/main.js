const { createApp } = Vue;
const app = createApp({
    data: () => ({ count: 1 }),
    template: `<button class="btn btn-primary" @click="count++">{{ count }}</button>`,
});
app.mount("#app");
