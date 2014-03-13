class Club < ActiveRecord::Base

	has_many :cards

	has_attached_file :logo, :styles => { :thumb => '360x360>' }, :default_url => '/images/:style/default.png'
	validates_attachment_content_type :logo, :content_type => /\Aimage\/.*\Z/

	validates_presence_of :name, :regex
	validates_uniqueness_of :name

end