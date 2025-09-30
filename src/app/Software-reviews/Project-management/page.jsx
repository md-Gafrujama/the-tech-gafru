"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function ProjectManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Reviews");
  const [sortBy, setSortBy] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState("10 per page");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
 
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "what-is-pm-software",
      title: "What is project management software?",
      active: false,
    },
    {
      id: "best-pm-software",
      title: "What is the best project management software?",
      active: false,
    },
    {
      id: "find-new-software",
      title: "Find your new project management software",
      active: false,
    },
    {
      id: "common-features",
      title: "Common project management software features",
      active: false,
    },
    {
      id: "how-to-choose",
      title: "How to choose the right PM software for your project",
      active: false,
    },
    { id: "pm-faqs", title: "Project management software FAQs", active: false },
  ]);

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
      setOpenSection((prev) => (prev === labelKey ? null : labelKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setTableOfContents((prev) =>
            prev.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
const toolsContent = {
    monday: {
      title: "monday.com: Best overall project management software",
      logo: "/images/monday.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User reviews", score: "4.62/5" },
        { label: "General features", score: "4.38/5" },
        { label: "Pricing", score: "4.01/5" },
        { label: "Interface", score: "4.52/5" },
        { label: "Task management", score: "4.5/5" },
        { label: "Integrations", score: "4.5/5" },
        { label: "Automation", score: "4.9/5" },
        { label: "Project planning and scheduling", score: "4.9/5" },
        { label: "Collaboration tools", score: "4.25/5" },
        { label: "Resource management", score: "3.75/5" },
        { label: "Reporting and analytics", score: "4.9/5" },
        { label: "User security and permissions", score: "4.9/5" },
      ],
      pros: [
        "Can accommodate large-scale organizations.",
        "Straightforward communication and collaboration features.",
        "Advanced automation capabilities.",
      ],
      cons: [
        "May not be ideal for small teams due to its cost and complexity.",
        "Steep learning curve.",
        "Mobile app's limitations on generating and viewing reports.",
      ],
      why: {
        intro: `I chose monday.com for its essential features that efficiently support project management. It offers functionalities that streamline processes and help secure effective project oversight and coordination. Its highly customizable workflow will allow you to tailor the software to your needs:`,
        bullets: [
          "Make informed decisions by leveraging its powerful visualization, with which you can view real-time data in ten different ways.",
          "Save time and avoid human error by automating tasks.",
          "Collaborate, share files, and update stakeholders through its neat cards and tagging system.",
        ],
        outro: `Compared with other project management tools, monday.com has fewer integrations. Despite this minor disadvantage, monday.com is still the best PM software overall because it allows you to perform multiple project management tasks in one platform.`,
        extras: {
          "About monday.com": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://monday.com"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  monday.com{" "}
                </Link>
                can help you streamline tasks, deadlines, and deliverables. It
                was initially created as a collaboration tool and eventually
                evolved into a comprehensive platform that can perform various
                project management functions. Nowadays, it is a leading tool for
                managing workflows, monitoring project progress, and improving
                communication. monday.com also offers other products including a
                CRM, making it one of the best CRM and project management
                software on the market today.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Customizable workflows and boards
              </h4>
              <p className="text-black mb-4">
                With monday.com, you can fine-tune your workflows, views, and
                boards to align them with your project's needs. This level of
                adaptability provides a well-organized visual representation of
                tasks and projects. It also simplifies workflow comprehension
                for stakeholders and helps project managers to easily identify
                bottlenecks and track progress.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Automation capabilities
              </h4>
              <p className="text-black mb-4">
                monday.com's no-code automation builder is quite intuitive; even
                those without technical expertise can easily set up automation
                rules. The platform also provides a variety of predefined
                automation recipes that cover common project management needs,
                such as:
              </p>
              <ul className="list-disc pl-5 text-black space-y-1 mb-4">
                <li>Sending email notifications.</li>
                <li>Updating item statuses.</li>
                <li>
                  Creating new items based on specific triggers or customized
                  automation rules.
                </li>
              </ul>
              <p className="text-black mb-4">
                By automating repetitive tasks, you can focus on the critical
                aspects of your work, thereby increasing overall productivity.
                Automation also helps maintain consistency in task management.
              </p>
              <h4 className="text-lg font-bold mb-2">Collaborative platform</h4>
              <p className="text-black">
                monday.com stands out as a collaboration and communication tool
                because of functionalities such as shared boards, commenting on
                tasks, sharing files, and updating statuses. Each task or item
                has its own conversation thread, allowing members to add
                updates, ask questions, and provide feedback directly. Having a
                definitive flow of communication encourages accountability,
                reduces miscommunication, and enhances team synergy.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                monday.com's pricing can vary to scale with the team's size, and
                the cost may adjust based on the number of seats required. The
                pricing structure below (except for the Free plan) is based on a
                team of three.
              </p>
              <p className="text-black mb-4">
                monday.com has a visually intuitive platform and offers a wide
                range of features. However, adding more users and requiring more
                advanced features for your business can become costly.
                monday.com's pricing is suitable for mid-sized organizations, as
                its mid-tier plans balance features and usability.
              </p>
              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever with up to two seats.</li>
                <li>Includes basic features for personal use.</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Basic plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$27 per month (three seats, billed annually).</li>
                <li>14-day free trial available, no credit card required.</li>
                <li>Prioritized customer support.</li>
                <li>5 GB file storage.</li>
                <li>Create a dashboard based on one board.</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Standard plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>$36 per month (three seats, billed annually).</li>
                <li>14-day free trial available, no credit card required.</li>
                <li>
                  Includes Basic plan features, plus:
                  <ul className="list-disc pl-5">
                    <li>Timeline, Calendar, and Gantt views.</li>
                    <li>Automations (250 actions per month).</li>
                    <li>Integrations (250 actions per month).</li>
                    <li>Create a dashboard that combines five boards.</li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Pro plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>$57 per month (three seats, billed annually).</li>
                <li>14-day free trial available, no credit card required.</li>
                <li>
                  Includes Standard plan features, plus:
                  <ul className="list-disc pl-5">
                    <li>Automations (25,000 actions per month)</li>
                    <li>Integrations (25,000 actions per month).</li>
                    <li>Time tracking.</li>
                    <li>Formula column.</li>
                    <li>Create a dashboard that combines 10 boards.</li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>
                <li>
                  Includes Pro plan features, plus:
                  <ul className="list-disc pl-5">
                    <li>Enterprise-scale automations and integrations.</li>
                    <li>Enterprise-grade security and governance.</li>
                    <li>Multi-level permissions.</li>
                    <li>Enterprise support.</li>
                    <li>Advanced reporting and analytics.</li>
                    <li>Create a dashboard that combines 50 boards.</li>
                  </ul>
                </li>
              </ul>
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
    asana: {
      title: "Asana: Best project management software for ease of use",
      logo: "/images/asana.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User reviews", score: "4.38/5" },
        { label: "General features", score: "4.53/5" },
        { label: "Pricing", score: "4.9/5" },
        { label: "Interface", score: "4.9/5" },
        { label: "Task management", score: "4.5/5" },
        { label: "Integrations", score: "4.25/5" },
        { label: "Automation", score: "2.5/5" },
        { label: "Project planning and scheduling", score: "4.9/5" },
        { label: "Collaboration tools", score: "4.75/5" },
        { label: "Resource management", score: "2.5/5" },
        { label: "Reporting and analytics", score: "4.9/5" },
        { label: "User security and permissions", score: "4.9/5" },
      ],
      pros: [
        "Intuitive interface with straightforward navigation.",
        "Free plan can accommodate up to 10 users.",
      ],
      cons: [
        "Task assignments are limited to one person only, which can lead to bottlenecks.",
        "Limited exporting and importing functionality for reporting and analysis.",
      ],
      why: {
        intro: `I chose Asana for its straightforward yet feature-rich interface that is easy to navigate, even for beginners. With fewer clicks than monday.com and Jira, you can quickly change views from list to board or timeline. Despite some limitations on assigning tasks and exporting functionality, Asana's organized software navigation makes it the go-to choice for businesses seeking to simplify workflow and manage tasks with less fuss and a gentle learning curve.`,

        extras: {
          "About Asana": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://asana.com"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Asana{" "}
                </Link>
                was initially designed as a tool to improve team collaboration
                and productivity. After years of development, Asana has become
                one of the best project management software solutions on the
                market for small businesses. Asana's key focus is to offer a
                clean and straightforward interface so that users with varying
                levels of technical expertise can use it. On top of its neat,
                user-friendly interface, Asana also provides robust task
                management capabilities, multiple project views, and
                collaboration features.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Multi-homing tasks across projects
              </h4>
              <p className="text-black mb-4">
                Asana lets your team add a single task to multiple projects or
                to multiple sections within a project, a feature called
                multi-homing. This feature ensures that all relevant
                stakeholders have access and visibility to the task and can
                collaborate on it. It's particularly useful for work with
                overlapping responsibilities or within integrated workflows.
              </p>
              <h4 className="text-lg font-bold mb-2">Task covers</h4>
              <p className="text-black mb-4">
                Asana now offers task covers, a.k.a. thumbnail images for tasks,
                to make project management more intuitive and visually
                appealing. This picture provides a quick visual preview of what
                each assignment involves. With task covers, you'll get instant
                graphic context to recognize tasks more efficiently. This
                feature sets Asana apart by blending functionality with a
                personalized touch.
              </p>
              <h4 className="text-lg font-bold mb-2">Workload view</h4>
              <p className="text-black mb-4">
                Asana's workload reporting feature visually represents the
                team's capacity and helps a project manager ensure no one is
                overwhelmed or underutilized. Unlike ClickUp's workload view,
                which displays data in color-coded bars, Asana presents the data
                in a neat graph to better understand the team's workload. This
                feature in Asana is available for Advanced and Enterprise
                customers.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                Asana's pricing structure is quite competitive, but if you
                require advanced features, you'll find them paywalled behind
                higher-tier plans. For mid-tier companies, Asana provides
                excellent value for money through its mid-tier plans, as they
                offer competent functionalities for their price.
              </p>

              <h4 className="text-lg font-bold mb-2">Personal plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever for up to 10 teammates.</li>
                <li>Unlimited file storage (100 MB per file).</li>
                <li>Basic views like list, board, and calendar.</li>
                <li>Basic search filters and status updates.</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Starter plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$10.99 per user per month (billed annually).</li>
                <li>30-day free trial available, no credit card required .</li>
                <li>Includes Personal plan features, plus</li>
              </ul>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Up to 500 teammates.</li>
                <li>
                  <Link href="https://asana.com/ai" className="text-green-600 hover:text-green-700 font-medium underline">
                    Asana Intelligence{" "}
                  </Link>
                  (AI for work and project management).
                </li>
                <li>Gantt view.</li>
                <li>Custom project templates and forms.</li>
                <li>250 automations per month.</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Advanced plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>$24.99 per user per month (billed annually)..</li>
                <li>30-day free trial available, no credit card required.</li>
                <li>
                  Includes Starter plan features, plus:
                  <ul className="list-disc pl-5">
                    <li>Set goals and connect them to work.</li>
                    <li>
                      Workload feature to assess team bandwidth and load balance
                      tasks.
                    </li>
                    <li>20 portfolios.</li>
                    <li>25,000 automations per month. </li>
                    <li>Time tracking and advanced reporting.</li>
                    <li>Lock custom fields and scaled security. </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>

                <li>
                  Includes Advanced plan features, plus:
                  <ul className="list-disc pl-5">
                    <li>No user limit.</li>
                    <li>
                      Advanced integrations with Salesforce, Tableau, and Power
                      BI.
                    </li>
                    <li>Resource management.</li>
                    <li>Advanced security and admin controls through SAML. </li>
                    <li>Premium support. </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise + plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>
                <li>
                  Includes all Enterprise Plan features with additional
                  customization and support options for large or complex
                  organizations.
                </li>
              </ul>
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
    wrike: {
      title: "Wrike: Most versatile project management software",
      logo: "/images/wrike-logo.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User reviews", score: "4.16/5" },
        { label: "General features", score: "4.77/5" },
        { label: "Pricing", score: "4.41/5" },
        { label: "Interface", score: "4.05/5" },
        { label: "Task management", score: "4.5/5" },
        { label: "Integrations", score: "4.5/5" },
        { label: "Automation", score: "4/5" },
        { label: "Project planning and scheduling", score: "4.9/5" },
        { label: "Collaboration tools", score: "4.75/5" },
        { label: "Resource management", score: "3.75/5" },
        { label: "Reporting and analytics", score: "4.9/5" },
        { label: "User security and permissions", score: "3.75/5" },
      ],
      pros: [
        "Flexible project templates.",
        "Effortless task management.",
        "Quick access to customer support through its floating chat icon.",
      ],
      cons: [
        "Can be overwhelming for beginners.",
        "Some users report slow load times.",
      ],
      why: {
        intro: (
          <>
            I chose Wrike because of its ability to adapt to different business
            models and{" "}
            <Link
              href="https://wrike.com/project-management-guide/"
              className="text-[#386861] hover:text-green-700 font-medium underline"
            >
              project management strategies
            </Link>
            . This versatility makes it a perfect choice for project managers
            handling multiple projects simultaneously. Even though some users
            think the platform's aesthetic is a bit lackluster, Wrike contains
            features essential for keeping track of tasks, deliverables, and
            progress.
          </>
        ),

        outro: `While Asana offers a streamlined, high-level interface for work management, Wrike provides a granular and detailed way of resource allocation.`,

        extras: {
          "About Wrike": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://wrike.com"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Wrike
                </Link>{" "}
                provides robust task management features, real-time analytics,
                and reports within a simple, neat-looking platform. You can also
                rename the fields within a project or duplicate an existing
                project's format as a template. Its flexibility makes it a
                versatile tool catering to various business needs. It can also
                support the waterfall PM framework and Agile methodologies such
                as Scrum and Kanban.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Interactive Gantt charts
              </h4>
              <p className="text-black mb-4">
                Wrike's Gantt chart feature is highly interactive and allows
                users to create, adjust, and link tasks directly within the
                chart. Wrike's interactive Gantt charts can easily identify task
                durations, dependencies, and milestones through intuitive
                drag-and-drop actions. Additionally, Wrike's Gantt chart can
                also perform a{" "}
                <Link
                  href="https://wrike.com/project-management-guide/faq/what-is-critical-path-method/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  critical path analysis
                </Link>{" "}
                and highlight the sequence of tasks that directly impact the
                project's completion date.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Highly customizable workflows
              </h4>
              <p className="text-black mb-4">
                Wrike stands out for its versatility as project management
                software. Fields and labels can be adjusted easily to make sure
                the project meets its requirements. This level of flexibility
                offers a detailed visual map or representation of the workflow
                or project stages.
              </p>
              <h4 className="text-lg font-bold mb-2">Wrike Lock</h4>
              <p className="text-black mb-4">
                While other PM software solutions use third-party integrations
                for data encryption, Wrike developed Wrike Lock, which is
                available as a paid add-on feature. Wrike Lock is an additional
                layer of encryption on top of standard encryption for workspace
                data and files. It uses AES-256 encryption keys, and it allows
                project managers to have a clear view of who is accessing the
                data and when. This feature enables businesses to use cloud
                applications with fewer worries.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                Overall, Wrike's pricing and plans can accommodate a wide range
                of users, from individuals to large organizations. Furthermore,
                Wrike's Business plan offers a robust set of tools. However, its
                value for money might be less compelling than ClickUp's
                offerings at similar or lower price points.
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever for unlimited users.</li>
                <li>Basic project and task management features.</li>
                <li>Board and table views.</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Team plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$10.00 per user per month (billed annually).</li>
                <li>14-day free trial available, no credit card required.</li>
                <li>Everything from the Free plan, plus:</li>
              </ul>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Unlimited projects, tasks, and subtasks.</li>
                <li>Unlimited custom fields and request forms.</li>
                <li>Up to 20 free collaborators.</li>
                <li>Gantt charts.</li>
                <li>Automations (50 actions/user/month).</li>
                <li>Analytics and calendar views.</li>
                <li>Use case templates..</li>
                <li>One-click sign-in.</li>
                <li>2 GB storage per user.</li>
                <li>Generative AI tool.</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Business plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>$25 per user, per month (billed annually).</li>
                <li>5–200 users.</li>
                <li>14-day free trial available, no credit card required. </li>
                <li>
                  Everything from the Team plan, plus:
                  <ul className="list-disc pl-5">
                    <li>Automations (200 actions/user/month).</li>
                    <li>AI risk prediction and work creation.</li>
                    <li>Resource management: workloads and time tracking.</li>
                    <li>Reports and unlimited dashboards. </li>
                    <li>User groups and permissions.</li>
                    <li>DAM Integrations and Cloud Content Connector. </li>
                    <li>Adobe Creative Cloud Extensions. </li>
                    <li>5 GB storage per user. </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>

                <li>
                  Everything from the Business plan, plus:
                  <ul className="list-disc pl-5">
                    <li>Unlimited users; five users minimum</li>
                    <li>
                      SAML-based SSO (Users can sign in just once to access both
                      Wrike and other associated applications).
                    </li>
                    <li>Two-factor authentication (2FA).</li>
                    <li>Custom access roles. </li>
                    <li>Customizable user types.</li>
                    <li> Admin permissions.</li>
                    <li>Automations (1000 actions/user/month).</li>
                    <li>10 GB storage per user.</li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Pinnacle plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>
                <li>Everything from the Enterprise plan, plus:</li>
                <ul className="list-disc pl-5">
                  <li>Unlimited users; five users minimum</li>
                  <li>Locked spaces.</li>
                  <li>Advanced reporting and BI.</li>
                  <li>Team utilization and performance dashboard.</li>
                  <li>Job roles.</li>
                  <li>Budgeting and billable hours.</li>
                  <li>Automations (1,500 actions/user/month).</li>
                </ul>
              </ul>
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
    Jira: {
      title: "Jira: Best Agile project management software",
      logo: "/images/Jira.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User reviews", score: "4.67/5" },
        { label: "General features", score: "4.9/5" },
        { label: "Pricing", score: "3.7/5" },
        { label: "Interface", score: "4.3/5" },
        { label: "Task management", score: "4.5/5" },
        { label: "Integrations", score: "4.75/5" },
        { label: "Automation", score: "4/5" },
        { label: "Project planning and scheduling", score: "4.9/5" },
        { label: "Collaboration tools", score: "4.75/5" },
        { label: "Resource management", score: "4.9/5" },
        { label: "Reporting and analytics", score: "4.9/5" },
        { label: "User security and permissions", score: "4.9/5" },
      ],
      pros: [
        "Designed to support Agile methodologies.",
        "Offers 4,000+ integrations through the Atlassian marketplace.",
        "Real-time tracking capabilities.",
      ],
      cons: [
        "May not align well with the waterfall model.",
        "Complex initial setup.",
      ],
      why: {
        intro: (
          <>
            I chose Jira for its Agile-specific tools and templates. Its
            features, such as customizable boards, backlogs, sprints, and
            reports, make it ideal for organizations that follow the{" "}
            <Link
              href="https://www.atlassian.com/agile"
              className="text-[#386861] hover:text-green-700 font-medium underline"
            >
              Scrum or Kanban
            </Link>{" "}
            framework.
          </>
        ),

        outro: `Furthermore, Jira's capacity to integrate into the Atlassian ecosystem and other productivity tools helps teams centralize project details and collaborate across different platforms. Its ability to tailor-fit workflows can help you modify Jira's functionalities to align with your project needs.`,

        extras: {
          "About Jira": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://www.atlassian.com/software/jira"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Jira
                </Link>{" "}
                was primarily designed for software development and issue
                tracking. It has since evolved and developed its capabilities.
                Nowadays, even non-IT organizations use Jira for progress
                tracking and project management.
              </p>
              <p>
                Since Jira is part of the Atlassian ecosystem, it also offers a
                unified user experience for users who work with multiple
                Atlassian tools. Jira also has advanced capabilities for
                supporting Agile{" "}
                <Link
                  href="https://www.atlassian.com/agile/project-management"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  project management methodologies
                </Link>{" "}
                through better integration with CI/CD and Agile planning tools
                within the Atlassian suite.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Agile-focused features</h4>
              <p className="text-black mb-4">
                In addition to offering Scrum or Kanban boards and sprint
                planning tools, Jira stands out as the go-to choice for Agile
                teams because of its Agile reporting tools. Other PM tools
                require third-party integrations to generate these charts and
                graphs, but Jira offers these reporting tools as native
                features. These reporting tools help provide a detailed view of
                team performance through Agile-specific reports such as velocity
                charts, burndown charts, and cumulative flow diagrams.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Extensive integration options
              </h4>
              <p className="text-black mb-4">
                As part of the Atlassian ecosystem, Jira can integrate with
                other Atlassian products like Confluence, Bitbucket, and Trello.
                After setting up their Confluence accounts, Agile teams can
                directly link project documentation, requirements, and decision
                records to Jira issues and sprints. Additionally, by integrating
                with Atlassian’s control system, Agile teams can link commits,
                branches, and pull requests to Jira issues.
              </p>

              <p className="text-black mb-4">
                In addition to integrating within the Atlassian ecosystem, Jira
                can also integrate with other tools outside this suite. These
                include software development tools, communication platforms,
                tracking apps, and customer relationship management (CRM)
                systems.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                If you manage software development teams or organizations
                following Agile methodologies, Jira can provide great value for
                your money. Jira’s features and functionalities suit these Agile
                frameworks, such as generating detailed Agile reports like
                burndown charts, velocity charts, and cumulative flow diagrams.
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever for up to 10 users.</li>
                <li>Unlimited project boards and tasks.</li>
                <li>Automation (100 rule runs per month)</li>
                <li>100 email notifications per day.</li>
                <li>2 GB file storage.</li>
                <li>Community support. </li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Standard Plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$875 billed annually for 10 users.</li>
                <li>Up to 50,000 users.</li>
                <li>Everything from the Free plan, plus:</li>
              </ul>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>User roles and permissions.</li>
                <li>Audit logs.</li>
                <li>250 GB of storage.</li>
                <li>Business hour support..</li>
                <li>Automation (1,700 rule runs per month).</li>
                <li>Unlimited email notifications.</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Premium Plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>$1,700 billed annually for 10 users.</li>
                <li>Up to 50,000 users.</li>

                <li>
                  Everything from the Standard plan, plus:
                  <ul className="list-disc pl-5">
                    <li>
                      Automation (1,000 rule runs per month per paid user).
                    </li>
                    <li>Unlimited storage.</li>
                    <li>24/7 premium support.</li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise plan</h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>
                <li>Up to 50,000 users.</li>
                <li>
                  Everything from the Premium plan, plus:
                  <ul className="list-disc pl-5">
                    <li>Multiple sites, up to 150.</li>
                    <li>24/7 Enterprise support.</li>
                    <li>Unlimited automation.</li>
                    <li>Advanced admin controls and security. </li>
                  </ul>
                </li>
              </ul>
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
   ClickUp: {
      title:
        "ClickUp: Best project management software for resource management",
      logo: "/images/clickup.png",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User reviews", score: "4.67/5" },
        { label: "General features", score: "4.9/5" },
        { label: "Pricing", score: "3.7/5" },
        { label: "Interface", score: "4.29/5" },
        { label: "Task management", score: "4.5/5" },
        { label: "Integrations", score: "4.75/5" },
        { label: "Automation", score: "4/5" },
        { label: "Project planning and scheduling", score: "4.9/5" },
        { label: "Collaboration tools", score: "4.75/5" },
        { label: "Resource management", score: "4.9/5" },
        { label: "Reporting and analytics", score: "4.9/5" },
        { label: "User security and permissions", score: "4.9/5" },
      ],
      pros: [
        "Native time-tracking feature is available for all paid plans.",
        "Competitive pricing structure for mid-sized companies.",
      ],
      cons: [
        "Steep learning curve.",
        "Some integrations only offer basic connectivity.",
      ],
      why: {
        intro: `I chose ClickUp because it demonstrates strength in resource management, which is integral to project management. Its native time tracking and extensive reporting features help project managers streamline workflow and effectively monitor resource utilization and project progress.`,

        outro: `
Despite drawbacks, such as the lack of phone support and limited mobile app functionality, ClickUp is still a great contender because of its advanced time-tracking feature that can help you allocate and manage resources efficiently.`,

        extras: {
          "About ClickUp": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  ClickUp
                </Link>{" "}
                is a cloud-based project management software initially developed
                as a team management platform. After further software
                development, ClickUp now offers features that enhance work and
                task management, making it a sound choice for streamlining
                workflows. With its highly customizable user interface (UI),
                ClickUp consolidates various work management and collaboration
                tools into a single interface.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Native time tracking</h4>
              <p className="text-black mb-4">
                ClickUp's native time tracking, which is available on all paid
                plans, helps teams monitor time spent on specific tasks. While
                monday.com offers native time tracking with basic
                functionalities, ClickUp's time tracking is configurable and
                offers advanced capabilities. It allows users to manually input
                time entries and create custom statuses, workflows, and
                time-tracking settings specific to their project needs.
              </p>
              <p className="text-black mb-4">
                This feature is helpful for companies that need to keep track of
                billable hours. Some examples include creative agencies,
                software development teams, and legal services. Native time
                tracking also enhances resource management by helping you
                accurately allocate resources and monitor ongoing tasks in real
                time.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Comprehensive reporting
              </h4>
              <p className="text-black mb-4">
                ClickUp offers reporting features that are well-suited to many
                different types of teams. You can quickly generate detailed
                reports based on project progress, team performance, and
                resource allocation. After you generate these reports, ClickUp
                can export them in PDF, CSV, and Excel formats. Combining this
                functionality with its native time-tracking feature gives
                ClickUp an edge in demonstrating distinction over its
                competitors.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                Considering the comprehensive features this PM tool offers (even
                in its free plan), ClickUp stands out for its affordability.
                Additionally, ClickUp's Enterprise plan is worth considering for
                its flexibility and comprehensive feature set at potentially
                lower costs than its competitors.
              </p>

              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever, unlimited free plan members.</li>
                <li>100 MB storage.</li>
                <li>Unlimited tasks.</li>
                <li>Collaborative documents and whiteboards.</li>
                <li>Real-time chat.</li>
                <li>Kanban board view and calendar view.</li>
                <li>Sprint management.</li>
                <li>In-app video recording.</li>
                <li>24/7 support.</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Unlimited plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$7 per user per month (billed annually).</li>
                <li>14-day free trial; no credit card required.</li>
                <li>Everything in the Free plan, plus:</li>
              </ul>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Unlimited storage and integrations.</li>
                <li>Gantt charts.</li>
                <li>Unlimited custom fields.</li>

                <li>
                  Email in ClickUp (send and receive emails directly within a
                  task).
                </li>
                <li>Native time tracking and resource management.</li>
                <li>Agile reporting.</li>
                <li>Compatible with AI add-on ($7 per user per month).</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Business </h4>
              <ul className="list-disc pl-5 text-black">
                <li>$12 per user per month (billed annually).</li>
                <li>14-day free trial; no credit card required.</li>

                <li>
                  Everything in the Unlimited plan, plus:
                  <ul className="list-disc pl-5">
                    <li>Unlimited teams.</li>
                    <li>Advanced time tracking.</li>
                    <li>Timesheet and workload management.</li>
                    <li>Timelines and mind maps. </li>
                    <li>Custom exporting.</li>
                    <li>Advanced automations. </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise </h4>
              <ul className="list-disc pl-5 text-black">
                <li>Requires custom pricing.</li>

                <li>
                  Everything in the Business plan, plus:
                  <ul className="list-disc pl-5">
                    <li>Advanced permissions.</li>
                    <li>Default personal views.</li>
                    <li>Custom capacity in workload</li>
                    <li>Enterprise API.</li>
                    <li>Live onboarding training.</li>
                  </ul>
                </li>
              </ul>
            </>
          ),
          Gallery: (
            <>
              <p>
                Gallery Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Inventore tenetur asperiores facilis, sit dolorum sunt
                laborum magni quam repellendus adipisci quas fugiat vero
                consequatur incidunt.
              </p>
            </>
          ),
        },
      },
    },
  };

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const faqData = [
    {
      question: "What are the benefits of using project management tools?",
      answer:
        "The benefits of using project management tools include improved organization, increased efficiency, enhanced collaboration, and better visibility into project progress.",
    },
    {
      question: "How does project management software improve productivity?",
      answer:
        "It streamlines task coordination and resource management, provides real-time data and analytics, and helps complete projects efficiently and within budget.",
    },
    {
      question:
        "What are the cost considerations when choosing project management software?",
      answer:
        "Costs for project management software can vary based on features, the number of users, and the deployment type. It’s essential to consider both upfront costs and long-term value when selecting a tool.",
    },
    {
      question: "What is the job of a project manager?",
      answer:
        "Project managers are responsible for the entire project from beginning to end and coordinate between different teams or departments. Project managers handle all aspects of the project, such as setting goals and timelines, creating budgets, delegating tasks, and communicating with stakeholders.",
    },
    {
      question: "What are the five basics of project management?",
      answer: `
      There are five basic principles of success that you should follow to avoid project management mistakes:
      <ol>
        <li>Address questions and concerns at the beginning of the project.</li>
        <li>Create project goals that spell out details such as deadlines and deliverables.</li>
        <li>Define each person’s role(s) and communicate them clearly to your team.</li>
        <li>Track progress over time and proactively look for risks and roadblocks.</li>
        <li>Double-check that all deliverables have been met before finalizing the project.</li>
      </ol>
    `,
    },
    {
      question: "What tools do project managers use?",
      answer:
        "Project managers use many tools to ensure their projects stay on track, such as time trackers, budgeting tools, meeting agendas, calendars, email, and more. The best project management software combines all these tools into one centralized platform so that project managers only have to use one login to access them all.",
    },
    {
      question: "How many phases are there in project management?",
      answer:
        "There are five phases in the project management life cycle: initiation, planning, execution, monitoring, and closure five phases of project management.",
    },
  ];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Best Project Management Software for 2025";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

  const evaluationCriteria = [
    { criteria: "User scores", weight: "5%" },
    { criteria: "General features", weight: "8%" },
    { criteria: "Pricing", weight: "10.5%" },
    { criteria: "Interface", weight: "10.5%" },
    { criteria: "Task management", weight: "10%" },
    { criteria: "Integrations", weight: "10%" },
    { criteria: "Automation", weight: "10%" },
    { criteria: "Project planning and scheduling", weight: "10%" },
    { criteria: "Collaboration tools", weight: "10%" },
    { criteria: "Resource management", weight: "7%" },
    { criteria: "Reporting and analysis", weight: "5%" },
    { criteria: "User security and permissions", weight: "4%" },
    { criteria: "TOTAL", weight: "100%" },
  ];
 

  return (
    <>
      <Head>
        <title>
          Best Project Management Software for 2025 | Complete Guide
        </title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Project Management Software for 2025"
        />
        <meta
          property="og:description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/project-management"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Technology Advice" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Project Management Software for 2025"
        />
        <meta
          name="twitter:description"
          content="Comprehensive guide to choosing the best project management software for your business needs."
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/project-management"
        />
      </Head>

      <div className="min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Breadcrumb Navigation */}
          <nav
            className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16"
            aria-label="Breadcrumb"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Go to homepage"
              >
                <span>Home</span>
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white font-medium">
                Best Project Management Software for 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Best Project Management Software for
              <span className="block mt-2 sm:mt-4">2025</span>
            </h1>
          </div>

          

          {/* Disclaimer Section */}
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                <p>
                  <span className="font-semibold text-white">
                    Technology Advice
                  </span>{" "}
                  is able to offer our services for free because some vendors
                  may pay us for web traffic or other sales opportunities. Our
                  mission is to help technology buyers make better purchasing
                  decisions, so we provide you with information for all vendors
                  — even those that don't pay us.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Table of Contents - Left Sidebar */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div
                className="bg-white rounded-4xl shadow-sm border border-gray-200 p-6"
                style={{ scrollBehavior: "smooth" }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${
                        item.active
                          ? "bg-green-50 text-[#386861] border-l-4 border-green-500 font-medium"
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={shareOnFacebook}
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="flex-1 max-w-4xl">
              <section id="what-is-pm-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What is project management software?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Project management (PM) software helps businesses and
                      organizations achieve their goals and objectives more
                      efficiently and effectively. It guides project managers
                      and stakeholders through different{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        phases of the project management life cycle
                      </a>
                      , especially during{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        project planning
                      </a>
                      , execution, and monitoring.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      With functions that include{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        project planning
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        scheduling
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        task management
                      </a>
                      , and resource allocation, the right{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        project management
                      </a>{" "}
                      tool enables teams to streamline the intricate project
                      management process. Furthermore, these PM software
                      solutions help stakeholders stay on the same page through
                      features that enhance file sharing, communication, and{" "}
                      <a
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        collaboration
                      </a>
                      .
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      I reviewed seven project management software solutions and
                      narrowed my list of recommendations to the best of the
                      best:
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861] "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            monday.com
                          </a>{" "}
                          is the best overall project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861] "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Asana
                          </a>{" "}
                          is the best project management software for ease of
                          use.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Wrike
                          </a>{" "}
                          is the most versatile project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861] "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Jira
                          </a>{" "}
                          is the best Agile project management software.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            ClickUp
                          </a>{" "}
                          is the best project management software for resource
                          management.
                        </p>
                      </div>
                    </div>

                    {/* Expandable Sections */}
                    <div className="space-y-4">
                      {/* Update Notes Section */}
                      <div className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection("update-notes")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">
                            Update notes
                          </h3>
                          <div className="text-[#386861]">
                            {expandedSections["update-notes"] ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </div>
                        </button>
                        {expandedSections["update-notes"] && (
                          <div className="px-4 pb-4 border-t border-gray-200">
                            <div className="pt-4">
                              <ul className="space-y-2 text-gray-700">
                                <li>
                                  • October 25, 2024: Kara Sherrer revised the
                                  copy for clarity and accuracy, in addition to
                                  adding more screenshots of each software.
                                </li>
                                <li>
                                  • February 23, 2024:{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 font-medium underline"
                                  >
                                    Irene Casucian​{" "}
                                  </a>
                                  ​ reviewed and revised the copy for clarity,
                                  accuracy, and depth. She added our expert
                                  recommendations to help project managers make
                                  informed decisions in selecting the right
                                  project management software for their needs.
                                  She also added dynamic design elements to
                                  improve the visual flow of information.
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Our Methodology Section */}
                      <div className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleSection("methodology")}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-gray-900">
                            Our methodology
                          </h3>
                          <div className="text-[#386861]">
                            {expandedSections["methodology"] ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </div>
                        </button>
                        {expandedSections["methodology"] && (
                          <div className="px-4 pb-4 border-t border-gray-200">
                            <div className="pt-4 space-y-4">
                              <p className="text-gray-700">
                                I picked my recommendations with you in mind.
                              </p>
                              <p className="text-gray-700">
                                First, I evaluated seven of the leading project
                                management software options available today. To
                                compile my research, I reviewed vendor demos,
                                technical documentation, and user reviews from
                                customers like you.
                              </p>
                              <p className="text-gray-700">
                                I then narrowed my selections to the platforms
                                that best addressed the usual concerns among
                                project management software users: task
                                management, automation capabilities,
                                integration, collaboration, scalability, project
                                planning, and resource management.
                              </p>
                              <p className="text-gray-700 mb-4">
                                During our research, I evaluated the following
                                vendors:
                              </p>
                              <ol className="space-y-2 text-gray-700">
                                <li>
                                  1.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    monday.com
                                  </a>
                                </li>
                                <li>
                                  2.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    Jira
                                  </a>
                                </li>
                                <li>
                                  3.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    Trello
                                  </a>
                                </li>
                                <li>
                                  4.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    Asana
                                  </a>
                                </li>
                                <li>
                                  5.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    Airtable
                                  </a>
                                </li>
                                <li>
                                  6.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    Wrike
                                  </a>
                                </li>
                                <li>
                                  7.{" "}
                                  <a
                                    href="#"
                                    className="text-[#386861] hover:text-green-700 underline"
                                  >
                                    ClickUp
                                  </a>
                                </li>
                              </ol>
                              <p className="text-gray-700 mt-4">
                                As the market evolves, I continually reevaluate
                                my choices so you always receive the best
                                insight for purchasing decisions.
                              </p>

                              {/* Evaluation Rubric */}
                              <div className="mt-6">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                  Evaluation rubric
                                </h4>
                                <div className="overflow-x-auto">
                                  <table className="w-full border-collapse border border-gray-300">
                                    <tbody>
                                      {evaluationCriteria.map((item, index) => (
                                        <tr
                                          key={index}
                                          className={
                                            index ===
                                            evaluationCriteria.length - 1
                                              ? "bg-gray-50 font-semibold"
                                              : ""
                                          }
                                        >
                                          <td className="border border-gray-300 px-4 py-3 text-gray-900">
                                            {item.criteria}
                                          </td>
                                          <td className="border border-gray-300 px-4 py-3 text-gray-900">
                                            {item.weight}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Featured partners
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white  font-bold">i</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4">
      <div className="w-16 h-16 flex-shrink-0">
        <Image
          src="/images/project3.jpg"
          alt="Zoho Logo"
          width={64}
          height={64}
          className="w-full h-full object-contain"
          priority={false}
        />
      </div>
      <div className="text-xl font-bold text-gray-900">
        Zoho
        <br />
        <span className="text-lg">Projects</span>
      </div>
    </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-[#386861] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Any Company Size
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Agile Development, Analytics / Reports, API, and 15 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        BitBucket, GitHub, Google Calendar, and 7 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* what are best project management tools */}
              <section id="best-pm-software">
                {/* Common Heading */}

                <h1 className="text-3xl font-bold mt-4 text-black mb-2">
                  What is the best project management software?
                </h1>

                {/* Map through the tools array */}
                {toolsArray.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
                  >
                    {/* Tool Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Image
                            src={tool.logo}
                            alt={`${tool.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-black">
                          {tool.title}
                        </h2>
                      </div>
                      <a
                        href={tool.button.link}
                        className="bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                      >
                        {tool.button.text}
                      </a>
                    </div>

                    {/* Scores */}
                    <div className="space-y-4 text-black mb-6">
                      {tool.scores.map((score, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm font-medium mb-1">
                            <span>{score.label}</span>
                            <span>{score.score}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-[#386861] h-2 rounded-full"
                              style={{
                                width: `${
                                  (parseFloat(score.score) / 5) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pros</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cons</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Why I Chose Section */}
                    <div className="mb-6 text-black">
                      <h3 className="text-lg font-semibold mb-2">
                        Why I chose {tool.title.split(":")[0]}
                      </h3>
                      <p className="mb-4">{tool.why.intro}</p>
                      {tool.why.bullets && (
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {tool.why.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      <p>{tool.why.outro}</p>
                    </div>

                    {/* Expandable Sections */}
                    {tool.why.extras &&
                      Object.entries(tool.why.extras).map(
                        ([label, content]) => {
                          const sectionKey = `${tool.id}-${label}`;
                          return (
                            <div
                              key={sectionKey}
                              className="border-t text-black pt-4 mb-4"
                            >
                              <button
                                onClick={() => toggleSection(sectionKey)}
                                className="w-full flex justify-between items-center font-medium"
                              >
                                <span>{label}</span>
                                <span className="text-[#386861]">
                                  {openSections[sectionKey] ? (
                                    <Minus className="w-5 h-5" />
                                  ) : (
                                    <Plus className="w-5 h-5" />
                                  )}
                                </span>
                              </button>
                              {openSections[sectionKey] && (
                                <div className="mt-2 text-gray-700">
                                  {typeof content === "string" ? (
                                    <p>{content}</p>
                                  ) : (
                                    content
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }
                      )}
                  </div>
                ))}
              </section>

              
              {/* ZOHO  products details */}

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/project3.jpg" // Replace with your actual logo path
                          alt="Zoho Projects Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Zoho Projects
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Micro (0-49 Employees),
                        </span>
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Small (50-249 Employees),
                        </span>
                        <span className="text-gray-600">Any Company Size</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Zoho Projects is an online project management software
                      that helps teams plan projects and track them efficiently
                      to the finish line. By intuitive reporting of project
                      progress and budget health, the solution enables teams to
                      make quick decisions. Catering to all kinds of teams, Zoho
                      Projects facilitates automating tasks, workflows, and
                      project notifications in a bid to improve productivity.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Zoho Projects
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.zoho.com/projects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2-Plan products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/2-plan.png" // Replace with your actual logo path
                          alt="2-Plan Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          2-Plan
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      2-plan, a German company, has developed free project
                      management software with many modules for business owners
                      to track and manage all aspects of their business with
                      greater efficacy. TechnologyAdvice can let prospective
                      users engage with a free online demo, allowing for more
                      thorough evaluation before they download one of 2-plan's
                      project management software solutions.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 2-Plan
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.2-plan.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

          {/* 24SevenOffice  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/24seven.png" // Replace with your actual logo path
                          alt=" 24SevenOffice Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          24SevenOffice
                        </h1>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-[#386861] text-lg">★★★★★</span>
                          </div>
                          <span className="text-sm sm:text-base font-medium text-gray-700">5</span>
                          <span className="text-sm text-gray-500">( 1 review )</span>
                        </div>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text- [#386861]hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      24SevenOffice is optimized for companies that need a
                      powerful, customizable project management solution.
                      24SevenOffice is versatile and powerful enough that many
                      businesses consider the product to be a full enterprise
                      resource planning (ERP) solution.
                    </p>

                    <Link
                      href="/learn-more/24SevenOffice"
                      className="text-sm sm:text-base md:text-lg text-[#386861]  hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 24SevenOffice
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.24sevenoffice.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 4castplus  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/4cast.png" // Replace with your actual logo path
                          alt="4castplus Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          4castplus
                        </h1>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-[#386861] text-lg">★★★★</span>
                            <span className="text-gray-300 text-lg">★</span>
                          </div>
                          <span className="text-sm sm:text-base font-medium text-gray-700">4.8</span>
                          <span className="text-sm text-gray-500">( 7 reviews )</span>
                        </div>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      4castplus brings end-to-end project controls, procurement,
                      and construction management capabilities in a web and
                      cloud-based platform. It empowers construction, energy,
                      utilities, and EPC companies to move from difficult
                      spreadsheet-based management of large complex projects
                      into an organized solution that keeps projects on budget,
                      on schedule, and under control.
                    </p>

                    <Link
                      href="/learn-more/4castplus"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 4castplus
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.4castplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 5day.io  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/5day.png" // Replace with your actual logo path
                          alt="5day.io Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          5day.io
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Micro (0-49 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Managing projects is tough. And tools out there are
                      complex beyond reason. 5day.io is a modern work management
                      tool that makes managing projects, tasks, and
                      collaboration easy.
                    </p>

                    <Link
                      href="/learn-more/5day-io"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 5day.io
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.zoho.com/projects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Section 1: Product Listing */}
              <div className="relative overflow-hidden rounded-2xl bg-[#386861] mt-4 px-8 py-12">
                <div className="absolute top-0 left-0 w-32 h-32 border rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
                <div className="text-center">
                  <h2 className="text-white text-2xl font-medium mb-8">
                    Interested in seeing your product here?
                  </h2>
                  <Link
                    href="/list-product"
                    className="inline-flex items-center bg-[#386861] text-white font-medium px-8 py-4 rounded-full transition-colors duration-200"
                  >
                    List Your Product
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>





<p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
  <Link href="#" className=" hover:underline">
    Why is TechnologyAdvice Free?
  </Link>
</p>

              {/* 5PM-Disarea products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/5pm.jpg" // Replace with your actual logo path
                          alt="5pm-Disarea Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          5pm-Disarea
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      5pm is a web-based project management software solution
                      that helps employees manage projects, tasks, notes, files,
                      and time through an easily accessible cloud platform.
                      Accessed through a customizable interface, 5pm also offers
                      email integration, report generation, and an interactive
                      drag-and-drop timeline with a Gantt-style view
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About 5pm-Disarea
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.5pmweb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Accelo  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/accelo.png" // Replace with your actual logo path
                          alt="Accelo Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Accelo
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Small (50-249 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Accelo is a comprehensive Professional Services Automation
                      (PSA) platform designed to help service organizations
                      streamline operations, manage projects, and improve
                      profitability. By centralizing business processes, it
                      provides full visibility, real-time insights, and
                      automation, helping teams deliver work more efficiently
                      and detect issues early. Accelo supports scalability and
                      enables growth with integrated solutions for project,
                      client, and financial management from quote-to-cash
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Accelo
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.accelo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* AccuLynx  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/acculynx.jpg" // Replace with your actual logo path
                          alt="AccuLynx Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          AccuLynx
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Micro (0-49 Employees),
                        </span>
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Small (50-249 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      AccuLynx is a business management cloud-based CRM designed
                      for the roofing, gutter, siding, windows, and other
                      exterior construction trades
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About AccuLynx
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.acculynx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* AceProject  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/aceproject.png" // Replace with your actual logo path
                          alt="AceProject Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          AceProject
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Good For Section */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                      <span className="font-semibold text-gray-700">
                        Good for:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="text-gray-600">
                          Medium (250-999 Employees),
                        </span>
                        <span className="text-gray-600">
                          Enterprise (5,000+ Employees),
                        </span>
                        <span className="text-gray-600">
                          Large (1,000-4,999 Employees),
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      AceProject features a simple, intuitive input design and a
                      visually rich interface, while still offering the
                      capabilities and powerful features one expects in a
                      sophisticated project management tool.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About AceProject
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.aceproject.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Aconex  products details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/aconex.jpg" // Replace with your actual logo path
                          alt="Aconex Logo"
                          width={80}
                          height={80}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                          priority
                        />
                      </div>

                      {/* Title and Review Link */}
                      <div className="min-w-0 flex-1">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Aconex
                        </h1>
                        <Link
                          href="/reviews/zoho-projects"
                          className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                        >
                          Leave a Review
                        </Link>
                      </div>
                    </div>

                    {/* Compare Button */}
                    <div className="flex-shrink-0">
                      <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-[#386861] hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                      Aconex is a construction collaboration software platform
                      used by field management, construction, and engineering
                      firms.
                    </p>

                    <Link
                      href="/learn-more/zoho-projects"
                      className="text-sm sm:text-base md:text-lg text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Aconex
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.aconex.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#386861] hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Common Features Section */}
              <section id="common-features" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Common project management software features
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Project management software covers a range of platforms,
                      each with a slightly different mix of functionality. The
                      best software for project management offers features that
                      help the team build a project plan, track tasks through
                      the different stages of the project, and collaborate on
                      tasks to ensure on-time completion.
                    </p>
                  </div>

                  {/* Second Paragraph with Links */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Not every project management system will include all these
                      features, but many solutions are designed to help a{" "}
                      <Link
                        href="/small-team-project-management"
                        className="text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        small team
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/enterprise-project-management"
                        className="text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                      >
                        enterprise
                      </Link>{" "}
                      corporation equally. When you prioritize the features you
                      need from your project software, you'll be better equipped
                      to find the right project management app for the projects
                      you manage.
                    </p>
                  </div>

                  {/* Scheduling Section */}
                  <div>
                    {/* Scheduling Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Scheduling
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Scheduling a project involves constructing a project
                      timeline, delegating tasks, and outlining the known
                      checkpoints within the project. Project management
                      software includes different types of scheduling features
                      that give teams alternative ways to visualize their
                      projects. While some project management tools use a
                      traditional calendar view, more complex solutions like
                      Gantt charts and horizontal project timelines help teams
                      break large or complicated projects into manageable tasks.
                      Scheduling features in a project management tool will help
                      your team go from a mind map to a project plan quickly by
                      giving insight into both time and resource management.
                    </p>
                  </div>
                </div>
                {/* Forecasting Section */}
                <div>
                  {/* Forecasting Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Forecasting
                  </h2>

                  {/* Forecasting Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Forecasting features in PM tools use data from previous
                    projects to predict the time and resource management
                    considerations the team will need to complete the project.
                    This project manager software feature helps project managers
                    calculate the ROI of a project before significant resources
                    have been invested. Forecasting takes into account the time
                    spent on each task and the resources required to complete
                    each task relative to the organization’s budget constraints
                    and revenue goals. A forecasting tool can also
                    <Link
                      href="/enterprise-project-management"
                      className="text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      predict project risks
                    </Link>{" "}
                    and limitations that might potentially pose issues down the
                    line.
                  </p>
                </div>
                {/* Resource management Section */}
                <div>
                  {/* Resource management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Resource management
                  </h2>

                  {/* Resource mangement Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Similar to forecasting, resource management features in
                    project management software help project managers visualize
                    where their business invests time, energy, and materials so
                    the business can assess or change their plan when unforeseen
                    challenges arise. It can be time-consuming to enter and set
                    up a detailed inventory of company and human resources, but
                    doing so allows project managers to anticipate bottlenecks
                    and allocate resources.
                  </p>
                </div>
                {/* Budgeting and expense tracking Section */}
                <div>
                  {/* Budgeting and expense tracking Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Budgeting and expense tracking
                  </h2>

                  {/* Budgeting and expense tracking Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Although software that budgets for projects and businesses
                    comes in standalone versions, certain PM software vendors
                    include budgeting functions and expense tracking. These help
                    companies run multiple projects at the same time while
                    staying within budget. While budgeting software is somewhat
                    self-explanatory, expense and project tracking software can
                    provide PMs with the added benefit of knowing how team
                    members accrue expenses throughout the lifespan of the
                    project. Similar to time tracking, expense tracking provides
                    valuable data that can be used to forecast future project
                    costs and build budgets into upcoming project plans.
                  </p>
                </div>
                {/* Project, task, and contractor time management Section */}
                <div>
                  {/*Project, task, and contractor time management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Project, task, and contractor time management
                  </h2>

                  {/* Project, task, and contractor time management Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    As the name implies,{" "}
                    <Link
                      href="/enterprise-project-management"
                      className="text- [#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      time-tracking software
                    </Link>{" "}
                    tracks the amount of time each project contributor spends on
                    their assigned tasks. Besides simply measuring productivity,
                    time-tracking software also builds an archive of valuable
                    data that can help businesses forecast completion dates for
                    similar tasks or projects in the future. Time tracking is
                    especially helpful when managing a remote team, contract
                    workers, or part-time employees. In combination with
                    collaboration features like messaging and alerts that
                    enhance the project planning and execution experience, time
                    tracking can keep the entire team on schedule.
                  </p>
                </div>
                {/* Task management Section */}
                <div>
                  {/*Task management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Task management
                  </h2>

                  {/* Task management Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Task management refers to the assignment of different
                    responsibilities to various members of the project team.
                    Being able to quickly determine who’s contributed to what
                    part of the project lets managers better identify
                    bottlenecks and stay on top of the project’s progress.
                    <Link
                      href="/enterprise-project-management"
                      className="text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      Task management software
                    </Link>{" "}
                    is often used by solopreneurs and small teams, while project
                    management software can manage hundreds of tasks that roll
                    up to a larger project or set of projects.
                  </p>
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Also Read:
                    <Link
                      href="/enterprise-project-management"
                      className="text-[#386861]hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      Choose the Right Task Management Software: Types and
                      Considerations
                    </Link>{" "}
                  </p>
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    While the concept of task management is simple, the software
                    can be fairly robust. In the case of large, complex projects
                    or multiple projects that span different departments, tasks
                    are often interconnected or interdependent. Certain project
                    management programs geared towards these types of
                    undertakings feature the ability to assign tasks and
                    dependencies to tasks, helping managers determine where a
                    breakdown in productivity is occurring and assign the
                    necessary resources to fix the problem. These features have
                    increasingly added automation to speed the transition of
                    tasks among team members and across the project workflow.
                  </p>
                </div>
                {/*Kanban charts for task management Section */}
                <div>
                  {/* Kanban charts for task management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Kanban charts for task management
                  </h2>

                  {/* Kanban charts for task management Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Some PM tools rely on the
                    <Link
                      href="/enterprise-project-management"
                      className="text-[#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      Kanban
                    </Link>{" "}
                    or project board method to visualize the working state of
                    projects that require separate concurrent tasks. In a Kanban
                    board project timeline, you organize each task on a digital
                    card and move those cards across vertical lanes that
                    represent work states.
                  </p>
                </div>
                {/* Gantt charts for task management Section */}
                <div>
                  {/*Gantt charts for task management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Gantt charts for task management
                  </h2>

                  {/* Gantt charts for task management Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Task dependencies are often represented through
                    <Link
                      href="/enterprise-project-management"
                      className="text- [#386861] hover:text-green-800 hover:underline transition-colors duration-200 font-medium"
                    >
                      Gantt charts
                    </Link>{" "}
                    that show the estimated amount of time a task will take to
                    complete. These project planning software charts also show
                    the next tasks the team should perform, document which team
                    member is in charge of which task, and facilitate work
                    hand-offs or approvals. Gantt charts are a useful visual
                    representation of the entire project plan in a compact
                    space, and they can often be expanded or condensed to show
                    more or less context where needed.
                  </p>
                </div>
                {/* Notes, tags, and linking for task management Section */}
                <div>
                  {/* Notes, tags, and linking for task management Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Notes, tags, and linking for task management
                  </h2>

                  {/* Notes, tags, and linking for task management Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Other common features of task management include notes,
                    tags, and linking between tasks to show dependencies. Adding
                    notes to a task helps keep track of individual changes to
                    the project or provide references for the strategy
                    associated with each task. Adding tags to tasks makes them
                    easier to filter and find through unlimited projects in the
                    management tool’s native search functionality. Linking tasks
                    reminds stakeholders of other dependent tasks, gives further
                    context to a single task, or provides context to
                    interdependent tasks in multiple projects.
                  </p>
                </div>
                {/* Permission settings Section */}
                <div>
                  {/*Permission settings Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Permission settings
                  </h2>

                  {/* Permission settings Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Permission settings allow a project manager to decide who
                    can view, edit, or change tasks and functions within the
                    project. To manage a project effectively, a PM must
                    judiciously mete out permissions and access across the
                    software. Granular software permission settings help project
                    managers avoid having to track down the sources of
                    unauthorized changes to tasks or entire phases of the
                    project. Permission settings are especially important for
                    teams that administrate multiple projects across many
                    departments using the same software for project management.
                    Look for pre-set or role-based permission settings to manage
                    unlimited users efficiently from a single dashboard.
                  </p>
                </div>
                {/*Automation Section */}
                <div>
                  {/* Automation Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Automation
                  </h2>

                  {/* Automation Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Task and workflow automation helps speed projects to
                    completion. The software is programmed to respond to a
                    defined event with an immediate response, saving time across
                    many areas. For example, project assets may be sent for
                    approval upon completion or alert notifications will be sent
                    if budgets exceed a pre-set threshold. Automation features
                    may also automatically schedule recurring tasks for
                    completion, which reduces the amount of manual work the
                    project manager is required to do on any given day.
                  </p>
                </div>
                {/* Analysis and report dashboards Section */}
                <div>
                  {/* Analysis and report dashboards Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Analysis and report dashboards
                  </h2>

                  {/* Analysis and report dashboards Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Analysis and reporting functions let project managers
                    visualize project data in ways that uncover time, resource,
                    and work inefficiencies. This type of data can be critical
                    to making mid-project pivots, especially if it’s presented
                    in a dashboard that can provide a quick visual reference. If
                    a task needs additional resources or a department is moving
                    slower than others, in-depth analysis features will help PMs
                    rectify or leverage the situation.
                  </p>
                </div>
                {/* Document sharing Section */}
                <div>
                  {/* Document sharing Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Document sharing
                  </h2>

                  {/* Document sharing Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    While email remains a mainstay of the collaboration-focused
                    work environment, project management and cloud computing
                    software has enabled teams to share documents in ways that
                    boost productivity and maximize time efficiency. Many
                    project management software will allow users to upload
                    documents and attach them to projects or tasks, making it
                    easy to locate that project’s resources.
                  </p>
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    The depth of such functionality varies from the simplicity
                    of a collaboration system such as Google Drive to
                    full-fledged wikis that house all of a project’s relevant
                    materials. Comprehensive sharing solutions often feature
                    audit trails and version control that record the history of
                    each task and project. Audit trails let project managers
                    view task progress and investigate challenges that team
                    members may be experiencing.
                  </p>
                </div>
                {/* Internal messaging Section */}
                <div>
                  {/* Internal messaging Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Internal messaging
                  </h2>

                  {/* Internal messaging Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Messaging and meeting functions that are built into the tool
                    or integrated with the system strengthen communications
                    between team members. These features come in standalone
                    versions such as Slack but can also be found in
                    comprehensive or all-in-one project management solutions.
                    In-platform messaging feature lets teammates comment on
                    documents, send messages directly to one another, and
                    provide context in full-group documents.
                  </p>
                </div>
              </section>

              {/* How-to-choose */}

              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    How to choose the right PM software for your project
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Selecting the best software for your project management
                      needs is crucial because it directly impacts a project’s
                      efficiency, productivity, and success. Selecting the right
                      project management tool is all about understanding your
                      project’s needs, picking out must-have features, knowing
                      your team, and ensuring it provides excellent value for
                      your money.
                    </p>
                  </div>

                  {/* Understand project requirements */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Understand project requirements
                    </h2>

                    {/* Scheduling Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Clearly define your project’s scope, complexity, and
                      specific needs. This understanding helps you identify a
                      tool that aligns with the project’s goals and challenges.
                    </p>
                  </div>

                  {/* Identify must-have features*/}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Identify must-have features
                    </h2>

                    {/* Identify must-have features */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Determine the essential features your project cannot do
                      without. These may include task management, time tracking,
                      or reporting capabilities, depending on the nature of your
                      project.
                    </p>
                  </div>

                  {/* Evaluate team size and collaboration needs */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Evaluate team size and collaboration needs
                    </h2>

                    {/* Evaluate team size and collaboration needs Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Consider how your team communicates and collaborates. Look
                      for tools that support these needs through integrated chat
                      functions, file sharing, or collaborative workspaces.
                    </p>
                  </div>

                  {/* Consider integration capabilities */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Consider integration capabilities
                    </h2>

                    {/* Consider integration capabilities paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Assess the need for the PM tool to integrate with other
                      software your team uses. Seamless integration can
                      significantly improve workflow efficiency.
                    </p>
                  </div>
                  {/* Assess user experience */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Assess user experience
                    </h2>

                    {/* Assess user experience paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Check if the tool is user-friendly and has a gentle
                      learning curve. A good user experience increases adoption
                      rates and overall productivity.
                    </p>
                  </div>
                  {/* Determine budget and ROI */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Determine budget and ROI
                    </h2>

                    {/* Determine budget and ROI paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Consider the cost of the tool and weigh it against the
                      expected return on investment. The tool should be
                      cost-effective and contribute to the overall financial
                      health of the project.
                    </p>
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      If you’re looking for specific types of project management
                      tools, visit our other project management categories for
                      product overviews, reviews, and to get recommendations:
                    </p>
                    <div className="mb-8">
                      <ul className="space-y-3 list-disc pl-5">
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Agile Project Management Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Bug Tracking Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Enterprise Project Management Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Marketing Project Management Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Project Portfolio Management Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Time Tracking Software
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Visual Project Management Software
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="pm-faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Project management software FAQs
                  </h1>

                  {/* FAQ Accordion */}
                  <div className="space-y-0 -mt-8">
                    {faqData.map((item, index) => (
                      <div key={index} className="border-b border-gray-200">
                        {/* Question Button */}
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
                            {item.question}
                          </h3>

                          {/* Plus/Minus Icon */}
                          <div
                            className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
                              openItems[index]
                                ? "bg-[#386861] hover:bg-green-700"
                                : "bg-[#386861] hover:bg-green-700"
                            }`}
                          >
                            {openItems[index] ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            )}
                          </div>
                        </button>

                        {/* Answer Content */}
                        {openItems[index] && (
                          <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
         
        </div>

      </div>
    </>
  );
}
