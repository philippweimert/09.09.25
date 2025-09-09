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

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Get 3 reviews to display (current and next 2)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="bg-acencia py-16 md:py-20">
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

        {/* Simple Carousel - 3 Cards Side by Side */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`
                  bg-white/5 backdrop-filter backdrop-blur-lg border border-white/20 rounded-2xl p-6 
                  transition-all duration-700 ease-in-out hover:bg-white/10 hover:scale-105 hover:shadow-2xl
                  ${index === 1 ? 'md:scale-110 md:shadow-xl bg-white/8' : 'md:scale-95 opacity-80'}
                `}
                style={{ height: '420px' }}
              >
                {/* Stars */}
                <div className="flex items-center justify-center mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 text-acencia-orange fill-acencia-orange mx-0.5"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="flex-1 mb-6">
                  <p className="text-white text-base leading-relaxed text-center font-normal">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="text-center">
                  <div className="w-12 h-0.5 bg-acencia-blue mx-auto mb-4"></div>
                  <h4 className="text-white font-semibold text-lg mb-1 font-heading">
                    {review.name}
                  </h4>
                  <p className="text-acencia-blue text-sm mb-1">
                    {review.position}
                  </p>
                  <p className="text-acencia-orange text-sm font-medium">
                    {review.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-acencia-orange w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;