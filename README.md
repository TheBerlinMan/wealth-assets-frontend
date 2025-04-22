

## Start Up

Connect to the backend:
```
### 04/22/25 - I realized today that I did not include the environment variables in my original submission. I'm so sorry - I hope that you still consider my submission...  

touch .env

#copy and paste in the newly created .env file
VITE_BACKEND_URL=http://localhost:3001
```

Make sure the backend is already running. 
Backend Repo: https://github.com/TheBerlinMan/wealth-assets-backend

```
git clone https://github.com/TheBerlinMan/wealth-assets-frontend.git
cd wealth-assets-frontend

npm install
npm run dev
```

## Design Decisions

I went with a MERN stack, utilizing RESTful routing, as that's what I'm most comfortable with at home and given the time constraints.

## Trade-Offs 

Given more time...
- I would have gone with a recursive solution. I was able to figure out how to display the data recursively, but couldn't figure out in time how to style/toggle the appropriate parent/children levels of the tree. 
- I would have used Typescript over Javascript.
- I would have attempted to use GraphQL. I started learning it this week. 
