import React from 'react';
import logo from './logo.svg';

import { Routes } from './routes';

import './App.css';

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

  navigate = path => () => {
    this.props.history.push(path);
  };

  render() {
    const { navigate } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React in OpenFin</h1>
        </header>
        <div>
          <button className="btn btn-default" onClick={navigate('/')}>
            Home
          </button>
          <button className="btn btn-default" onClick={navigate('/tabs')}>
            Tabs
          </button>
          <button className="btn btn-default" onClick={navigate('/atlassian')}>
            Atlassian
          </button>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
