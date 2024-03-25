## Paint Tracker Website Django Backend

This Django app was built to host APIs for the Paint Tracker Website [frontend](https://github.com/danielhou13/Paint_tracker_website). The primary use of this Django app is the API calls found in `userapi/views.py` and the Django Admin Page.
The database for this backend is an Amazon RDS database. The application is deployed using heroku and can be found at this [link](https://django-paint-6d3cee377c88.herokuapp.com/api/). 
Since this is meant to be a backend, there is no fancy landing page and really is just used for the api calls and admin page found [here](https://django-paint-6d3cee377c88.herokuapp.com/admin/login/?next=/admin/).

## Django Admin Page
Currently, the Admin Page is logged in by the user `admin` or `Adam` using the password `testtest12345`.
It features `groups`, `users`, as well as a model called `paints` under `userapi`. Currently, this is the only way to add new groups, users, and paints, and it can be done by the system admin "Adam".
![image](https://github.com/danielhou13/paint_backend/assets/54420410/73ccc89c-a91d-4d94-87b0-0c75341fe394)

### Paints
The paint item itself is simple, only having its colour, the current stock, and the column that the paint currently resides in. The column refers to the "Available", "Running low" and "Out of Stock" columns of the Kanban board.
![image](https://github.com/danielhou13/paint_backend/assets/54420410/a7f86c76-5daf-4c08-ad63-96151fadbf58)
### Groups
Inside of the groups, there are groups with specific permissions such as painter, assigned, and system admin. Of course, the system admin has all the permissions, whereas assigner can only "view".

![image](https://github.com/danielhou13/paint_backend/assets/54420410/4092fe6a-fa78-4ae0-9bbf-905baf41e8b1) </br>
See that the painter group can view, edit, and update paint.

![image](https://github.com/danielhou13/paint_backend/assets/54420410/8b94b0dd-5181-4006-a197-747f8246e667)</br>
See that the assigner can only view.

### Users
As there are only few Users highlighted in the document, the users have been created and assigned the following roles:

| User  | Group  |
|---|---|
| Adam  | System Admin  |
|  John |  Assigner |
|  Jane | Painter  |
| painter | Painter |

Jane doesn't always paint, but she requires the same permissions. She in theory could be "inventory manager", so the system admin "Adam" could update and change it for her.
John only requires viewing so is assigned the group "assigned" which can only view paints.
Adam is the system manager that can update, view, and use the Django admin.
painter is a Painter who needs to be able to move paints and edit stock.




