# Sauce Labs RDC Appium Testing

A simple setup for running Appium tests on Sauce Labs Real Device Cloud (RDC) with accessibility testing capabilities.

## Project Overview

This repository provides a streamlined configuration for executing Appium tests on Sauce Labs real devices, supporting both Android and iOS platforms with accessibility testing using Deque's AXE tools.

## Prerequisites

- Node.js (recommended: v14.x via [nvm](https://github.com/nvm-sh/nvm))
- npm (comes with Node.js)
- Sauce Labs account with Real Device Cloud access
- Deque AXE API key

## Setup Instructions

1. Install Node.js (preferably v14) using nvm:
    ```bash
      nvm install 14
      nvm use 14
    ```
1. Install project dependencies:
    ```bash
    npm install
    ```
1. Upload test apps:
   * Locate apps in the apps directory
   * Upload them to Sauce Labs Storage

## Configuration
### Environment Variables
Create a `.env` file or set these variables in your environment:

```bash
USERNAME=your_sauce_username
ACCESS_KEY=your_sauce_access_key
APPIUM_URL=appium_url
DEQUE_API_KEY=your_deque_api_key
```

### Available Test Configurations

This project will include multiple configuration on how to run appium tests on Sauce Labs real devices.

| **Appium Version**           | **OS**  | **App/Browser**  | **Driver** | **Command**             |
|------------------------------|---------|------------------|------------|-------------------------|
| appium2-deque-accessibility  | Android | AxeUiAutomator2  | App        | `npm run android.deque` |
| appium2-deque-accessibility  | iOS     | AxeXcUiTest      | App        | `npm run ios.deque`     |

> **NOTE** Detailed Appium version information available in [Sauce Labs Documentation](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/appium-versions/). 

## Running Tests

Execute tests using the following commands:

1. Android:
    ```bash
    npm run android.deque
    ```
1. iOS:
    ```bash
    npm run ios.deque
    ```

## Troubleshooting
1. Verify environment variables are set:
    ```bash
    echo $USERNAME
    echo $ACCESS_KEY
    echo $APPIUM_URL
    echo $DEQUE_API_KEY
    ```
1. Check Sauce Labs storage for uploaded apps
1. Ensure correct Appium URL is configured
1. Validate Deque API key is active

## Additional Resources
1. [Sauce Labs Documentation](https://docs.saucelabs.com/)
1. [Appium Documentation](https://appium.io/docs/en/2.0/)
1. [Deque AXE Documentation](https://www.deque.com/axe/)

## License

This project is openly available under the [MIT License](LICENSE), granting you free access to use, modify, and distribute the code as you see fit. We believe in fostering collaboration and innovation within the testing community.

### Feedback Welcome!

While this repository is freely accessible, we’d love to hear from you! If you use this setup, find it helpful, or have suggestions for improvement, please get in touch. Your feedback helps us refine and enhance this tool for everyone. Reach out by:

- Creating an issue in this repository
- [Emailing us](mailto:motezbahri@gmail.com)

Your insights and experiences are invaluable to us—let's build something better together!