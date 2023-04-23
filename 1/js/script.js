fetch(
  'https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-04-10&checkOut=2023-04-15&limit=1'
)
  .then((responce) => responce.json())
  .then((data) => console.log(data));
