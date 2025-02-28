import React, { useEffect, useState } from "react";
import { fetchCourses } from "../../firebase-config";

import "./SkillsToLearn.css";
const extractPlatformName = (platform) => {
    if (!platform) return "Unknown Platform";

    const match = platform.match(/\[(.*?)\]/);
    return match ? match[1] : platform;
};

const SkillsToLearn = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState({
        platform: "",
        price: "",
        category: "",
    });

    useEffect(() => {
        const getCourses = async () => {
            const data = await fetchCourses();
            setCourses(data);
        };
        getCourses();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    };

    const filteredCourses = courses.filter((course) => {
        return (
            (course.title.toLowerCase().includes(searchTerm) || searchTerm === "") &&
            (filter.platform === "" || extractPlatformName(course.platform) === filter.platform) &&
            (filter.price === "" || course.price === filter.price) &&
            (filter.category === "" || course.category === filter.category)
        );
    });

    return (
        <div className="skills-container">
            <h2>Skills to Learn</h2>
            

            {/* Search and Filters */}
            <div className="filters-container">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <select name="platform" value={filter.platform} onChange={handleFilterChange}>
                    <option value="">All Platforms</option>
                    {Array.from(new Set(courses.map((c) => extractPlatformName(c.platform)))).map(
                        (platform, index) => (
                            platform && <option key={index} value={platform}>{platform}</option>
                        )
                    )}
                </select>
                <select name="price" value={filter.price} onChange={handleFilterChange}>
                    <option value="">All Prices</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                </select>
                <select name="category" value={filter.category} onChange={handleFilterChange}>
                    <option value="">All Categories</option>
                    {Array.from(new Set(courses.map((c) => c.category))).map(
                        (category, index) => (
                            category && <option key={index} value={category}>{category}</option>
                        )
                    )}
                </select>
            </div>

            {/*Display Courses */}
            <div className="courses-list">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <div key={course.id} className="course-card">
                            <h3>{course.title}</h3>
                            <p><b>Platform:</b> {extractPlatformName(course.platform)}</p>
                            <p><b>Price:</b> {course.price}</p>
                            <p><b>Category:</b> {course.category}</p>
                            <a href={course.link} target="_blank" rel="noopener noreferrer">
                                <button>Learn More</button>
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No courses found.</p>
                )}
            </div>
        </div>
    );
};

export default SkillsToLearn;