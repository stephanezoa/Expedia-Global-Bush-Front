export const validateDestination = (dest) => {
  return {
    id: dest.id,
    name: dest.name || '',
    tagline: dest.tagline || '',
    description: dest.description || '',
    longDescription: dest.longDescription || '',
    stats: dest.stats || {},
    highlights: dest.highlights || [],
    attractions: dest.attractions || [],
    packages: dest.packages || [],
    itinerary: dest.itinerary || [],
    practicalInfo: dest.practicalInfo || [],
    images: dest.images || [],
    cities: dest.cities || [],
    hotels: dest.hotels || [],
    services: dest.services || [],
    travelerExperiences: dest.travelerExperiences || []
  };
};
