const db = require('../db')

module.exports = {
    save,
    load
}


const State = db.model('State', {
    lists: [],
    draggedItem: {}
});

async function save(fields) {
    const state = await new State(fields).save()
    return state
}

async function load() {
    const state = await State.find()
    await clear(state.id)
    return state
}

async function clear(id) {
    await State.deleteOne(id)
}
