class AddWebsiteToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :website, :string
  end
end
