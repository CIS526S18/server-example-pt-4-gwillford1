const studentIndex = require('../view/students/index');
const studentModel = require('../model/students.js');

/** @function list
 *  Lists the students
 * 
 */
function list(req, res) {
  var students = studentModel.getStudents();

  var html = studentIndex(students);
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
}

/** @function create
 *  Creates a new student
 * 
 */
function create(req, res) {
    //TODO:
    //1) parse the form Content
    //2) create new student from form Content
    //3) render the index with the new student
}

module.exports = {
    list: list,
    create: create
}