class Api::BusinessesController < ApplicationController

  #if this doesn't work, the original index was just Business.all

  def index
    @businesses = bounds ? Business.in_bounds(bounds) : Business.all
  end

  def show
    @business = Business.find(params[:id])
  end

  def create
  end

  private
  def business_params
    params.require(:business).permit(
      :lat,
      :long
    )
  end

  def bounds
    params[:bounds]
  end

end
