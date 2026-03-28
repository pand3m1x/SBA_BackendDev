❀  Instructions ❀ 

    I added a lot of stuff, but when adding search by task id and delete, does this mean I'll 
    have to make a new end point? I'll see, but if this note is still here, it's because I have
    yet to finish the last two routes for this project, and may have not had the time to check that each project/task
    is user athourized 

    Thanks!

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
POST /api/users/register [x]
POST /api/users/login [x]

❀ Projects ❀ 
GET /api/projects [x]
POST /api/projects [x]
GET /api/projects/:id [x]
PUT /api/projects/:id [x]
DELETE /api/projects/:id [x]

❀ Tasks ❀ 
POST /api/projects/:projectId/tasks [x]
GET /api/projects/:projectId/tasks [x]
PUT /api/tasks/:taskId []
DELETE /api/tasks/:taskId []