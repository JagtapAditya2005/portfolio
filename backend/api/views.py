from django.conf import settings
from django.core.mail import send_mail

from rest_framework import generics, status
from rest_framework.response import Response

from portfolio.models import (
    Profile,
    Skill,
    Education,
    Experience,
    Project,
    Certificate,
)

from .serializers import (
    ProfileSerializer,
    SkillSerializer,
    EducationSerializer,
    ExperienceSerializer,
    ProjectSerializer,
    CertificateSerializer,
    ContactMessageSerializer,
)


class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SkillListAPIView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class EducationListAPIView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class CertificateListAPIView(generics.ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer


class ContactAPIView(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data

        send_mail(
            subject=f"Portfolio Contact: {data['subject']}",
            message=(
                f"Name: {data['name']}\n"
                f"Email: {data['email']}\n"
                f"Subject: {data['subject']}\n\n"
                f"Message:\n{data['message']}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
            fail_silently=False,
        )

        return Response(
            {
                "message": "Your message has been sent successfully!"
            },
            status=status.HTTP_201_CREATED,
        )