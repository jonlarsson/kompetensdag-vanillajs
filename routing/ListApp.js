(function () {
  const Master = APP.Master;
  const Detail = APP.Detail;
  const Router = ReactRouterDOM.HashRouter;
  const Route = ReactRouterDOM.Route;

  class ListApp extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
          <Router history={ReactRouterDOM.hashHistory}>
            <div>
              <Route exact path="/" component={Master}/>
              <Route path="/detail/:id" component={Detail}/>
            </div>
          </Router>
      );
    }
  }
  APP.ListApp = ListApp;
})();