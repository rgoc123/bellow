json.extract! business, :id, :name, :rating, :price, :address, :phone_number, :lat, :long

json.image0 asset_path(business.photos[0].image)
json.image1 asset_path(business.photos[1].image)
