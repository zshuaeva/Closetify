from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json

from .models import Hat, LocationVO
# Create your views here.

class LocationVODetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name", "import_href"]

class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "style",]

    def get_extra_data(self, o):
        return {"location": o.location.closet_name}

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = ["fabric", "style", "picture", "color", "location",]
    encoders = {
        "location": LocationVODetailEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_hats(request):
    if request.method == "GET":
        hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )

    else:
        content = json.loads(request.body)
        try:
            location_href = content["location"]
            location = LocationVO.objects.get(import_href=location_href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid conference id"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )



def api_show_hat(request, pk):
    hat = Hat.objects.get(id=pk)
    return JsonResponse(
        hat,
        encoder=HatDetailEncoder,
        safe=False,
    )


#Testing to see if VOS are being created
def api_show_locationVO(request):
    locationsVO = LocationVO.objects.all()
    return JsonResponse(
        {"locationvos": locationsVO},
        encoder=LocationVODetailEncoder,
        safe=False,
    )
