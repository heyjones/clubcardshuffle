class PagesController < ApplicationController
  def index
  	@clubs = Club.all.order(:name)
  end
end