import React, { createContext, useContext } from "react";
import { useState } from "react";

const i18n = {
  hu: {
    greetings: "Üdvözlet",
    changeLanguage: "Nyelv váltása",
    hu: "Magyar",
    en: "Angol",
    es: "Spanyol",
    fr: "Francia",
  },
  en: {
    greetings: "Greetings",
    changeLanguage: "Change language",
    hu: "Hungarian",
    en: "English",
    es: "Spanish",
    fr: "French",
  },
  es: {
    greetings: "Saludos",
    changeLanguage: "Elige lengua",
    hu: "Húngaro",
    en: "Inglés",
    es: "Español",
    fr: "Francés",
  },
  fr: {
    greetings: "Salutations",
    changeLanguage: "Choix de langue",
    hu: "Hongrois",
    en: "Anglais",
    es: "Espagnol",
    fr: "Français",
  },
};

const LanguageContext = createContext({
  language: "hu",
  setLanguage: () => {},
});

function App() {
  const [language, setLanguage] = useState("hu");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Container />
    </LanguageContext.Provider>
  );
}

const Container = () => {
  return (
    <div>
      <LanguageChooser />
      <Greetings />
    </div>
  );
};

const Greetings = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="col-6 bg-warning jumbotron m-0 rounded-0">
      <h1>{i18n[language].greetings}</h1>
    </div>
  );
};

const LanguageChooser = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-light bg-light p-0">
      <label className="w-100 p-3">
        <h3>{i18n[language].changeLanguage}:</h3>
        <select
          className="form-control"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          {Object.keys(i18n).map((lang) => (
            <option key={lang} value={lang}>
              {i18n[language][lang]}
            </option>
          ))}
        </select>
      </label>
    </nav>
  );
};

export default App;
