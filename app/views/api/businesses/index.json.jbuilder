@businesses.each do |business|
  json.set! business.id do
    json.id business.id
    json.name business.name
    json.rating business.rating
    json.price business.price
    json.neighborhood business.neighborhood
    json.address business.address
    json.phone_number business.phone_number
  end
end
