from django.conf.urls import include, url, patterns
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    url(r'^polls/', include('polls.urls', namespace="polls")),
    url(r'^sense/', include('sense.urls', namespace="sense")),
    url(r'^admin/', include(admin.site.urls)),
]

urlpatterns += patterns('',
 (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
 )