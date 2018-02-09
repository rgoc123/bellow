class AddCuisinesToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :cuisines, :string
  end
end
