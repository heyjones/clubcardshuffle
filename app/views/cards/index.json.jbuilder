json.array!(@cards) do |card|
  json.extract! card, :id, :club_id, :number
  json.url card_url(card, format: :json)
end
