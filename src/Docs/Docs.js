import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/styles';
import ReactGA from 'react-ga';
import languages from 'google-tts-languages';

import config from '../config.js';

import './Docs.css';

const POST_SOUNDS_REQ = `{
  "engine": "Google",
  "data": {
    "text": "Hello, world",
    "voice": "en-US"
  }
}`;

const POST_SOUNDS_RES_SUCCESS = `{
  "success": true,
  "id": "<RFC4122 uuid>"
}`;

const POST_SOUNDS_RES_FAILURE = `{
  "success": false,
  "message": "Request failed due to..."
}`;

const GET_SOUNDS_RES_PENDING = `{
  "status": "Pending"
}`;

const GET_SOUNDS_RES_DONE = `{
  "status": "Done",
  "location": "https://hostname/path/to/audio.mp3"
}`;

const GET_SOUNDS_RES_ERROR = `{
  "status": "Error",
  "message": "Failed to create sound due to..."
}`;

class Docs extends Component {
  constructor() {
    super();

    ReactGA.pageview('/docs');
  }

  render() {
    return (
      <main>
        <section id="index" className="section">
          <h2 className="section__title">API Documentation</h2>
          <h3 className="section__subtitle">Index</h3>
          <Index />
        </section>
        <section id="intro" className="section section--island">
          <h2 className="section__title">Introduction</h2>
          <p className="section__text">
            The Sound of Text API will give you all the same functions as the
            website. The API is currently free and there are no plans to change
            that. That being said, it's not free for me to host, so please don't
            abuse it. If you have any questions or experience difficulties,
            please feel free to contact me directly via email or twitter.
          </p>
          <p className="section__text">
            The API itself is located at{' '}
            <a href={config.soundsApi}>{config.soundsApi}</a> and it supports
            two operations. The first allows you to create a sound, returning an
            id. The second allows you to get the public url for the sound from
            an id. Check out the <a href="#reference">reference</a> for more
            details.
          </p>
        </section>
        <section id="libraries" className="section section--island">
          <h2 className="section__title">Client Libraries</h2>
          <p className="section__text">
            You might find it useful to use a library that already handles some
            of the implementation details for the Sound of Text API.
            Unfortunately, I have only written one so far. If you write one
            yourself, please let me know so that I can add it to the list!
          </p>
          <ul className="section__text">
            <li>
              <a href="https://github.com/ncpierson/soundoftext-js">NodeJS</a>
            </li>
          </ul>
        </section>
        <section id="voices" className="section section--island">
          <h2 className="section__title">Supported Voices</h2>
          <p className="section__text">
            There are a finite number of supported voices that the API supports.
            I manually curated the voices from Google Translate, so voices might
            be added (or removed) at any time. Always use the shortened
            voice/language code, never the full name, when using the API.
          </p>
          <VoicesTable />
        </section>
        <section id="reference">
          <div className="section section--island">
            <h2 className="section__title">Reference</h2>
            <h3 className="section__subtitle">POST /sounds</h3>
            <p className="section__text">
              Use this operation to create a new sound. Currently the{' '}
              <code className="code">engine</code> parameter is ignored, but it
              is included because more engines might be used in the future. Both{' '}
              <code className="code">voice</code> and{' '}
              <code className="code">text</code> are required parameters.
            </p>
            <h4>Request</h4>
            <p className="section__text">
              Set your Content-Type header to{' '}
              <code className="code">application/json</code>
              and make your request body look like the following:
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {POST_SOUNDS_REQ}
            </SyntaxHighlighter>
            <h4>Response</h4>
            <h5>On Success</h5>
            <p className="section__text">
              An HTTP status code of 200 with response body:
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {POST_SOUNDS_RES_SUCCESS}
            </SyntaxHighlighter>
            <p className="section__text">
              IDs look like this: "416eda90-552e-11e7-9a60-63d42f732a9c".
            </p>
            <h5>On Failure</h5>
            <p className="section__text">
              An HTTP status code of 400 or 500 with response body:
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {POST_SOUNDS_RES_FAILURE}
            </SyntaxHighlighter>
          </div>
          <div className="section section--bordered" id="show-sound">
            <h3 className="section__subtitle">GET /sounds/:id</h3>
            <p className="section__text">
              Use this operation to get the current status of the requested
              sound and to retrieve the public url for the mp3 file.
            </p>
            <h4>Response</h4>
            <h5>On Success</h5>
            <p className="section__text">
              First the sound will be pending if the server has not finished
              fulfilling the request.
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {GET_SOUNDS_RES_PENDING}
            </SyntaxHighlighter>
            <p className="section__text">
              Once the request has been fulfilled, you will receive a "Done"
              status and the public url for the mp3 file.
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {GET_SOUNDS_RES_DONE}
            </SyntaxHighlighter>
            <p className="section__text">
              If something went wrong fulfilling the request, you will receive
              an error status and a message.
            </p>
            <SyntaxHighlighter language="json" style={solarizedLight}>
              {GET_SOUNDS_RES_ERROR}
            </SyntaxHighlighter>
          </div>
        </section>
      </main>
    );
  }
}

const Index = () => {
  return (
    <ul className="index">
      <li>
        <a href="#intro">Introduction</a>
      </li>
      <li>
        <a href="#libraries">Client Libraries</a>
      </li>
      <li>
        <a href="#voices">Supported Voices</a>
      </li>
      <li>
        <a href="#reference">Reference</a>
        <ul>
          <li>
            <a href="#reference">POST /sounds</a>
          </li>
          <li>
            <a href="#show-sound">GET /sounds/:id</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const VoicesTable = () => {
  const $voices = languages.map(l => (
    <tr>
      <td>{l.code}</td>
      <td>{l.name}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Language / Voice</th>
        </tr>
      </thead>
      <tbody>{$voices}</tbody>
    </table>
  );
};

export default Docs;
