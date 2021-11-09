release: python manage.py migrate
web: gunicorn algorand_dashboard.wsgi --log-file -
worker: celery worker --app=tasks.app