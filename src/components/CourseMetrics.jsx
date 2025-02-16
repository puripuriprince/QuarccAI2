import React from 'react';

function CourseMetrics({ difficulty, experience, difficultyDist, experienceDist }) {
    // Convert scores to percentages for the progress bars
    const difficultyPercentage = (difficulty / 5) * 100;
    const experiencePercentage = (experience / 5) * 100;

    const getBarColor = (percentage) => {
        if (percentage <= 33) return 'bg-green-500';
        if (percentage <= 66) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const renderDistribution = (distribution) => {
        const total = Object.values(distribution).reduce((a, b) => a + b, 0);
        return (
            <div className="flex h-4 mt-1">
                {Object.entries(distribution).map(([score, count], index) => {
                    const width = (count / total) * 100;
                    return (
                        <div
                            key={score}
                            className={`${getBarColor(score * 20)} h-full`}
                            style={{ width: `${width}%` }}
                            title={`${score}: ${count} responses (${width.toFixed(1)}%)`}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div className="space-y-4">
            {/* Difficulty Metric */}
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Course Difficulty</span>
                    <span className="text-sm font-medium text-gray-700">{difficulty.toFixed(1)}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full ${getBarColor(difficultyPercentage)}`}
                        style={{ width: `${difficultyPercentage}%` }}
                    />
                </div>
                {difficultyDist && (
                    <div className="mt-1">
                        <span className="text-xs text-gray-500">Distribution:</span>
                        {renderDistribution(difficultyDist)}
                    </div>
                )}
            </div>

            {/* Experience Metric */}
            <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Student Experience</span>
                    <span className="text-sm font-medium text-gray-700">{experience.toFixed(1)}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full ${getBarColor(experiencePercentage)}`}
                        style={{ width: `${experiencePercentage}%` }}
                    />
                </div>
                {experienceDist && (
                    <div className="mt-1">
                        <span className="text-xs text-gray-500">Distribution:</span>
                        {renderDistribution(experienceDist)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseMetrics; 