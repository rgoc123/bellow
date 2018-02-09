json.extract! business, :id, :name, :rating, :price, :address, :city, :neighborhood, :phone_number, :website, :lat, :long, :calculate_rating, :main_image, :cuisines

json.image_url business.main_image

json.image0 asset_path(business.photos[0].image)
json.image1 asset_path(business.photos[1].image)
