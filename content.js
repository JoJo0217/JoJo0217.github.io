// Edit this file to update the webpage.
// Keep the quotes and commas, then refresh the browser.
window.siteContent = {
  basics: {
    name: "Mingyu Jo",
    initials: "MJ",
    headline:
      "M.S. student in the School of Computing at KAIST.",
    location: "Daejeon, South Korea",
    summary:
      "I am interested in Artificial General Intelligence (AGI), especially reasoning methods that help learning systems generalize, plan, and solve complex problems.",
    photo: "assets/files/profile.jpg",
    links: [
      { label: "Email", url: "mailto:mingu0217@gmail.com" },
      { label: "GitHub", url: "https://github.com/JoJo0217" },
      {
        label: "Scholar",
        url: "https://scholar.google.com/citations?user=TgVXif0AAAAJ&hl=en",
      },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/pyross" },
      { label: "CV", url: "assets/files/Mingyu_Jo_CV.pdf" },
    ],
    focus: [
      "Generative reasoning",
      "Discrete diffusion",
      "Self-supervised learning",
      "Safe language models",
      "Tabular ML",
    ],
    stats: [
      { value: "ICLR 2026", label: "publication" },
      { value: "4.40/4.5", label: "total GPA" },
      { value: "TOEIC 850", label: "English" },
    ],
    footer: "Last update: May.2026",
    visual: "assets/files/research-map.png",
  },

  bio: [
    [
      "I am a master's student in the School of Computing at KAIST, advised by ",
      {
        label: "Prof. Sungjin Ahn",
        url: "https://mlml.kaist.ac.kr/sungjinahn",
      },
      " in the ",
      {
        label: "Machine Learning and Mind Lab",
        url: "https://mlml.kaist.ac.kr/",
      },
      ".",
    ],
    "My research interests lie in Artificial General Intelligence (AGI), with a particular focus on reasoning, generative models, and learning systems that can generalize beyond narrow tasks.",
    "Before KAIST, I studied Computer Science and Engineering at Sungkyunkwan University, where I worked on self-supervised learning and reinforcement learning for language modeling.",
  ],

  academicService: [
    "Reviewer (Conferences): NeurIPS (2026)",
  ],

  news: [
    {
      date: "May 20, 2026",
      textBefore: "Our paper ",
      link: {
        label: "Generative Recursive Reasoning",
        url: "https://arxiv.org/abs/2605.19376",
      },
      textAfter: " is released on arXiv!",
    },
    {
      date: "Mar 1, 2026",
      text: "Started my M.S. at KAIST after graduating from Sungkyunkwan University.",
    },
    {
      date: "Jan 26, 2026",
      textBefore: "Our paper ",
      link: {
        label:
          "Loopholing Discrete Diffusion: Deterministic Bypass of the Sampling Wall",
        url: "https://arxiv.org/abs/2510.19304",
      },
      textAfter: " is accepted to ICLR 2026!",
    },
  ],

  research: [
    "At KAIST's Machine Learning and Mind Lab, I work with Prof. Sungjin Ahn on machine learning research around reasoning and generative models.",
    "Previously, I developed tabular industrial-data prediction models with missing values and explored attention-based tabulator models using self-supervised learning.",
    "I also worked on safe daily-conversation chatbot construction with reinforcement learning methods including RLHF and DPO.",
  ],

  cvBasics: [
    { label: "Name", value: "Mingyu Jo" },
    { label: "Label", value: "M.S. Student" },
    {
      label: "Email",
      value: "mingu0217@gmail.com",
      url: "mailto:mingu0217@gmail.com",
    },
    { label: "Url", value: "https://jojo0217.github.io", url: "https://jojo0217.github.io" },
    {
      label: "Summary",
      value:
        "M.S. student at KAIST School of Computing. Research interests in Artificial General Intelligence (AGI), reasoning, and generative models.",
    },
  ],

  publications: [
    {
      title: "Generative Recursive Reasoning",
      authors:
        "Junyeob Baek*, Mingyu Jo*, Minsu Kim, Mengye Ren, Yoshua Bengio, Sungjin Ahn",
      venue: "Preprint",
      year: "2026",
      selected: true,
      links: [
        { label: "paper", url: "https://arxiv.org/abs/2605.19376" },
        { label: "page", url: "https://ahn-ml.github.io/gram-website/" },
      ],
    },
    {
      title:
        "Loopholing Discrete Diffusion: Deterministic Bypass of the Sampling Wall",
      authors:
        "Mingyu Jo, Jaesik Yoon, Justin Deschenaux, Caglar Gulcehre, Sungjin Ahn",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      year: "2026",
      selected: true,
      links: [
        { label: "paper", url: "https://arxiv.org/abs/2510.19304" },
        { label: "page", url: "https://sites.google.com/view/lddms/home" },
        { label: "code", url: "https://github.com/ahn-ml/lddm" },
      ],
    },
  ],

  experience: [
    {
      title: "Research Intern",
      place: "Machine Learning and Mind Lab, KAIST",
      meta: "Prof. Sungjin Ahn",
      period: "Dec. 2024 - Present",
      points: [],
    },
    {
      title: "Research Intern",
      place: "Efficient Learning Lab, Sungkyunkwan University",
      meta: "Prof. Hankook Lee",
      period: "May 2024 - Dec. 2024",
      points: [
        "Developed predictive models based on tabular industrial data with missing values.",
        "Built an attention-based tabulator model using self-supervised learning.",
      ],
    },
    {
      title: "Industry-academic Cooperation Project",
      place: "Sungkyunkwan University",
      meta: "Prof. Heesun Park",
      period: "Apr. 2023 - Dec. 2023",
      points: [
        "Participated in constructing a safe daily-conversation chatbot.",
        "Constructed language models with reinforcement learning methods including RLHF and DPO.",
      ],
    },
  ],

  education: [
    {
      title: "M.S. in School of Computing",
      place: "Korea Advanced Institute of Science and Technology",
      meta: "",
      period: "Mar. 2026 - Present",
      points: [],
    },
    {
      title: "B.S. in Computer Science and Engineering",
      place: "Sungkyunkwan University",
      meta: "Total GPA: 4.40/4.5, Major GPA: 4.47/4.5, Summa Cum Laude",
      period: "Mar. 2022 - Feb. 2026",
      points: [],
    },
  ],

  activities: [
    {
      title: "Samsung Electronics DX Summer Algorithm Lecture",
      period: "Jul. 2024 - Aug. 2024",
      detail: "Samsung Electronics SW Test - Type B",
    },
    {
      title: "2024 Freshman Python Pre-training TA",
      period: "Feb. 2024",
    },
    {
      title: "Samsung Electronics DX Winter Algorithm Lecture",
      period: "Jan. 2023 - Feb. 2023",
      detail: "Samsung Electronics SW Test - Type B",
    },
  ],

  military: [
    {
      title: "3rd Infantry Division Artillery Regiment",
      period: "Feb. 2020 - Sep. 2021",
      detail: "Artillery signalman",
    },
  ],

  languages: [
    { label: "Korean", value: "Native" },
    { label: "English", value: "Intermediate, TOEIC 850" },
  ],

  interests: [
    "Artificial General Intelligence (AGI)",
    "Reasoning",
    "Generative Models",
    "Discrete Diffusion",
  ],

  skills: [
    {
      name: "Programming",
      items: ["C", "C++", "Python"],
    },
    {
      name: "AI",
      items: ["PyTorch", "Hugging Face Transformers"],
    },
    {
      name: "Tools",
      items: ["Git"],
    },
    {
      name: "Languages",
      items: ["Korean (native)", "English (intermediate, TOEIC 850)"],
    },
    {
      name: "Certificates",
      items: [
        "Samsung Electronics SW Test - Type B (Aug. 2024)",
        "Samsung Electronics SW Test - Type B (Feb. 2023)",
      ],
    },
  ],

  honors: [
    "2025 1st Semester Dean's List, Sungkyunkwan University",
    "2024 2nd Semester Dean's List, Sungkyunkwan University",
    "2024 Next Generation Scholars Fellowship, Sungkyunkwan University",
    "2024 1st Semester Dean's List, Sungkyunkwan University",
    "2023 Award for Open-Source SW Development Activities, Sungkyunkwan University",
    "2023 2nd Semester Dean's List, Sungkyunkwan University",
    "2023 1st Semester Dean's List, Sungkyunkwan University",
  ],
};
