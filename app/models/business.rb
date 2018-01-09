class Business < ApplicationRecord

  has_many :reviews

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:long])
      .where("lng < ?", bounds[:northEast][:long])
  end



end
