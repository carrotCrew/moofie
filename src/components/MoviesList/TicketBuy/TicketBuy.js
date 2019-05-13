import React from "react";
import Popup from "reactjs-popup";
import "./TicketBuy.css";

const TicketBuy = props => (
  <Popup trigger={<button className={props.name}>Buy tickets!</button>} modal>
    {close => (
      <div className="modal1">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {props.title} </div>

        <div id="seat-map">
          <div className="front">SCREEN</div>
          <SeatSystem />
        </div>
        <div className="booking-details">
          <br />
          <label className="select-style">
            {" "}
            Time: <br />
            <select>
              <option value="1">09:30</option>
              <option value="2">12:30</option>
              <option value="3">17:45</option>
              <option value="4">20:30</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            {" "}
            Tickets type: <br />
            <select>
              <option value="15">Normal</option>
              <option value="10">Senior</option>
              <option value="10">Student</option>
            </select>
          </label>
          <p>Seat: </p>
          <ul id="selected-seats" />
          <p>
            Tickets: <span id="counter">0</span>
          </p>
          <p>
            Total:{" "}
            <b>
              $<span id="total">0</span>
            </b>
          </p>

          <button className="button1">BUY</button>

          <div id="legend" />
        </div>
        <div className="actions">
          <button
            className="button1"
            onClick={() => {
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default TicketBuy;

// Seat selection

class SeatSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24"
      ],
      seatAvailable: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24"
      ],
      seatReserved: []
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      });
    }
  }

  render() {
    return (
      <div>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
        />
      </div>
    );
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map(row => (
                <td
                  className={
                    this.props.reserved.indexOf(row) > -1
                      ? "reserved"
                      : "available"
                  }
                  key={row}
                  onClick={e => this.onClickSeat(row)}
                >
                  {row}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <AvailableList available={this.props.available} />
        <ReservedList reserved={this.props.reserved} />
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return (
      <div className="left">
        <h4>
          Available Seats: ({seatCount === 0 ? "No seats available" : seatCount}
          )
        </h4>
      </div>
    );
  }
}

class ReservedList extends React.Component {
  render() {
    return (
      <div className="right">
        <h4>Reserved Seats: ({this.props.reserved.length})</h4>
      </div>
    );
  }
}
