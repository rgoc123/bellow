class AddCityToBusinesses2 < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :city, :string
  end
end
