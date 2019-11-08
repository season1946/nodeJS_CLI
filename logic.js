//use lowDB to save data
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults (required if your JSON file is empty)
db.defaults({ values: []})
  .write()


/**
 * @function  [addContact]
 * @returns {String} Status
 */
const add = (key,value) => {

  db.get('values')
  .push({ key: key, value: value})
  .write()
  console.info('New key/value pair added');
};

/**
 * @function  [get]
 * @returns {String} value
 */
const get = (key) => {
  var result = db.get('values')
  .find({ key: key })
  .value()
  console.info(result);
}

/**
 * @function  [remove]
 * @returns {String} status
 */
const remove = (key) => {
  var status= db.get('values')
  .remove({ key: key })
  .write()
  console.info("removed! " + status);
}

/**
 * @function  [list]
 * @returns values
 */
const list = () => {
  var values = db.get('values')
  .value()
  console.info(values);
}

// Export all methods
module.exports = {   
  add, 
  list, 
  get, 
  remove
};

