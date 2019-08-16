const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update, 
    remove,
    addStep
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id });
}

function findSteps(id){
    return db ('steps as p')
        .innerJoin('schemes as s', 's.id', 'p.scheme_id')
        .select('p.id', 's.scheme_name', 'p.instructions')
        .where({ scheme_id: id });
}

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).del();
}
function addStep(step, scheme_id) {
    step.scheme_id = scheme_id;
    return db('steps').insert(step);
}

