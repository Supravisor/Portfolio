
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'tester' };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Navbar, { name: this.state.name })));


  }}
;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "My name is: ", this.props.name)));


  }}
;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(MyApp, null));
