class Club < ActiveRecord::Base

	has_many :cards

	has_attached_file :logo,
		:styles => { :thumb => '360x360>' },
 		:convert_options => {:original => '-quality 100 -strip', :thumb => '-quality 50 -strip' },
		:path => ':rails_root/public/system/:class/:attachment/:id.:style.:extension',
		:url => '/system/:class/:attachment/:id.:style.:extension',
		:default_url => '/system/:class/:attachment/0.:style.:extension'
	validates_attachment_content_type :logo, :content_type => /\Aimage\/.*\Z/

	validates_presence_of :name, :regex
	validates_uniqueness_of :name

end