export default function CityTicker() {
  const cities = [
    'Rio de Janeiro', 'Tokyo', 'Lisbon', 'Dubai', 'Bangkok',
    'São Paulo', 'Los Angeles', 'Berlin', 'Abu Dhabi', 'Mexico City'
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...cities, ...cities].map((city, i) => (
          <div key={i} className="marquee-item">
            {city} <span className="pip"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
