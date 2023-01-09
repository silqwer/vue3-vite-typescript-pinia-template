import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Hello from "@/components/HelloWorld.vue";

describe("Hello", () => {
  it("check if prop msg match", () => {
    const msg = "I'm a example component with composition API";
    const wrapper = mount(Hello, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
