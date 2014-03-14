class Club < ActiveRecord::Base

	has_many :cards

	has_attached_file :logo,
 		:styles => {
 			:thumb => '360x360>'
 		},
 		:convert_options => {
 			:original => '-quality 100 -strip',
 			:thumb => '-quality 50 -strip'
 		},
		:storage => :s3,
		:s3_credentials => {
			:access_key_id => 'AKIAJQTVHQUJX223JNPA',
			:secret_access_key => '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'
		},
		:bucket => 'clubcardshuffle',
		:path => ':class/:attachment/:id/:style.:extension',
		:default_url => ActionController::Base.helpers.asset_path('0.png')
	validates_attachment_content_type :logo, :content_type => /\Aimage\/.*\Z/

	validates_presence_of :name, :regex
	validates_uniqueness_of :name

end