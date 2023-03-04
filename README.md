# Wardrobify

Team:

* Trey Pressey - Hats Microservice
* Joshua Evangelista - Shoes Microservice



## Design

## Shoes microservice
The defined Shoe model takes in the information about the shoe details in regards to manufacturer/ brand, name of the model of shoe, the color, and a photo url.

The Bin acts as a container in which the shoes are related to, this also carries a closet name, bin number, bin size, as well as the associated href to the entry.

In relation to the wardrobe, users can easily view hats seperately than the shoes, as well as seperated submission forms that get saved to the same database but treated as seperate entites.

The "Shoes" page shows a list of all the created shoes and has an implimented delete function.

## Hats microservice
Made a model hat that has a many-to-one relationship with Locations (LocationVO). hat(many) location(one). We poll data from the wardrobe api that holds the current locations list and turn each location into a locationVO that the hat uses when being created. We use the href of the locationVO specifically when making a hat to identify what location the hat is in, this is because the href value is always unique to that specific locationVO. The locationVO is assigned the original locations href when the poller gets the location list from the wardrobe api.
