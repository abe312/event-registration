# Simple backend event registration

screenshots: https://imgur.com/a/3DRBJv8
![event list](https://i.imgur.com/SuU065d.png)
![event details](https://i.imgur.com/PPwwnCT.png)

-   only django is used. And basic css and es6 are used to style and add auto slug functionality. No other libraries are used (other than font-awesome icons)
-   `pip install -r requirements.txt` and then `./manage.py runserver`
-   add events and register to those events from register button.
-   The events detail page shows all the events and the people registed to those events.
-   For admin
    - go to http://127.0.0.1:8000/admin/
    - use abe312 as user and password test1234
    - you may also create a new superuser by `./manage.py createsuperuser` and then following the instructions.
-   you can add events and edit events(change thumbnails, add people etc) on the admin section


> Note: django rest framework + angularjs is coming very soon and could be accessed from the master branch. This one can be accessed from the simple-backend branch `git checkout simple-backend` and to go back to master type `git checkout master`
