class AddLogoToClubs < ActiveRecord::Migration
  def change
  	add_attachment :clubs, :logo
  end
end
