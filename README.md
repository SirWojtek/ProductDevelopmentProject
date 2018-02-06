# ProductDevelopmentProjext

### Overview
The purpose of the project is to create complete website
which is able to store different types of insurance forms in the backend site
and renders it correctly in the frontend.

### Models
If you want to see ORM models used in backend see:
- `insurance/types_management/models.py`
- `insurance/instance_management/models.py`

### Backend
Backend is located in `insurance` directory.
There is a complete Django project working with `python-zappa` support.

Before you run the backend, you may want to know how the infrastructure is built.
To prevent environment errors, all dependencies are stored inside Docker container.
Moreover, insite a container there is a `virtualenv` which encapsulates all Python
packages needed to run and deploy backend.

There is only one database instance for both local and deployed backend!

To run backend localy use provided `Dockerfile` to create the image:
```
docker build -t zappa .
```

After that, you can enter it using `enter-dev.sh`.

When you are inside a container, you should source `virtualenv` first:
```
. /var/ve/bin/activate
```
to enable all needed python packages.

After those steps, you can enter `/var/task/insurance` and start using Django app.

Tips:
- If you want your Django server to be visible outsite container,
you should run it with parameters: `python manage.py runserver 0.0.0.0:8000`
- There is `python-zappa` package configured to deploy this app.
To do it basically type `zappa update dev`
- You can seed database with initial content with `python manage.py loaddata instances.yaml`
and `python manage.py loaddata types.yaml`

### Frontend
Frontend of project is located in `frontend-forms` directory. There is
an Angular 2 based application which can be run locally using
```
ng serve
```
The default environment is configured to use backend located in `localhost:8000`
so you may need to start the backend locally before you load the page.

In case of deploy, you can use `build-and-deploy.sh` script located in the root of frontend dir.

### Deployed app
Deployed app can be accessed using S3 bucket:
http://insurance-forms.s3-website-ap-southeast-2.amazonaws.com/

