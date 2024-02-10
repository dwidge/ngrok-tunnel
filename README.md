# ngrok-tunnel

Run command with ngrok url passed as env.

## install

### global

```bash
$ npm install -g @dwidge/ngrok-tunnel
```

### project

Yarn

```bash
$ yarn add @dwidge/ngrok-tunnel
```

NPM

```bash
$ npm install @dwidge/ngrok-tunnel
```

package.json

```json
{
  "scripts": {
    "start": "node index.js",
    "tunnel": "ngrok-tunnel -p 3000 npm run"
  },
  "dependencies": {
    "@dwidge/ngrok-tunnel": "*"
  }
}
```

```bash
$ npm run tunnel start
```

### local clone

```bash
$ npm install -g file:.
```

## usage

```bash
$ NGROK_AUTHTOKEN=abc ngrok-tunnel -p 3000 node -e "console.log('NGROK_URL', process.env.NGROK_URL)"
```

Starts ngrok with NGROK_AUTHTOKEN environment variable. Runs command with NGROK_URL environment variable set to external url.

## license

Copyright DWJ 2024.  
Distributed under the Boost Software License, Version 1.0.  
https://www.boost.org/LICENSE_1_0.txt
