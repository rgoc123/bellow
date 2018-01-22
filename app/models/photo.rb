class Photo < ApplicationRecord

  belongs_to :business

  has_attached_file :image, default_url: "default_dish.jpg"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
