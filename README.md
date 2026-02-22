# CS 499 ePortfolio — Joshua Messer
Go to the [ePortfolio Webpage](https://farlemon.github.io/)

## Introduction

Hello, my name is Joshua Messer. This GitHub Pages site serves as my CS 499 ePortfolio and provides a cohesive
presentation of my original and enhanced artifacts, including supporting narratives aligned to course outcomes.

This ePortfolio includes two artifacts total:

- **FFC-MacroButtons userscript** — used for **Enhancement One** (Software Design & Engineering) and **Enhancement Two** (Algorithms & Data Structures).
- **Grounded Creatures web application** — used for **Enhancement Three** (Databases).

> The goal of this site is clarity: reviewers can easily access the code review, see before/after artifacts, and read the narratives without hunting through folders.

---

## Professional Self-Assessment

### Professional Summary

Completing the Computer Science program and developing this ePortfolio has allowed me to transform from a
technically curious developer into a more disciplined and production aware developer. Throughout the
program, I strengthened my understanding of software engineering principles, data structures and algorithms,
database design, and security practices. The capstone experience required not only technical implementation but
intentional evaluation, refactoring, and alignment with professional standards.

This portfolio demonstrates my ability to design, analyze, enhance, and document computing solutions in a manner
consistent with industry expectations. Each artifact included reflects growth in architectural thinking,
scalability awareness, and maintainability.

### Collaboration and Communication

Throughout the program, I developed the ability to communicate technical concepts clearly to different audiences.
In coursework and project discussions, I learned to translate implementation details into structured explanations
suitable for stakeholders and peers. The Informal Code Review included in this ePortfolio reflects this skill by
presenting existing functionality, identifying areas for improvement, and explaining planned enhancements without
unnecessary technical complexity.

Collaboration in discussion threads strengthened my ability to discuss design tradeoffs, incorporate feedback,
and iterate on solutions. These experiences shaped my approach to the enhancement process, where I carefully
analyzed architectural decisions and refined them based on best practices.

### Software Engineering and Design

The FFC-MacroButtons artifact demonstrates growth in software architecture and maintainability. Originally a
tightly coupled userscript, it was refactored into a modular, configuration driven framework with clear separation
of concerns. This enhancement reflects my ability to apply professional engineering principles such as modular
design, deterministic behavior, extensibility, and documentation standards.

Through this process, I strengthened my ability to evaluate architectural weaknesses, decouple responsibilities,
and design systems that scale beyond their original scope.

### Data Structures and Algorithms

Enhancement Two formalized the algorithmic structures behind configuration resolution and navigation. By applying
hierarchical mappings, deterministic path resolution algorithms, Set based deduplication, ordered rendering logic,
and stack based navigation, I demonstrated the ability to use appropriate data structures to solve contextual UI
challenges.

This experience reinforced that algorithms are not isolated academic exercises, and are foundational to building
predictable, maintainable, and scalable client side systems.

### Database Design and Integration

The database enhancement transformed a basic data retrieval implementation into a production aware client database
system. By replacing unbounded Firestore collection reads with structured, parameterized queries and cursor based
pagination, I improved scalability, efficiency, and cost awareness.

Abstracting database access into a dedicated service layer and synchronizing URL parameters with query constraints
reflects professional architectural patterns used in modern web applications.

### Security Mindset

A major growth area during this program has been developing a security focused mindset. In the database
enhancement, I intentionally reduced the attack surface by avoiding full collection reads and structuring
read only Firestore rules. I also considered how access patterns affect data exposure and scalability.

This reflects an understanding that secure architecture is not an afterthought, but a foundational design
consideration.

### Integration of Artifacts

Together, the artifacts in this portfolio demonstrate a cohesive progression:

- The FFC-MacroButtons artifact demonstrates architectural discipline and modular engineering.
- The algorithm enhancement formalizes structured resolution and navigation logic.
- The database enhancement demonstrates scalable cloud integration and production aware design.

Collectively, they illustrate my ability to evaluate a system, improve its architecture, strengthen its
performance characteristics, and consider security implications.

### Professional Goals and Specialization

While I have not committed to a single specialization within computer science, I have developed a strong
interest in software development across multiple domains. Throughout the program, I discovered that I enjoy
building systems, refining architecture, and improving how applications behave.

Rather than focusing narrowly on one path, I am intentionally exploring areas including frontend development,
client server architecture, database integration, security systems, and much more. The artifacts in this portfolio
reflect this breadth of interest. They demonstrate modular design, deterministic state handling, structured
database access patterns, and security conscious engineering practices.

My professional goal is to continue growing as a versatile software developer who can adapt to evolving
technologies while applying strong foundational principles in software engineering, algorithms, database
design, and security. This ePortfolio represents both the technical skills I have developed and the disciplined
engineering mindset I will bring into my career.

---

## Informal Code Review

### Video

- **Direct link:** https://www.youtube.com/watch?v=bd4-faJ8YC0

### What the code review covers

- **Existing functionality:** Demonstration of the original FFC-MacroButtons userscript, as well as the original web application implementation using unbounded `getDocs()` Firestore reads.
- **Code analysis:** Identification of architectural limitations such as tight coupling, absence of formal data structures for navigation, and inefficient database access patterns that did not scale.
- **Planned enhancements:** Refactoring toward a modular, configuration driven framework; implementing structured algorithms (hierarchical mapping, path resolution, Set deduplication, stack-based navigation); and replacing full collection reads with structured queries, cursor based pagination, and a dedicated database service layer.

---

## Enhancement One: Software Design and Engineering  
**Artifact:** FFC-MacroButtons userscript

### Artifact Overview

**FFC-MacroButtons** is a Tampermonkey userscript created to inject macro buttons into webpages to automate repetitive tasks. The original script was created outside of coursework in mid to late 2025 and evolved organically to meet a usability need on a single website. While functional, the original implementation was tightly coupled to one site, which limited scalability, maintainability, and extensibility.

The enhanced version refactors the userscript into a **configuration driven framework** capable of supporting multiple websites and reusable macro definitions. This refactoring introduces a clear separation of concerns between configuration data, site matching logic, and UI rendering.

### Justification

This artifact was selected because it demonstrates advanced software design and engineering principles applied to a real world automation task. It provided a strong opportunity to improve architecture and code quality while maintaining practical functionality. The enhancement focuses on transforming a single purpose script into a scalable, reusable solution that aligns with professional software engineering practices.

### Enhancements Implemented

- **Modular software architecture:** Separated configuration, site matching/resolution, UI rendering, and (future) execution logic so new sites and macros can be added without modifying core logic.
- **Configuration driven design:** Added support for multiple configurations per site, shared configurations across domains, and deterministic resolution of active macros.
- **Maintainable and extensible structure:** Organized functions, constants, and styles for easier debugging and future expansion.
- **Professional documentation and readability:** Improved maintainability with structured comments, consistent naming conventions, and descriptive identifiers.
- **UI/UX improvements:** Implemented sidebar navigation patterns (including elements like breadcrumbs and hover feedback) to support intuitive navigation and visual accessibility.

### Reflection

Although the userscript is not fully complete, the construction, organization, and documentation reflect professional practices expected for software engineering and design. This enhancement strengthened the artifact by shifting from tightly coupled, site specific logic to a scalable framework emphasizing modularity and separation of concerns.

The refactoring process required careful analysis of the original code to identify tight coupling, redundant logic, and opportunities for improved modularity. Key learning included structuring a userscript to support multiple domains while maintaining deterministic behavior; implementing configuration inheritance and resolution strategies to support both global and path specific macros; designing UI elements (such as sidebar navigation and breadcrumbs) with usability and accessibility in mind; and balancing extensibility with simplicity to maintain long term maintainability.

The biggest challenges were decoupling site specific logic from UI rendering and establishing a deterministic configuration resolution system. Working through these challenges reinforced best practices in software design, including modular architecture, separation of concerns, and code readability.

### Program Outcomes Addressed

- **Outcome 2:** Delivered professional quality, coherent, and technically sound code and UI components.
- **Outcome 3:** Designed and evaluated a computing solution using standards and best practices (modularity, separation of concerns, deterministic configuration resolution).
- **Outcome 4:** Applied well founded techniques in code structuring, configuration driven architecture, and dynamic DOM rendering to enhance maintainability and reusability.

### Repository Link

- https://github.com/FarLemon/ffc-userscript-macrobuttons

---

## Enhancement Two: Algorithms and Data Structures  
**Artifact:** FFC-MacroButtons userscript

### Artifact Overview

The selected artifact is the Tampermonkey userscript that dynamically injects configurable macro buttons into webpages based on the active domain and URL path. The script enables users to define context specific commands that adapt automatically as navigation changes. Originally submitted as part of Milestone Two for Software Design and Engineering enhancements, the artifact was designed with modular components and clear separation of concerns.

This enhancement builds upon that foundation by formalizing and extending the **algorithms and data structures** that drive configuration resolution, navigation, and state management.

### Justification

This enhancement focuses on the intentional application of algorithms and data structures to solve real world software problems—specifically, dynamic configuration resolution and hierarchical user interaction. While elements of these solutions were introduced during Milestone Two to support modular design, this milestone formalizes them as deliberate algorithmic choices rather than incidental implementation details.

The enhancement emphasizes **correctness**, **determinism**, and **maintainability**, aligning the artifact with industry best practices for data driven UI behavior and controlled state management.

### Algorithms and Data Structures Applied

- **Hierarchical mapping structures:** A nested sitemap object maps domains and URL paths to configuration identifiers, enabling efficient scoping of configurations and inheritance across path segments without redundant definitions.
- **Path resolution algorithm:** The active URL is decomposed into constituent path segments and traversed in a controlled order. Configurations are resolved from the most specific scope to the most general to ensure deterministic behavior while supporting inheritance rules defined by configuration metadata.
- **Deduplication via Set structures:** A `Set` is used during resolution to prevent duplicate configuration applications while preserving priority ordering—ensuring correctness without unnecessary overhead.
- **Ordered processing using arrays:** Explicit ordering fields are respected when rendering macro buttons and grouped commands, guaranteeing consistent execution and visual order regardless of how configurations are merged.
- **Stack based navigation model:** Navigation through nested macro groups is implemented using a stack, allowing efficient forward traversal and reliable backtracking while maintaining a clear representation of the user’s current context.

These choices were made to balance clarity, performance, and extensibility while remaining appropriate for a client side userscript environment.

### Relationship to Milestone Two

The Software Design and Engineering enhancement completed in Milestone Two established the modular architecture required for this enhancement. Separation of concerns, centralized configuration handling, and isolated rendering logic made it possible to introduce structured algorithms without destabilizing the system.

In particular, the refactoring of initialization logic and sidebar updates in Milestone Two enabled deterministic resolution and navigation algorithms to be layered cleanly on top of the existing design. This enhancement therefore represents a continuation and formalization of work begun in Milestone Two rather than an isolated redesign.

### Standards, Best Practices, and Usability Considerations

The enhanced artifact aligns with software engineering best practices by using clearly defined data structures, predictable algorithms, and controlled state mutation. Variable naming, file naming, and versioning are consistent and descriptive, reducing cognitive load for future maintenance.

From a usability perspective, deterministic ordering and stack based navigation provide intuitive interaction patterns. Users can reliably predict which macros will appear and how navigation will behave. Accessibility considerations include clear visual grouping, logical navigation flow, and minimal reliance on complex gestures or hidden state.

### Program Outcomes Addressed

- **Outcome 3:** Applied appropriate algorithms and data structures to solve configuration resolution and navigation problems while accounting for correctness, determinism, and scalability.
- **Outcome 4:** Employed well founded computing techniques to design a maintainable and extensible client side solution that adapts dynamically to user context.

### Repository Link

- https://github.com/FarLemon/ffc-userscript-macrobuttons

---

## Enhancement Three: Databases  
**Artifact:** Grounded Creatures Web Application (Firebase Firestore + SolidJS)

### Artifact Overview

The selected artifact for the database enhancement is a web application developed to display structured data retrieved from Firebase Firestore. The application was originally created as a personal project to organize and display creature data from the game *Grounded*. It integrates a SolidJS frontend with a NoSQL cloud database (Firebase Firestore), retrieving creature documents and rendering them dynamically within a responsive interface.

In its original implementation, the application performed unbounded collection reads using simple `getDocs()` calls and mapped the results directly to the UI. While functional for small datasets, this approach did not demonstrate optimized querying, scalability considerations, or refined access patterns appropriate for a production level system.

This enhancement focuses specifically on improved database interaction, query efficiency, scalability, and reliability.

### Justification

I selected this artifact because it provides a strong opportunity to demonstrate practical NoSQL database integration within a real world client application. Unlike coursework projects operating in controlled environments, this application interacts with a live cloud hosted database and therefore requires thoughtful query design and optimized access patterns.

The original version demonstrated basic database connectivity. The enhanced version significantly expands database capabilities by implementing:

- Structured Firestore queries with filtering and limits
- Pagination using document cursors (`startAfter()`)
- Separation of concerns through a dedicated service layer
- Controlled data transfer to reduce unnecessary reads
- Infinite scroll integration tied directly to database cursors
- URL driven filtering synchronized with database backed queries
- Error handling and fallback behavior
- Consideration of Firestore security rules for read only access

The artifact was improved by replacing unbounded collection reads with structured, parameterized queries. Instead of loading the entire collection into memory, the application now retrieves documents in controlled batches (25 at a time), using cursor based pagination to support scalability. Alphabet based filtering was implemented using query constraints, and URL parameters were introduced to synchronize application state with database queries.

These changes transform the project from a simple data display application into a scalable, production aware client database system.

### Alignment With Course Outcomes

#### Outcome 3 — Design and evaluate computing solutions using algorithmic principles and appropriate standards

This enhancement required evaluating several database trade offs, including:

- Batch size versus performance
- Client side versus server side filtering
- Cursor based pagination versus offset based pagination
- Index requirements for range queries

By implementing structured queries and cursor based pagination, I demonstrated an understanding of how database design decisions directly affect performance, scalability, and cost efficiency.

#### Outcome 4 — Use well founded and innovative techniques, skills, and tools in computing practices

This milestone demonstrates professional database integration practices by:

- Abstracting Firestore access into a service layer (`creatureService.ts`)
- Implementing parameterized query logic
- Managing asynchronous data loading states
- Integrating `IntersectionObserver` for automated pagination
- Synchronizing UI state with URL parameters

These improvements reflect real world architectural patterns used in modern client based applications.

#### Outcome 5 — Develop a security mindset that anticipates vulnerabilities and ensures privacy and data integrity

Although this application uses read only access, security considerations were explicitly addressed. The enhancement included:

- Designing queries to retrieve only necessary data
- Reducing attack surface by avoiding full collection reads
- Structuring Firestore rules to explicitly permit read only operations
- Avoiding exposure of sensitive write operations

These considerations demonstrate an understanding of how database architecture interacts with security principles.

### Reflection on the Enhancement Process

Through this enhancement, I learned that database expertise is not simply about retrieving data, but about designing efficient, scalable, and secure access patterns.

One of the most significant challenges was transitioning from simple collection reads to cursor based pagination. Implementing `startAfter()` required understanding how Firestore indexes and document snapshots function together. Integrating pagination with infinite scrolling also introduced asynchronous state management challenges, requiring careful control of loading flags and intersection observation.

Another challenge involved ensuring that URL parameters synchronized properly with database queries without causing redundant reloads. Implementing reactive state tied to query parameters strengthened my understanding of client side routing and state management in a data driven application.

Most importantly, this enhancement reinforced the importance of designing with scalability in mind. While unbounded reads may function for small datasets, they are not viable in real world systems. The enhanced design reflects a more professional, production aware approach to database integration.

### Repository Link

- https://github.com/FarLemon/farfruit-gaming-webapp
- Live Demo (Optional): https://farfruit-gaming.web.app/grounded

---

## Course Outcomes

The following section maps each official CS 499 outcome to specific technical evidence from the enhancements included in this ePortfolio.

### Outcome 1 — Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science

- **Informal Code Review Video:** Presented existing functionality, identified improvement areas, and communicated planned enhancements in a manner appropriate for peers or managers.
- **Clear Documentation & Structure:** FFC-MacroButtons includes structured comments, descriptive naming conventions, and modular architecture to improve maintainability for future contributors.
- **Service Layer Abstraction (Enhancement Three):** Separating database logic into `creatureService.ts` enables clearer team collaboration by isolating responsibilities.

### Outcome 2 — Design, develop, and deliver professional quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts

- **Professional Self Assessment:** Provides structured, technically accurate reflection tailored to faculty and professional audiences.
- **Enhancement Narratives:** Each enhancement includes clear artifact description, justification, technical implementation details, reflection, and outcome alignment.
- **UI/UX Improvements in FFC-MacroButtons:** Sidebar navigation, deterministic ordering, and intuitive interaction patterns demonstrate thoughtful visual communication design.

### Outcome 3 — Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade offs involved in design choices

- **Hierarchical Mapping & Path Resolution Algorithm (Enhancement Two):** Implemented deterministic configuration resolution using nested objects and structured traversal logic.
- **Set Based Deduplication:** Prevented duplicate configuration applications while preserving priority order.
- **Stack Based Navigation Model:** Enabled reliable forward traversal and backtracking in nested macro groups.
- **Database Tradeoff Evaluation (Enhancement Three):** Evaluated batch size vs. performance, client vs. server filtering, cursor based pagination vs. offset pagination, and index requirements.
- **Cursor Based Pagination:** Implemented `startAfter()` with batched reads to ensure scalability and performance in Firestore queries.

### Outcome 4 — Demonstrate an ability to use well founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry specific goals

- **Configuration Driven Architecture:** Designed reusable and extensible configuration handling in FFC-MacroButtons.
- **Modular Software Architecture:** Applied separation of concerns between configuration, resolution logic, and UI rendering.
- **Service Layer Abstraction:** Encapsulated Firestore access into a dedicated module (`creatureService.ts`).
- **Asynchronous State Management:** Managed loading states and reactive updates in SolidJS.
- **IntersectionObserver Integration:** Automated pagination through event driven observation, demonstrating modern frontend techniques.

### Outcome 5 — Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources

- **Controlled Firestore Queries:** Replaced unbounded collection reads with structured, parameterized queries to reduce data exposure.
- **Read Only Firestore Rules:** Structured database access to explicitly restrict write operations.
- **Reduced Attack Surface:** Avoided full collection loading and unnecessary client side filtering.
- **Deterministic Configuration Resolution:** Prevented unintended macro injection through controlled, explicit configuration mapping.

---

## Artifacts (Before/After)

### Artifact 1 — FFC-MacroButtons (Enhancements 1 & 2)

- **Original:** https://github.com/FarLemon/ffc-userscript-macrobuttons/blob/archive/ffc-macrobuttons-1.0.0.user.js
- **Enhancement 1:** https://github.com/FarLemon/ffc-userscript-macrobuttons/blob/archive/ffc-macrobuttons-1.1.0.user.js
- **Enhancement 2:** https://github.com/FarLemon/ffc-userscript-macrobuttons/tree/release

### Artifact 2 — Grounded Creatures Webapp (Enhancement 3)

- **Original:** https://github.com/FarLemon/farfruit-gaming-webapp/tree/original-artifact
- **Enhanced:** https://github.com/FarLemon/farfruit-gaming-webapp/tree/main

