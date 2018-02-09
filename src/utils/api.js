import data from './mock';
export const fetchCourseList = async function(page) {
    return Promise.resolve(data.courseList);
}
export const getDetail = async function(id) {
	return Promise.resolve(data.detail);
}
export const getCenter = async function() {
    return Promise.resolve(data.center);
}