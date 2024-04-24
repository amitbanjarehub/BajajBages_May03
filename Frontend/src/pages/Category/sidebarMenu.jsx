import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";

export const dashboardConfig = {
  sideBarNav: [
    {
      title: "Child1",
      href: "child1",
      //   component: Child1,
      component: <Child1 />,
    },
    {
      title: "Child2",
      href: "child2",
      //   component: Child2,
      component: <Child2 />,
    },
    {
      title: "Child3",
      href: "child3",
      //   component: Child3,
      component: <Child3 />,
    },
  ],
};
