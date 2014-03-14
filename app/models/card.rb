class Card < ActiveRecord::Base
	include HasBarcode

	belongs_to :club
# 	has_barcode :barcode,
# 		:outputter => :svg,
# 		:type => :code_128,
# 		:value => Proc.new { |p| “#{p.number}” }

	validates_presence_of :club_id, :number
	validates_numericality_of :club_id
	validates_uniqueness_of :number

end