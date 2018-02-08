import data from './mock';
export const fetchCourseList = async function(page){
    return Promise.resolve(data.courseList);
}