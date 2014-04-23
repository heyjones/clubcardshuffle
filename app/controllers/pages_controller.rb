class PagesController < ApplicationController
  def index
  	@clubs = Club.all.order(:name).joins(:cards).uniq
  	@card = Card.new
  end
end