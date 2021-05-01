const express = require('express')
const app = express();

// Seed Data Apps 1 - 50
const apps = []
for (let i = 1; i < 50; i++) {
    apps.push({
        id: i,
        name: `my-app-${i}`
    })
}

// Parse name
function nameToInt(str) {
    return parseInt(str.slice(7));
}

// GET
app.get('/apps', (req,res) => {
    const by = req.query.by;
    const start = req.query.start;
    const end = req.query.end;
    const max = req.query.max;
    const order = req.query.order;

    let result = apps

    // When range is passed, "by" is required
    if(!by) {
        res.status(400).send(`When Range Param Passed, "By" must be specified`)
    // Range => Sort by ID
    } else if (by === "id") {
        let newResult = result
        if(start) {
            newResult = result.slice(start - 1)
        }
        if(end >= start || end >= 0) {
            end <=50 ? newResult = result.slice(start - 1, end) : newResult = result.slice(start - 1, 50) 
        }
        if(max >= 1) {
            newResult = newResult.slice(0, max)
        }
        if(order && order.toLowerCase() === 'desc'){
            res.status(200).send(newResult.sort((a,b) => (a.id > b.id) ? -1 : 1))
        } else {
            res.status(200).send(newResult.sort((a,b) => (a.id > b.id) ? 1 : -1))
        }
    // Range => Sort by Name
    } else if(by === "name") {
        let newResult = result
        if(start) {
            newResult = result.slice(nameToInt(start) - 1)
        }
        if(end && nameToInt(end) >= nameToInt(start) || end && nameToInt(end) >= 0) {
            nameToInt(end) <=50 ? newResult = result.slice(nameToInt(start) - 1, nameToInt(end)) : newResult = result.slice(nameToInt(start) - 1, 50) 
        }
        if(max >= 1) {
            newResult = newResult.slice(0, max)
        }
        if(order && order.toLowerCase() === 'desc'){
            res.status(200).send(newResult.sort((a,b) => (parseInt(a.name.slice(7)) > parseInt(b.name.slice(7))) ? -1 : 1))
        } else {
            res.status(200).send(newResult.sort((a,b) => (parseInt(a.name.slice(7)) > parseInt(b.name.slice(7))) ? 1 : -1))
        }
    } 
    // Base Case Default Return
    res.json(result)
})

// Load Server
app.listen(3000)