import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
  "[Courses Resolver] Load All courses"
);

export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All courses loaded",
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  "[Edit Course Dialog] Course Updated",
  props<{ update: Update<Course> }>()
);
