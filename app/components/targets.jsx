import React from 'react';
import Firebase from 'firebase';

export default class TargetsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {targets: []};
  }
  componentWillMount() {
    this.targets = new Firebase('https://rektdivision.firebaseio.com/targets');
    var self = this;
    var data = [];
    this.targets.on("value", function(dataSnapshot) {
      var child = dataSnapshot.val();
      for(var target in child) {
        data.push(child[target]);
      }
      self.setState({
        targets: data
      });
    });
  }
  componentWillUnmount() {
    this.targets.off();
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Callsign</th>
            </tr>
          </thead>
          <tbody>
            {this.state.targets.map(function(target, index) {
              return(
                <tr key={index}>
                  <td>{target.name} {React.PropTypes.object.isRequired}</td>
                  <td>{target.age}</td>
                  <td>{target.callsign}</td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
      );
  }
};
