# README

# Introduction

This project is an end-to-end automated functional testing suite for an e-commerce web application, built with Playwright. It ensures core user journeys—like registration, login, and checkout—work reliably across different browsers and environments, providing confidence in the application’s stability and performance with every update.

### Tools

After evaluating various tools, we chose [Playwright](https://playwright.dev) for its reliability, speed, and strong support for modern web testing. It aligns well with our e-commerce application’s requirements, enabling effective end-to-end functional and regression testing.

We analyzed the app’s workflow and built a modular, reusable set of automated tests to ensure consistent coverage and easy maintenance. These tests can be quickly run whenever changes are made to the application.


### Tech Stack
- **Playwright**: For browser automation and end-to-end testing.
- **TypeScript**: For writing clean code, type-safe test code.
- **Node.js**: As the runtime environment for executing tests.

Additionally, to enhance element selection and locator strategy during test development, we use the **LetXpath** browser extension — a powerful XPath helper tool that simplifies finding and validating XPath expressions directly in the browser.

---

## Getting Started

This section guides you through setting up the project and running tests locally.

### 1. Installation Process

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### 2. Software Dependencies

Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)
- TypeScript (installed via `npm install`)

Install Playwright and supported browsers:

```bash
npx playwright install
```

### 3. Browser Extension: LetXpath (XPath Helper)

To simplify and speed up test creation, we recommend using the **[LetXpath](https://letxpath.com)** browser extension:

- Visually inspect and generate accurate XPath selectors.
- Test XPath expressions directly on the page in real time.
- Copy selectors directly into your Playwright test scripts.

👉 [Install LetXpath for Chrome](https://chrome.google.com/webstore/detail/letxpath/jhfmknlphlbbhogbfaohfpjibbkhmalk)  
👉 [Install LetXpath for Firefox](https://addons.mozilla.org/en-US/firefox/addon/letxpath/)

This tool is especially helpful when dealing with dynamic elements, nested iframes, or shadow DOM components.

### 4. Latest Releases

Stay up to date with the latest Playwright features and fixes. Check the [official Playwright release notes](https://github.com/microsoft/playwright/releases) for updates.

### 5. API References

For detailed documentation on Playwright's API, visit the [Playwright API Reference](https://playwright.dev/docs/api).

---

## Browser Configuration

Currently, the project is configured to support multiple browsers. You can easily extend or modify browser configurations as needed.

Supported browsers:
- Chrome (via Chromium)
- Firefox
- Microsoft Edge
- Safari (via WebKit)

![Browsers (Chromium, Firefox, WebKit)](https://playwright.dev/img/logos/Browsers.png)

To run tests on a specific browser, update the configuration in `playwright.config.ts` 

## Environments Configuration

The project supports multiple environments for flexible testing across stages.

Configured environments:
- **test**: Local execution and development testing.
- **uat**: User Acceptance Testing (configured for future use).
- **prod**: Production validation (configured for future use).

---

## Feature List

The following key application features are currently automated:

1. **Registration Page**  
   - User sign-up flow with validation.
2. **Login Page**  
   - Authentication and session handling.
3. **Product Details Page**  
   - Validating product visibility, Title, and Pricing, Add to cart.
4. **Multi-step Checkout Page**  
   - End-to-end validation of cart management, shipping, payment, and order confirmation.

All tests are designed to be resilient, leveraging Playwright’s auto-wait, web-first assertions, and full browser context isolation.

---

## Build and Test with Different Environments

Use the following commands to run automation scripts for different environments:

```bash
npm run env:test     # Runs tests on the local test environment
npm run env:uat      # Runs tests on UAT (when configured)
npm run env:prod     # Runs tests on production (when configured)
```

> **Note**: Environment scripts are defined in `package.json`. Example:
> ```json
> "scripts": {
>   "env:test": "cross-env test_env=test npx playwright test",
> }
> ```

---

## Why Playwright?

### ✅ Cross-Browser & Cross-Platform
Playwright supports all modern rendering engines including **Chromium, Firefox, and WebKit** across **Windows, Linux, and macOS**, enabling consistent testing in all environments.

### ✅ Resilient, Flakiness-Free Tests
- **Auto-wait**: Automatically waits for elements to be actionable before performing actions.
- **Web-first assertions**: Retried automatically until conditions are met.
- **Tracing & Debugging**: Capture videos, screenshots, and execution traces for failed tests.

### ✅ No Trade-offs, No Limits
- Supports **multiple tabs, origins, and users** within a single test.
- Interacts using **trusted events** indistinguishable from real user input.
- Can **test frames and pierce Shadow DOM** seamlessly.

### ✅ Full Isolation & Fast Execution
- Uses **browser contexts** for full test isolation (like a fresh profile) in milliseconds.
- Reuse authenticated states across tests with `storageState`.

### ✅ Powerful Tooling
- **Codegen**: Generate tests by recording your actions:  
  ```bash
  npx playwright codegen
  ```
- **Playwright Inspector**: Debug tests step-by-step with logs and action previews.
- **Trace Viewer**: Investigate failures with DOM snapshots, videos, and source logs.

---

## Recommended Developer Tools

| Tool | Purpose |
|------|--------|
| **LetXpath** | Generate and validate XPath selectors directly in the browser |
| **Playwright Inspector** | Debug test execution and generate reliable locators |
| **Browser Developer Tools** | Inspect network, console, and DOM structure |

