//arrays_and_iterables.test.js
const arrays_and_iterables = require('./arrays_and_iterables');

test('Test To Contain', () => {
 expect(arrays_and_iterables('Jest Qualification Procedure')).toContain('Qualification');
});

test('Test Not To Contain', () => {
 expect(arrays_and_iterables('Jest Qualification Procedure')).not.toContain('notQualification');
});
