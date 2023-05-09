import React, { useRef, useEffect } from 'react';
import './OTPBox.css';
import { useLocation } from 'react-router-dom';

function OTPBox1() {
  const location = useLocation();
  console.log(location.pathname);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  function handleInputKeyDown(event, index) {
    // Allow digits 0-9 and valid control keys (backspace, delete, arrow keys, etc.)
    if (
      (event.keyCode >= 48 && event.keyCode <= 57) || // Digits 0-9
      (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad digits 0-9
      event.keyCode == 8 || // backspace
      event.keyCode == 9 || // Tab
      event.keyCode == 35 || // End
      event.keyCode == 36 || // Home
      event.keyCode == 37 || // Left arrow
      event.keyCode == 39 || // Right arrow
      event.keyCode == 46 || // Delete
      event.keyCode == 17 ||// ctrl
      event.keyCode == 86 // v
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  function handleInputChange(event, index) {
    const value = event.target.value;
    if (value.length > 1) {
        event.target.value = value.substring(0, 1);
      }
    // console.log('Input value:', value);
    if (value.length == 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
    if (event.clipboardData && event.clipboardData.getData) {
      const pastedData = event.clipboardData.getData("Text");
      if (pastedData.length === 6 && /^[0-9]+$/.test(pastedData)) {
        for (let i = 0; i < inputRefs.current.length; i++) {
          inputRefs.current[i].value = pastedData.charAt(i);
        }
      }
    }
  }

  function handleInputKeyUp(event, index) {
    if (event.keyCode == 8 && inputRefs.current[index].value.length == 0) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (event.keyCode == 37) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (event.keyCode === 39) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Phone Number verified successfully!');
  }

  return (

    <>
    {location.pathname === '/otp' && (
  
      <><div className="header">
          <h4>Phone Verification</h4>
        </div><div className="body_number">
            Enter the OTP you received on 76478-6XXXX
          </div><div className="body_otp">
            <input
              ref={el => inputRefs.current[0] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 0)}
              onInput={event => handleInputChange(event, 0)}
              onKeyUp={event => handleInputKeyUp(event, 0)}
              onPaste={event => handleInputChange(event, 0)} 
              />
            <input
              ref={el => inputRefs.current[1] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 1)}
              onInput={event => handleInputChange(event, 1)}
              onKeyUp={event => handleInputKeyUp(event, 1)}
              onPaste={event => handleInputChange(event, 1)} 
              />
            <input
              ref={el => inputRefs.current[2] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 2)}
              onInput={event => handleInputChange(event, 2)}
              onKeyUp={event => handleInputKeyUp(event, 2)}
              onPaste={event => handleInputChange(event, 2)} 
              />
            <input
              ref={el => inputRefs.current[3] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 3)}
              onInput={event => handleInputChange(event, 3)}
              onKeyUp={event => handleInputKeyUp(event, 3)}
              onPaste={event => handleInputChange(event, 3)} 
              />
            <input
              ref={el => inputRefs.current[4] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 4)}
              onInput={event => handleInputChange(event, 4)}
              onKeyUp={event => handleInputKeyUp(event, 4)}
              onPaste={event => handleInputChange(event, 4)}
               />
            <input
              ref={el => inputRefs.current[5] = el}
              type="number"
              min="0"
              max="9"
              maxLength="1"
              onKeyDown={event => handleInputKeyDown(event, 5)}
              onInput={event => handleInputChange(event, 5)}
              onKeyUp={event => handleInputKeyUp(event, 5)}
              onPaste={event => handleInputChange(event, 5)} 
              />

          </div><div className="otp_change">
            <div className="text-left">Change Number</div>
            <div className="text-right">Re-send OTP</div>
          </div><div className="body_footer">
            <form onSubmit={handleSubmit}>
              <button type="submit" className="button">Verify Phone Number</button>
            </form>
          </div></>)}
</>
)
}

export default OTPBox1;