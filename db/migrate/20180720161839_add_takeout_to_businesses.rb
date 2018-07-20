class AddTakeoutToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :takeout, :boolean
  end
end
