import CourseMetrics from './CourseMetrics';

// Inside your course display component:
<CourseMetrics 
    difficulty={course.avgDifficulty}
    experience={course.avgExperience}
    difficultyDist={course.difficultyDistribution}
    experienceDist={course.experienceDistribution}
/> 