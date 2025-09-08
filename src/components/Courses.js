import React, { useState } from 'react';
import coursesData from './coursesData'; // Array of course objects (parsed from your HTML)
import CourseCard from './CourseCard';
import CourseFilter from './CourseFilter';
import './Courses.css'; // Your provided CSS

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

    const filteredCourses = activeFilter === 'all'
        ? coursesData
        : coursesData.filter(course => course.category === activeFilter);

    return (
        <section className="courses" id="courses">
            <div className="container">
                {/* Section Header */}
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">पाठ्यक्रम</h2>
                    <p className="section-subtitle">
                        हमारे संस्कृत एवं अन्य शास्त्रीय विषयों के व्यापक पाठ्यक्रमों को जानिए
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="cources-heading">
                    <CourseFilter
                        tabs={filterTabs}
                        active={activeFilter}
                        onChange={setActiveFilter}
                    />
                </div>

                {/* Courses Grid */}
                <div className="row course-grid" id="courseGrid">
                    {
                        filteredCourses.map(course => (
                            <div
                                key={course.id}
                                className="col-lg-3 col-md-6 mb-4 course-item"
                                data-category={course.category}
                            >
                                <CourseCard {...course} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;
