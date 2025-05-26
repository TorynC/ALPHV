# Shape Item Manager

A simple full-stack web app to manage items defined by a **name**, **shape**, **color**, and **timestamp**. Built with **React** (frontend) and a backend API (Django), it lets users create, view, edit, and delete items via a user-friendly portal.

## Features
- Add new shape/color items through an admin form
- View all items in a sortable table with images
- Edit or delete items by ID from the User Portal
- React front-end with Django REST API integration
- Toast notifications for success/error messages
- Responsive, clean UI using CSS


## Getting Started
1. clone project repository 
2. Go to backend and create a .env file and enter .env file details
``` bash 
cd backend
```
3. Create your virtual environment in backend directory
- In the backend directory run:
``` bash
python -m venv env
```
4. activate virtual environment 
- (Windows)
``` bash
env/Scripts/activate
```
- (Mac)
``` bash
source env/bin/activate
```

5. install dependencies in the backend directory 
``` bash
pip install -r requirements.txt
```

6. Run database migrations 
``` bash
python manage.py makemigrations
python manage.py migrate
```

7. Run server
``` bash
python manage.py runserver
```

8. In a new Terminal go to frontend directory 
``` bash
cd frontend
```

9. Install dependencies
``` bash
npm install
```

10. start server 
``` bash
npm run dev
```

11. Click on the frontend server link in the terminal
```bash
http://localhost:5173/
```


