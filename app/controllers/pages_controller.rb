class PagesController < ApplicationController
  def index
  	@clubs = Club.all.order(:name).joins(:cards).uniq
  end
end