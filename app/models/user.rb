class User < ActiveRecord::Base
  has_secure_password

  has_many :reviews
  has_many :product, through: :reviews

  validates :name, presence: true
end
