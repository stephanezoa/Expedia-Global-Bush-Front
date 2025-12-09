import { useEffect, useState } from "react";




export default function UseGeo() {
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => setGeo(data));
  }, []);

  if (!geo) return <p>Loading...</p>;

  return (
    <div>
      <p>Pays : {geo.country_name}</p>
      <p>Ville : {geo.city}</p>
      <p>Devise : {geo.currency}</p>
      <p>Latitude : {geo.latitude}</p>
      <p>Longitude : {geo.longitude}</p>
    </div>
  );
}
