import { useState} from 'react';
import Accordion from './components/Accordion.jsx';
import { texts } from './data/randomTexts.js';
import './App.css';

function App() {
  const [activePanel, setActivePanel] = useState(null);

  function activatePanel(id) {
    setActivePanel(id);
  }

  function collaspePanel(e) {
    e.stopPropagation();
    setActivePanel(null);
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
          onCollapse={collaspePanel}
        />
      ))}
    </>
  );
}

export default App;
