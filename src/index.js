import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MediumLogo from "./medium.png";
import Modal, { closeStyle } from "simple-react-modal";
import FadeIn from "react-fade-in";
import SimpleCard from "./SimpleCard"
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


// const [feature, setFeature] = useState(initialValues)
// export class JobListing extends Component {
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function JobListing(props) {

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState(undefined)
  const [jobId, setJobId] = useState()
  const [email, setEmail] = useState()
  const [image, setImage] = useState(undefined)
  const [items, setItems] = useState(undefined)
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const [jobsList, setJobsList] = useState()
  const classes = useStyles();

  const open = () => {
    setShow(true);
    setLoading(false);
  }

  const applyForJob = () => {
    console.log("apply for job");
    axios.post(`http://screening.test/api/job/apply`, { email: email, jobId: jobId },
      { headers: { 'Authorization': "Bearer " + props.authKey } })
      .then(res => {
        console.log(res);
      })
  }

  useEffect(() => {
    console.log("fffff", props);
    axios.get(`http://screening.test/api/job-listing`,
      { headers: { 'Authorization': "Bearer " + props.authKey } })
      .then(res => {
        const persons = res.data;
        setJobsList(res.data);
        console.log(persons);
      })
  }, [])


  return (
    <div>
      <span onClick={() => {
        console.log("open modal");
        open();
      }}
      >adasd</span>
      {jobsList && jobsList.map((job) => {
        return <SimpleCard key={"job" + job.id} job={job} onClick={(job) => {
          console.log("open modal", job);
          setTitle(job.title);
          setJobId(job.id);
          open();
        }} />
      })}



      <Modal
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        containerStyle={{
          border: "2px solid black",
          padding: "15px",
          width: "70vw",
          cursor: "auto",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
        closeOnOuterClick={true}
        show={show}
        onClose={() => setShow(false)}
      >
        <a
          style={{ ...closeStyle, color: "white", backgroundColor: "black" }}
          onClick={() => setShow(false)}
        >
          X
          </a>
        {!loading ? (
          <div

          >

            <div

            >
              Form
            </div>
            <FadeIn>
              {title}
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField id="standard-basic" label="Email" onChange={(event) => { setEmail(event.target.value) }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      rowsMax={10}
                      rowsMin={10}
                      colsMax={10}
                      aria-label="maximum height"
                      placeholder="Tell us something about your self"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input type="file" id="standard-basic" label="Email" />
                  </Grid>
                  <Button variant="contained" color="primary" onClick={() => { applyForJob() }}>Apply</Button>
                </Grid>
              </form>
            </FadeIn>
          </div>
        ) : (
            <div>
              <FadeIn>
                <h3
                  style={{
                    margin: 0,
                    padding: 0,
                    textAlign: "center",
                    color: "lightgray",
                    margin: "100px"
                  }}
                >
                  Loading...
                </h3>
              </FadeIn>
            </div>
          )}
      </Modal>
    </div>
  );

}