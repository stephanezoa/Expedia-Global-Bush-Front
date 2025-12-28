/**
 * Formater la requête de recherche de vols selon le format strict attendu
 * @param {Object} formData - Les données du formulaire
 * @param {Object} authUser - Les informations de l'utilisateur connecté (optionnel)
 * @returns {Object} Le payload JSON formaté
 */
export const formatSearchRequest = (formData, authUser = null) => {
    const {
        departure,
        destination,
        departDate,
        returnDate,
        tripType,
        adults,
        children,
        infants,
        cabinClass,
        directFlight
    } = formData;
    console.log("formData", formData)
    // Mapper le type de voyage
    const journeyTypeMap = {
        'roundtrip': 'Return',
        'oneway': 'OneWay',
        'multiday': 'Circle'
    };

    // Mapper la classe
    const classMap = {
        'economy': 'Economy',
        'premium': 'PremiumEconomy',
        'business': 'Business',
        'first': 'First'
    };

    // Construction de l'objet OriginDestinationInfo
    const originDestinationInfo = [
        {
            "departureDate": departDate,
            "airportOriginCode": departure?.iataCode || "",
            "airportDestinationCode": destination?.iataCode || "",
            "returnDate": tripType === 'roundtrip' ? returnDate : null
        }
    ];

    return {
        // "user_id": authUser?.id || "WainfenVictor_testAPI",
        // "user_password": authUser?.password || "WainfenVictorTest@2025",
        // "access": "Test",
        // "ip_address": "129.0.189.180",
        "requiredCurrency": "EUR",
        "journeyType": journeyTypeMap[tripType] || "OneWay",
        "OriginDestinationInfo": originDestinationInfo,
        "class": classMap[cabinClass] || "Economy",
        "adults": parseInt(adults, 10) || 1,
        "childs": parseInt(children, 10) || 0,
        "infants": parseInt(infants, 10) || 0,
        "directFlight": directFlight ? 1 : 0,

    };
};
