class RemoveCityFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :city
  end
end
