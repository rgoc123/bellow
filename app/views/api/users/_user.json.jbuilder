json.extract! user, :id, :email, :first_name, :last_name, :image

json.reviewsCount user.reviews.count
