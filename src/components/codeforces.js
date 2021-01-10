import React from "react";
import axios from "axios";
import "./codeforces.css";
function ConvertDate(a) {
  a = a * 1000;
  let tempDate = new Date(a);
  console.log(tempDate);
  return tempDate.toString().substr(0, 21);
}

const Contest = (props) => {
  let url = "https://codeforces.com/contest/" + props.contestDetail.id;
  return (
    <tr className="contest-list">
      <td>{props.contestDetail.name}</td>
      <td>{props.contestDetail.type}</td>
      <td>{props.contestDetail.phase}</td>
      <td>{props.contestDetail.durationSeconds}</td>
      <td>{ConvertDate(props.contestDetail.startTimeSeconds)}</td>
      <td className="action">
        <a href={url}>Click Here</a>
      </td>
    </tr>
  );
};

export default class Codeforces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contests: [] };
  }
  componentDidMount() {
    const url = "https://codeforces.com/api/contest.list";
    axios
      .get(url)
      .then((res) => {
        this.setState({ contests: res.data.result });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showContests() {
    return this.state.contests.map((contest) => {
      return <Contest contestDetail={contest} key={contest.id} />;
    });
    //console.log(this.state.contests);
  }
  render() {
    return (
      <div>
        <h1>Codeforces</h1>
        <table>
          <tbody>
            <tr className="contest-heading">
              <th className="nameCol">Name</th>
              <th>Type</th>
              <th>Phase</th>
              <th>Duration</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
            {this.showContests()}
          </tbody>
        </table>
      </div>
    );
  }
}
