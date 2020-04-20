class Task < ApplicationRecord
  belongs_to :user, foreign_key: :assignee_id
  has_many :comments, dependent: :destroy 
  validates :description, presence:true
end
