import JobListing from 'canvaro-job-listing'
import 'canvaro-job-listing/dist/index.css'
import React, { Component } from "react";

const AUTH_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3OGU4NDA1YjY2ZmU4ZjJmYjg1ZDE4MzUzZjU0MDFmYTc4MjZhNWYzOWRlM2VhZjQxMzczMGU0ODk5ZWFhODRhZjM4MTU2NDdjY2Q1MjNlIn0.eyJhdWQiOiIxIiwianRpIjoiNTc4ZTg0MDViNjZmZThmMmZiODVkMTgzNTNmNTQwMWZhNzgyNmE1ZjM5ZGUzZWFmNDEzNzMwZTQ4OTllYWE4NGFmMzgxNTY0N2NjZDUyM2UiLCJpYXQiOjE1ODEwOTUyOTMsIm5iZiI6MTU4MTA5NTI5MywiZXhwIjoxNjEyNzE3NjkzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hoj3d7L_dKrCZ_IZ6oce0z2N40q114eqg5w91qaA6l2nnJZlQY8FGnkRoSKddqQh0KLCPXZkqjgIaDrpoRBy9Pzu1cBE0cDxUck1c7R-zPI7eu8yGwo3jCoTeBw7DuBUS7PQid8wT2dsTflHxcH5u-tcL6EhGiFAHk7fDRGL6We_QznKteM9gGiMy-XL_iqDpKROPWqDNBfB_xM2ZhNHfmrDmg3i-yHtnas7eug_K606iBCl0uY-rajfMiqOl8FKHDK-_DcoDlaaD0vTl-HbBcFmwsStxoBmj2K2Xkpg3gt6kqaaEzsKt6BQCVaa76jirQexGiob-wZXBN0RYdbc0xJN9M7bNHnNXPbYue8yX9czjBmjBUfJkeQV7eP9QmnyMgX5AIVB7ffZGkOUYeZbbd40BhuzRqpKReOMfK1E0gOVyirRBZanihpoGX7WrcGzDRdC2bTuSMLD6D9oiYy2uWKNYoDTRVK9SnSijBgrx3E4yrUzMoZmWf4vMIhB0ksfAsJrZXpPVlT1u8IYwnZiVKlHeZDtVtkMA6Eg7bQMBPQTdEBmEZCuchuJXmC6Kyj0NEdahjsaAb1ga7mMEBQ-yHBALim_uqcg98Dpa71_ipg2gRhd0kV2FXDBMz5780N_h9SUnd3Eaiav82B_hvN4udK0xAzqOMj4TGMQWiH02ts";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "dee.aye.en",
      search: ""
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px"
        }}
      >
        
        <JobListing
          authKey={AUTH_KEY}
        />
        
      </div>
    );
  }
}