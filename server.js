const express = require('express')
const app = express();


app.use(express.json())
const apps = []

for (let i = 1; i < 50; i++) {
    apps.push({
        id: i,
        name: `my-app-${i}`
    })
}

function compare(a,b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if(nameA > nameB) {
        comparison = 1
    } else if (nameA < nameB) {
        comparison = -1
    }
    return comparison * -1
}

app.get('/apps', (req,res) => {
    let by = req.query.by;
    let start = req.range.start;
    let end = req.range.end;
    let max = req.range.max;
    let order = req.range.order;

    let result = apps


    if(!by) {
        res.status(400).send("beep")
    } else if (by === "id") {
        res.status(200).send(result.sort((a,b) => (a.id > b.id) ? 1 : -1))
    } else if(by === "name") {
         res.status(200).send(result.sort((a,b) => (parseInt(a.name.slice(7)) > parseInt(b.name.slice(7))) ? -1 : 1))
    }

    

    
    res.json(result)
})


// app.get('/apps', (req,res) => {
//     // const start = req.query.start - 1
//     // const end = req.query.end
//     // const max = req.query.max

//     // const startInd = (start - 1) * end
//     // const endInd = start * end

    
    
//     // const result = apps.slice(start, end)


//     let { by, start, end, max, order } = req.query;

//     if(!by) {
//         by = "id"
//     }
//     if(!start) {
//         start = 1
//     }
//     if(!end) {
//         end = 25
//     }
//     if(!max) {
//         max = 30
//     }
//     if(!order) {
//         order = "asc"
//     }

//     const limit = parseInt(max)
//     const startIndex = parseInt((start-1)*end)
//     const endIndex = parseInt(start * end)

//     const result = apps.slice(startIndex, endIndex)

//     res.json(result)
// })


app.listen(3000)