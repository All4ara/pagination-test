const express = require('express')
const app = express()

const apps = []

for (let i = 1; i < 50; i++) {
    apps.push({
        id: i,
        name: `my-app-${i}`
    })
}


app.get('/apps', (req,res) => {
    // const start = req.query.start - 1
    // const end = req.query.end
    // const max = req.query.max

    // const startInd = (start - 1) * end
    // const endInd = start * end

    
    
    // const result = apps.slice(start, end)


    let { by, start, end, max, order } = req.query;

    if(!by) {
        by = "id"
    }
    if(!start) {
        start = 2
    }
    if(!end) {
        end = 25
    }
    if(!max) {
        max = 30
    }
    if(!order) {
        order = "asc"
    }

    const limit = parseInt(max)
    const startIndex = parseInt((start-1)*end)
    const endIndex = parseInt(start * end)

    const result = apps.slice(startIndex, endIndex)

    res.json(result)
})


app.listen(3000)