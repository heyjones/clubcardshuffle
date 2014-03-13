class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :club_id
      t.string :number

      t.timestamps
    end
  end
end
