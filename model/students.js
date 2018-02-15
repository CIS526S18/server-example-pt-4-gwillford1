/*load dependencies*/
const fs = require('fs');
const escapeHTML = require('../helpers/escapeHTML');
//TODO: Add a removeStudent function

module.exports = {
    getStudents: getStudents,
    addStudent: addStudent    
};

/* Load sync files into a global variable
 * This serves as an in-memory cache for speedy access.
 */
var students = JSON.parse(fs.readFileSync("students.json", {encoding: 'utf-8'}));


/* @function getStudents
 * Provide a list of students
 * @return {Array} array of student objects
 */
function getStudents() {
    //clone and return the student object.
    return JSON.parse(JSON.stringify(students));
}

/* @function addStudent
 * Adds a new student to the list
 * Callback parameters are (error, student)
 * @param {Object} student - the student to add.
 * @param {function} callback - a callback function to call when this operation finishes
 */
function addStudent(student, callback)
{
    //Ecape any html in the student object
    var sanititzedStudent = {
        name: escapeHTML(student.name),
        eid: escapeHTML(student.eid),
        description: escapeHTML(student.description)
    }

    //TODO: Validate the student object

    
    students.push(sanitizedStudent);
    fs.writeFile('students.json',{encoding: 'utf-8'}, JSON.stringify(students));
    callback(false, JSON.parse(JSON.stringify(sanitizedStudent)));
}