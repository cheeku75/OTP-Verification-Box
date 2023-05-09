import React from 'react';
import './OTPBox.css';

const otpInputs = document.querySelectorAll(".body_otp input");

for (let i = 0; i < otpInputs.length; i++) {
  otpInputs[i].addEventListener("keydown", function(event) {
    // Allow digits 0-9 and valid control keys (backspace, delete, arrow keys, etc.)
    if (
      (event.keyCode >= 48 && event.keyCode <= 57) || // Digits 0-9
      (event.keyCode >= 96 && event.keyCode <= 105) || // Numpad digits 0-9
      event.keyCode == 8 ||
      event.keyCode == 9 || // Tab
      event.keyCode == 35 || // End
      event.keyCode == 36 || // Home
      event.keyCode == 37 || // Left arrow
      event.keyCode == 39 || // Right arrow
      event.keyCode == 46 // Delete
    ) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  });

  otpInputs[i].addEventListener("input", function() {
    if (this.value.length > 1) {
        this.value = this.value.substring(0, 1);
      }
      
    if (this.value.length == this.maxLength){
        if (i < otpInputs.length - 1) {
            otpInputs[i + 1].focus();
          } 
    }
  });

  otpInputs[i].addEventListener("keydown", function(event) {
    // Move focus to previous input field when backspace is pressed
    if (event.keyCode == 8 && this.value.length == 0) {
      if (i > 0) {
        otpInputs[i - 1].focus();
      }
    }
    // Move focus to previous input field when left arrow is pressed
    else if (event.keyCode == 37) {
        if (i > 0) {
          otpInputs[i - 1].focus();
        }
      }
      // Move focus to next input field when right arrow is pressed
      else if (event.keyCode === 39) {
        if (i < otpInputs.length - 1) {
          otpInputs[i + 1].focus();
        }
      }
  });
}

function OTPBox() {
  return (
    <><div className="header">
          <h4>Phone Verification</h4>
      </div>
      <div className="body_number">
            Enter the OTP you received on 76478-6XXXX
      </div>
      <div className="body_otp">

{/* <input type="text" pattern="[0-9]*" maxlength="1" />
<input type="text" pattern="[0-9]*" maxlength="1" />
<input type="text" pattern="[0-9]*" maxlength="1" />
<input type="text" pattern="[0-9]*" maxlength="1" />
<input type="text" pattern="[0-9]*" maxlength="1" />
<input type="text" pattern="[0-9]*" maxlength="1" /> */}
<input type="number" min="0" max="9" maxlength="1"/>
<input type="number" min="0" max="9" maxlength="1"/>
<input type="number" min="0" max="9" maxlength="1"/>
<input type="number" min="0" max="9" maxlength="1"/>
<input type="number" min="0" max="9" maxlength="1"/>
<input type="number" min="0" max="9" maxlength="1"/>
</div>
<div className="otp_change">
      <div className="text-left">Change Number</div>
      <div className="text-right">Re-send OTP</div>
</div>
<div className="body_footer">
<form id="myform">
<button type="submit" className="button">Verify Phone Number</button>
</form>
</div>
</>
)
}

const btn = document.getElementById('myform');

if (btn) {
  btn.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Phone Number verified successfully!');
  });
}

export default OTPBox;