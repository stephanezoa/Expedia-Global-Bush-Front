import React, { useState } from 'react';
import { Search, Calendar, Users, Plane, ChevronDown, ChevronRight, Shield, Clock, Trophy, MapPin, Download, Star, Filter, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pays1 from "../assets/pays1.jpg"
import Pays2 from "../assets/pays2.jpg"

import AmericanLogo from "../assets/airlines-logo/AmericanAirlines.png"
import UnutedAirlines from "../assets/airlines-logo/UnutedAirlines.png"
import SouthAirlines from "../assets/airlines-logo/SouthAirlines.png"
import AlaskaAirlines from "../assets/airlines-logo/AlaskaAirlines.png"
import Jetblue from "../assets/airlines-logo/Jetblue.png"
import Delta from "../assets/airlines-logo/Delta.png"
import CamairCo from "../assets/airlines-logo/CamairCo.png"






const FlightsPage = () => {
    const [tripType, setTripType] = useState('roundtrip');
    const [departure, setDeparture] = useState('Yaoundé (YAO)');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travelers, setTravelers] = useState('1 Traveler, Economy');

    const popularDestinations = [
        { name: "Los Angeles", code: "LAX", price: "€499" },
        { name: "Las Vegas", code: "LAS", price: "€389" },
        { name: "Miami", code: "MIA", price: "€599" },
        { name: "Chicago", code: "ORD", price: "€459" },
        { name: "Denver", code: "DEN", price: "€529" },
        { name: "Orlando", code: "MCO", price: "€419" },
        { name: "Houston", code: "IAH", price: "€489" },
        { name: "Atlanta", code: "ATL", price: "€479" },
        { name: "Honolulu", code: "HNL", price: "€799" },
        { name: "New York", code: "JFK", price: "€549" },
    ];

    const airlines = [
        { name: "American Airlines", logo: AmericanLogo },
        { name: "United", logo: UnutedAirlines },
        { name: "Southwest Airlines", logo: SouthAirlines },
        { name: "Delta", logo:  Delta },
        { name: "Camair Co", logo: CamairCo },
        { name: "JetBlue Airways", logo: Jetblue },
        { name: "Alaska Airlines", logo: AlaskaAirlines },
    ];

    const flightDeals = [
        {
            title: "Looking for a weekend getaway?",
            description: "Explore USA with cheap domestic flight deals",
            image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=400&h-250"
        },
        {
            title: "Where are you dreaming of going?",
            description: "Find international flight deals that take you to some great places",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&h-250"
        },
        {
            title: "Experience the luxury of traveling?",
            description: "Grab cheap business class flight tickets to treat yourself",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&h-250"
        },
        {
            title: "Explore Sicily's southern soul",
            description: "Perched between hills and the Mediterranean, Ragusa Islands history, flavor and nature in harmony",
            image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&h-250"
        }
    ];

    const bookingTips = [
        {
            question: "Which day of the week is the best day to buy cheap airline tickets?",
            answer: "For both US domestic and international travel, Sundays can be cheaper for airline ticket purchases. Friday tends to be the most expensive day. Booking on the right day could save you up to 6%."
        },
        {
            question: "When is the best time to buy airline tickets?",
            answer: "Prices usually start to increase 21 days before departure for international flights and 16 days for domestic flights. Keep an eye on prices and set up price alerts."
        },
        {
            question: "Which are the cheapest days to fly?",
            answer: "Tuesday and Wednesday are generally cheaper. Starting your trip on a Friday could be almost 11% cheaper than air travel on Sundays."
        },
        {
            question: "Which is the cheapest month to fly?",
            answer: "For international flights, November tends to be the cheapest (up to 34.6% savings vs February). For domestic flights, August offers the best deals (up to 50% savings)."
        }
    ];

    return (

        <div className="min-h-screen bg-gray-50">
            <div 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 relative"
                style={{
                    backgroundImage: `url(${Pays1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
                >
                <div className="absolute inset-0 bg-blue-500/50"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                    <h1 className="text-3xl font-bold mb-2">Search flights</h1>
                    <p className="text-blue-100 mb-6">Find and book cheap flights worldwide</p>
                    
                    {/* Search Form */}
                    <div className="bg-white rounded-lg p-6 shadow-xl">
                        {/* Trip Type */}
                        <div className="flex border-b mb-6">
                            <button 
                                className={`px-6 py-3 font-medium ${tripType === 'roundtrip' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                                onClick={() => setTripType('roundtrip')}
                            >
                                Roundtrip
                            </button>
                            <button 
                                className={`px-6 py-3 font-medium ${tripType === 'oneway' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                                onClick={() => setTripType('oneway')}
                            >
                                One-way
                            </button>
                            <button 
                                className={`px-6 py-3 font-medium ${tripType === 'multiday' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                                onClick={() => setTripType('multiday')}
                            >
                                Multi-day
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {/* Departure */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Leaving from</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={departure}
                                        onChange={(e) => setDeparture(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="City or airport"
                                    />
                                    <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Destination */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Going to</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="City or airport"
                                    />
                                    <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Dates */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Dates</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={departDate || "Dec 19 - Dec 26"}
                                        onChange={(e) => setDepartDate(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Select dates"
                                    />
                                    <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Travelers */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={travelers}
                                        onChange={(e) => setTravelers(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="1 Traveler, Economy"
                                    />
                                    <Users className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Search Button */}
                            <div className="flex items-end">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                                    <Search className="w-5 h-5 mr-2" />
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Add hotel checkbox */}
                        <div className="mt-6 flex items-center">
                            <input type="checkbox" id="addHotel" className="w-4 h-4 text-blue-600 rounded" />
                            <label htmlFor="addHotel" className="ml-2 text-sm text-gray-700">
                                Add a place to stay
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Popular Airlines */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Popular airlines</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        {airlines.map((airline, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                                <div className="w-15 h-15 bg-white rounded-full  flex items-center justify-center mx-auto mb-2 overflow-hidden">
                                   <img src={airline.logo} alt={airline.name} className='object-contain bg-cover '/>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{airline.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Shield className="w-6 h-6 text-blue-600 mr-2" />
                            <h3 className="font-bold text-gray-900">Price Drop Protection</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Add Price Drop Protection and we will pay you back if your flight gets cheaper.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Trophy className="w-6 h-6 text-blue-600 mr-2" />
                            <h3 className="font-bold text-gray-900">Earn Rewards</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            As a member, you can earn rewards on top of airline miles.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Clock className="w-6 h-6 text-blue-600 mr-2" />
                            <h3 className="font-bold text-gray-900">Save up to 50%</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Save up to 50% when you add a hotel to your flight as a member.
                        </p>
                    </div>
                </div>

                {/* Popular Flight Destinations */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Popular flight destinations</h2>
                    <div className="overflow-x-auto pb-4">
                        <div className="flex gap-4 min-w-max">
                            {popularDestinations.map((destination, index) => (
                                <div key={index} className="w-56 flex-shrink-0">
                                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                            <img src={Pays2} alt="" className='object-cover w-full object-cover h-full  '/>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900">{destination.name} Flights</h3>
                                            <p className="text-sm text-gray-600 mb-2">From {destination.price}</p>
                                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition">
                                                Search flights
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flight Deals */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Flight deals departing near you</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {flightDeals.map((deal, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <div className="text-center text-white p-4">
                                        <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
                                        <p className="text-sm opacity-90">{deal.description}</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <button className="w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition">
                                        Explore deals
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking Tips */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips on booking cheap flights</h2>
                    <p className="text-gray-600 mb-8">
                        Looking for the best time to buy airline tickets to get a cheap flight to everywhere? 
                        Here's how to find the best deals for flight booking no matter where you want to go in the world.
                    </p>
                    
                    <div className="space-y-6">
                        {bookingTips.map((tip, index) => (
                            <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.question}</h3>
                                <p className="text-gray-600">{tip.answer}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm text-gray-600">
                            *Available for a fee on select flights. Terms apply. Based on historical flight data.
                        </p>
                    </div>
                </div>

                {/* App Download */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-2xl font-bold mb-2">Go further with the Expedia app</h2>
                            <p className="text-blue-100 mb-4">
                                Get up to 20% off with Member Prices on hotels. Our app deals help you to save on trips 
                                so you can travel more and manage it all on the go.
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                                <Download className="w-4 h-4" />
                                <span>Scan the QR code with your device camera and download our app</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="w-32 h-32 bg-gray-900 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="grid grid-cols-3 gap-1 mb-1">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="w-6 h-6 bg-white"></div>
                                        ))}
                                    </div>
                                    <span className="text-xs">QR CODE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FlightsPage;