class Business < ApplicationRecord

  has_many :reviews

  def self.in_bounds(bounds)

  end

  private
  def business_params
    params.require(:business).permit(
      :lat,
      :long
    )
  end

end
