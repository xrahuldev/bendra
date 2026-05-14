import {
  WorkspacePremium,
  Brush,
  Handshake,
  EmojiObjects,
  Assignment,
  RocketLaunch,
  FreeBreakfast,
  VerifiedUser,
  LocalShipping,
  Code,
  Campaign,
  PhoneIphone,
  Search,
  Support,
  CloudSync,
} from '@mui/icons-material';

// ===== INTERFACES =====
export interface KeyValue {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  gradient: string;
  details: string[];
  image: string;
  benefits: string[];
}

export interface TimelineStep {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  image: string;
  keyPoints: string[];
  tools: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  slug: string;
  name: string;
  role: string;
  company: string;
  shortText: string;
  fullText: string;
  avatar: string;
  rating: number;
  projectType: string;
  results: string[];
  image: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  gradient: string;
  features: string[];
  image: string;
  technologies: string[];
  pricing: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export type AboutItem = KeyValue | TimelineStep | Testimonial | Service;

// ===== KEY VALUES DATA =====
export const keyValues: KeyValue[] = [
  {
    id: 'quality',
    slug: 'quality',
    icon: 'WorkspacePremium',
    title: 'Quality',
    shortDescription:
      'We value quality in all aspects of our work. From the code we write for web and app development to the digital marketing services we provide, quality work is what we ensure.',
    fullDescription: `At Bendra, quality is not just a buzzword — it's the foundation of everything we do. We believe that every line of code, every design element, every marketing campaign, and every client interaction should reflect our commitment to excellence.

Our quality-first approach means we never cut corners. We follow industry best practices, use the latest technologies, and continuously improve our processes to ensure that every deliverable exceeds client expectations.

We have implemented rigorous quality assurance processes at every stage of project development. From initial planning to final delivery, each milestone is carefully reviewed and tested to ensure it meets our high standards.

Our team undergoes regular training and skill development to stay updated with the latest trends and technologies. This ensures that we can deliver cutting-edge solutions that are not only functional but also future-proof.

Quality for us extends beyond the product — it encompasses the entire client experience. We strive to provide transparent communication, timely updates, and responsive support throughout the project lifecycle.`,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    details: [
      'Rigorous code review processes for every project',
      'Automated testing pipelines ensuring bug-free deployments',
      'Regular quality audits and performance benchmarking',
      'Continuous improvement through client feedback integration',
      'Industry-standard security practices and compliance',
      'Pixel-perfect design implementation with attention to detail',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Reduced bugs and issues in production',
      'Higher client satisfaction rates',
      'Long-term cost savings through maintainable code',
      'Stronger brand reputation and trust',
      'Better user experience and engagement',
      'Faster time-to-market with fewer revisions',
    ],
  },
  {
    id: 'creativity',
    slug: 'creativity',
    icon: 'Brush',
    title: 'Creativity',
    shortDescription:
      'We value creativity and innovation, and we encourage our team to think outside the box and come up with unique and effective solutions for our clients.',
    fullDescription: `Creativity is at the heart of Bendra's DNA. We believe that the best solutions come from thinking differently, challenging assumptions, and exploring new possibilities. Our creative process is designed to push boundaries while keeping the client's goals at the center.

We foster a culture of innovation where every team member is encouraged to share ideas, experiment with new approaches, and contribute to creative problem-solving. This collaborative environment leads to unique solutions that set our clients apart from their competition.

Our design philosophy blends aesthetics with functionality. We don't just create beautiful interfaces — we craft experiences that engage users, drive conversions, and tell compelling brand stories. Every pixel, every interaction, and every word is carefully considered.

We stay ahead of design trends while maintaining timeless principles. Our team regularly participates in design workshops, attends industry conferences, and studies emerging technologies to bring fresh perspectives to every project.

Innovation at Bendra isn't limited to design. We apply creative thinking to problem-solving, project management, and client communication. This holistic approach to creativity ensures that every aspect of our service delivers value and delight.`,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    details: [
      'Brainstorming sessions for every new project',
      'Design thinking methodology applied across all services',
      'Regular creative workshops and skill-sharing sessions',
      'User-centered design approach with empathy mapping',
      'A/B testing for data-driven creative decisions',
      'Cross-functional collaboration for diverse perspectives',
    ],
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Unique brand identity that stands out',
      'Higher user engagement and retention',
      'Innovative solutions to complex problems',
      'Competitive advantage through differentiation',
      'Memorable user experiences',
      'Increased brand recognition and recall',
    ],
  },
  {
    id: 'reliability',
    slug: 'reliability',
    icon: 'Handshake',
    title: 'Reliability',
    shortDescription:
      'We value reliability and trustworthiness, and we aim to build long-term relationships with our clients based on mutual respect and open communication.',
    fullDescription: `Reliability is the cornerstone of our client relationships at Bendra. We understand that when businesses choose us as their digital partner, they're placing their trust in our abilities, our commitment, and our integrity. We take this responsibility seriously.

Our reliability starts with transparent communication. From the very first meeting, we set clear expectations about timelines, deliverables, and costs. We provide regular updates, maintain open channels of communication, and proactively address any challenges that arise.

We pride ourselves on meeting deadlines consistently. Our project management processes are designed to ensure that every milestone is tracked, every dependency is managed, and every deadline is met. When unforeseen circumstances arise, we communicate early and work together to find solutions.

Our commitment to reliability extends to post-delivery support. We don't disappear after a project is completed. We provide ongoing maintenance, support, and optimization to ensure that our solutions continue to deliver value long after launch.

Building long-term partnerships is our goal. Many of our clients have been with us for years, and they continue to trust us with their most important digital initiatives. This longevity is a testament to our reliability and the value we deliver.`,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    details: [
      '98% on-time delivery rate across all projects',
      'Dedicated project managers for every engagement',
      'Regular status updates and progress reports',
      'Transparent pricing with no hidden costs',
      'Long-term support and maintenance contracts',
      'Client satisfaction guaranteed with revision policies',
    ],
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Peace of mind with predictable delivery',
      'Stronger business partnerships',
      'Consistent quality across projects',
      'Reduced risk and uncertainty',
      'Better planning with reliable timelines',
      'Trust-based collaboration for better outcomes',
    ],
  },
];

// ===== TIMELINE STEPS DATA =====
export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    slug: 'thoughts-showering',
    title: 'Thoughts Showering',
    shortDescription:
      "In this stage, the team at Bendra will brainstorm and share ideas about the project. We will discuss the client's goals, target audience, and any specific requirements or challenges to meet their goals.",
    fullDescription: `The Thoughts Showering phase is where every great project begins at Bendra. This is our most collaborative and open-ended stage, where creativity meets strategy, and ideas flow freely.

During this phase, our entire cross-functional team comes together — designers, developers, marketers, and project managers — to explore every angle of the project. We start by deeply understanding the client's business, their industry, their competition, and their unique challenges.

We conduct comprehensive stakeholder interviews to understand not just what the client wants, but why they want it. This deeper understanding allows us to propose solutions that address root causes rather than just surface-level symptoms.

Our research process includes competitive analysis, market research, user persona development, and technology assessment. We gather data from multiple sources to ensure our approach is informed by real-world insights rather than assumptions.

We also involve the client actively in this phase. Through collaborative workshops and brainstorming sessions, we ensure that the client's vision, values, and goals are deeply embedded in the project from day one.

The output of this phase is a comprehensive project brief that captures all insights, ideas, and decisions. This document serves as the north star throughout the project, ensuring alignment and focus at every stage.`,
    icon: 'EmojiObjects',
    color: '#f59e0b',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Comprehensive stakeholder interviews and discovery sessions',
      'Market research and competitive analysis',
      'User persona development and journey mapping',
      'Technology stack assessment and recommendations',
      'Collaborative brainstorming workshops with clients',
      'SWOT analysis for digital strategy',
      'Goal setting and KPI definition',
      'Risk assessment and mitigation planning',
    ],
    tools: [
      'Miro for collaborative brainstorming',
      'Notion for documentation',
      'Google Analytics for data analysis',
      'SEMrush for competitive research',
      'Figma for initial concept sketching',
    ],
    duration: '1-2 Weeks',
  },
  {
    id: 2,
    slug: 'project-planning',
    title: 'Project Planning',
    shortDescription:
      "Once the team has a clear understanding of the project's goals and requirements, we will begin to plan the best possible way to complete the job.",
    fullDescription: `Project Planning at Bendra is where strategy meets execution. This critical phase transforms the insights gathered during Thoughts Showering into a clear, actionable roadmap that guides the entire project.

Our planning process begins with defining the project scope in precise detail. We break down the project into manageable phases, each with specific deliverables, timelines, and success criteria. This granular approach ensures nothing falls through the cracks.

We use agile project management methodologies that allow for flexibility while maintaining structure. Sprint planning sessions define short-term goals, while the overall project roadmap keeps everyone aligned with long-term objectives.

Resource allocation is carefully planned based on the project's requirements. We assign team members based on their expertise, availability, and the specific needs of each phase. This ensures optimal use of talent and efficient project execution.

Budget planning is transparent and detailed. We provide itemized estimates for every phase of the project, with clear explanations of what each cost covers. There are no hidden fees or surprise charges — what you see is what you get.

Risk management is integrated into our planning process. We identify potential challenges early, develop contingency plans, and build buffers into our timelines to accommodate unforeseen circumstances.

The planning phase also includes creating wireframes, sitemaps, and architectural diagrams that give clients a clear picture of what the final product will look like and how it will function.`,
    icon: 'Assignment',
    color: '#3b82f6',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Detailed project scope and requirements documentation',
      'Agile sprint planning with clear milestones',
      'Resource allocation and team assignment',
      'Budget estimation and financial planning',
      'Risk identification and mitigation strategies',
      'Wireframing and information architecture',
      'Technology stack finalization',
      'Communication plan and reporting structure',
    ],
    tools: [
      'Jira for project management',
      'Confluence for documentation',
      'Figma for wireframing',
      'Draw.io for architecture diagrams',
      'Google Sheets for budget tracking',
    ],
    duration: '1-2 Weeks',
  },
  {
    id: 3,
    slug: 'initiation',
    title: 'Initiation',
    shortDescription:
      'With the plan in place, the team will begin working on the project. This may involve designing and developing the website or app, creating content, and running digital marketing campaigns.',
    fullDescription: `The Initiation phase is where the real magic happens at Bendra. This is where our team transforms plans and concepts into tangible, functional digital solutions that bring the client's vision to life.

Our development process follows best practices in software engineering. We use version control, code reviews, and continuous integration/continuous deployment (CI/CD) pipelines to ensure code quality and rapid, reliable deployments.

Design and development happen in parallel, with designers staying a sprint or two ahead of developers. This ensures a steady flow of work and allows for iterative refinement based on early feedback.

For web development projects, we build responsive, performant, and accessible websites that work flawlessly across all devices and browsers. We prioritize page speed, SEO-friendliness, and user experience in every line of code.

For app development, we leverage modern frameworks and native technologies to create smooth, intuitive mobile experiences. Whether it's iOS, Android, or cross-platform, our apps are built to delight users and achieve business goals.

Digital marketing campaigns are launched with precision. We set up tracking, create compelling ad creatives, and optimize targeting to ensure maximum ROI from every dollar spent.

Throughout this phase, we maintain daily standup meetings, weekly progress reviews, and bi-weekly client demos. This transparent approach ensures the client is always informed and involved in the development process.

Quality assurance runs parallel to development. Our QA team tests features as they're built, catching issues early and ensuring a smooth, bug-free experience in the final product.`,
    icon: 'RocketLaunch',
    color: '#10b981',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Agile development with 2-week sprint cycles',
      'Parallel design and development workflows',
      'Daily standups and weekly progress reviews',
      'Continuous integration and deployment pipelines',
      'Responsive and accessible front-end development',
      'Backend architecture and API development',
      'Database design and optimization',
      'Third-party integrations and API connections',
    ],
    tools: [
      'VS Code for development',
      'GitHub for version control',
      'Figma for design handoff',
      'Slack for team communication',
      'Vercel/AWS for deployment',
    ],
    duration: '4-12 Weeks',
  },
  {
    id: 4,
    slug: 'tea-breaks',
    title: 'Tea Breaks',
    shortDescription:
      'Yes, as we work hard, we also take regular breaks to recharge and refresh our minds. Breaks between work allow us to feel energized and prevent burnout.',
    fullDescription: `At Bendra, we firmly believe that the best work comes from well-rested, happy, and mentally refreshed team members. That's why Tea Breaks are not just a perk — they're an integral part of our workflow and company culture.

Research consistently shows that taking regular breaks improves productivity, creativity, and decision-making. Our team follows the Pomodoro technique and structured break schedules to maintain peak performance throughout the day.

But Tea Breaks at Bendra are more than just stepping away from the screen. They're opportunities for informal collaboration, creative discussions, and team bonding. Some of our best ideas have emerged from casual conversations over a cup of tea.

We've designed our office spaces with dedicated break areas that encourage relaxation and socialization. Comfortable seating, games, and a well-stocked kitchen create an environment where team members can truly disconnect and recharge.

Our management team leads by example. We encourage everyone, from interns to senior leaders, to take regular breaks without any guilt or stigma. This creates a healthy work environment where people feel valued as human beings, not just as workers.

We also organize regular team activities, outings, and celebrations that strengthen bonds and create lasting memories. These shared experiences build trust and collaboration that translate directly into better project outcomes.

Mental health is a priority at Bendra. We provide resources, support, and flexibility to ensure our team members maintain a healthy work-life balance. Happy team members create happy clients — it's that simple.

This philosophy of balanced work extends to our client relationships. We set realistic deadlines, manage expectations proactively, and never sacrifice quality for speed. This sustainable approach ensures consistent, high-quality output over the long term.`,
    icon: 'FreeBreakfast',
    color: '#ec4899',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Structured break schedules using Pomodoro technique',
      'Dedicated relaxation areas in workspace',
      'Team building activities and outings',
      'Mental health awareness and support programs',
      'Flexible work hours for optimal productivity',
      'Creative brainstorming during informal sessions',
      'Work-life balance advocacy and policies',
      'Regular team celebrations and recognition',
    ],
    tools: [
      'Great coffee and tea collection',
      'Board games and recreational activities',
      'Meditation and mindfulness apps',
      'Team bonding activities',
      'Comfortable break room furniture',
    ],
    duration: 'Ongoing',
  },
  {
    id: 5,
    slug: 'quality-checks',
    title: 'Quality Checks',
    shortDescription:
      "As the project nears completion, the team will conduct a thorough quality check to ensure everything is working properly and meets the client's requirements.",
    fullDescription: `Quality Checks at Bendra are comprehensive, multi-layered, and uncompromising. This phase is where we put every aspect of the project through rigorous testing to ensure it meets our high standards and the client's expectations.

Our QA process begins with functional testing, where every feature and functionality is tested against the project requirements. We create detailed test cases that cover all user scenarios, edge cases, and error conditions.

Performance testing ensures that the application can handle expected traffic loads and responds quickly under various conditions. We use load testing tools to simulate real-world usage patterns and identify potential bottlenecks.

Security testing is a critical component of our quality checks. We conduct vulnerability assessments, penetration testing, and code security audits to ensure the application is protected against common threats and complies with industry standards.

Cross-browser and cross-device testing ensures consistent user experiences across all platforms. We test on multiple browsers, operating systems, and device types to identify and fix any compatibility issues.

Accessibility testing ensures our solutions are usable by people with disabilities. We follow WCAG guidelines and use assistive technologies to verify that our products are inclusive and accessible to all users.

User acceptance testing (UAT) involves the client in the testing process. We provide structured testing environments and checklists that allow clients to verify that the product meets their requirements and expectations.

Code reviews are conducted by senior developers who examine the codebase for quality, maintainability, security, and adherence to best practices. This peer review process catches issues that automated testing might miss.

The quality check phase also includes documentation review, content proofreading, and SEO audit to ensure every aspect of the project is polished and professional.`,
    icon: 'VerifiedUser',
    color: '#a855f7',
    image:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Comprehensive functional testing with detailed test cases',
      'Performance and load testing under various conditions',
      'Security vulnerability assessment and penetration testing',
      'Cross-browser and cross-device compatibility testing',
      'Accessibility compliance verification (WCAG)',
      'User acceptance testing with client involvement',
      'Code review by senior developers',
      'SEO audit and content quality check',
    ],
    tools: [
      'Selenium for automated testing',
      'JMeter for performance testing',
      'OWASP ZAP for security testing',
      'BrowserStack for cross-browser testing',
      'Lighthouse for performance auditing',
    ],
    duration: '1-3 Weeks',
  },
  {
    id: 6,
    slug: 'project-delivery',
    title: 'Project Delivery',
    shortDescription:
      'Once the quality check is complete and any necessary revisions or adjustments have been made, the project will be delivered to the client.',
    fullDescription: `Project Delivery at Bendra is not just about handing over files — it's about ensuring a smooth transition, comprehensive knowledge transfer, and setting the stage for long-term success.

Our delivery process begins with a final review meeting where we walk the client through the completed project, demonstrating all features and functionalities. This ensures the client is fully aware of what has been built and how to use it.

We provide comprehensive documentation that covers everything from user guides to technical documentation. This includes system architecture documentation, API documentation, deployment guides, and maintenance procedures.

Training sessions are conducted to ensure the client's team is comfortable using and managing the delivered solution. We provide hands-on training, video tutorials, and reference materials that serve as ongoing resources.

Deployment is carefully planned and executed to minimize downtime and risk. We follow a staged deployment approach, with careful monitoring at each stage to ensure everything works smoothly in the production environment.

Data migration, if required, is handled with utmost care. We ensure data integrity through careful mapping, validation, and verification processes. No data is lost or corrupted during the transition.

Post-launch monitoring is an essential part of our delivery process. We closely monitor the application for the first few weeks after launch, proactively identifying and resolving any issues that may arise in the production environment.

We also provide ongoing support and maintenance packages that ensure the solution continues to perform optimally. This includes regular updates, security patches, performance optimization, and feature enhancements.

Our relationship with the client doesn't end at delivery. We schedule follow-up meetings to review performance, gather feedback, and discuss opportunities for growth and improvement. Many of our delivery milestones mark the beginning of long-term partnerships.`,
    icon: 'LocalShipping',
    color: '#06b6d4',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    keyPoints: [
      'Final review and demonstration meeting',
      'Comprehensive documentation package',
      'Hands-on training and video tutorials',
      'Staged deployment with monitoring',
      'Data migration with integrity verification',
      'Post-launch monitoring and support',
      'Ongoing maintenance and update packages',
      'Performance review and optimization',
    ],
    tools: [
      'Vercel/AWS/Azure for deployment',
      'New Relic for monitoring',
      'Loom for training videos',
      'Notion for documentation',
      'Intercom for post-launch support',
    ],
    duration: '1-2 Weeks',
  },
];

// ===== TESTIMONIALS DATA =====
export const testimonials: Testimonial[] = [
  {
    id: 'exizenly',
    slug: 'exizenly-team',
    name: 'Exizenly Team',
    role: 'Founder',
    company: 'Exizenly',
    shortText:
      'Bendra transformed our entire online presence with their WordPress and LinkedIn marketing expertise. Our lead generation increased significantly.',
    fullText: `Working with Bendra was a game-changing experience for Exizenly. When we first approached them, we had a basic website that wasn't generating any leads and minimal social media presence. We needed a complete digital transformation.

Bendra started with a thorough analysis of our existing online presence and created a comprehensive strategy that covered website redesign, LinkedIn marketing, and content optimization. Their team was incredibly professional and attentive throughout the process.

The WordPress website they built for us was not just visually stunning but also highly functional. They implemented custom lead capture forms, CRM integration, and analytics tracking that gave us unprecedented visibility into our marketing funnel.

Their LinkedIn marketing strategy was particularly impressive. They created a content calendar, optimized our company page, and implemented a thought leadership campaign that positioned our founders as industry experts. Within three months, our LinkedIn engagement increased by 400%.

The results speak for themselves — our lead generation increased by 300% within the first six months. We went from receiving 5-10 inquiries per month to over 40. More importantly, the quality of leads improved significantly, leading to higher conversion rates.

What sets Bendra apart is their commitment to understanding our business goals and translating them into actionable digital strategies. They didn't just build a website — they built a lead generation machine that continues to deliver results.

We continue to work with Bendra for ongoing marketing support, content creation, and website optimization. They've become an integral part of our growth story, and we couldn't be happier with the partnership.`,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'WordPress Development & LinkedIn Marketing',
    results: [
      '300% increase in lead generation within 6 months',
      '400% growth in LinkedIn engagement',
      'Custom CRM integration for lead tracking',
      'Improved website load time by 60%',
      'SEO rankings improved for 50+ keywords',
      'Monthly inquiries grew from 10 to 40+',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'robert-hernandez',
    slug: 'dr-robert-hernandez',
    name: 'Dr. Robert Hernandez',
    role: 'Thought Leader',
    company: 'Personal Brand',
    shortText:
      "The LinkedIn, social media, and podcast management by Bendra exceeded all expectations. My online presence grew tremendously.",
    fullText: `As a thought leader and industry expert, my personal brand is everything. When I approached Bendra, I had years of expertise and knowledge but lacked the digital presence to reach a wider audience. Bendra changed everything.

Their team took the time to understand my personal brand, my expertise areas, and my goals. They created a comprehensive digital strategy that spanned LinkedIn, social media, podcast management, and content creation.

The LinkedIn strategy was transformative. They optimized my profile, created a content strategy that showcased my expertise, and implemented engagement tactics that grew my followers from 2,000 to over 25,000 in just eight months. My posts regularly received thousands of impressions and meaningful engagement.

Social media management across platforms was seamless. They created platform-specific content that resonated with different audiences while maintaining a consistent brand voice. My Twitter following doubled, and my Instagram grew to become a valuable channel for connecting with younger professionals.

Their podcast management service was outstanding. They handled everything from recording and editing to distribution and promotion. They set up my podcast on Apple Podcasts, Spotify, Google Podcasts, and other platforms, ensuring maximum reach.

Content creation was another area where Bendra excelled. They helped me produce high-quality articles, blog posts, and LinkedIn newsletters that established me as a go-to expert in my field. Several of my articles went viral, reaching audiences I never thought possible.

The most impressive aspect of working with Bendra was their data-driven approach. They provided monthly analytics reports that showed exactly how each channel was performing and made data-informed recommendations for optimization.

Thanks to Bendra, I'm now reaching audiences globally, speaking at major conferences, and building meaningful connections that advance my mission. They didn't just manage my digital presence — they amplified my voice and expanded my impact.`,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Personal Branding & Social Media Management',
    results: [
      'LinkedIn followers grew from 2K to 25K+ in 8 months',
      'Twitter following doubled within 6 months',
      'Podcast launched on all major platforms',
      'Multiple viral articles with 100K+ views',
      'Speaking invitations from major conferences',
      'Global audience reach across 30+ countries',
    ],
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'kenneth-hellem',
    slug: 'kenneth-hellem',
    name: 'Kenneth Hellem',
    role: 'Podcaster',
    company: 'Podcast Creator',
    shortText:
      "Bendra's podcast management was outstanding. They streamlined distribution across Apple Podcasts, Spotify, and Google Podcasts.",
    fullText: `When I started my podcast journey, I had great content ideas but no idea how to handle the technical side of podcasting. Recording, editing, distribution, promotion — it was overwhelming. That's when I found Bendra.

From our very first meeting, I knew I was in good hands. Their team understood the podcasting landscape inside and out. They helped me define my podcast concept, create branding assets, and set up the technical infrastructure for recording and editing.

The editing quality was exceptional. They turned my raw recordings into polished, professional episodes with intros, outros, music, and sound effects that elevated the listening experience. Each episode felt like it was produced by a major studio.

Distribution was seamless. They set up my podcast on Apple Podcasts, Spotify, Google Podcasts, Amazon Music, and numerous other platforms. They optimized my podcast metadata, descriptions, and categories to maximize discoverability.

Their promotional strategy was what really set my podcast apart. They created audiograms, social media clips, and promotional content for each episode. They also implemented a cross-platform marketing strategy that drove listeners from social media to my podcast.

The analytics and insights they provided were invaluable. I could see exactly which episodes performed best, where my listeners were located, and how my audience was growing over time. These insights helped me refine my content strategy and create episodes that resonated with my audience.

Within six months, my podcast went from zero to over 10,000 monthly downloads. I was featured on several "Podcasts to Watch" lists and started attracting high-profile guests who wanted to be on my show.

Bendra also helped me monetize my podcast through sponsorship outreach, merchandise development, and premium content strategies. They turned my passion project into a revenue-generating business.

I can't recommend Bendra highly enough for anyone looking to start or grow a podcast. Their expertise, dedication, and attention to detail are unmatched.`,
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Podcast Management & Promotion',
    results: [
      '10,000+ monthly downloads within 6 months',
      'Distribution on 8+ major podcast platforms',
      'Featured on multiple "Podcasts to Watch" lists',
      'High-profile guest appearances secured',
      'Successful monetization through sponsorships',
      'Social media engagement grew by 500%',
    ],
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

// ===== SERVICES DATA =====
export const services: Service[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Custom websites built with modern technologies that are fast, responsive, and optimized for conversions.',
    fullDescription: `Our web development service at Bendra encompasses everything from simple landing pages to complex enterprise web applications. We leverage the latest technologies and frameworks to build websites that are not only visually stunning but also performant, secure, and scalable.

We specialize in both frontend and backend development, creating seamless full-stack solutions that deliver exceptional user experiences. Our frontend development uses modern frameworks like React, Next.js, and Vue.js to create dynamic, interactive interfaces that engage users.

On the backend, we work with Node.js, Python, PHP, and other technologies to build robust APIs, database architectures, and server-side logic that power complex business applications.

Our WordPress development expertise allows us to create custom themes, plugins, and e-commerce solutions that give clients full control over their content while maintaining professional design standards.

E-commerce development is another strong suit, with experience across platforms like Shopify, WooCommerce, and custom solutions. We build online stores that convert visitors into customers through optimized checkout flows, product displays, and payment integrations.

Every website we build is optimized for SEO, accessibility, and performance. We follow Core Web Vitals guidelines, implement structured data, and ensure our sites rank well in search engines from day one.`,
    icon: 'Code',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    features: [
      'Custom responsive website design and development',
      'React/Next.js single-page applications',
      'WordPress custom theme and plugin development',
      'E-commerce solutions (Shopify, WooCommerce)',
      'Progressive Web Apps (PWA)',
      'API development and integration',
      'Database design and optimization',
      'Performance optimization and Core Web Vitals',
    ],
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'WordPress',
      'Shopify',
      'MongoDB',
      'PostgreSQL',
    ],
    pricing: 'Starting from $2,500',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription:
      'Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers.',
    fullDescription: `Our digital marketing services are designed to help businesses grow their online presence, reach their target audience, and achieve measurable results. We combine creativity with data-driven strategies to deliver campaigns that generate real ROI.

Our approach starts with understanding your business goals, target audience, and competitive landscape. We then develop a customized marketing strategy that leverages the most effective channels and tactics for your specific situation.

Social media marketing is at the core of our digital marketing services. We create and manage campaigns across all major platforms, including LinkedIn, Facebook, Instagram, Twitter, and TikTok. Our content strategies are tailored to each platform's unique characteristics and audience.

Pay-per-click (PPC) advertising is another key service. We manage Google Ads, Facebook Ads, LinkedIn Ads, and other paid channels with a focus on maximizing ROI. Our team handles everything from keyword research and ad creation to bid management and conversion optimization.

Email marketing campaigns are designed to nurture leads, build relationships, and drive conversions. We create compelling email sequences, newsletters, and automated campaigns that deliver the right message at the right time.

Content marketing is the foundation of our digital strategy. We create high-quality blog posts, articles, infographics, videos, and other content that attracts, engages, and converts your target audience.`,
    icon: 'Campaign',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    features: [
      'Social media management and advertising',
      'Google Ads and PPC campaign management',
      'Email marketing and automation',
      'Content marketing and strategy',
      'Influencer marketing and outreach',
      'Analytics and reporting dashboards',
      'Conversion rate optimization (CRO)',
      'Brand strategy and positioning',
    ],
    image:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Google Ads',
      'Facebook Business',
      'Mailchimp',
      'HubSpot',
      'Hootsuite',
      'Canva',
      'Google Analytics',
      'SEMrush',
    ],
    pricing: 'Starting from $1,500/month',
  },
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'App Development',
    shortDescription:
      'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
    fullDescription: `Our mobile app development service delivers high-quality, user-friendly applications for iOS and Android platforms. We build apps that solve real problems, engage users, and drive business growth.

We offer both native and cross-platform development options. Native development using Swift (iOS) and Kotlin (Android) delivers the best possible performance and user experience. Cross-platform development using React Native or Flutter allows us to build for both platforms simultaneously, reducing time and cost.

Our app development process is user-centered. We start with extensive user research, create detailed user flows and wireframes, and design intuitive interfaces that make complex functionality feel simple.

Backend development for mobile apps includes API development, database design, authentication systems, push notification services, and cloud infrastructure setup. We ensure our backends are scalable, secure, and reliable.

We also specialize in integrating third-party services and APIs, including payment gateways, social media logins, analytics platforms, and more. These integrations enhance app functionality and provide users with a seamless experience.

Post-launch support includes app store optimization (ASO), performance monitoring, crash reporting, user analytics, and regular updates to ensure your app stays current and competitive.`,
    icon: 'PhoneIphone',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    features: [
      'Native iOS development (Swift)',
      'Native Android development (Kotlin)',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design for mobile applications',
      'Backend API development',
      'App Store and Play Store deployment',
      'App Store Optimization (ASO)',
      'Maintenance and updates',
    ],
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'AWS',
      'Node.js',
      'GraphQL',
    ],
    pricing: 'Starting from $5,000',
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services',
    shortDescription:
      'Comprehensive SEO strategies that improve search rankings, drive organic traffic, and increase online visibility.',
    fullDescription: `Our SEO services are designed to help businesses achieve sustainable growth through organic search. We implement comprehensive SEO strategies that improve search engine rankings, drive targeted traffic, and increase conversions.

Our approach to SEO is holistic and data-driven. We start with a thorough SEO audit that examines your website's technical health, content quality, backlink profile, and competitive positioning. This audit forms the foundation of our customized SEO strategy.

Technical SEO is the first priority. We ensure your website is properly indexed, loads quickly, is mobile-friendly, and follows all search engine guidelines. This includes optimizing site structure, implementing schema markup, fixing crawl errors, and improving Core Web Vitals.

On-page SEO involves optimizing your content for target keywords while maintaining readability and user value. We optimize title tags, meta descriptions, headers, images, and internal linking to maximize search visibility.

Content strategy is a key component of our SEO service. We create high-quality, keyword-targeted content that attracts links, engages users, and establishes your authority in your industry. This includes blog posts, landing pages, guides, and other content types.

Link building is conducted through ethical, white-hat strategies that build genuine authority. We pursue guest posting, digital PR, resource page link building, and other proven tactics that generate high-quality backlinks.

Local SEO services help businesses with physical locations rank in local search results. This includes Google Business Profile optimization, local citation building, review management, and location-specific content creation.`,
    icon: 'Search',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    features: [
      'Comprehensive SEO audits and strategy',
      'Technical SEO optimization',
      'On-page SEO and content optimization',
      'Link building and digital PR',
      'Local SEO and Google Business Profile',
      'Keyword research and mapping',
      'SEO content creation and strategy',
      'Monthly reporting and analytics',
    ],
    image:
      'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'Google Search Console',
      'SEMrush',
      'Ahrefs',
      'Moz',
      'Screaming Frog',
      'Google Analytics',
      'Schema.org',
      'PageSpeed Insights',
    ],
    pricing: 'Starting from $1,000/month',
  },
];

// ===== STATS DATA =====
export const stats: Stat[] = [
  { number: '250+', label: 'Projects Delivered', icon: 'RocketLaunch' },
  { number: '120+', label: 'Happy Clients', icon: 'Groups' },
  { number: '8+', label: 'Years Experience', icon: 'TrendingUp' },
  { number: '15+', label: 'Countries Served', icon: 'Public' },
];

// ===== HELPER FUNCTIONS =====
export function getAllSlugs(): string[] {
  const slugs: string[] = [];

  keyValues.forEach((item) => slugs.push(item.slug));
  timelineSteps.forEach((item) => slugs.push(item.slug));
  testimonials.forEach((item) => slugs.push(item.slug));
  services.forEach((item) => slugs.push(item.slug));

  return slugs;
}

export function getItemBySlug(
  slug: string
):
  | { type: 'value'; data: KeyValue }
  | { type: 'timeline'; data: TimelineStep }
  | { type: 'testimonial'; data: Testimonial }
  | { type: 'service'; data: Service }
  | null {
  const value = keyValues.find((v) => v.slug === slug);
  if (value) return { type: 'value', data: value };

  const step = timelineSteps.find((s) => s.slug === slug);
  if (step) return { type: 'timeline', data: step };

  const testimonial = testimonials.find((t) => t.slug === slug);
  if (testimonial) return { type: 'testimonial', data: testimonial };

  const service = services.find((s) => s.slug === slug);
  if (service) return { type: 'service', data: service };

  return null;
}

export function getRelatedItems(
  currentSlug: string,
  count: number = 3
): Array<{
  slug: string;
  title: string;
  description: string;
  type: string;
  color: string;
  image: string;
}> {
  const allItems: Array<{
    slug: string;
    title: string;
    description: string;
    type: string;
    color: string;
    image: string;
  }> = [];

  keyValues.forEach((v) => {
    if (v.slug !== currentSlug) {
      allItems.push({
        slug: v.slug,
        title: v.title,
        description: v.shortDescription,
        type: 'Value',
        color: v.color,
        image: v.image,
      });
    }
  });

  timelineSteps.forEach((s) => {
    if (s.slug !== currentSlug) {
      allItems.push({
        slug: s.slug,
        title: s.title,
        description: s.shortDescription,
        type: 'Process',
        color: s.color,
        image: s.image,
      });
    }
  });

  testimonials.forEach((t) => {
    if (t.slug !== currentSlug) {
      allItems.push({
        slug: t.slug,
        title: t.name,
        description: t.shortText,
        type: 'Testimonial',
        color: '#3b82f6',
        image: t.image,
      });
    }
  });

  services.forEach((s) => {
    if (s.slug !== currentSlug) {
      allItems.push({
        slug: s.slug,
        title: s.title,
        description: s.shortDescription,
        type: 'Service',
        color: s.color,
        image: s.image,
      });
    }
  });

  // Shuffle and return requested count
  const shuffled = allItems.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}