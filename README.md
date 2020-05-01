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

## License

MIT © [sgpatil](https://github.com/sgpatil)
