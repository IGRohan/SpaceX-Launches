const express = require('express');
const app = express()
const path = require('path')
const axios = require('axios').default
const moment = require('moment')
const functions = require('./functions')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/views')))

app.use(async (req, res, next) => {
    try {
        const response = await (await axios.get('https://api.spacexdata.com/v4/rockets')).data
        res.locals.rockets = response;
        const upcoming = await (await axios.get('https://api.spacexdata.com/v4/launches/upcoming')).data
        res.locals.upcoming = upcoming;
        const latest = await (await axios.get('https://api.spacexdata.com/v4/launches/latest')).data
        res.locals.latest = latest;
        return next()
    } catch (error) {
        return next(error)
    }
})
app.get('/', async (req, res) => {
    res.render('index', {
        sitetitle: 'SpaceX Info'
    })
})
app.get('/rockets', async (req, res) => {
    res.render('rockets', {
        sitetitle: 'SpaceX - Rockets',
    })
})
app.get('/latest', async (req, res) => {
    res.render('latest', {
        sitetitle: 'SpaceX - Latest',
        getRocket: functions.getRocket
    })
})
app.get('/upcoming', async (req, res) => {
    res.render('upcoming', {
        sitetitle: 'SpaceX - Upcoming',
        moment: moment,
        imglink: '',
        launchpad: functions.getLaunchpad, 
        getRocket: functions.getRocket
    })
})
app.get('*', (req, res) => {
    res.status(404).send('<h1>Uh go back my guy this page doesnt exist</h1>')
})
 

app.listen(3000, () => {
    console.log(`SpaceX website running at-\nhttp://localhost:3000`)
})