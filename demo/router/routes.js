import navConf from "../nav.config.json";
    //布局界面
import Layout from '../components/layout'
let routes = [
  {
    path: "/",
    redirect: "/guide",
    name: "index",
    component: Layout,
    children: [{
      path: '/guide',
      name: 'guide',
      component: r =>
        require.ensure([], () => r(require(`../docs/guide.md`))),
      meta: { desc: "介绍" },
  },{
      path: '/demo',
      name: 'demo',
      component: r =>
        require.ensure([], () => r(require(`../docs/demo.md`))),
      meta: { desc: "示例" },
  }],
  },
  {
    path: "/mobile",
    name: "mobile",
    component: r => require.ensure([], () => r(require(`../views/mobile`))),
    meta: { desc: "移动端示例" },
  },
];

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header]);
});

let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (!route.name || route.component) return;
      route.meta = { desc: route.desc };
      route.component = r =>
        require.ensure([], () => r(require(`../docs/${route.name}.md`)));
    }
  });
};
addComponent(routes);
export default routes;
