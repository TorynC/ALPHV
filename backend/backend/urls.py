from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # admin interface at /admin/
    path('admin/', admin.site.urls),
    # API endpoints starting with /api/, routes handled in api/urls.py
    path("api/", include('api.urls')),
]
