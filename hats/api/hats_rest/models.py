from django.db import models
from django.urls import reverse

# Create your models here.

class LocationVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    closet_name = models.CharField(max_length=200)

class Hat(models.Model):
    fabric = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    style = models.CharField(max_length=200)
    picture = models.URLField(null=True)

    location = models.ForeignKey(
        LocationVO,
        related_name="hat",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.style

    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})
