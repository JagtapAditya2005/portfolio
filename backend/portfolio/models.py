from django.db import models


# ============================================================
# PROFILE
# ============================================================

class Profile(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=200)
    about = models.TextField()

    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    resume = models.FileField(
        upload_to="resume/",
        blank=True,
        null=True
    )

    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField()

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# ============================================================
# SKILL
# ============================================================

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("Frontend", "Frontend"),
        ("Backend", "Backend"),
        ("Database", "Database"),
        ("Programming", "Programming"),
        ("Data Science", "Data Science"),
        ("AI/ML", "AI/ML"),
        ("Tools", "Tools"),
        ("Other", "Other"),
    ]

    name = models.CharField(max_length=100)

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Other"
    )

    percentage = models.PositiveIntegerField(
        default=70
    )

    icon = models.CharField(
        max_length=100,
        blank=True
    )

    def __str__(self):
        return self.name


# ============================================================
# EDUCATION
# ============================================================

class Education(models.Model):
    degree = models.CharField(max_length=200)

    institution = models.CharField(
        max_length=200
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    start_year = models.CharField(
        max_length=20,
        blank=True
    )

    end_year = models.CharField(
        max_length=20,
        blank=True
    )

    description = models.TextField(
        blank=True
    )

    grade = models.CharField(
        max_length=50,
        blank=True
    )

    def __str__(self):
        return f"{self.degree} - {self.institution}"


# ============================================================
# EXPERIENCE
# ============================================================

class Experience(models.Model):
    job_title = models.CharField(
        max_length=200
    )

    company = models.CharField(
        max_length=200
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    start_date = models.DateField(
        blank=True,
        null=True
    )

    end_date = models.DateField(
        blank=True,
        null=True
    )

    is_current = models.BooleanField(
        default=False
    )

    description = models.TextField()

    technologies = models.CharField(
        max_length=500,
        blank=True
    )

    company_url = models.URLField(
        blank=True
    )

    def __str__(self):
        return f"{self.job_title} - {self.company}"


# ============================================================
# PROJECT
# ============================================================

class Project(models.Model):
    title = models.CharField(
        max_length=200
    )

    description = models.TextField()

    technologies = models.CharField(
        max_length=500
    )

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    github_url = models.URLField(
        blank=True
    )

    demo_url = models.URLField(
        blank=True
    )

    featured = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-featured", "-created_at"]

    def __str__(self):
        return self.title


# ============================================================
# CERTIFICATE
# ============================================================

class Certificate(models.Model):
    title = models.CharField(
        max_length=200
    )

    issuer = models.CharField(
        max_length=200
    )

    issue_date = models.DateField(
        blank=True,
        null=True
    )

    description = models.TextField(
        blank=True
    )

    certificate_image = models.ImageField(
        upload_to="certificates/",
        blank=True,
        null=True
    )

    certificate_url = models.URLField(
        blank=True
    )

    def __str__(self):
        return f"{self.title} - {self.issuer}"


# ============================================================
# CONTACT MESSAGE
# ============================================================

class ContactMessage(models.Model):
    name = models.CharField(
        max_length=100
    )

    email = models.EmailField()

    subject = models.CharField(
        max_length=200,
        blank=True
    )

    message = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    is_read = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f"{self.name} - {self.email}"