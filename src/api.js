const State = require('./models/State')
const autoCatch = require('./lib/auto-catch')

module.exports = autoCatch({
    saveState,
    loadState
})

async function saveState(req, res) {
    await State.load()
    await  State.save(req.body)
    res.json({ success: true })
}

async function loadState(req, res) {
    const state = await State.load()
    const results = {
        lists: [],
        draggedItem: undefined
    }
    if (state.length !== 0) {
        let item = {}
        state.forEach(element => {
            item = element
        });
        // console.log(item)
        Object.keys(results).forEach(function (key) {
            results[key] = item[key]
        })
    }
    console.log(results)
    console.log(state)
    
    
    res.json(results)
}
