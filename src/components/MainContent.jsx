import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  // Test comment 4
  // Added another test comment
  

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
