export default function Portfolio() {
  const projects = [
    {
      title: "Mental Health Prediction System",
      subtitle: "Machine Learning Prediction System",
      description:
        "Developed a machine learning-based system to analyze survey data and predict mental health risks with preprocessing, feature engineering, and classification models.",
      tech: [
        "Python",
        "pandas",
        "numpy",
        "scikit-learn",
        "matplotlib",
        "seaborn",
        "joblib",
      ],
      github: "https://github.com/arnubxx",
      liveDemo:
        "https://mentalhealthprediction-main-hnfutgc7h8d3j85krpbmnq.streamlit.app",
    },
    {
      title: "Breast Cancer Classification",
      subtitle: "Research Project",
      description:
        "Lightweight CNN architecture for BI-RADS mammography classification and mobile deployment.",
      tech: ["TensorFlow", "Keras"],
      github: "https://github.com/arnubxx",
    },
    {
      title: "PetCare",
      subtitle: "Full-stack Java Web Application",
      description:
        "Servlet-based booking system with MySQL persistence and backend logic for scalable user interactions.",
      tech: ["Java", "Servlets", "JDBC", "MySQL", "Docker"],
      github: "https://github.com/arnubxx",
      liveDemo: "https://petcare-x8bk.onrender.com",
    },
    {
      title: "InsightEdu",
      subtitle: "Full-stack Course Management System",
      description:
        "Built a full-stack system for course management and assessments with database-driven educational workflows.",
      tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/arnubxx",
      liveDemo: "https://insight-edu.onrender.com",
    },
    {
      title: "Course Finder",
      subtitle: "AI Course Recommender System",
      description:
        "Built an AI-based recommender using NLP and similarity-based ranking for scalable real-time recommendations.",
      tech: ["Java", "Spring Boot", "NLP", "REST API"],
      github: "https://github.com/arnubxx",
      liveDemo: "https://course-finder-y1xj.onrender.com",
    },
    {
      title: "Restaurant Management System",
      subtitle: "Desktop Application",
      description:
        "Java-based desktop system with MySQL integration to automate order processing, billing, and management tasks.",
      tech: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/arnubxx",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Arnub Datta
          </h1>

          <h2 className="text-2xl text-blue-400 mb-6">
            Bachelor of Science in Computer Science and Engineering
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Aspiring AI and Machine Learning Engineer with hands-on
            experience in machine learning, NLP, and data-driven systems.
            Passionate about building intelligent solutions using modern
            ML techniques and transformer-based models.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://github.com/arnubxx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/Arnubrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 px-6 py-3 rounded-xl hover:border-slate-400 transition"
            >
              LeetCode
            </a>
          </div>
        </div>
      </section>

      {/* Objective */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Career Objective</h2>

        <div className="bg-slate-900 rounded-2xl p-8">
          <p className="text-slate-300 leading-8">
            Aspiring AI and Machine Learning Engineer with hands-on
            experience in machine learning, NLP, and data-driven systems.
            Passionate about building intelligent solutions using modern ML
            techniques and transformer-based models. Seeking opportunities
            to apply AI/ML expertise in real-world problems while advancing
            in deep learning and scalable AI systems.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Education</h2>

        <div className="bg-slate-900 rounded-2xl p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">
              Daffodil International University, Dhaka, Bangladesh
            </h3>
            <p className="text-slate-300">
              Bachelor of Science in Computer Science and Engineering
            </p>
            <p className="text-slate-300">Jan 2022 – Dec 2025</p>
            <p className="text-slate-300">CGPA: 3.78/4.00</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-4">Programming Languages</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-4">AI/ML</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Machine Learning</li>
              <li>NLP</li>
              <li>Classification</li>
              <li>Transformer-based Models</li>
              <li>Feature Engineering</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-4">Frameworks & Tools</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Scikit-learn</li>
              <li>Spring Boot</li>
              <li>Laravel</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="font-bold mb-4">Databases & Tools</h3>
            <ul className="space-y-2 text-slate-300">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>GitHub</li>
              <li>Jupyter Notebook</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-blue-400 mb-3">
                {project.subtitle}
              </p>

              <p className="text-slate-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition"
                >
                  GitHub
                </a>

                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-600 px-4 py-2 text-sm font-semibold hover:border-slate-400 transition"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8">
          Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl">
            <p className="text-slate-300">
              Solved 400+ programming problems on various platforms.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <p className="text-slate-300">
              Experience working with real-world datasets and ML pipelines.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <p className="text-slate-300">
              Strong foundation in software engineering and AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="bg-slate-900 rounded-2xl p-8">
          <p className="mb-2"><span className="text-blue-400">Email:</span> arnubdatta17@gmail.com</p>
          <p className="mb-2"><span className="text-blue-400">GitHub:</span> <a href="https://github.com/arnubxx" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/arnubxx</a></p>
          <p className="mb-2"><span className="text-blue-400">LeetCode:</span> <a href="https://leetcode.com/u/Arnubrs/" target="_blank" rel="noopener noreferrer" className="hover:underline">leetcode.com/u/Arnubrs</a></p>
          <p><span className="text-blue-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/arnub-datta-64645626a/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/arnub-datta-64645626a</a></p>
        </div>
      </section>
    </main>
  );
}
