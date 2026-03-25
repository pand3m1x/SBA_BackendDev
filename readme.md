❀  Instructions ❀ 

    Fill out later 

Completion requirements: 
Ensure your application runs without errors. []
Test every endpoint thoroughly using an API client like Insomnia or Postman. []
Try to access protected routes without a token. []
Log in as User A and attempt to access data owned by User B. All such attempts should be rejected with a 403 Forbidden or similar status. []
Submit a link to your completed GitHub repository. Ensure your .env file is included in .gitignore and not pushed to the repository. [x]

Phase 1:

❀ Plan Your API:❀ 
Before writing any code, plan your data models and API endpoints. Think about the relationships between users, projects, and tasks. What information does each model need? What routes will you need to perform all the required actions? Creating a simple README.md to outline your API (e.g., POST /api/users/login, GET /api/projects, etc.) is highly recommended.


❀ AUTH ❀ 
POST /api/users/register
POST /api/users/login

❀ Projects ❀ 
GET /api/projects
POST /api/projects
GET /api/projects/:id
PUT /api/projects/:id
DELETE /api/projects/:id

❀ Tasks ❀ 
POST /api/projects/:projectId/tasks
GET /api/projects/:projectId/tasks
PUT /api/tasks/:taskId
DELETE /api/tasks/:taskId