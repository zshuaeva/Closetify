from django.shortcuts import render
from django.views.decorators.http import require_http_methods
# Create your views here.
import json
from common.json import ModelEncoder
from .models import BinVO, Shoe
from django.http import JsonResponse

class BinVOEncoder(ModelEncoder):
  model = BinVO
  properties = [
  "closet_name",
  "bin_number",
  "bin_size",
  "import_href"
  ]


class ShoesListEncoder(ModelEncoder):
  model = Shoe
  properties = [
    "id",
    "shoe_brand",
    "shoe_color",
    "shoe_picture_url",
    "bin",
  ]

  encoders = {"bin": BinVOEncoder()}

class ShoesDetailEncoder(ModelEncoder):
  model = Shoe
  properties = [
    "id",
    "shoe_brand",
    "shoe_name",
    "shoe_color",
    "shoe_picture_url",
  ]

  encoders = {"bin": BinVOEncoder()}

@require_http_methods(["GET", "POST"])
def api_shoes(request):
  if request.method == "GET":
    shoes = Shoe.objects.all()
    return JsonResponse(
      shoes,
      encoder=ShoesListEncoder,
      safe=False
    )
  else:
    content = json.loads(request.body)
    try:
      href = content["bin"]
      bin = BinVO.objects.get(import_href=href)
      content["bin"] = bin
    except BinVO.DoesNotExist:
      return JsonResponse(
        {"message": "Invalid bin id"},
        status=400,
      )
    shoes = Shoe.objects.create(**content)
    return JsonResponse(
      {"shoes": shoes},
      encoder=ShoesDetailEncoder,
      safe=False,
    )
