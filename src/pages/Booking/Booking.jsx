import { useRef, useState } from 'react';
import Select from "react-select";
// import TextField from "@mui/material/TextField";
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";
import './Booking.css'

const Booking = () => {
  const dateRef = useRef(null)
  const [user, setUser] = useState({
    name: "",
    date: "",

    
  });
  const [error, setError] = useState([])

  const options = [
    { value: "2", label: "2" },
    { value: "+2", label: "+2" },
    { value: "+6", label: "+6" },
  ];

  // const ControlComponent = () => (
  // <div className='input'>
  //   <p>Custom Control</p>
  //   <components.Control />
  // </div>
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    let errArr = [];
    Object.keys(user).forEach((key) => {
      if (user[key] === "") {
        errArr.push(key);
        return;
      }
      // else console.log(user)
    });
    if (errArr.length > 0) {
      setError(errArr);
      console.log(errArr);
      return;
    } else {
      setError([]);
      console.log(user);
    }
  };

  const [value, onChange] = useState(new Date());

  

  return (
    <div className="section" id="register">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h3 className="sec-title">Book a table</h3>
        <div className="row">
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
            className='custom'
              type="text"
              id="email"
              name="email"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            {error.includes("email") && (
              <span style={{ color: "red" }}>{"error"}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="input">
            <label htmlFor="">peoples?</label>

            <Select
              // defaultValue={colourOptions[0]}
              isClearable
              name="color"
              className="react-select-container"
              classNamePrefix="react-select"
              // closeMenuOnSelect={false}
              options={options}
            />
            {/* <div className="radios">
              <span className="radio">
                2 <input type="radio" name="people" id="" value={2} />
              </span>
              <span className="radio">
                +4 <input type="radio" name="people" id="" value={3} />
              </span>
              <span className="radio">
                +8 <input type="radio" name="people" id="" value={4} />
              </span>
            </div> */}
          </div>
        </div>
        <div className="row">
          {/* <DatePicker onChange={onChange} value={value} className='date' id='date' /> */}
          <div className="input">
            <label htmlFor="date">Date</label>
            <Calendar />
            {/* <input type="datetime-local" id="date" /> */}
          </div>
        </div>

        <div className="row" style={{ margingTop: "30px" }}>
          <button
            className="btn"
            type="submit"
            onSubmit={(e) => handleSubmit(e)}
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking