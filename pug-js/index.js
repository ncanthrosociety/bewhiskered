/**
 * @module pug-js
 *
 * Pug javascript locals. This file does not get reloaded via gulp-watch. If it
 * changes, be sure to restart gulp.
 */


/**
 * Determine if two datetimes refer to the same day.
 *
 * @param   {Date}    d1 First date object.
 * @param   {Date}    d2 Second date object.
 *
 * @returns {boolean}    True iff the dates refer to thee same day.
 */
const isSameDay = exports.isSameDay = function(d1, d2) {
  return d1.getDay() === d2.getDay()
    && d1.getMonth() === d2.getMonth()
    && d1.getFullYear() === d2.getFullYear()
}
