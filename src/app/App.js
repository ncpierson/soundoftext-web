import React from 'react';
import './App.css';

function App(props) {
  return (
    <section id="app">
      <div className="engine">
        <form>
          <div className="input-group engine__text">
            <label for="text">Text:</label>
            <textarea name="text" rows="2" minlength="0" maxlength="100" required autofocus></textarea>
          </div>
          <div className="input-group engine__voice">
            <label for="voice">Voice:</label>
            <select name="voice">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="button-group">
            <input type="submit" />
          </div>
        </form>
      </div>
      <h2 className="title">Sounds</h2>
      <div className="sounds">
        <div className="sound">
          <h3 className="sound__text">I once ate a pumpkin and boy was it delicious.</h3>
          <div className="sound__voice">English</div>
          <div className="sound__actions">
            <button className="action">Play</button>
            <button className="action">Download</button>
          </div>
        </div>
        <div className="sound">
          <h3 className="sound__text">I once ate a pumpkin and boy was it delicious.</h3>
          <div className="sound__voice">English</div>
          <div className="sound__actions">
            <button className="action">Play</button>
            <button className="action">Download</button>
          </div>
        </div>
        <div className="sound">
          <h3 className="sound__text">I once ate a pumpkin and boy was it delicious.</h3>
          <div className="sound__voice">English</div>
          <div className="sound__actions">
            <button className="action">Play</button>
            <button className="action">Download</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
