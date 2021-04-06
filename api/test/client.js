const http = require('http');

const options = {
  default: {
    headers: { 'Content-Type': 'application/json' },
    hostname: 'localhost',
    port: 5757
  },

  create: () => ({ ...options.default, method: 'POST', path: '/sounds' }),
  show: id => ({ ...options.default, method: 'GET', path: `/sounds/${id}` })
};

const bodies = {
  create: (engine = 'Google', text = 'Hello, world!', voice = 'en-US') =>
    JSON.stringify({ engine, data: { text, voice } })
};

const request = (options, body) => {
  return new Promise((resolve, reject) => {
    const request = http.request(options, res => {
      let data = '';
      res.on('data', chunk => (data = data + chunk));
      res.on('end', () => resolve(JSON.parse(data)));
    });
    request.setTimeout(10 * 1000);
    if (body) request.write(body);
    request.on('error', reject);
    request.end();
  });
};

const operations = {
  create: () => request(options.create(), bodies.create()),
  show: id => request(options.show(id))
};

const retry = (func, timeout) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(func()), timeout);
  });
};

const location = (soundId, timeout = 1000) => {
  return operations.show(soundId).then(res => {
    if (res.status == 'Error') throw res.message;
    if (timeout > 30 * 1000) throw 'Operation timed out';
    if (res.status == 'Pending') {
      return retry(() => location(soundId, timeout * 2), timeout);
    }

    return res.location;
  });
};

module.exports = {
  sound: {
    create: operations.create,
    show: operations.show,
    location: location
  }
};
