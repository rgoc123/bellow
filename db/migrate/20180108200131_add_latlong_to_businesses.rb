class AddLatlongToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :lat, :float
    add_column :businesses, :long, :float
  end
end
