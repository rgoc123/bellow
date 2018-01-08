json.partial! "api/reviews/review", review: @review

@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.user_id review.user_id
    json.business_id review.business_id
    json.rating review.rating
    json.body review.body

    json.partial! "api/users/user", user: @user
    json.user review.user.first_name

  end
end
