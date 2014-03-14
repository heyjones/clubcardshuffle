class AddExampleToClubs < ActiveRecord::Migration
  def change
    add_column :clubs, :example, :string
  end
end
