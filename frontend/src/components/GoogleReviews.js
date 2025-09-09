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
    <section className="bg-acencia py-16 md:py-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .review-carousel {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .review-card {
          background: rgba(30, 58, 95, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center center;
        }
        
        .review-card:nth-child(1) {
          transform: translateX(-20%) scale(0.9) rotateY(15deg);
          z-index: 1;
          opacity: 0.7;
        }
        
        .review-card:nth-child(2) {
          transform: translateX(0%) scale(1) rotateY(0deg);
          z-index: 3;
          opacity: 1;
        }
        
        .review-card:nth-child(3) {
          transform: translateX(20%) scale(0.9) rotateY(-15deg);
          z-index: 1;
          opacity: 0.7;
        }
        
        .review-card:hover {
          transform: translateX(0%) scale(1.02) rotateY(0deg) !important;
          z-index: 5 !important;
          opacity: 1 !important;
          box-shadow: 0 20px 40px rgba(30, 58, 95, 0.4);
        }
        
        .star-rating {
          color: #fa9939;
          filter: drop-shadow(0 0 4px rgba(250, 153, 57, 0.3));
        }
        
        @media (max-width: 768px) {
          .review-card:nth-child(1),
          .review-card:nth-child(3) {
            display: none;
          }
          
          .review-card:nth-child(2) {
            transform: none;
          }
        }
      `}} />
      
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

        {/* Carousel Reviews */}
        <div className="review-carousel relative h-96 flex items-center justify-center">
          {visibleReviews.map((review, index) => (
            <div
              key={`${review.id}-${currentIndex}-${index}`}
              className="review-card absolute w-80 md:w-96 h-80 p-8 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-6 h-6 star-rating fill-current mx-1"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <div className="flex-1 flex items-center">
                <p className="text-white text-lg leading-relaxed text-center font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="text-center mt-6">
                <div className="w-16 h-0.5 bg-acencia-blue mx-auto mb-4"></div>
                <h4 className="text-white font-semibold text-xl mb-1 font-heading">
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
        
        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
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