@businesses.each do |business|
  json.set! business.id do
    json.id business.id
    json.name business.name
    json.rating business.rating
    json.price business.price
    json.neighborhood business.neighborhood
    json.address business.address
    json.city business.city
    json.phone_number business.phone_number
    json.lat business.lat
    json.long business.long
    json.image_url asset_path(business.main_image.url)
    json.reviews business.reviews
    json.calculate_rating business.calculate_rating

  end
end
