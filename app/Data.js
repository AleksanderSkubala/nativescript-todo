const appData = require("application-settings");
var observable = require("data/observable");

function newData(data) {
    const oldData = appData.getNumber('todos', {});
    const newData = {};

    newData = oldData.push(data);
    appData.setNumber('todos', newData);
}

function getData() {
    const data = appData.getNumber('todos', 'nie ma');
    return data;
}