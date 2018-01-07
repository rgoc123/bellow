class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id
    if @review.save
      business = @review.business
      render json: business, include: [:reviews]
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
