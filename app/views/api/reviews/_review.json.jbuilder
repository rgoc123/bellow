json.extract! review, :id, :user_id, :business_id, :rating, :body, :updated_at

json.first_name review.user.first_name
json.last_name review.user.last_name
json.image asset_path(review.user.image)
