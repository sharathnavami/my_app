import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySection from './componenets/HistorySection';
import SearchSection from './componenets/SearchSection';
import 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
import 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js';
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='main container-fluid'>
          <div className="row flex-grow-1">

            {!isCollapsed && (
              <div className='col-2'>
                <div className="col-12 col-md-2" id="historyContent">
                  <HistorySection />
                </div>
              </div>
            )}

            <div id="searchSection" className={`mt-3 mb-4 flex ${isCollapsed ? 'col-12' : 'col-10'}`}>
              <div className="inner-search-section flex flex-grow-1">
                <div className='flex-grow-0'>
                  <button
                    className="flex btn btn-secondary floating-btn pb-2 mb-2"
                    type="button"
                    onClick={toggleSidebar}
                  >
                    ☰
                  </button>
                  <button id="newChatBtn"
                    className="flex btn btn-secondary floating-btn pb-2 mb-2 me-3 float-end"
                    type="button"
                  >
                    New Chat
                  </button>
                </div>
                <SearchSection />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;