(function () {
  const Link = ReactRouterDOM.Link;
  class Detail extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
          <div>
            <Link to="/">Tillbaka</Link>
            <p>Detaljer för {this.props.match.params.id}</p>
          </div>
      )
    }
  }
  APP.Detail = Detail;
})();