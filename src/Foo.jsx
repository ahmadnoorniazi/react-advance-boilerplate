import * as React from "react";
const Fooz = React.lazy(() => import("./Nfoo"));
const Suspense = React.Suspense;

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      loaded: "not loaded yetss"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ value: 1 });
  }
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <Fooz />
        </Suspense>
        <button onClick={this.handleChange}>click</button>
        <div>{this.state.loaded}</div>
      </div>
    );
  }
}

export default Foo;
