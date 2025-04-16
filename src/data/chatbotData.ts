
// Mock data for the chatbot to use when responding to queries

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  registration_link: string;
}

export interface MentorshipProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  mentor: string;
  mentor_profile: string;
  areas: string[];
  application_link: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// Mock job listings data
export const jobListings: JobListing[] = [
  {
    id: "job-1",
    title: "Senior Product Manager",
    company: "TechCare Solutions",
    location: "Remote",
    type: "Full-time",
    description: "Lead product strategy and execution for our healthcare technology platform.",
    requirements: [
      "5+ years of product management experience",
      "Experience in healthcare technology",
      "Strong leadership and communication skills",
      "Bachelor's degree in related field"
    ],
    posted: "2024-04-01"
  },
  {
    id: "job-2",
    title: "Data Scientist",
    company: "Analytics Innovations",
    location: "Hybrid (Bangalore)",
    type: "Full-time",
    description: "Develop machine learning models to drive business insights and create predictive analytics solutions.",
    requirements: [
      "3+ years of experience in data science",
      "Proficiency in Python, R, and SQL",
      "Experience with big data technologies",
      "Master's degree in Computer Science, Statistics, or related field"
    ],
    posted: "2024-04-05"
  },
  {
    id: "job-3",
    title: "UX Designer",
    company: "Digital Experiences Co",
    location: "Remote",
    type: "Contract",
    description: "Create user-centered designs for digital products that enhance user satisfaction and accessibility.",
    requirements: [
      "3+ years of UX design experience",
      "Strong portfolio demonstrating user-centered design process",
      "Proficiency in design tools like Figma and Sketch",
      "Experience conducting user research"
    ],
    posted: "2024-04-08"
  }
];

// Mock events data
export const events: Event[] = [
  {
    id: "event-1",
    title: "Women in Tech Leadership Summit",
    date: "2024-05-15",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual",
    description: "Join industry leaders for a day of inspiring talks and networking opportunities focused on advancing women in technology leadership roles.",
    type: "Summit",
    registration_link: "https://example.com/register/tech-summit"
  },
  {
    id: "event-2",
    title: "Resume Building Workshop",
    date: "2024-05-20",
    time: "2:00 PM - 4:00 PM",
    location: "Virtual",
    description: "Learn how to create an impactful resume that highlights your skills and experiences effectively.",
    type: "Workshop",
    registration_link: "https://example.com/register/resume-workshop"
  },
  {
    id: "event-3",
    title: "Negotiation Skills for Women",
    date: "2024-05-25",
    time: "11:00 AM - 1:00 PM",
    location: "Hybrid (Mumbai)",
    description: "Develop strategies for effective negotiation in professional settings and learn to advocate for yourself confidently.",
    type: "Workshop",
    registration_link: "https://example.com/register/negotiation-workshop"
  }
];

// Mock mentorship programs
export const mentorshipPrograms: MentorshipProgram[] = [
  {
    id: "mentor-1",
    title: "Technology Leadership Mentorship",
    description: "One-on-one guidance from experienced technology leaders to help you advance in your tech career.",
    duration: "3 months",
    mentor: "Priya Sharma",
    mentor_profile: "CTO at Global Tech Solutions with 15+ years of experience in technology leadership",
    areas: ["Career Planning", "Technical Leadership", "Team Management"],
    application_link: "https://example.com/apply/tech-leadership-mentorship"
  },
  {
    id: "mentor-2",
    title: "Entrepreneurship Mentoring Circle",
    description: "Group mentoring for women entrepreneurs to share experiences and receive guidance.",
    duration: "6 months",
    mentor: "Anjali Desai",
    mentor_profile: "Founder of three successful startups with expertise in business development and fundraising",
    areas: ["Business Strategy", "Fundraising", "Marketing", "Operations"],
    application_link: "https://example.com/apply/entrepreneurship-mentoring"
  },
  {
    id: "mentor-3",
    title: "Career Transition Coaching",
    description: "Personalized coaching for women making significant career shifts or returning to the workforce.",
    duration: "4 months",
    mentor: "Deepa Reddy",
    mentor_profile: "Career Coach with 10+ years of experience helping professionals navigate career transitions",
    areas: ["Skill Assessment", "Resume Building", "Interview Preparation", "Networking"],
    application_link: "https://example.com/apply/career-transition-coaching"
  }
];

// Mock FAQs
export const faqs: FAQ[] = [
  {
    question: "How can I find job opportunities that offer flexible working hours?",
    answer: "You can filter job listings on the JobsForHer platform by selecting 'Flexible Hours' in the work arrangement filter. Additionally, you can set up job alerts with specific criteria to be notified when new flexible opportunities become available.",
    category: "Job Search"
  },
  {
    question: "How do I prepare for returning to work after a career break?",
    answer: "Consider joining our 'Restart Her Career' program which includes skill refresher courses, resume building workshops, and interview preparation sessions. Also, explore our mentorship programs specifically designed for women returning to work after breaks.",
    category: "Career Development"
  },
  {
    question: "What mentorship opportunities are available for women in leadership roles?",
    answer: "JobsForHer offers several executive mentorship programs where you can connect with senior women leaders across industries. These programs provide one-on-one guidance, leadership development workshops, and networking opportunities with other women in leadership positions.",
    category: "Mentorship"
  },
  {
    question: "How can I stay updated on upcoming events and workshops?",
    answer: "You can subscribe to our newsletter, follow our social media channels, or regularly check the Events section on the JobsForHer platform. You can also set preferences to receive notifications for events that match your interests.",
    category: "Events"
  }
];

// Empowerment resources
export const empowermentResources = [
  {
    title: "Women's Leadership Development",
    description: "Access resources and programs designed to enhance leadership skills for women in various career stages.",
    link: "/resources/leadership"
  },
  {
    title: "Return to Work Programs",
    description: "Find organizations offering structured programs for women returning to the workforce after career breaks.",
    link: "/resources/return-to-work"
  },
  {
    title: "Career Advancement Strategies",
    description: "Learn effective strategies for advancing your career and breaking through barriers.",
    link: "/resources/career-advancement"
  },
  {
    title: "Work-Life Integration",
    description: "Discover approaches to successfully integrate professional and personal responsibilities.",
    link: "/resources/work-life"
  }
];

// Bot responses based on intent
export const botResponses = {
  greeting: "Hello! I'm ASHA, the AI assistant for JobsForHer Foundation. I'm here to help empower your career journey. How can I assist you today?",
  job_listings: "I can help you find job opportunities that match your skills and preferences. What type of role are you looking for?",
  events: "There are several upcoming events and workshops that might interest you. Would you like to know about networking events, skill-building workshops, or leadership webinars?",
  mentorship: "Mentorship can be a valuable asset in your career journey. We have various mentorship programs available. Are you interested in finding a mentor in a specific area?",
  empowerment: "JobsForHer Foundation offers numerous resources focused on women's empowerment in the workplace. Would you like to learn about leadership development, workplace equality initiatives, or success stories?",
  fallback: "I'm sorry, I didn't quite understand that. Could you please rephrase your question or select one of the quick action buttons below to explore specific topics?"
};
