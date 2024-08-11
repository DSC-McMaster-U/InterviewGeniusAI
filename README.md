# GDSC Open Source Project Planning & Documentation Template

## Table of Contents
  * [:bulb: Project Description](#-bulb--project-description)
  * [:compass: Implementation Plan](#-compass--implementation-plan)
  * [:clipboard: Team Management](#-clipboard--team-management)
  * [:athletic_shoe: Sprint Planning](#-athletic-shoe--sprint-planning)

## :bulb: Project Description
Develop an AI-driven platform designed to enhance job interview preparation through personalized question generation, simulated interview scenarios, and detailed feedback on responses. Leveraging advanced AI algorithms, the system customizes the preparation process by analyzing both the job description and the user's resume.

### Objectives
1. Personalized Interview Questions Based off Resume and Job descriptions
2. Simulated Interview Scenarios
3. Detailed Feedback and Improvement

### Stakeholders

- Job Seekers
- Employers
- Career Coaches and Counselors


## :compass: Implementation Plan

### Project Timeline

- **Milestone 1 (MVP):** 
Description: Develop an end-to-end pipeline to establish the foundational elements of the AI interview preparation platform. This includes setting up the front-end interface for user input, implementing prompt engineering to generate tailored interview questions using Vertex AI, and ensuring seamless integration between these components.

Date: September 30, 2024

- **Milestone 2:**
Description: Enhance the platform by incorporating a feedback loop from Vertex AI to provide users with detailed feedback on their text-based responses. This involves developing algorithms to analyze responses and generate constructive feedback, helping users identify areas for improvement.

Date: November 30, 2024

- **Milestone 3:** 
Description: Upgrade the platform to support audio responses, allowing users to practice by speaking their answers. This milestone also includes fine-tuning the Vertex AI model using sample data to improve the accuracy and relevance of the generated questions and feedback.
Date: January 31, 2025

### Tech Stack
- **Frontend Framework:** React or Django
- **Backend Framework:** Python Object Oriented Programming
- **Database:** GCP Big Query

### Project Structure 
The project will be organized into two main directories: frontend and backend. Each of these directories will contain subdirectories and modules specific to their responsibilities. Here is the high-level structure.

### API Documentation
TBD
  
### Testing & CI/CD
- Automation and CI/CD
GitHub Actions: For automating the testing process, running tests on every pull request, and deploying code to production if all tests pass.
Jenkins: As an alternative or supplementary CI/CD tool for automating builds, tests, and deployments.

Integration Testing

Frontend:
Test how components interact with each other.
Ensure data flows correctly through the components and API calls are handled properly.
Backend:
Test how different parts of the backend interact, such as views with models and serializers.
Ensure that API endpoints work as expected with valid and invalid data.

## :clipboard: Team Management

### Team Members

- **Scrum Master & Product Owner:** Saad Salman
- **Frontend Developers:**
  - [Name]
- **Machine Learning Engineers:**
  - [Name]
  - [Name]
  - [Name]
  - [Name]


### Team Communication

- **Communication Platform:** Discord
- **Meeting Schedule:**
  - Sprint Review: Bi-Weekly
  - Sprint Retrospective: Bi-Weekly

### Roles and Responsibilities
*This section defines the responsibility of each role, you may edit to fit your project's needs.*

- **Scrum Master:**
  - Flush out project's boilerplate 
  - Assign tickets to developers
  - Facilitate scrum ceremonies (sprint reviews, retrospectives)
  - Remove impediments
- **Product Owner:**
  - TBD
  - Define product backlog 
  - Prioritize user stories
  - Accept/reject deliverables
- **Developers:**
  - Develop features through ticket completion
  - Create test cases to for feature/ticket acceptance
  - Thoroughly document code and features through pull requests and README docs
  - Execute tests
  - Report defects

### Collaboration Tools
Kanban Boards

### Code Acceptance: The Definition of Done
1. Code Complete
The code must fully satisfy the feature requirements associated with the ticket.
All edge cases should be handled, and the implementation should align with the project's coding standards and best practices.
2. Passed Code Review by Scrum Master
The code must undergo a thorough review by the Scrum Master.
The review should ensure that the code is well-structured, readable, and maintainable.
Any identified issues or suggestions should be addressed before the PR is approved.
3. Passed Unit Tests and Other Testing
All unit tests and relevant integration/end-to-end tests developed for the feature must pass.
Tests should cover a significant portion of the new code, aiming for a high level of code coverage.
Ensure that the existing test suite still passes without any regressions.
4. Documentation Updated
Update relevant documentation to reflect the new feature or changes.
This includes code comments, inline documentation, API documentation, and user guides.
Ensure that the documentation is clear, concise, and helpful for other developers and users.
5. Ready to be Integrated with Main Branch
The branch should be up-to-date with the latest changes from the main branch to avoid merge conflicts.
Any conflicts should be resolved, and the branch should be rebased if necessary.
Ensure that the code is ready for seamless integration without disrupting the existing functionality.


## :athletic_shoe: Sprint Planning
### High Level Goals for Each Sprint
 - Milestone 1: MVP Development
Sprint 1:

Description: Set up the initial project structure for both frontend and backend. Establish the basic end-to-end pipeline, including the frontend interface for user input, backend API endpoints for handling requests, and the integration with Vertex AI for generating tailored interview questions.
Expected Length: 2 weeks
Sprint 2:

Description: Implement user authentication and authorization features. Develop the frontend components for user login and registration. Ensure secure handling of user data and establish the database schema for user information.
Expected Length: 2 weeks
Sprint 3:

Description: Complete the prompt engineering component to generate tailored interview questions based on user input. Ensure the frontend can successfully communicate with the backend API to fetch these questions.
Expected Length: 2 weeks
- Milestone 2: Feedback Loop Integration
Sprint 4:

Description: Develop and integrate the feedback loop mechanism. Implement backend logic to analyze user responses and generate feedback. Create frontend components to display feedback to users.
Expected Length: 2 weeks
Sprint 5:

Description: Enhance the feedback system with more detailed analysis, such as identifying strengths and weaknesses in responses. Improve the user interface to provide a more intuitive and helpful feedback experience.
Expected Length: 2 weeks
- Milestone 3: Audio Response and Model Refinement
Sprint 6:

Description: Add support for audio responses. Implement functionality to allow users to record and submit audio answers. Integrate speech-to-text capabilities to process audio responses.
Expected Length: 2 weeks
Sprint 7:

Description: Fine-tune the Vertex AI model using sample data to improve the accuracy and relevance of generated questions and feedback. Perform extensive testing and validation to ensure the system's reliability.
Expected Length: 2 weeks
Sprint 8:

Description: Finalize and polish the user interface and user experience. Conduct user testing and gather feedback to make final adjustments. Prepare for the official launch of the platform.
Expected Length: 2 weeks

### Sprint Planning 

#### Sprint Duration
- _Sprint Length:_ [e.g., 2 weeks]
- _Start Date:_ [Date]
- _End Date:_ [Date]

#### High Level Sprint Goals
1. Goal 1
2. Goal 2
3. Goal 3

#### User Stories (Sample)

| ID   | User Story                                  | Priority | Story Points | Assignee |
|------|---------------------------------------------|----------|--------------|----------|
| US01 | As a [user role], I want to [feature]       | High     | 5            | Dev A    |
| US02 | As a [user role], I want to [feature]       | Medium   | 3            | Dev B    |
| US03 | As a [user role], I want to [feature]       | Low      | 2            | Dev C    |

