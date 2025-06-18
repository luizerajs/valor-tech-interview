// You can write your own logic here to determine the actual url
window.remoteAppUrl = window.location.hostname === "localhost"
      ? "http://localhost:3002"
      : "https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app";

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
