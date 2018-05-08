json.partial! "api/users/user", user: @user

json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.rating review.rating
      json.body review.body
    end
  end
end
