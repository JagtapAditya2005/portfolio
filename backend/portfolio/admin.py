from django.contrib import admin
from .models import (
    Profile,
    Skill,
    Education,
    Experience,
    Project,
    Certificate,
    ContactMessage,
)


admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Certificate)
admin.site.register(ContactMessage)