class PagesController < ApplicationController
  def index
  	@clubs = Club.all
  end
end