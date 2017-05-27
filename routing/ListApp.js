(function () {
  const Master = props => <div><op-master></op-master></div>;
  const Detail = props => <div><op-detail detail-id={props.match.params.id}></op-detail></div>;
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