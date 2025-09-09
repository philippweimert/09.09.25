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
          position: relative;
          width: 100%;
          height: 400px;
        }
        
        .review-card {
          background: rgba(30, 58, 95, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          transition: all 0.6s ease-in-out;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .review-card-left {
          left: 0;
          width: 280px;
          height: 320px;
          transform: translateY(-50%) scale(0.85);
          opacity: 0.6;
          z-index: 1;
        }
        
        .review-card-center {
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 350px;
          height: 380px;
          opacity: 1;
          z-index: 3;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .review-card-right {
          right: 0;
          width: 280px;
          height: 320px;
          transform: translateY(-50%) scale(0.85);
          opacity: 0.6;
          z-index: 1;
        }
        
        .review-card:hover {
          transform: translateX(-50%) translateY(-50%) scale(1.05) !important;
          z-index: 5 !important;
          opacity: 1 !important;
          box-shadow: 0 25px 50px rgba(30, 58, 95, 0.4) !important;
          left: 50% !important;
          right: auto !important;
        }
        
        .star-rating {
          color: #fa9939;
          filter: drop-shadow(0 0 4px rgba(250, 153, 57, 0.3));
        }
        
        @media (max-width: 1024px) {
          .review-card-left,
          .review-card-right {
            display: none;
          }
          
          .review-card-center {
            width: 320px;
            height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .review-card-center {
            width: 300px;
            height: 320px;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
          
          .review-carousel {
            height: 350px;
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
        <div className="review-carousel">
          {visibleReviews.map((review, index) => {
            let positionClass = '';
            if (index === 0) positionClass = 'review-card-left';
            else if (index === 1) positionClass = 'review-card-center';
            else if (index === 2) positionClass = 'review-card-right';
            
            return (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`review-card ${positionClass} p-6 flex flex-col justify-between`}
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