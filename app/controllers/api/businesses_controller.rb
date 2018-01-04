class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
  end

  def create
  end

end
