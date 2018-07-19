class AddOpenNowDeliversToBusiness < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :open_now, :integer
    add_column :businesses, :delivers, :boolean
  end
end
