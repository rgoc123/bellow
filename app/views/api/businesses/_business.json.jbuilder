json.extract! business, :id, :name, :rating, :price, :address, :city, :neighborhood, :phone_number, :lat, :long, :calculate_rating

json.image_url business.main_image

json.image0 asset_path(business.photos[0].image)
json.image1 asset_path(business.photos[1].image)
