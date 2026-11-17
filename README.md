# Angular Test — "Купи слона"

The front end of a test task for my first developer job (May 2019). The Angular app asks the
[Express-Server](https://github.com/IlyaBielov/Express-Server) for a line of text and shows it above an
elephant after a random delay of 1–10 seconds.

<table>
  <tr>
    <th>Waiting for the answer</th>
    <th>The server's answer</th>
  </tr>
  <tr>
    <td valign="top"><img src="docs/screenshots/waiting.png" width="380" alt="The elephant before the text appears"></td>
    <td valign="top"><img src="docs/screenshots/answer.png" width="380" alt="The elephant with the text Купи слона"></td>
  </tr>
</table>

## How it works

- `ServiceService.get()` requests the server root as plain text.
- `AppComponent` waits a random 1–10 seconds and then shows the text.
- In development, `proxy.conf.json` forwards `/api/*` to the Express server on `http://localhost:3000`,
  so the browser needs no CORS.

## Run it

Angular 8 needs **Node 10** (`.nvmrc`). Start the server first:

```bash
# terminal 1 — the back end
git clone https://github.com/IlyaBielov/Express-Server && cd Express-Server
npm install && npm start            # http://localhost:3000

# terminal 2 — this app
nvm use
npm ci
npm start                           # http://localhost:4200
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build into `dist/AngularTest` |
| `npm run serve:dist` | Serves the build with `server.js` (Express) on `PORT` or 8080 |
| `npm test -- --watch=false --browsers=ChromeHeadless` | Unit tests (3) |
| `npm run lint` | TSLint |

The production build also calls `/api/`, so in production the server has to be reachable under that path
(for example behind the same reverse proxy). It used to run on Heroku, which no longer hosts it.

Made by [Ilya Bielov](https://www.facebook.com/MrBiela).
