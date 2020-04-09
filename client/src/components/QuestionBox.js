import React from "react";
import api from "@cocheck/api";
import questions from "@cocheck/questions";

function QuestionBox({ onCancel }) {
  const answers = React.useRef({});

  // pagination and actions
  const [screenIndex, setScreenIndex] = React.useState(0);
  const actions = React.useMemo(
    () => ({
      cancel: onCancel,
      save: () => {
        console.log(answers.current.value);
        console.log(api);
      },
      forward: (changes) => {
        answers.current.value = {
          ...(answers.current.value || {}),
          ...changes,
        };
        setScreenIndex(screenIndex + 1);
      },
      back: () => setScreenIndex(screenIndex - 1),
      reportAgain: () => alert("reportAgain"),
      showStatistics: () => alert("showStatistics"),
    }),
    [onCancel, screenIndex]
  );

  const screens = [
    <ReportCodeQuestion key={"first"} actions={actions} />,
    ...questions.covid19.map(([title, question], index) => (
      <QuestionScreen
        key={`q-${index}`}
        title={title}
        question={question}
        answers={answers}
        actions={actions}
        isFirst={screenIndex === 1}
        isLast={screenIndex > questions.covid19.length - 1}
      />
    )),
    <ThankYouScreen key={"last"} actions={actions} answers={answers} />,
  ];
  return (
    <div>
      {screens[screenIndex]}

      <div style={{ opacity: 0.3 }}>
        <b>DEBUG</b>
        <hr />
        screenIndex: {screenIndex}
        <hr />
        screens:
        {screens.map((x, index) => (
          <div key={`debug-${index}`}>{x}</div>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "0.5em",
  padding: "0.5em",
  display: "inline-block",
};
const questionBoxStyle = {
  border: "1px solid gold",
  borderRadius: "5px",
  padding: "1em",
  margin: "1em",
};

function QuestionScreen({
  question,
  answers,
  title,
  actions,
  isFirst,
  isLast,
}) {
  const { cancel, forward, back } = actions;
  // const { custom_answers, yes_one, yes_many } = question;
  return (
    <div style={questionBoxStyle}>
      <div>
        <div>{title}</div>
        <div style={{ opacity: 0.3 }}>
          DEBUG:
          <small>question = {JSON.stringify(question)}</small>
          <div>answers on this question = {JSON.stringify(answers[title])}</div>
        </div>
      </div>
      <div>
        {!isFirst && (
          <div style={buttonStyle} onClick={back}>
            ⟵ Tillbaka
          </div>
        )}
        <div style={buttonStyle} onClick={forward}>
          {isLast ? <span>Slutför rapport</span> : <span>Nästa steg ⟶</span>}
        </div>
        <div style={buttonStyle} onClick={cancel}>
          Avbryt rapport
        </div>
      </div>
    </div>
  );
}

function ReportCodeQuestion({ actions }) {
  const [first, setFirst] = React.useState(true);
  const codeRef = React.useRef();
  return (
    <div>
      <div>Rapportera dina symptom</div>
      {first && (
        <div>
          <p>
            Dina svar är anonyma. Har du rapporterat tidigare och fått en
            rapporteringskod?
          </p>
          <div>
            <div style={buttonStyle} onClick={() => setFirst(false)}>
              Jag har en kod
            </div>
            <div
              style={buttonStyle}
              onClick={() => actions.forward({ code: "" })}
            >
              Jag har en ingen kod
            </div>
          </div>
        </div>
      )}
      {!first && (
        <div>
          <div>
            Skriv din rapportkod här:
            <input ref={codeRef} />
          </div>
          <div>
            <div style={buttonStyle} onClick={() => setFirst(true)}>
              ⟵ Tillbaka
            </div>
            <div
              style={buttonStyle}
              onClick={() => actions.forward({ code: codeRef.current.value })}
            >
              Gå vidare
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ThankYouScreen({ answers, actions }) {
  return (
    <div>
      <div>Stort tack för ditt bidrag!</div>
      <p>
        Dina svar är <b>anonyma</b>. Ifall du vill rapportera flera gånger, för
        att kunna följa dina svar över en längre tid, så ber vi dig att anteckna
        koden nedan. Nästa gång du rapporterar ska du då skriva in din sparade
        kod.
      </p>
      <div>
        Div kod:
        <div>
          {answers.code}
          {/* <div>Kopiera kod</div> */}
        </div>
      </div>
      <div>
        <div style={buttonStyle} onClick={actions.reportAgain}>
          Rapportera igen
        </div>
        <div style={buttonStyle} onClick={actions.showStatistics}>
          Se dagens statistik
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
