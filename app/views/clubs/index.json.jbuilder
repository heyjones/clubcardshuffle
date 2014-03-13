json.array!(@clubs) do |club|
  json.extract! club, :id, :name, :regex
  json.url club_url(club, format: :json)
end
