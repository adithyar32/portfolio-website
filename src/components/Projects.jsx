import React from 'react';
import ProjectCard from './ProjectCard'; // Import the card component
import styles from './Projects.module.css';

// --- Project Data ---
const projectsData = [
  {
    id: 1,
    title: 'Student CRUD Application',
    description: 'A simple CRUD application using Spring Boot, with two separate databases: one for login and one for student records.',
    imageUrl: '/smsimage.png', // Path relative to public folder
    link: 'https://github.com/adithyar32/student-crud', // Replace with actual GitHub link
  },
  {
    id: 2,
    title: 'Flight Booking System',
    description: 'A flight booking system that allows users to search for flights, book tickets, and manage bookings.',
    imageUrl: 'fbs.png', // Path relative to public folder
    link: 'https://github.com/adithyar32/flight-booking-system', // Replace with actual GitHub link
  },
  // Add more projects as needed
];
// --- End Project Data ---

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id} // Key prop is essential for lists in React
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl} // Pass the image URL
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
