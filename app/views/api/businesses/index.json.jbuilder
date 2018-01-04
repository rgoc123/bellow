@businesses.each do |business|
  json.set! business.id do
    json.name business.name
  end
end
