class Business < ApplicationRecord

  has_many :reviews

  has_many :photos

  has_attached_file :main_image, default_url: "default_dish.jpg"

  validates_attachment_content_type :main_image, content_type: /\Aimage\/.*\Z/

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:long])
      .where("lng < ?", bounds[:northEast][:long])
  end

  def calculate_rating
    return 0 unless !!self.reviews
    (self.reviews.average(:rating).to_i)
  end

end
