# Valor Tech Interview — Module Federation + Zephyr Cloud

This repository was created as part of the technical process for Valor Software.
---

## Stack

* React 18
* Webpack 5
* Module Federation
* Zephyr Cloud (for remote deployments)
* Monorepo with Yarn Workspaces

---

## Project Structure

```text
valor-tech-interview/
├── shell/      → host application (shell)
├── remote/     → remote application exposed via MF
├── package.json
└── README.md
```

---

## How to run locally (development)

1 - Install dependencies:

```bash
yarn install
```

2- Run both remote and shell applications:

```bash
yarn start
```

* The shell will be available at: [http://localhost:3001](http://localhost:3001)
* The remote will be available at: [http://localhost:3002](http://localhost:3002)

or each:

```bash
yarn start:remote
yarn start:shell
```

---

## How to build for production

```bash
yarn build
```

## ✏️ Feedback on the challenge

I found it very interesting to work with Zephyr Cloud, having such an easy and practical deployment process is truly enjoyable and valuable in daily development. The challenge was practical and aligned with real-world scenarios, and the Zephyr documentation is clear. 

If I had more time to improve the implementation, I would:

* Further separate responsibilities across the codebase
* Refine the remote URL flow for better maintainability
* Apply additional refactoring to each Webpack configuration file

---

## 📄 Example URLs

Deployed remote:
[https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app/remoteEntry.js](https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app/remoteEntry.js)

Built shell:
[https://t-web-latest-luiz-chaves-shell-valor-tech-interview-l-3803c0-ze.zephyrcloud.app/](https://t-web-latest-luiz-chaves-shell-valor-tech-interview-l-3803c0-ze.zephyrcloud.app/)

---
