import React from "react";
import QuestionBox from "./QuestionBox";

function Home() {
  const [first, setFirst] = React.useState(false);
  const onCancel = React.useCallback(() => setFirst(true), []);
  return (
    <div>
      {first && (
        <div>
          asdf
          <div onClick={() => setFirst(false)}>Jag vill bidra</div>
        </div>
      )}
      {!first && (
        <div>
          <div>Var med och bidra!</div>
          <QuestionBox onCancel={onCancel} />
        </div>
      )}
    </div>
  );
}

export default Home;
