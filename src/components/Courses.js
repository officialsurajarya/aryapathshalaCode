import React, { useState } from 'react';
import coursesData from './coursesData';
import CourseCard from './CourseCard';
import CourseFilter from './CourseFilter';
import './Courses.css';

const filterTabs = [
    { label: 'सभी', filter: 'all', icon: 'fa-list' },
    { label: 'वेद', filter: 'ved', icon: 'fa-book-reader' },
    { label: 'वेदांग', filter: 'vedang', icon: 'fa-scroll' },
    { label: 'उपनिषद्', filter: 'upanishad', icon: 'fa-om' },
    { label: 'दर्शनशास्त्र', filter: 'darshan', icon: 'fa-brain' },
    { label: 'अन्य आर्षग्रन्थ', filter: 'aarshgrantha', icon: 'fa-brain' },
    { label: 'राष्ट्रीय पात्रता परीक्षा (संस्कृत 25)', filter: 'netexam25', icon: 'fa-graduation-cap' },
    { label: 'राष्ट्रीय पात्रता परीक्षा (संस्कृत 73)', filter: 'netexam73', icon: 'fa-graduation-cap' }
];

const Courses = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const featuredCategories = ['ved', 'vedang', 'upanishad', 'darshan'];

    // If "all" is active, show one book from each of the first 4 categories
    const featuredCourses = activeFilter === 'all'
        ? featuredCategories.map(cat => coursesData.find(course => course.category === cat))
            .filter(course => course !== undefined)
        : [];

    // If any other filter is selected, show all courses from that category
    const filteredCourses = activeFilter === 'all'
        ? []
        : coursesData.filter(course => course.category === activeFilter);

    return (
        <section className="courses" id="courses">
            <div className="container">
                {/* Section Header */}
                <div className="section-header text-center mb-4">
                    <h2 className="section-title">पाठ्यक्रम</h2>
                    <p className="section-subtitle">
                        हमारे संस्कृत एवं अन्य शास्त्रीय विषयों के व्यापक पाठ्यक्रमों को जानिए
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="cources-heading mb-4">
                    <CourseFilter
                        tabs={filterTabs}
                        active={activeFilter}
                        onChange={setActiveFilter}
                    />
                </div>

                {/* Featured Courses for "All" */}
                {activeFilter === 'all' && (
                    <div className="row course-grid">
                        {featuredCourses.map(course => (
                            <div
                                key={course.id}
                                className="col-lg-3 col-md-6 mb-4 course-item"
                                data-category={course.category}
                            >
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Filtered Courses for other selections */}
                {activeFilter !== 'all' && (
                    <div className="row course-grid">
                        {filteredCourses.map(course => (
                            <div
                                key={course.id}
                                className="col-lg-3 col-md-6 mb-4 course-item"
                                data-category={course.category}
                            >
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Courses;
