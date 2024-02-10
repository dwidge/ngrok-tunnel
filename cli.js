#!/usr/bin/env node
const spawn = require("cross-spawn");
const { makeNgrokListener } = require("./ngrok");

let argv = process.argv.slice(2);
let addr, help;
if (argv[0] === "-h") {
  help = true;
  argv = argv.slice(1);
}
if (argv[0] === "-p") {
  addr = argv[1];
  argv = argv.slice(2);
}

// console.log({ argv, addr, help });

function printHelp() {
  console.log(
    [
      "Usage: NGROK_AUTHTOKEN=abc ngrok-tunnel [-p <port>] [command]",
      "  -p <port>  Target port or address for ngrok.",
      "  command       Command to run with NGROK_URL env.",
    ].join("\n")
  );
}

if (help) {
  printHelp();
  process.exit();
}

const command = argv[0];
if (!command) {
  printHelp();
  process.exit(1);
}

const token = process.env.NGROK_AUTHTOKEN;
if (!token) {
  printHelp();
  process.exit(1);
}

const ngrok = makeNgrokListener(addr).then((ngrok) => {
  spawn(command, argv.slice(1), {
    stdio: "inherit",
    env: { ...process.eventNames, NGROK_URL: ngrok.url },
  }).on("exit", function (exitCode) {
    process.exit(exitCode);
  });
});
