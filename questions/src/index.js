function makeAnswers(params) {
  return params?.custom_answers || ["Ja", "Nej", "Vet ej / Kan ej svara"];
}

function question(params) {
  const answers = makeAnswers(params);
  const title = params?.title || params;
  const choices = params?.title ? { ...params, answers } : { answers };
  return [title, choices];
}

const covid19 = [
  "Har du nysningar idag?",
  "Har du snuva idag?",
  "Har du försämrat smak- och luktsinne idag?",
  "Känner du dig ovanligt trött idag?",
  {
    title: "Har du återkommande slemhosta (produktiv) idag?",
    custom_answers: [
      "Nej",
      "Ja, lindrig",
      "Ja, måttlig",
      "Ja, uttalad",
      "Ja, extrem",
      "Vet ej / kan inte svara",
    ],
  },
  {
    title: "Har du återkommande torrhosta idag?",
    custom_answers: [
      "Nej",
      "Ja, lindrig",
      "Ja, måttlig",
      "Ja, uttalad",
      "Ja, extrem",
      "Vet ej / kan inte svara",
    ],
  },
  {
    title: "Har du huvudvärk idag",
    yes_one: [
      "1 (Ingen huvudvärk)",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10 (Värsta tänkbara huvudvärk)",
    ],
  },
  {
    title: "Har du andra smärtor idag?",
    yes_many: [
      "Ja, bröstsmärta",
      "Ja, buksmärta",
      "Ja, smärta i muskler och leder",
      "Ja, smärta i halsen",
      "Ja, smärta i öronen",
      "Ja, smärta i ögonen",
      "Ja, andra ej nämnda smärtor",
    ],
    yes_one: [
      "1 (Ingen smärta)",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10 (Värsta tänkbara smärta)",
    ],
  },
  {
    title: "Har du feber idag?",
    custom_answers: [
      "Ingen feber (din normala variation, 36-37.5 grader för vuxna)",
      "37.6-37.9 grader",
      "38-38.9 grader",
      "39 grader eller mer",
    ],
  },
  {
    title: "Har du diarré eller kräkningar idag?",
    yes_many: ["Ja, diarré", "Ja, kräkningar"],
  },
  "Har du andnöd (svårighet att andas) idag?",
  {
    title: "Vilken åldersgrupp tillhör du?",
    custom_answers: [
      "0-9 år",
      "10-19 år",
      "20-29 år",
      "30-39 år",
      "40-49 år",
      "50-59 år",
      "60-69 år",
      "70-79 år",
      "80-89 år",
      "90+ år",
      "Vet ej / kan inte svara",
    ],
  },
  {
    title: "Vilket län tillhör du?",
    custom_answers: [
      "Blekinge",
      "Dalarna",
      "Gotland",
      "Gävleborg",
      "Halland",
      "Jämtland",
      "Härjedalen",
      "Jönköping",
      "Kalmar",
      "Kronoberg",
      "Norrbotten",
      "Skåne",
      "Stockholm",
      "Sörmland",
      "Uppsala",
      "Värmland",
      "Västerbotten",
      "Västernorrland",
      "Västmanland",
      "Västra Götaland",
      "Örebro",
      "Östergötland",
      "Bor ej i Sverige",
      "Vet ej / kan inte svara",
    ],
  },
].map(question);

export default { covid19 };
