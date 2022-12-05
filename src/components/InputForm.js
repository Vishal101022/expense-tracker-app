import { useState } from "react";
import "./InputForm.css";

const InputForm = () => {
  
  return (
    <form>
      <div className="input-form_controls">
        <div className="input-form_control">
          <label>Title</label>
          <input type="text"  />
        </div>
        <div className="input-form_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
           
          />
        </div>
        <div className="input-form_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            
          />
        </div>
      </div>
      <div className="input-form_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default InputForm;
