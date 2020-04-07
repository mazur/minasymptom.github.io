import React from "react";

export function Checkup({ onSave }) {
  const form = React.useRef();
  const saveCallback = React.useCallback(() => onSave(form), [form, onSave]);
  return (
    <form ref={form}>
      <div>Report time: YYYY-MM-DD HH</div>
      <div>
        Check 1: <input />
      </div>
      <div>
        Check 2: <input />
      </div>
      <div>
        Check 3: <input />
      </div>
      <div onClick={saveCallback}>SAVE</div>
    </form>
  );
}
