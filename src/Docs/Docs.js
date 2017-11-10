import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/styles';
import ReactGA from 'react-ga';

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
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Language / Voice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>af-ZA</td>
          <td>Afrikaans</td>
        </tr>
        <tr>
          <td>sq </td>
          <td>Albanian</td>
        </tr>
        <tr>
          <td>ar-AE</td>
          <td>Arabic</td>
        </tr>
        <tr>
          <td>hy </td>
          <td>Armenian</td>
        </tr>
        <tr>
          <td>bn </td>
          <td>Bengali</td>
        </tr>
        <tr>
          <td>bs </td>
          <td>Bosnian</td>
        </tr>
        <tr>
          <td>ca-ES</td>
          <td>Catalan</td>
        </tr>
        <tr>
          <td>yue-Hant-HK</td>
          <td>Chinese, Cantonese (Traditional)</td>
        </tr>
        <tr>
          <td>cmn-Hans-CN</td>
          <td>Chinese, Mandarin (Simplified)</td>
        </tr>
        <tr>
          <td>hr-HR</td>
          <td>Croatian</td>
        </tr>
        <tr>
          <td>cs-CZ</td>
          <td>Czech</td>
        </tr>
        <tr>
          <td>da-DK</td>
          <td>Danish</td>
        </tr>
        <tr>
          <td>nl-NL</td>
          <td>Dutch</td>
        </tr>
        <tr>
          <td>en-AU</td>
          <td>English (Australia)</td>
        </tr>
        <tr>
          <td>en-GB</td>
          <td>English (United Kingdom)</td>
        </tr>
        <tr>
          <td>en-US</td>
          <td>English (United States)</td>
        </tr>
        <tr>
          <td>eo </td>
          <td>Esperanto</td>
        </tr>
        <tr>
          <td>fi-FI</td>
          <td>Finnish</td>
        </tr>
        <tr>
          <td>fr-FR</td>
          <td>French</td>
        </tr>
        <tr>
          <td>de-DE</td>
          <td>German</td>
        </tr>
        <tr>
          <td>el-GR</td>
          <td>Greek</td>
        </tr>
        <tr>
          <td>hi-IN</td>
          <td>Hindi</td>
        </tr>
        <tr>
          <td>hu-HU</td>
          <td>Hungarian</td>
        </tr>
        <tr>
          <td>is-IS</td>
          <td>Icelandic</td>
        </tr>
        <tr>
          <td>id-ID</td>
          <td>Indonesian</td>
        </tr>
        <tr>
          <td>it-IT</td>
          <td>Italian</td>
        </tr>
        <tr>
          <td>ja-JP</td>
          <td>Japanese (Japan)</td>
        </tr>
        <tr>
          <td>km </td>
          <td>Khmer</td>
        </tr>
        <tr>
          <td>ko-KR</td>
          <td>Korean</td>
        </tr>
        <tr>
          <td>la </td>
          <td>Latin</td>
        </tr>
        <tr>
          <td>lv </td>
          <td>Latvian</td>
        </tr>
        <tr>
          <td>mk </td>
          <td>Macedonian</td>
        </tr>
        <tr>
          <td>ne </td>
          <td>Nepali</td>
        </tr>
        <tr>
          <td>nb-NO</td>
          <td>Norwegian</td>
        </tr>
        <tr>
          <td>pl-PL</td>
          <td>Polish</td>
        </tr>
        <tr>
          <td>pt-BR</td>
          <td>Portuguese</td>
        </tr>
        <tr>
          <td>ro-RO</td>
          <td>Romanian</td>
        </tr>
        <tr>
          <td>ru-RU</td>
          <td>Russian</td>
        </tr>
        <tr>
          <td>sr-RS</td>
          <td>Serbian</td>
        </tr>
        <tr>
          <td>si </td>
          <td>Sinhala</td>
        </tr>
        <tr>
          <td>sk-SK</td>
          <td>Slovak</td>
        </tr>
        <tr>
          <td>es-MX</td>
          <td>Spanish (Mexico)</td>
        </tr>
        <tr>
          <td>es-ES</td>
          <td>Spanish (Spain)</td>
        </tr>
        <tr>
          <td>sw </td>
          <td>Swahili</td>
        </tr>
        <tr>
          <td>sv-SE</td>
          <td>Swedish</td>
        </tr>
        <tr>
          <td>ta </td>
          <td>Tamil</td>
        </tr>
        <tr>
          <td>th-TH</td>
          <td>Thai</td>
        </tr>
        <tr>
          <td>tr-TR</td>
          <td>Turkish</td>
        </tr>
        <tr>
          <td>uk-UA</td>
          <td>Ukrainian</td>
        </tr>
        <tr>
          <td>vi-VN</td>
          <td>Vietnamese</td>
        </tr>
        <tr>
          <td>cy </td>
          <td>Welsh</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Docs;
