import React from 'react';
import { PurchaseButton } from './components/PurchaseButton';

const App: React.FC = () => {
    const purchaseLink = "https://www.paypal.com/ncp/payment/MX46R3L4BZNSE";

    const steps = [
        {
            title: "Paso 1",
            description: "Entra en cualquier canal de YouTube."
        },
        {
            title: "Paso 2",
            description: "Haz clic en “Cazar Títulos”."
        },
        {
            title: "Paso 3",
            description: "Obtén al instante los títulos con más de 100.000 vistas."
        }
    ];

    return (
        <div className="min-h-screen bg-[#030303] text-white font-sans antialiased overflow-x-hidden">
            <main className="container mx-auto px-6 flex flex-col items-center">
                
                {/* Hero Section */}
                <section className="relative text-center w-full max-w-4xl pt-16 pb-8 md:pt-20 md:pb-10">
                    <div className="absolute inset-0 -top-32 flex items-center justify-center pointer-events-none">
                        <div className="w-full max-w-4xl h-[40rem] bg-gradient-radial from-red-900/60 via-red-900/20 to-transparent rounded-full blur-3xl opacity-70"></div>
                    </div>
                    <div className="relative z-10 animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            Cazador de Títulos
                        </h1>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="w-full max-w-4xl py-8">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-8">
                            Transforma datos en ideas en 3 simples pasos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {steps.map((step, index) => (
                                <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-white/10 transform transition-transform duration-300 hover:-translate-y-2">
                                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto">
                            Descubre qué temas funcionan, qué títulos generan millones de vistas, y transforma esa información en tu próxima idea viral.
                        </p>
                    </div>
                </section>

                {/* Purchase Section */}
                <section className="w-full max-w-4xl text-center py-8">
                     <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4">
                        <p className="text-5xl font-extrabold text-white">
                            Solo $3
                        </p>
                        <p className="text-gray-400 -mt-2">Pago único, acceso de por vida.</p>
                         <PurchaseButton href={purchaseLink}>
                            🔥 Obtener Cazador de Títulos
                        </PurchaseButton>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="text-center py-6">
                <div className="container mx-auto px-6">
                    {/* Content removed as requested */}
                </div>
            </footer>
            
            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .bg-gradient-radial {
                    background-image: radial-gradient(circle, var(--tw-gradient-stops));
                }
            `}</style>
        </div>
    );
};

export default App;