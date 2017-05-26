(function () {
  const Link = ReactRouterDOM.Link;
  class Master extends React.Component {
    render() {
      return (
          <ul>
            <li><Link to="/detail/1">Item 1</Link></li>
            <li><Link to="/detail/2">Item 2</Link></li>
            <li><Link to="/detail/3">Item 3</Link></li>
          </ul>
      );
    }
  }

  APP.Master = Master;
})();