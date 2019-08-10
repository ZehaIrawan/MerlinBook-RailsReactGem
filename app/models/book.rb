class Book < ApplicationRecord
  validates :title, presence: true
  validates :category, presence: true
  validates :author, presence: true
end
