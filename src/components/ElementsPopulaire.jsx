

export default function ElementsPopulaire() {
    return (
        <section className="my-10 px-4">
            <h2 className="text-2xl font-bold mb-6">Destinations Populaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Exemple de destination populaire */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://via.placeholder.com/400x250"
                        alt="Destination 1"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Destination 1</h3>
                        <p className="text-gray-600">Description courte de la destination.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://via.placeholder.com/400x250"
                        alt="Destination 2"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Destination 2</h3>
                        <p className="text-gray-600">Description courte de la destination.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://via.placeholder.com/400x250"
                        alt="Destination 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Destination 3</h3>
                        <p className="text-gray-600">Description courte de la destination.</p>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://via.placeholder.com/400x250"
                        alt="Destination 4"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Destination 4</h3>
                        <p className="text-gray-600">Description courte de la destination.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}