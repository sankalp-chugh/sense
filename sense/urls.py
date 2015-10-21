from django.conf.urls import url

from . import views

urlpatterns = [
	#ex: /sense/
    url(r'^$', views.index, name='index'),
]