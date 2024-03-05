const { createElement, useState, useEffect } = require("react");

const MyRender = require("./my-render");

function Greeting({ name }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("\n\n\n");
    setCount(2);
  }, []);

  return createElement("span", {}, [count]);
}

function App() {
  return createElement(Greeting, { name: "Taylor" });
}

MyRender.render(createElement(App), {
  message: "this is a container",
});
