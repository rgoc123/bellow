class AddAttachmentMainImageToBusinesses < ActiveRecord::Migration[5.1]
  def self.up
    change_table :businesses do |t|
      t.attachment :main_image
    end
  end

  def self.down
    remove_attachment :businesses, :main_image
  end
end
