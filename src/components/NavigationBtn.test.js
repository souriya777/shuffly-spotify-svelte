import { mount } from "@cypress/vue";
import NavigationBtn from "./NavigationBtn.vue";

describe("NavigationBtn", () => {
  it("load SELECT view", async () => {
    // mount(
    //   <NavigationBtn label="Select" to="/shuffle">
    //     any content
    //   </NavigationBtn>
    // )
    mount(NavigationBtn, { props: { to: "/shuffle", label: "Select" } })
      .get("a")
      .should("have.text", "Shuffle");
  });
});
