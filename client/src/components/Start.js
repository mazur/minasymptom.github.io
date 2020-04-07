import React from "react";

export function Start({ onSave }) {
  const form = React.useRef();
  const saveCallback = React.useCallback(() => onSave(form), [form, onSave]);
  return (
    <form ref={form}>
      <div>Country: Sweden</div>
      <div>Zip: 12345</div>
      <div>
        Report code: <input name="report_code" />
      </div>
      <div onClick={saveCallback}>START</div>
    </form>
  );
}
