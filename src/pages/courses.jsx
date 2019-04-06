import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from '../components/course'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


const SPACE_ID = 'hcjcdzrm6kpi'
const ACCESS_TOKEN = 'dfbebf61ad77a8790d7c747839002fa352103e1df979526611e1a3c0251c347c'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CoursesList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }

    render() {
        console.log(this.props)
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Courses</title>
                </Helmet>
                { this.state.courses ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.filter((c)=>!c.active).map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={currentCourse}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </Layout>
        )
    }
}
export default CoursesList;