// Portfolio data — single source of truth (ported from src/data.js)
export type FeaturedProject = {
  id: "prism" | "potato" | "inam";
  title: string;
  subtitle: string;
  year: string;
  status: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
  repo?: string;
};

export type Repo = {
  name: string;
  desc: string;
  lang: string;
  langColor: string;
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  summary: string;
};

export type PortfolioData = {
  name: string;
  handle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  education: { school: string; degree: string; years: string };
  about: string[];
  featured: FeaturedProject[];
  repos: Repo[];
  experience: Experience[];
  skills: Record<string, string[]>;
};

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Syed Yousha",
  handle: "Syed-Yousha",
  tagline:
    "Software Engineer focused on Machine Learning and Data Science. I build scalable, AI-driven applications from the model all the way to production.",
  location: "Karachi, Pakistan",
  email: "syed.yousha23@gmail.com",
  phone: "+92 332 3946603",
  github: "https://github.com/Syed-Yousha",
  linkedin: "https://www.linkedin.com/in/yousha-mehdi/",
  education: {
    school: "FAST-NUCES, Karachi",
    degree: "B.S. Computer Science",
    years: "2022 to 2026",
  },
  about: [
    "I'm a final-year CS student at FAST-NUCES, building at the intersection of machine learning and production systems. I spend most of my time training models, then figuring out how to actually ship them.",
    "My focus is end-to-end work: from CNN architectures and LLM fine-tuning to the FastAPI services, Redis queues, and Docker containers that serve them reliably. I care about the parts most people skip, like inference latency, model versioning, and the unglamorous infrastructure that turns a notebook into a product.",
    "Outside of ML, I write full-stack applications in React, Flutter, and PHP, and grind algorithms (50+ solved on LeetCode). I'm looking for new-grad roles where I can own problems end-to-end.",
  ],
  featured: [
    {
      id: "prism",
      title: "PRISM",
      subtitle: "Automated Educational Video Generation",
      year: "2025",
      status: "In Progress",
      role: "Full-Stack + ML",
      summary:
        "A platform that turns plain educational text into fully animated, narration-synchronized instructional videos, automatically.",
      bullets: [
        "Full-stack PHP web app for prompt management and user interactions, with an asynchronous FastAPI + Redis backend that schedules Manim rendering jobs.",
        "Dockerized render workers pull tasks from a Redis queue, preventing long-running renders from blocking the web tier.",
        "Currently leading dataset construction and LLM fine-tuning to improve instructional accuracy and animation consistency.",
      ],
      stack: ["Python", "FastAPI", "Redis", "Docker", "PHP", "Manim", "LLMs"],
      repo: "https://github.com/Syed-Yousha/PRISM",
    },
    {
      id: "potato",
      title: "Leaf Disease Classifier",
      subtitle: "Real-Time CNN Diagnostic for Crop Health",
      year: "2024",
      status: "Shipped",
      role: "ML + Frontend",
      summary:
        "An AI diagnostic tool that identifies potato leaf diseases from a phone photo in real time. A 94% accuracy CNN served behind a low-latency API.",
      bullets: [
        "Trained a convolutional neural network from scratch to classify Early Blight, Late Blight, and Healthy samples, reaching 94% validation accuracy.",
        "Served the model via a FastAPI backend with optimized image preprocessing, and a responsive React frontend that returns predictions with confidence scores.",
        "Tuned the inference pipeline for sub-second latency on modest hardware, making it usable in the field rather than only in a notebook.",
      ],
      stack: ["TensorFlow", "Keras", "FastAPI", "React", "OpenCV"],
      repo: "https://github.com/Syed-Yousha/Potato-Leaf-Classifier",
    },
    {
      id: "inam",
      title: "Inam Motors",
      subtitle: "Desktop Inventory Software for an Auto Showroom",
      year: "2023",
      status: "Shipped",
      role: "Desktop Engineer",
      summary:
        "A commercial desktop application for a local auto showroom to digitally manage and display real-time car inventory.",
      bullets: [
        "Architected the desktop application from scratch in Flutter, targeting Windows for daily in-showroom use.",
        "Built responsive UI components for operational tracking, including inventory entry, search, and a customer-facing display.",
        "Transitioned static prototypes into a backend-integrated production app that the showroom uses daily.",
      ],
      stack: ["Flutter", "Dart", "Windows Desktop"],
      repo: "https://github.com/Syed-Yousha/Inam-Motors",
    },
  ],
  repos: [
    { name: "PRISM", desc: "Automated educational video generation", lang: "Python", langColor: "#3572A5" },
    { name: "Portfolio-website", desc: "HTML, CSS, JS portfolio page", lang: "HTML", langColor: "#e34c26" },
    { name: "scouts", desc: "React website of Al-Mustafa Scouts", lang: "CSS", langColor: "#563d7c" },
    { name: "Crud_App", desc: "CRUD application with Django and Python", lang: "Python", langColor: "#3572A5" },
    { name: "PF_C_Tasks", desc: "FAST University programming fundamentals in C", lang: "C", langColor: "#555555" },
    { name: "CPP_Lab-1_To_Lab-5", desc: "FAST OOP C++ lab tasks", lang: "C++", langColor: "#f34b7d" },
    { name: "Python", desc: "Basic Python code and experiments", lang: "Python", langColor: "#3572A5" },
    { name: "Potato-Leaf-Classifier", desc: "CNN for crop disease detection", lang: "Python", langColor: "#3572A5" },
    { name: "Inam-Motors", desc: "Flutter desktop inventory app for auto showroom", lang: "Dart", langColor: "#00B4AB" },
  ],
  experience: [
    {
      role: "Front-End Development Intern",
      company: "Digitz Software Agency",
      dates: "Jun 2023 to Aug 2023",
      summary:
        "Translated UX wireframes into production React components. Optimized render performance and cross-browser compatibility for client-facing apps.",
    },
  ],
  skills: {
    Languages: ["Python", "C++", "TypeScript", "JavaScript", "Dart", "PHP", "C"],
    "ML / AI": ["TensorFlow", "Keras", "OpenCV", "MediaPipe", "LLMs", "Fine-tuning"],
    Backend: ["FastAPI", "Docker", "Redis", "PHP", "REST APIs"],
    Frontend: ["React", "Flutter", "HTML / CSS", "Responsive UI"],
    Tools: ["Git", "Manim", "LeetCode (50+)", "DSA"],
  },
};
