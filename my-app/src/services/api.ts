/* eslint-disable */
export const api = {
  trackEvent({
    user,
    event,
    payload,
  }: {
    user: string;
    event: string;
    payload?: {};
  }) {
    return new Promise(resolve => {
      resolve();
    });
  },
  addCourse(course: string) {
    return new Promise(resolve => {
      resolve();
    });
  },
};

/*import courses from "./courses.json";
import { Course } from "@/types/Course";

interface Response {
  courses: Course[];
  total: number;
}

/!* eslint-disable *!/
export const api = {
  getUserCourses({
    id,
    page = 1,
    perPage
  }: {
    id: string;
    page?: any;
    perPage: number;
  }): Promise<Response> {
    const end = perPage * page;
    const start = end - perPage;

    return new Promise(resolve => {
      resolve({
        courses: courses.slice(start, end),
        total: courses.length
      });
    });
  }
};*/
