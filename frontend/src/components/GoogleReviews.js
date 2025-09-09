import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Michael Schmidt",
      position: "HR-Leiter",  
      company: "TechnoServ GmbH",
      rating: 5,
      text: "ACENCIA hat unsere bAV-Verwaltung revolutioniert. Was früher Wochen dauerte, erledigen wir jetzt in Stunden. Unser HR-Team kann sich endlich auf strategische Aufgaben konzentrieren."
    },
    {
      id: 2,
      name: "Sarah Weber",
      position: "Geschäftsführerin",
      company: "Innovation Labs AG",
      rating: 5,
      text: "Die Plattform ist intuitiv und zuverlässig. Besonders die automatischen Compliance-Updates geben uns die Sicherheit, immer rechtlich auf der sicheren Seite zu stehen."
    },
    {
      id: 3,
      name: "Thomas Müller",
      position: "CFO",
      company: "Mittelstand Solutions",
      rating: 5,
      text: "Transparent und Effizienz auf höchstem Niveau. ACENCIA hat unsere Verwaltungskosten um 60% reduziert und gleichzeitig die Mitarbeiterzufriedenheit erhöht."
    },
    {
      id: 4,
      name: "Dr. Petra Schneider",
      position: "Personalleiterin",
      company: "MedTech Industries",
      rating: 5,
      text: "Endlich eine bAV-Lösung, die wirklich funktioniert! ACENCIA hat unser HR-Team entlastet und unsere Mitarbeiter sind begeistert von der einfachen Handhabung."
    },
    {
      id: 5,
      name: "Jürgen Maier",
      position: "Geschäftsführer",
      company: "BuildCorp AG",
      rating: 5,
      text: "Als Geschäftsführer kann ich ACENCIA nur empfehlen. Die rechtssichere Umsetzung und der digitale Ansatz überzeugen vollständig. Ein echter Gamechanger!"
    },
    {
      id: 6,
      name: "Lisa Wagner",
      position: "HR-Managerin",
      company: "Future Systems",
      rating: 5,
      text: "ACENCIA überzeugt durch Kompetenz und Innovation. Die bAV-Lösung ist genau das, was wir gesucht haben. Support ist erstklassig!"
    }
  ];

  // Duplicate reviews for seamless infinite scrolling
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-acencia py-16 md:py-20 overflow-hidden">
      {/* Corporate Container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Corporate Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-white tracking-tight font-heading">
            Das sagen unsere <span className="text-acencia-orange">Kunden</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center space-x-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 text-acencia-orange fill-acencia-orange" />
              ))}
            </div>
            <span className="text-white font-semibold text-xl">4.9</span>
            <span className="text-acencia-blue text-base">aus 100+ Bewertungen</span>
          </div>
          
          <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed font-normal">
            Vertrauen Sie auf die Erfahrungen zufriedener Unternehmen
          </p>
        </div>

        {/* Corporate Flowing Reviews - Assembly Line Style with White Cards */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll-continuous">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-xl p-6 hover:bg-gray-50 hover:shadow-sm transition-all duration-150 ease-out"
              >
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base font-heading">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234285f4'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= review.rating ? 'text-acencia-orange fill-acencia-orange' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base leading-relaxed font-normal">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;