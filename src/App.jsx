import { useState, useEffect, useRef } from 'react';
import Accordion from './components/Accordion.jsx';
import { texts } from './data/randomTexts.js';
import './App.css';

function App() {
  const [activePanel, setActivePanel] = useState(null);

  function activatePanel(id) {
    setActivePanel(id);
  }

  return (
    <>
      {texts.map((text, index) => (
        <Accordion
          key={index}
          onActivated={activatePanel}
          text={text}
          activeId={activePanel}
          id={index}
        />
      ))}
    </>
  );
}

export default App;
