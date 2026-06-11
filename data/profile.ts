export const profile = {
  name: "Neil Pimley",
  headline: "Agentic Software Engineer",
  location: "Greater London, England, United Kingdom",
  industry: "Software Development",
  summary:
    "Fullstack developer with 20 years' experience in the fintech and healthcare sectors in both large corporations and startups; experience with scrum and agile methodologies delivering functionality to production in short sprints. Extensive experience delivering solutions both on the .NET platform and using multiple JavaScript frameworks and libraries. Skilled in UI development, web services, databases, OO design following SOLID principles, systems integration and implementation of significant projects from both an applications development and business process perspective.",
  facts: [
    "20 years' experience in fintech and healthcare",
    "Large corporation and startup environments",
    "Scrum and agile delivery in short production-focused sprints",
    ".NET platform delivery",
    "Multiple JavaScript frameworks and libraries",
    "UI development, web services, databases and systems integration",
    "OO design following SOLID principles",
    "Significant project implementation from application development and business process perspectives",
  ],
  evidenceBackedCapabilities: [
    {
      title: "C# / .NET Development",
      detail:
        "Roles cite C#, .NET, ASP.NET Core, ASP.NET Web API, MVC, Clean Architecture, CQRS, NUnit, NSubstitute, .NET Framework 4.7.2 and SQL Server delivery.",
    },
    {
      title: "Azure DevOps and Azure Cloud",
      detail:
        "The most recent project includes Azure App Services, Event Hub, Key Vault, Azure DevOps Pipelines, Repos and Boards.",
    },
    {
      title: "Salesforce Integrations",
      detail:
        "The most recent project connects trading systems with Salesforce CRM using Apex, Lightning Web Components, Salesforce DX, REST API integration and OAuth.",
    },
    {
      title: "Enterprise Architecture",
      detail:
        "Experience includes clean architecture, CQRS, event-driven architecture, async job queues, domain driven design and microservices architecture.",
    },
    {
      title: "Systems and CRM Integration",
      detail:
        "Experience includes Microsoft Dynamics CRM, Active Directory, FileNet, Dow Jones screening, RiskShield, AMLDC, Patient Administration System integration and Ulster Bank retail website work.",
    },
    {
      title: "Technical Leadership",
      detail:
        "Experience includes Squad Tech Lead at Rabobank and digital strategy plus website-build leadership for London Irish Business Society.",
    },
    {
      title: "CI/CD and DevOps Delivery",
      detail:
        "Experience cites Azure DevOps CI/CD pipelines, SonarQube, branch strategies, environment management, TFS for CD/CI, telemetry, logging and deployment tooling.",
    },
    {
      title: "AI and Cloud Integration",
      detail:
        "The most recent project includes OpenAI API integration and Azure Computer Vision within a cloud-native CRM integration platform.",
    },
  ],
  requestedButNotInExport: ["Formal qualifications"],
};

export const experience = [
  {
    company: "Anglo American",
    role: "Software Engineer",
    engagement: "Contract",
    dates: "Sep 2022 - Present",
    duration: "3 yrs 10 mos",
    location: "London Area, United Kingdom",
    details: [
      "Integration Engineer | .NET & Salesforce | Azure Cloud.",
      "Developing and maintaining a cloud-native CRM integration platform connecting trading systems with Salesforce CRM.",
      "Backend: C# / .NET, ASP.NET Core, Clean Architecture, CQRS pattern, NUnit and NSubstitute.",
      "Salesforce: Apex, Lightning Web Components, Salesforce DX, REST API integration and OAuth.",
      "Azure: App Services, Event Hub, Key Vault, Azure DevOps Pipelines, Repos and Boards.",
      "Integration patterns: event-driven architecture, async job queues and REST API design.",
      "AI/ML: OpenAI API integration and Azure Computer Vision.",
      "Frontend and DevOps: JavaScript, HTML, Jest unit testing, ESLint, Prettier, CI/CD pipelines, SonarQube, branch strategies and Dev/Test/UAT/Prod environment management.",
      "Security: role-based access control, OAuth 2.0 and Azure App Registrations.",
      "Software Engineer on Anglo American Supply Chain Manager (Core.SCM), an enterprise Supply Chain Management platform built with Angular 17 and .NET C# serving commodity trading and logistics operations globally.",
      "Led the full solution upgrade from .NET 8 to .NET 10 across the SCM API, Integration API and Security projects, including NuGet dependency conflict resolution, breaking compiler changes and Azure DevOps CI/CD pipeline updates.",
      "Investigated and resolved connectivity failures in containerised CQ data feeds pulling process data from PI Web API, implementing structured diagnostic tooling and Azure Monitor KQL queries for root-cause analysis in Container Apps.",
      "Delivered fixes for the PGM Sales LE Cash Utilisation tool, resolving missing cash inflow data for the trading desk.",
      "Established GitHub Copilot CLI workflows with custom agents for automated Azure DevOps user story creation and end-to-end test infrastructure upgrades.",
    ],
  },
  {
    company: "London Irish Business Society",
    role: "Board Member",
    engagement: "Freelance",
    dates: "Apr 2020 - Mar 2025",
    duration: "5 yrs",
    location: "Greater London, England, United Kingdom",
    details: ["Contributing to digital strategy and leading build of new website."],
  },
  {
    company: "Rabobank",
    role: "Squad Tech Lead",
    engagement: "Contract",
    dates: "Feb 2021 - Sep 2022",
    duration: "1 yr 8 mos",
    location: "Utrecht, Netherlands",
    details: [],
  },
  {
    company: "Rabobank",
    role: "Senior Software Engineer",
    engagement: "Contract",
    dates: "Feb 2018 - Jan 2021",
    duration: "3 yrs",
    location: "London",
    details: [
      "Worked on Rabobank's Global Client Onboarding Case Service, an enterprise ASP.NET Web API backend supporting KYC, AML, client lifecycle, case management, document handling, screening, approvals and regulatory onboarding workflows for a separate Angular SPA.",
      "Contributed to a large .NET Framework 4.7.2 service-oriented codebase using C#, ASP.NET Web API, SQL Server, Dapper, NServiceBus, Hangfire, Elasticsearch, SignalR/Redis, Swagger, Serilog, Splunk and Application Insights.",
      "Integrated with services including FileNet, Dow Jones screening, RiskShield, AMLDC, Active Directory, reference data, PDF generation and external messaging.",
      "Developed and maintained backend APIs for global client onboarding, KYC/AML case workflows, work-item management, document processing, risk assessment, screening results, approvals and sign-off journeys.",
      "Built and supported event-driven integrations using NServiceBus, SQL persistence, background processing and domain-event patterns across multiple onboarding services.",
      "Added and maintained automated coverage across unit, integration and SpecFlow acceptance tests for complex onboarding and compliance workflows.",
      "Supported enterprise deployment and operational tooling including IIS-hosted Web API services, SQL DACPAC deployment scripts, service installation scripts, telemetry, logging and environment configuration.",
      "Built an Angular 11 and TypeScript single-page application serving as the presentation layer for a Global Client Onboarding platform.",
      "Integrated with multiple ASP.NET Web API services for case, client, risk, document, relationship, work item, snapshot and support operations.",
      "Implemented modular feature areas including case management, legal entity onboarding, natural person onboarding, work queues, search, relationship management, dynamic risk modelling, document handling and support administration.",
      "Used NGXS for client-side state management across complex onboarding workflows.",
      "Built dynamic CDD and EDD risk assessment screens driven by backend risk model definitions, including reusable form controls for text, numeric, date, checkbox and grouped question inputs.",
      "Developed role-based route protection using Angular guards for client owners, onboarding specialists, compliance officers, auditors, first-line monitors and support admins.",
      "Implemented client ownership and relationship structure visualisation using GoJS.",
      "Added Jest-based unit testing across services, models, routing and UI components.",
      "Used Application Insights for frontend monitoring and global error handling.",
      "Supported IIS deployment with production Angular builds, environment configuration and web.config routing support.",
      "Developer on a greenfield project to create a Client Onboarding / KYC application for the bank's global client base following domain driven design principles, microservices architecture and agile methodologies.",
      "Angular 5, SASS, webpack, Karma, Jasmine, Jest, C# Web API, Unity for DI, SpecFlow, MS Test, Dapper and TFS for CD/CI.",
    ],
  },
  {
    company: "ipagoo",
    role: "Software Engineer",
    engagement: "",
    dates: "Apr 2017 - Feb 2018",
    duration: "11 mos",
    location: "London, United Kingdom",
    details: [
      "Full stack developer in a startup that had launched its core product offering the first pan-European current account service.",
      "Tech stack: AngularJS, Web API, C# and SQL Server.",
    ],
  },
  {
    company: "First Derivative",
    role: "Senior Software Developer",
    engagement: "Full-time",
    dates: "Mar 2016 - Apr 2017",
    duration: "1 yr 2 mos",
    location: "Greater London, England, United Kingdom",
    details: ["On-site developer with MUFG, Barclays and Investec."],
  },
  {
    company: "First Derivative",
    role: "Senior Software Developer",
    engagement: "",
    dates: "Jan 2015 - Mar 2016",
    duration: "1 yr 3 mos",
    location: "Belfast Metropolitan Area",
    details: [
      "Developer on a HTML5 dashboard application providing rich visualization of real-time streaming data and optimized polled queries on intra-day and historical data.",
      "Utilized BackboneJS, NodeJS, Gulp and SASS.",
    ],
  },
  {
    company: "CIS Oncology",
    role: "Senior Software Developer",
    engagement: "",
    dates: "Jan 2012 - Mar 2015",
    duration: "3 yrs 3 mos",
    location: "Belfast Metropolitan Area",
    details: [
      "Key member of a small team re-platforming the company's core legacy Visual FoxPro application into a mobile optimized, Metro UI style, HTML5 application.",
      "Used KnockoutJS, LESS, TypeScript, .NET, MVC, C# and SQL Server.",
    ],
  },
  {
    company: "SopraSteria",
    role: "Software Engineer",
    engagement: "",
    dates: "Mar 2007 - Apr 2012",
    duration: "5 yrs 2 mos",
    location: "",
    details: [
      "Supported a Microsoft Dynamics CRM solution including developing web integrated applications in C#.",
      "Developed a web front end and web service to integrate with Microsoft Exchange and Active Directory for GP security questions and automated password resets.",
      "Developed a web service to allow care providers to integrate with Northern Ireland's Patient Administration System.",
      "Contracted to work on Ulster Bank's Retail Website with BlueCube Interactive, developing a website based on an existing RBS platform.",
    ],
  },
  {
    company: "British Judo Association",
    role: "Consultant",
    engagement: "",
    dates: "Sep 2002 - Sep 2010",
    duration: "8 yrs 1 mo",
    location: "",
    details: [
      "Developed website for Sports NGB in 2002 which was live up to 2011. Provided support and consultancy.",
      "In 2010 consulted on development of eCommerce presence, researching and choosing application and hiring freelance developers.",
    ],
  },
  {
    company: "TotalMobile Ltd",
    role: "Computer Programmer",
    engagement: "",
    dates: "Mar 2007 - Sep 2008",
    duration: "1 yr 7 mos",
    location: "",
    details: [
      "Developer of web based application used by local government and housing associations.",
      "Applications developed in C# .NET, SQL Server and Oracle employing web service and XML integration technologies.",
    ],
  },
  {
    company: "Santander UK Corporate & Commercial",
    role: "Application Developer",
    engagement: "",
    dates: "Jan 2000 - Jan 2005",
    duration: "5 yrs 1 mo",
    location: "",
    details: [
      "Member of small team who developed Abbey International's Internet Banking System.",
    ],
  },
];

export const education = [
  {
    institution: "Queen's University Belfast",
    detail: "Russell Group",
    qualification: "BSc. Honours, Accountancy",
    dates: "1997 - 2000",
    notes: [
      "QUB Judo Club - Treasurer",
      "University Blues Awarded Athlete",
      "Irish University Judo Champion 2000",
    ],
  },
  {
    institution: "St. Mary's Christian Brother Grammar Scholl",
    detail: "A levels",
    qualification: "Computers A, Economics A, Maths B",
    dates: "",
    notes: [],
  },
];

export const awards = [
  {
    title: "Best Overall Hack - Santander Open Banking Hackathon 2018",
    issuer: "Santander / The Open Banking Project",
    issued: "Mar 2018",
    detail:
      "In a team with 2 others, a voice enabled banking application was awarded the £10,000 prize for Best Overall Hack in a Hackathon run by Santander and The Open Banking Project.",
  },
];

export const articles = [
  {
    slug: "filling-payments-gap-request-to-pay-psd2",
    title: "Filling a Payments Gap - Request to Pay and PSD2",
    sourceUrl: "https://www.linkedin.com/pulse/filling-payments-gap-request-pay-psd2-neil-pimley",
    created: "2017-12-25",
    published: "2018-01-04",
    topic: "Open Banking, PSD2 and payments",
    excerpt:
      "An exploration of Request to Pay, direct debits, standing orders and the practical payment experience for consumers and retailers.",
    summary:
      "This piece examines the gap between standing orders and direct debits, then uses Request to Pay as a practical PSD2-era model for giving customers more control while still enabling merchants and service providers to collect money efficiently.",
    sections: [
      {
        heading: "Why existing payment methods leave a gap",
        body: "The article contrasts standing orders, where the account holder controls the amount and timing, with direct debits, where a company can collect variable amounts. The argument is that customers need a middle ground that preserves control without breaking the billing workflow for merchants and utilities.",
      },
      {
        heading: "How Request to Pay changes the interaction",
        body: "Request to Pay is presented as a new pattern in which a business sends a payment request and the customer explicitly accepts, rejects or amends it. The central idea is not just faster payment rails, but a negotiation-style payment flow that feels more aligned with modern digital banking.",
      },
      {
        heading: "E-commerce and merchant economics",
        body: "The article extends the concept from recurring bills into online checkout. It frames PSD2 and Open Banking as a route to lower transaction costs, quicker settlement and less dependence on card-based or wallet-based intermediaries, especially for large merchants moving significant volumes.",
      },
      {
        heading: "Point-of-sale and adoption questions",
        body: "The closing discussion looks at physical retail, contactless alternatives, NFC and QR-based flows. Rather than claiming a guaranteed winner, the article treats adoption as a product-and-experience problem where consumer behaviour will decide whether the model succeeds.",
      },
    ],
  },
  {
    slug: "strong-customer-authentication-psd2",
    title: "Strong Customer Authentication - PSD2",
    sourceUrl: "https://www.linkedin.com/pulse/strong-customer-authentication-psd2-neil-pimley-1",
    created: "2018-01-10",
    published: "2018-01-10",
    topic: "Security and authentication",
    excerpt:
      "A plain-English look at strong customer authentication, multi-factor authentication and PSD2 security concerns.",
    summary:
      "This article translates the PSD2 security language around Strong Customer Authentication into practical terms, explaining the factor model behind modern banking login and approval journeys and why simple password-only access is not enough.",
    sections: [
      {
        heading: "What strong authentication actually means",
        body: "The piece starts by stripping away the jargon. It argues that strong authentication is about resistance to realistic attacks, not about adding arbitrary friction, and uses accessible examples to explain why a lone password does not meet that bar for banking.",
      },
      {
        heading: "Knowledge, possession and inherence",
        body: "The core of the article is the three-factor model: something you know, something you have and something you are. It walks through familiar implementations such as PINs, token devices, mobile apps and biometrics, then shows how combining independent factors creates a materially stronger control.",
      },
      {
        heading: "Where two-factor authentication fits",
        body: "It then maps the abstract factor model onto real consumer experiences such as text-message codes and app-based verification. The article treats two-factor authentication as a common implementation pattern rather than a separate concept from strong customer authentication.",
      },
      {
        heading: "Practical security advice",
        body: "The article closes with a usability and security warning: if one factor effectively contains the other, the protection is weaker than it looks. The takeaway is that independence between factors matters just as much as the number of prompts in the flow.",
      },
    ],
  },
  {
    slug: "open-banking-unexpected-twist-psd2",
    title: "Open Banking with Unexpect Twist - PSD2",
    sourceUrl: "https://www.linkedin.com/pulse/open-banking-unexpect-twist-psd2-neil-pimley",
    created: "2018-01-19",
    published: null,
    topic: "REST APIs and Open Banking",
    excerpt:
      "A hands-on investigation into bank-account API access, bearer tokens, Postman and strong customer authentication expectations.",
    summary:
      "This article moves from high-level Open Banking commentary into hands-on API experimentation, using test and third-party tooling to examine how bank-account access behaves in practice and where implementation shortcuts can undermine the spirit of PSD2.",
    sections: [
      {
        heading: "From theory to API experimentation",
        body: "The article begins with the intention to go beyond commentary and make real API calls. It compares sandbox-style developer access with a third-party aggregation service and deliberately approaches the topic from an implementation and security perspective rather than a policy one.",
      },
      {
        heading: "Authentication flow and token handling",
        body: "A large part of the article documents the process of linking a bank account, obtaining a bearer token and then using Postman to query account data. The important observation is that once the token exists, the developer experience becomes trivially simple, which raises immediate questions about how strongly the session is really bound to the user or device.",
      },
      {
        heading: "Security concern revealed by testing",
        body: "The central finding is that passing the token to another person still allowed account-level access in at least one scenario, even if some deeper operations failed. The article treats that as a warning sign that convenience or reverse-engineered integration patterns can drift away from genuine strong customer authentication.",
      },
      {
        heading: "Why implementation quality matters",
        body: "The conclusion is not an anti-Open-Banking argument. Instead it argues that the quality of the implementation matters as much as the regulatory label: a system can appear modern and technically clever while still failing to meet the security expectations customers assume are in place.",
      },
    ],
  },
  {
    slug: "who-bought-what-when-and-where-psd2",
    title: "Who bought what, when and where - PSD2 Enhanced Data",
    sourceUrl: "https://www.linkedin.com/pulse/who-bought-what-when-where-psd2-enhanced-data-neil-pimley",
    created: "2018-01-05",
    published: null,
    topic: "Payments data",
    excerpt:
      "A discussion of enhanced payment data and how richer transaction context could improve statement and retailer experiences.",
    summary:
      "This article focuses on the quality of payments data rather than the payment instruction itself, arguing that richer contextual information can make statements clearer for customers and more useful for merchants and service providers.",
    sections: [
      {
        heading: "The problem with vague transaction lines",
        body: "The opening point is simple: many card or bank-statement descriptions are technically correct but practically unhelpful. Customers often see merchant names or holding-company references that do not clearly explain where the money was actually spent.",
      },
      {
        heading: "What enhanced data could add",
        body: "The article introduces the idea of enhanced data as a way to link more descriptive metadata to a payment. That could include clearer merchant identity and other context that makes it easier for customers to interpret their statements without mentally reconstructing the transaction.",
      },
      {
        heading: "Why this matters beyond convenience",
        body: "Although the article is short, the underlying argument is broader than statement readability. Better data can improve trust, reduce confusion, help with dispute resolution and create stronger downstream experiences for both banks and merchants.",
      },
    ],
  },
  {
    slug: "psd2-retail-banking-customers",
    title: "I've just agreed to what?! PSD2 and Retail Banking Customers",
    sourceUrl: "https://www.linkedin.com/pulse/ive-just-agreed-what-neil-pimley",
    created: "2017-12-15",
    published: "2017-12-18",
    topic: "Retail banking and PSD2",
    excerpt:
      "A customer-focused introduction to PSD2, open banking, third-party account access and payment initiation.",
    summary:
      "This article introduces PSD2 from a customer point of view, using the language of ordinary banking behaviour rather than regulation. It explains why banks were changing their terms and why third-party access was being positioned as a customer-experience opportunity rather than just a compliance burden.",
    sections: [
      {
        heading: "Why the updated banking terms mattered",
        body: "The article starts from a familiar moment: customers receiving updated terms and conditions emails that they rarely read. It uses that moment to highlight how significant the PSD2 changes really were, especially the idea that third parties could access account information and initiate payments.",
      },
      {
        heading: "The convenience case for Open Banking",
        body: "A major theme is aggregation. The article explains that customers often spread their financial lives across several institutions and could benefit from a single application or service that presents a consolidated view rather than forcing them to maintain multiple banking apps and multiple sets of credentials.",
      },
      {
        heading: "Why banks and non-banks both care",
        body: "The article also frames PSD2 as a competitive opening. Banks with stronger digital experiences could gain more engagement, while non-bank or retail platforms could build account-aware payment and insight features once the data and initiation rails were made available.",
      },
      {
        heading: "From data access to payment initiation",
        body: "The piece finishes by pointing toward the next wave of disruption: third parties not just reading data but initiating payments. That sets up the later articles on Request to Pay and broader payment transformation.",
      },
    ],
  },
];

export const projects = [
  {
    title: "Anglo American Supply Chain Manager (Core.SCM)",
    type: "Enterprise Supply Chain",
    detail:
      "Full-stack Angular 17 and .NET C# platform serving commodity trading and logistics operations globally, with Azure Container Apps, Key Vault, SignalR, App Configuration, SQL Server and Azure DevOps.",
    tags: ["Angular 17", ".NET 10", "Azure", "SQL Server"],
  },
  {
    title: "Cloud-native CRM Integration Platform",
    type: "Azure and Salesforce",
    detail:
      "Integration platform connecting trading systems with Salesforce CRM using .NET, Azure services, event-driven patterns, REST APIs and secure OAuth-based integration.",
    tags: ["ASP.NET Core", "Salesforce", "Azure", "CQRS"],
  },
  {
    title: "Rabobank Client Onboarding / KYC",
    type: "Enterprise Banking",
    detail:
      "Global client onboarding and case-management platform spanning ASP.NET Web API services, Angular SPA delivery, KYC and AML workflows, domain events, dynamic risk modelling and regulated onboarding operations.",
    tags: ["ASP.NET Web API", "Angular", "NGXS", "KYC / AML"],
  },
  {
    title: "CIS Oncology Re-platforming",
    type: "Healthcare",
    detail:
      "Re-platformed a legacy Visual FoxPro application into a mobile optimized HTML5 application with .NET, MVC, C# and SQL Server.",
    tags: ["Healthcare", "TypeScript", ".NET MVC", "SQL Server"],
  },
];

export const personalProjects = [
  {
    title: "Belfast Cardiology Clinic",
    url: "https://www.belfastcardiologist.com/",
    type: "Personal Project",
    detail:
      "Built and maintained a website for Belfast Cardiology Clinic and Dr. Peter McKavanagh, covering consultant profile information, patient guidance, contact details and booking journeys.",
    technicalDetail:
      "The live site is a React single-page application with Bootstrap 5 styling, Google Maps integration, Google Analytics and conversion tracking for phone and enquiry interactions.",
    tags: ["React", "Bootstrap 5", "Google Maps", "Healthcare"],
  },
  {
    title: "McKenzies Construction",
    url: "https://www.mckenziesconstruction.co.uk/",
    type: "Personal Project",
    detail:
      "Built and maintained a brochure and lead-generation website for McKenzies Construction, covering services, project galleries, company details and customer enquiries.",
    technicalDetail:
      "The current codebase is an Angular 18 single-page application with TypeScript, Bootstrap 5, Bootstrap Icons, router-based gallery pages, reactive enquiry forms and production build output for a live business website.",
    tags: ["Angular 18", "TypeScript", "Bootstrap", "Lead generation"],
  },
  {
    title: "Fleming Judo School",
    url: "https://www.flemingjudoschool.co.uk/",
    type: "Personal Project",
    detail:
      "Built and maintained a marketing website for Fleming Judo School focused on primary-school judo classes, programme information, sign-up journeys and contact pages.",
    technicalDetail:
      "The local codebase is an Angular 15 application with TypeScript, Bootstrap, routed content pages for about, offer, signup and contact, and a school-facing presentation layer for a live judo website.",
    tags: ["Angular 15", "TypeScript", "Bootstrap", "Education / Sport"],
  },
  {
    title: "Bann Architectural Systems",
    url: "https://bannsrchitectural.netlify.app/",
    type: "Personal Project",
    detail:
      "Built and maintained a marketing website for Bann Architectural Systems covering aluminium glazing products, projects, latest news, company information and contact details.",
    technicalDetail:
      "The local implementation is an Eleventy 3 site using Nunjucks templates, structured JSON data, Netlify deployment and Decap CMS support for content editing through an admin interface.",
    tags: ["Eleventy", "Nunjucks", "Netlify", "Decap CMS"],
  },
];
