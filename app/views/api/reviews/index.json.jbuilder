@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.user_id review.user_id
    json.business_id review.business_id
    json.rating review.rating
    json.body review.body
  end
end
