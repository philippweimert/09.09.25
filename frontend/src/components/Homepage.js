import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import { Award, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle, Trophy, Zap, Building, Shield } from "lucide-react";

const Homepage = () => {
  const expertiseAreas = [
    {
      title: "bAV",
      subtitle: "Betriebliche Altersvorsorge",
      description: "Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise",
      link: "/die-bav",
      color: "from-slate-600 to-slate-700",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "bKV", 
      subtitle: "Betriebliche Krankenversicherung",
      description: "Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert",
      link: "/bkv",
      color: "from-blue-600 to-blue-700", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "bUV",
      subtitle: "Betriebliche Unfallversicherung", 
      description: "Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus",
      link: "/buv",
      color: "from-indigo-600 to-indigo-700",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      text: "Über 30 Jahre Erfahrung",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      text: "DSGVO konform & Rechtssicher",
      icon: <Shield className="w-4 h-4" />
    },
    {
      text: "Individuelle Lösungen für jede Unternehmensgröße",
      icon: <Building className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Professional Hero Section */}
      <div className="bg-acencia">
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Content - Hero Text */}
              <div className="lg:col-span-7">
                {/* Main Headline - Corporate Dark Style */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                  Digital. Einfach.{" "}
                  <span className="text-acencia-orange">Modern.</span>
                </h1>

                {/* Subtitle - Professional */}
                <p className="text-xl text-acencia-blue mb-8 max-w-2xl leading-relaxed">
                  Automatisieren Sie Ihre betriebliche Altersvorsorge komplett
                </p>

                {/* Clean Benefits List */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-acencia-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-acencia-orange">
                          {benefit.icon}
                        </div>
                      </div>
                      <span className="text-white font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2"
                  >
                    <span>Jetzt kostenfrei starten</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <Link 
                    to="/die-bav?autoplay=true"
                    className="border border-acencia-blue hover:border-white text-acencia-blue hover:text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Video ansehen</span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Professional Layout */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Video Placeholder Space */}
                <div className="bg-white/10 border border-acencia-blue/30 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-acencia-blue">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Video Platzhalter</span>
                  </div>
                </div>
                
                {/* Solutions Cards - New Animated Design */}
                <div>
                  <style dangerouslySetInnerHTML={{ __html: `
                    .insurance-card {
                      background: rgba(30, 58, 95, 0.85);
                      backdrop-filter: blur(20px);
                      border: 1px solid rgba(255, 255, 255, 0.2);
                      border-radius: 16px;
                      padding: 1.5rem;
                      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                      cursor: pointer;
                      position: relative;
                      overflow: hidden;
                      height: 120px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    }

                    .insurance-card::before {
                      content: '';
                      position: absolute;
                      top: 0;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
                      opacity: 0;
                      transition: opacity 0.4s ease;
                    }

                    .insurance-card:hover {
                      background: rgba(30, 58, 95, 0.9);
                      border-color: rgba(255, 255, 255, 0.3);
                      transform: translateY(-8px);
                      box-shadow: 0 20px 40px rgba(30, 58, 95, 0.25);
                    }

                    .insurance-card:hover::before {
                      opacity: 1;
                    }

                    .card-type {
                      background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
                      color: #1e3a5f;
                      font-size: 1rem;
                      font-weight: 600;
                      padding: 0.5rem 1rem;
                      border-radius: 12px;
                      display: inline-block;
                      margin-bottom: 0.5rem;
                      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                      transition: all 0.3s ease;
                      letter-spacing: -0.01em;
                    }

                    .insurance-card:hover .card-type {
                      transform: scale(1.05);
                      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
                    }

                    .card-description {
                      color: rgba(255, 255, 255, 0.9);
                      font-size: 0.75rem;
                      line-height: 1.4;
                      font-weight: 400;
                      transition: color 0.3s ease;
                      text-align: center;
                    }

                    .insurance-card:hover .card-description {
                      color: rgba(255, 255, 255, 1);
                    }

                    @media (max-width: 768px) {
                      .insurance-card {
                        padding: 1rem;
                        height: 100px;
                      }
                      
                      .card-type {
                        font-size: 0.9rem;
                        padding: 0.4rem 0.8rem;
                      }
                      
                      .card-description {
                        font-size: 0.7rem;
                      }
                    }
                  `}} />
                  <h3 className="text-lg font-semibold text-white mb-4 font-heading">Unsere Lösungen</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {expertiseAreas.map((area, index) => (
                      <Link 
                        key={index}
                        to={area.link}
                        className="insurance-card"
                      >
                        <div className="card-type font-heading">
                          {area.title}
                        </div>
                        <div className="card-description">
                          {area.subtitle.replace(' ', '\n')}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <style dangerouslySetInnerHTML={{ __html: `
                  .onboarding-card-green {
                    background: rgba(16, 64, 32, 0.85);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                    border-radius: 20px;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                  }

                  .onboarding-card-green::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
                    transition: left 0.6s ease;
                  }

                  .onboarding-card-green:hover::before {
                    left: 100%;
                  }

                  .onboarding-card-green:hover {
                    transform: translateY(-5px) scale(1.02);
                    background: rgba(16, 64, 32, 0.9);
                    box-shadow: 
                      0 20px 40px rgba(16, 64, 32, 0.4),
                      0 0 25px rgba(34, 197, 94, 0.3);
                    border-color: rgba(34, 197, 94, 0.5);
                  }

                  .onboarding-label-green {
                    background: #059669;
                    color: #ffffff;
                    padding: 8px 16px;
                    border-radius: 15px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    display: inline-block;
                    font-family: 'Tenor Sans', serif;
                    box-shadow: 0 3px 10px rgba(5, 150, 105, 0.4);
                    transition: all 0.3s ease;
                  }

                  .onboarding-card-green:hover .onboarding-label-green {
                    transform: scale(1.05);
                    box-shadow: 0 6px 16px rgba(5, 150, 105, 0.5);
                    background: #047857;
                  }
                `}} />

                {/* Professional Onboarding Card - Green Glassmorphism */}
                <div className="onboarding-card-green relative overflow-hidden p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                      
                      <div>
                        <div className="onboarding-label-green">
                          <span className="text-green-300">0,00 €</span> Onboarding
                        </div>
                        <p className="text-sm text-acencia-blue">
                          Bis zum <span className="font-medium text-white">01.01.2027</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />
        
        {/* Google Bewertungen Section */}
        <GoogleReviews />
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;