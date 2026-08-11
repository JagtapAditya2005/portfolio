from django.urls import path

from .views import (
    ProfileListAPIView,
    SkillListAPIView,
    EducationListAPIView,
    ExperienceListAPIView,
    ProjectListAPIView,
    CertificateListAPIView,
    ContactAPIView,
)

urlpatterns = [
    path("profile/", ProfileListAPIView.as_view(), name="profile-list"),
    path("skills/", SkillListAPIView.as_view(), name="skill-list"),
    path("education/", EducationListAPIView.as_view(), name="education-list"),
    path("experience/", ExperienceListAPIView.as_view(), name="experience-list"),
    path("projects/", ProjectListAPIView.as_view(), name="project-list"),
    path("certificates/", CertificateListAPIView.as_view(), name="certificate-list"),
    path("contact/", ContactAPIView.as_view(), name="contact"),
]