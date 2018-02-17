import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './Tabs';

const { fin } = window;

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof fin === 'undefined') {
        console.log('OpenFin is not available. You are running in a browser');
      } else {
        this.onReady();
      }
    });
  }

  onReady() {
    const app = fin.desktop.Application.getCurrent();
    fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
    fin.desktop.System.getVersion(version => {
      console.log(`Running openfin version: ${version}`);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React in OpenFin</h1>
        </header>
        <Tabs
          items={[
            {
              value: 'Tab 1',
            },
            {
              value: 'Tab 2',
            },
            {
              value: 'Tab 3',
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
