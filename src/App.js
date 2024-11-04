const Pizza = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "The most delicious and tasty",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "It's a good pizza",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian Pizza",
      description: "Delicious and flavorful",
    }),
    React.createElement(Pizza, {
      name: "Ham and Cheese",
      description: "I love this taste",
    }),
    React.createElement(Pizza, {
      name: "Best-seller",

      description: "Anything that you like",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));