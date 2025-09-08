import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, Building2, TrendingUp, ArrowRight, CheckCircle, Activity, AlertTriangle, Heart, Clock } from "lucide-react";

const BuvPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Erweiterte Absicherung",
      description: "Schutz über die gesetzliche Unfallversicherung hinaus"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fürsorge für Mitarbeiter",
      description: "Zeigen Sie Verantwortung für das Wohlergehen Ihrer Mitarbeiter"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterbindung",
      description: "Stärken Sie die Bindung durch umfassenden Versicherungsschutz"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Unternehmensschutz",
      description: "Reduzieren Sie finanzielle Risiken für Ihr Unternehmen"
    }
  ];

  const coverageAreas = [
    {
      title: "Arbeitsunfälle",
      description: "Erweiterter Schutz bei Unfällen am Arbeitsplatz",
      features: ["24h-Schutz", "Erweiterte Leistungen", "Schnelle Hilfe", "Rehabilitation"]
    },
    {
      title: "Freizeitunfälle", 
      description: "Schutz auch außerhalb der Arbeitszeit",
      features: ["Freizeitaktivitäten", "Sport und Hobby", "Haushaltsunfälle", "Reiseunfälle"]
    },
    {
      title: "Berufskrankheiten",
      description: "Absicherung gegen berufsspezifische Gesundheitsrisiken",
      features: ["Präventive Maßnahmen", "Früherkennung", "Behandlungskosten", "Nachsorge"]
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                Wir machen <span className="text-acencia-orange">bUV einfach!</span>
              </h1>
              
              <p className="text-xl text-acencia-blue mb-8 leading-relaxed">
                Erweitern Sie den Versicherungsschutz Ihrer Mitarbeiter mit unserer digitalen Lösung für die betriebliche Unfallversicherung.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">24h-Unfallschutz für Mitarbeiter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Erweiterte Leistungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Digitale Verwaltung</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <button 
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt informieren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-acencia-blue">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Coming Soon Card - Glassmorphism Style */}
              <div className="coming-soon-card p-8 text-center relative overflow-hidden">
                <Activity className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <div className="coming-soon-label mb-4">
                  Coming Soon
                </div>
                <p className="text-acencia-blue mb-6 leading-relaxed">
                  Wir entwickeln unsere digitale bUV-Lösung. Lassen Sie sich kostenfrei beraten und erfahren Sie als Erster von unserem Launch.
                </p>
                <button 
                  className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Vormerken lassen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Vorteile der betrieblichen Unfallversicherung
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Mehr Sicherheit für Ihre Mitarbeiter und Ihr Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Risk Prevention */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Prävention & Sicherheit
              </h2>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Mehr als nur Versicherung - wir helfen Ihnen dabei, Unfälle zu vermeiden und eine sichere Arbeitsumgebung zu schaffen.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Sicherheitsschulungen für Mitarbeiter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Risikobewertung am Arbeitsplatz</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Präventionsmaßnahmen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Notfallmanagement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Unfallstatistiken
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Arbeitsunfälle pro Jahr</span>
                    <span className="font-semibold text-gray-900">871.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Wegeunfälle</span>
                    <span className="font-semibold text-gray-900">186.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Berufskrankheiten</span>
                    <span className="font-semibold text-gray-900">73.000</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Quelle: Deutsche Gesetzliche Unfallversicherung (DGUV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section - Glassmorphism Style */}
      <section className="bg-acencia py-16 md:py-20">
        <style dangerouslySetInnerHTML={{ __html: `
          .cta-card {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .cta-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
          }

          .cta-card:hover::before {
            left: 100%;
          }

          .cta-card:hover {
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 
              0 25px 50px rgba(30, 58, 95, 0.4),
              0 0 30px rgba(100, 181, 246, 0.2);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .cta-label {
            background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
            color: #1e3a5f;
            padding: 16px 32px;
            border-radius: 25px;
            font-size: 1.5rem;
            font-weight: 700;
            display: inline-block;
            font-family: 'Tenor Sans', serif;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            margin-bottom: 24px;
          }

          .cta-card:hover .cta-label {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            background: linear-gradient(135deg, #ffecd2 0%, #f8dcbf 50%, #e8ccaf 100%);
          }

          @media (max-width: 768px) {
            .cta-label {
              font-size: 1.25rem;
              padding: 12px 24px;
            }
          }
        `}} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="cta-card p-12 text-center">
            <div className="cta-label">
              Interessiert an unserer bUV-Lösung?
            </div>
            <p className="text-lg text-acencia-blue mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine unverbindliche Beratung zur betrieblichen Unfallversicherung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/kontakt"
                className="border border-acencia-blue/30 hover:border-acencia-blue/50 text-acencia-blue hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Kontakt aufnehmen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuvPage;