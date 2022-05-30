import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: (course) => course.id, // not needed if the object has an id prop already
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) => {
    // is not addAll
    return adapter.setAll(action.courses, { ...state, allCoursesLoaded: true });
  }),
  on(CourseActions.courseUpdated, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll } = adapter.getSelectors();
