export const personalInfo = {
  name: "Aditya Dargan",
  title: "Senior AI/ML Engineer | Software Engineer | Generative AI & ML Enthusiast",
  intro:
    "Dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about building intelligent systems that solve real-world problems across AI and software engineering.",
  about:
    "I have hands-on experience in Machine Learning, Deep Learning, Generative AI, ML and Backend Development. My work spans building fraud detection systems, GenAI-powered knowledge graph applications, and deploying production-ready ML systems. I also have industry experience as a Trainee Software Engineer.",
  email: "adityadargan761@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/aditya-dargan-38860657/",
  // instagram: "https://www.instagram.com/_suraj.rao_",
  // twitter: "https://x.com/SurajGRao020",
  resume:
    "https://drive.google.com/file/d/1Yi6OBdeUx3uzNTHbabpE9nn5dycKtUGz/view?usp=sharing",
};

export const stats = [
  { label: "Major Projects", value: 5, suffix: "+", icon: "🚀" },
  { label: "Internships / Roles", value: 4, suffix: "+", icon: "💼" },
  // { label: "CGPA", value: 9.46, suffix: "/10", icon: "🎓", decimals: 2 },
  // { label: "NITK Hackathon Winner", value: 1, suffix: "st", icon: "🏆" },
];

export const skills = {
  "Generative AI Systems": {
    icon: "💻",
    color: "#4483BE",
    items: ["LLMs", "RAG", "Prompt Engineering", "AI Agents (LangGraph, CrewAI)"],
  },
  "Production AI Engineering": {
    icon: "🧩",
    color: "#7C3AED",
    items: [
      "LLM evaluation", "observability", "guardrails", "latency & cost optimization"
    ],
  },
  "Data & Infrastructure": {
    icon: "🗄️",
    color: "#06B6D4",
    items: ["Kafka", "Spark", "BigQuery", "Snowflake", "Vector DBs (Pinecone, Weaviate)"],
  },
  "Backend Systems": {
    icon: "🛠️",
    color: "#10B981",
    items: ["Python (FastAPI)", "Go", "Microservices", "Node.js", "Event-driven systems"],
  },
  "Cloud & MLOps": {
    icon: "🧠",
    color: "#F59E0B",
    items: [
      "AWS", "GCP (Vertex AI)", "Kubernetes", "Terraform", "CI/CD"
    ],
  },
  "Programming Languages": {
    icon: "📚",
    color: "#EC4899",
    items: ["Python", "Java", "C++", "JavaScript", "C", "TypeScript"],
  },
};

export const experience = [
  {
    role: "Senior AI Systems Engineer (Product / Platform)",
    company: "Ford Motor Company",
    period: " 2022 – Present",
    type: "Industry",
    color: "#4483BE",
    icon: "💼",
    logo: "/logos/ford.png",
    points: [
      "Led development of an LLM-powered diagnostic assistant, reducing service advisor handling time by 30% and automating 20% of service triage workflows",
      "Built multi-agent AI workflows using LangChain to evaluate technician performance, enabling automated scoring and operational insights",
      "Designed real-time AI data pipelines using Kafka + BigQuery, powering predictive fleet analytics across 100+ enterprise clients",
    ],
  },
  {
    role: "Senior MLOps Engineer",
    company: "Ford Motor Company",
    period: "2022 – 2024",
    type: "Engineering",
    color: "#7C3AED",
    icon: "🔬",
    logo: "/logos/ford.png",
    points: [
      "Deployed scalable ML infrastructure on GCP, reducing inference latency by 40%",
      "Built real-time computer vision services ensuring 100% compliance in privacy-sensitive video processing",
      "Developed Airflow pipelines for multimodal data (LiDAR + vision), accelerating model training cycles",
    ],
  },
  {
    role: "Senior Staff Machine Learning Engineer",
    company: "Palo Alto Networks",
    period: "2021 – 2022",
    type: "Engineering",
    color: "#06B6D4",
    icon: "🎓",
    logo: "/logos/palo.png",
    points: [
      "Improved asset discovery accuracy and reduced false positives through feature engineering and ML optimization",
      "Built scalable microservices for real-time cyber threat detection across global infrastructure",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amazon",
    period: "2019 – 2021",
    type: "Engineering",
    color: "#44830E",
    icon: "🎓",
    logo: "/logos/amazon.png",
    points: [
      "Designed petabyte-scale data pipelines supporting royalty systems and analytics",
      "Built distributed microservices handling high-volume financial and engagement data",
    ],
  },
];

export const projects = [
  {
    title: "DES Decryption Using BiLSTM",
    description:
      "Applied Bidirectional LSTM networks to recover plaintext from DES encrypted ciphertext by learning encryption patterns without access to keys. Research-grade implementation produced during NITK internship.",
    tech: ["Python", "DES", "Deep Learning", "BiLSTM"],
    image: "/photos/project2.png",
    color: "#7C3AED",
    gradient: "from-purple-600/20 to-pink-600/10",
    icon: "🔐",
    category: "Deep Learning + Cryptography",
    featured: true,
  },
  {
    title: "Student Performance Prediction",
    description:
      "Developed an end-to-end ML pipeline to predict student academic performance with Flask deployment and Dockerized production setup. Full MLOps lifecycle with MLflow tracking.",
    tech: ["Python", "Flask", "Docker", "Scikit-learn", "MLflow"],
    image: "/photos/project3.png",
    color: "#06B6D4",
    gradient: "from-cyan-600/20 to-blue-600/10",
    icon: "📊",
    category: "MLOps + ML",
    featured: false,
  },
  {
    title: "RL Based Threat Detection System",
    description:
      "Developed an RL-powered Threat Detection System leveraging Deep Q-Networks with NASIM for real-time attack mitigation in 6G networks. Integrated Knowledge Graph with Neo4j and built a GenAI-powered Cypher query generation system using Groq/Gemini.",
    tech: ["Python", "RL", "DQN", "NASIM", "Neo4j", "Streamlit", "Groq", "Gemini"],
    image: "/photos/project1.png",
    color: "#4483BE",
    gradient: "from-blue-600/20 to-purple-600/10",
    icon: "🛡️",
    category: "AI/ML",
    featured: true,
  },
];

export const achievements = [
  {
    title: "NITK Surathkal Hackathon Winner",
    event: "Software & Systems Security Bootcamp",
    date: "Feb 2025",
    badge: "🏆 1st Place",
    description: "Secured 1st place at NITK Surathkal in a competitive Software & Systems Security Bootcamp by building an AI-driven cyber threat detection system using Reinforcement Learning and Knowledge Graphs.",
    icon: "🥇",
    color: "#F59E0B",
    image: "/photos/nitk-hackathon.jpg",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "Rags to Riches Competition Winner",
    event: "Entrepreneurship Competition (Onyx E-Cell)",
    date: "Jan 2024",
    badge: "🏆 1st Place",
    description: "Won 1st place in a business simulation competition by maximizing returns from ₹100 seed capital through strategic decision-making and execution.",
    icon: "💰",
    color: "#10B981",
    image: "/photos/rags-to-riches.jpg",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    title: "District-Level Chess Player",
    event: "Competitive Chess",
    date: "Aug 2019",
    badge: "♟ Chess",
    description: "Achieved district-level recognition in chess, demonstrating strong strategic thinking, analytical ability, and decision-making skills.",
    icon: "♟️",
    color: "#4483BE",
    image: "/photos/chess.jpeg",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
];

export const leadership = [
  {
    org: "ALPHA Innovation & Tinkerers' Lab",
    icon: "🔭",
    color: "#7C3AED",
    logo: "/logos/alpha.jpg",
    roles: [
      {
        title: "Head, Department of Project Development & Research",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Contributed to the initial setup and development phase, establishing the foundation by supporting planning, coordination, and early-stage activities to build an environment focused on innovation and hands-on learning.",
      },
      {
        title: "Student Council Member",
        period: "Jun 2024 – Nov 2024",
        current: false,
        description:
          "Served as a Student Council Member during the early formation phase of the ALPHA Innovation and Tinkerers' Lab.",
      },
    ],
  },
  {
    org: "Anveshan NIE",
    icon: "🔍",
    color: "#06B6D4",
    logo: "/logos/anveshan.jpg",
    roles: [
      {
        title: "Core Member",
        period: "Nov 2024 – May 2025",
        current: true,
        description:
          "Organized technical events and workshops focused on Machine Learning, while mentoring peers and juniors in ML concepts and projects. Supported community engagement and knowledge-sharing initiatives.",
      },
      {
        title: "Volunteer",
        period: "May 2024 – Oct 2024",
        current: false,
        description:
          "Volunteered in organizing club activities and supporting technical events for the ML community at NIE.",
      },
    ],
  },
  {
    org: "Vidyavardhaka First Grade College, Mysuru",
    icon: "🎤",
    color: "#10B981",
    logo: "/logos/vvfgc.jpg",
    roles: [
      {
        title: "Resource Person – AI & Applications",
        period: "Apr 2024",
        current: false,
        description:
          "Addressed final-year BCA students on AI and its practical applications, covering NLP and ML topics. Guided by M J Yogesh sir during this session.",
      },
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science (Machine Learning)",
    institution: "Georgia Institute of Technology",
    period: "01/2018 – 05/2021",
    score: "CGPA: 9.46/10",
    icon: "🎓",
    color: "#4483BE",
    logo: "/logos/GIT.jpg",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Carnegie Mellon University",
    period: "08/2012 – 12/2016",
    score: "94%",
    icon: "📖",
    color: "#7C3AED",
    logo: "/logos/CMU.jpg",
  }
];

export const certifications = [
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    image: "/photos/complete-data-science.jpg",
    credential: "https://ude.my/UC-5a625427-9e55-4bd8-a4fa-88049b8e9667",
    color: "#4483BE",
  },
  {
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    image: "/photos/anthropic.jpg",
    credential: "https://verify.skilljar.com/c/p8owhpzjmjng",
    color: "#D97757",
  },
  {
    title: "Complete Generative AI Course with Langchain and Huggingface",
    issuer: "Udemy",
    image: "/photos/generative-ai.jpg",
    credential: "https://ude.my/UC-ac4941ba-2340-412b-800c-b261f47ce2ce",
    color: "#06B6D4",
  },
];

export const techIcons = [
  { label: "Python", emoji: "🐍", color: "#3B82F6" },
  { label: "TensorFlow", emoji: "🧠", color: "#FF6F00" },
  { label: "PyTorch", emoji: "🔥", color: "#EE4C2C" },
  { label: "Docker", emoji: "🐳", color: "#2496ED" },
  { label: "Neo4j", emoji: "🕸️", color: "#008CC1" },
  { label: "ML", emoji: "⚡", color: "#F59E0B" },
  { label: "AI", emoji: "🤖", color: "#7C3AED" },
  { label: "LangChain", emoji: "🔗", color: "#10B981" },
];
