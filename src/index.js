import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        enrolledStudents : 0,
        waitlistStudents : 0,
        addStudent: 0 ,
              };
    }
  
    increment() {
      this.setState({ enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudent) });
      
            
    }
    increment2() {
    this.setState({ waitlistStudents: this.state.waitlistStudents + parseInt(this.state.addStudent) });
    }
    increment3(){
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1 });
    }
    increment4(){
        this.setState({ waitlistStudents: this.state.waitlistStudents + 1 });
    }
  
    render() {
      return (
        <div>
          <h1>Enrolled Students :{this.state.enrolledStudents}</h1>
          <button onClick={this.increment3.bind(this)}>Add 1 Enrolled Student</button>
          <h3>Add Mulitple Enrolled Students:</h3>
          <input type = "number" onChange = {event =>this.setState({addStudent: event.target.value})} value = {this.state.addStudent} />
          <button onClick={this.increment.bind(this)}>Increase Studnets</button>
          
          <h1>Waitlisted Students :{this.state.waitlistStudents}</h1>
          <button onClick={this.increment4.bind(this)}>Add 1 Waitlisted Student</button>
          <h3>Add Mulitple Enrolled Students:</h3>
          <input type = "number" onChange = {event =>this.setState({addStudent: event.target.value})} value = {this.state.addStudent} />
          <button onClick={this.increment2.bind(this)}>Increase Students</button>
        </div>
      );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));
