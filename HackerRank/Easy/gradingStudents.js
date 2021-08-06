/***
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.
 ***/

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // look at student grade
  const newGrades = grades.map((grade) => {
    // if below 38, then no rounding
    if (grade < 38) {
      return grade;
    }
    // if 38 or above,
    else {
      // check difference between grade and next multiple of 5
      let diff = 5 - (grade % 5);
      // if diff is less than 3, then new grade is next multiple of 5
      // if not, then return same grade
      if (diff < 3) {
        return grade + diff;
      } else {
        return grade;
      }
    }
  });
  return newGrades;
}
