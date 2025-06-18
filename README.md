# Valor Software Task 
---
This repository was created as part of the technical task for Valor Software. <br />
Author: Luiz Chaves

## Project Structure

```text
valor-tech-interview/
├── remote/     → remote application exposed via MF
├── shell/      → host application (shell)
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

## Feedback on the challenge

I found Zephyr Cloud very interesting to work with. Having such an easy and practical deployment process was really enjoyable and valuable in the development of the challenge, and I can imagine the confidence and agility it brings in day-to-day work. Zephyr's documentation is clear and easy to use. The challenge was practical and aligned with real-world scenarios, I didn't focus on premature bundle improvements, but there are several interesting webpack configurations to optimize in production environments.

Improvements I would focus on in the proposed solution:

* Refine the remote URL flow for better maintainability
* Apply additional refactoring to each Webpack configuration file
* Config environment variables 

---

## Example URLs

Deployed remote:
[https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app/remoteEntry.js](https://t-web-latest-luiz-chaves-remote-valor-tech-interview--13210c-ze.zephyrcloud.app/remoteEntry.js)

Built shell:
[https://t-web-latest-luiz-chaves-shell-valor-tech-interview-l-3803c0-ze.zephyrcloud.app/](https://t-web-latest-luiz-chaves-shell-valor-tech-interview-l-3803c0-ze.zephyrcloud.app/)

---
