from django.db import models

class BinVO(models.Model):
  closet_name = models.CharField(max_length=150)
  bin_number = models.PositiveIntegerField(null=True)
  bin_size = models.PositiveIntegerField(null=True)
  import_href = models.CharField(max_length=200, null=True)

class Shoe(models.Model):
  shoe_brand = models.CharField(max_length=200)
  shoe_name = models.CharField(max_length=200)
  shoe_color = models.CharField(max_length=200)
  shoe_picture_url = models.URLField(null=True)
  bin = models.ForeignKey(BinVO, related_name="shoe", null=True, on_delete=models.CASCADE)
