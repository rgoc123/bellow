json.partial! "api/businesses/business", business: @business

json.reviews do
  @business.reviews.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
      json.first_name review.user.first_name
      json.last_name review.user.last_name
    end
  end
end
