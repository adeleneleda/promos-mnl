class Product < Ohm::Model
  include Ohm::Timestamps

  attribute :name
  attribute :description
  attribute :price_php
  unique :name

  index :name

  def self.fetch(identifier)
    with(:name, identifier)
  end
end
