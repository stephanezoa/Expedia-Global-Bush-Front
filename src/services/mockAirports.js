// src/services/mockAirports.js

/**
 * Données mockées pour tester l'autocomplétion sans backend
 * À supprimer une fois l'API backend configurée
 */

export const mockAirports = [
    // France
    {
        id: "1",
        name: "Charles de Gaulle Airport",
        city: "Paris",
        country: "France",
        iataCode: "CDG",
        icaoCode: "LFPG"
    },
    {
        id: "2",
        name: "Orly Airport",
        city: "Paris",
        country: "France",
        iataCode: "ORY",
        icaoCode: "LFPO"
    },
    {
        id: "3",
        name: "Nice Côte d'Azur Airport",
        city: "Nice",
        country: "France",
        iataCode: "NCE",
        icaoCode: "LFMN"
    },
    {
        id: "4",
        name: "Lyon-Saint Exupéry Airport",
        city: "Lyon",
        country: "France",
        iataCode: "LYS",
        icaoCode: "LFLL"
    },
    {
        id: "5",
        name: "Marseille Provence Airport",
        city: "Marseille",
        country: "France",
        iataCode: "MRS",
        icaoCode: "LFML"
    },

    // Cameroun
    {
        id: "6",
        name: "Yaoundé Nsimalen International Airport",
        city: "Yaoundé",
        country: "Cameroon",
        iataCode: "NSI",
        icaoCode: "FKYS"
    },
    {
        id: "7",
        name: "Douala International Airport",
        city: "Douala",
        country: "Cameroon",
        iataCode: "DLA",
        icaoCode: "FKKD"
    },

    // États-Unis
    {
        id: "8",
        name: "John F. Kennedy International Airport",
        city: "New York",
        country: "United States",
        iataCode: "JFK",
        icaoCode: "KJFK"
    },
    {
        id: "9",
        name: "Los Angeles International Airport",
        city: "Los Angeles",
        country: "United States",
        iataCode: "LAX",
        icaoCode: "KLAX"
    },
    {
        id: "10",
        name: "Miami International Airport",
        city: "Miami",
        country: "United States",
        iataCode: "MIA",
        icaoCode: "KMIA"
    },
    {
        id: "11",
        name: "Chicago O'Hare International Airport",
        city: "Chicago",
        country: "United States",
        iataCode: "ORD",
        icaoCode: "KORD"
    },
    {
        id: "12",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        country: "United States",
        iataCode: "ATL",
        icaoCode: "KATL"
    },

    // Royaume-Uni
    {
        id: "13",
        name: "London Heathrow Airport",
        city: "London",
        country: "United Kingdom",
        iataCode: "LHR",
        icaoCode: "EGLL"
    },
    {
        id: "14",
        name: "London Gatwick Airport",
        city: "London",
        country: "United Kingdom",
        iataCode: "LGW",
        icaoCode: "EGKK"
    },

    // Allemagne
    {
        id: "15",
        name: "Frankfurt Airport",
        city: "Frankfurt",
        country: "Germany",
        iataCode: "FRA",
        icaoCode: "EDDF"
    },
    {
        id: "16",
        name: "Munich Airport",
        city: "Munich",
        country: "Germany",
        iataCode: "MUC",
        icaoCode: "EDDM"
    },

    // Espagne
    {
        id: "17",
        name: "Barcelona-El Prat Airport",
        city: "Barcelona",
        country: "Spain",
        iataCode: "BCN",
        icaoCode: "LEBL"
    },
    {
        id: "18",
        name: "Adolfo Suárez Madrid-Barajas Airport",
        city: "Madrid",
        country: "Spain",
        iataCode: "MAD",
        icaoCode: "LEMD"
    },

    // Italie
    {
        id: "19",
        name: "Leonardo da Vinci-Fiumicino Airport",
        city: "Rome",
        country: "Italy",
        iataCode: "FCO",
        icaoCode: "LIRF"
    },
    {
        id: "20",
        name: "Milan Malpensa Airport",
        city: "Milan",
        country: "Italy",
        iataCode: "MXP",
        icaoCode: "LIMC"
    },

    // Émirats Arabes Unis
    {
        id: "21",
        name: "Dubai International Airport",
        city: "Dubai",
        country: "United Arab Emirates",
        iataCode: "DXB",
        icaoCode: "OMDB"
    },

    // Japon
    {
        id: "22",
        name: "Tokyo Haneda Airport",
        city: "Tokyo",
        country: "Japan",
        iataCode: "HND",
        icaoCode: "RJTT"
    },
    {
        id: "23",
        name: "Narita International Airport",
        city: "Tokyo",
        country: "Japan",
        iataCode: "NRT",
        icaoCode: "RJAA"
    },

    // Singapour
    {
        id: "24",
        name: "Singapore Changi Airport",
        city: "Singapore",
        country: "Singapore",
        iataCode: "SIN",
        icaoCode: "WSSS"
    },

    // Australie
    {
        id: "25",
        name: "Sydney Kingsford Smith Airport",
        city: "Sydney",
        country: "Australia",
        iataCode: "SYD",
        icaoCode: "YSSY"
    }
];

/**
 * Fonction de recherche mockée
 * @param {string} query - Terme de recherche
 * @returns {Array} Liste des aéroports correspondants
 */
export const searchMockAirports = (query) => {
    if (!query || query.trim().length < 2) {
        return [];
    }

    const normalizedQuery = query.trim().toLowerCase();

    return mockAirports.filter(airport => {
        const searchableText = `${airport.name} ${airport.city} ${airport.country} ${airport.iataCode}`.toLowerCase();
        return searchableText.includes(normalizedQuery);
    }).slice(0, 10); // Limiter à 10 résultats
};
