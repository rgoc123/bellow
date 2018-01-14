json.partial! "api/reviews/review", review: @review

@reviews.each do |review|
  json.set! review.id do
    json.id review.id
    json.user_id review.user_id
    json.business_id review.business_id
    json.rating review.rating
    json.body review.body
    json.updated_at review.updated_at

    json.partial! "api/users/user", user: @user
    json.user review.user
    json.first_name review.user.first_name
    json.last_name review.user.last_name

  end
end
