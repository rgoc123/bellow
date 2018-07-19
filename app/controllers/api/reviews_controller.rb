class Api::ReviewsController < ApplicationController
  def index
    if params[:business_id]
      @reviews = Review.where(business_id: params[:business_id])
    else
      @reviews = Review.all
    end
    render json: @reviews
  end

  def show
    @review = Review.find(params[:id]);
  end

  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
