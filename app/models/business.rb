class Business < ApplicationRecord

  has_many :reviews

  def self.in_bounds(bounds)
  end

end
