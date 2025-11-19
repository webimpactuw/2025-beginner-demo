import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal digital garden. Built with React originally, now migrated to Next.js 13+ to utilize Server Components and modern routing.",
      emoji: "🎨"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "A full-stack dashboard for managing products, orders, and customers. Integrated with Stripe for payments.",
      emoji: "🛍️"
    },
    {
      id: 3,
      title: "Task Master",
      description: "A productivity application that helps users organize their daily lives with drag-and-drop kanban boards.",
      emoji: "✅"
    },
    {
      id: 4,
      title: "Weather App",
      description: "Real-time weather forecasting using external APIs. Features geolocation and 5-day forecasts.",
      emoji: "☀️"
    }
  ];

  return (
    <div className="projects-container">
      <h2>Featured Projects</h2>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <span>{project.emoji}</span>
            </div>
            
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="card-links">
                <Link href="#" className="btn btn-primary">
                  View Live
                </Link>
                <Link href="#" className="btn btn-outline">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}