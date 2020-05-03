# canvaro-job-listing

> A canvaro react library to show job listing

[![NPM](https://img.shields.io/npm/v/canvaro-job-listing.svg)](https://www.npmjs.com/package/canvaro-job-listing) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save canvaro-job-listing
```

## Usage

```jsx
import React, { Component } from 'react'

import JobListing  from 'canvaro-job-listing'
import 'canvaro-job-listing/dist/index.css'

const AUTH_KEY = "YOUR_AUTH_KEY";

class Example extends Component {
  render() {
    return <JobListing authKey={AUTH_KEY} />
  }
}
```
## Local machine setup

Clone the repo

Step 1: cd into the project and run npm start. This will watch the src/ module and recompile it into dist/ whenever you make changes.

Step 2: Open a 2nd command line, cd into the /example folder and run npm start.
We now have a live server watching for changes in src or example and reload in real-time so you can easily develop your component.

## License

MIT © [sgpatil](https://github.com/sgpatil)
