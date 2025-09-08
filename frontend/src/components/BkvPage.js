import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Heart, Users, TrendingUp, ArrowRight, CheckCircle, Building2, Clock, Euro, Activity } from "lucide-react";

const BkvPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Gesundheitsvorsorge",
      description: "Erweiterte medizinische Leistungen für Ihre Mitarbeiter"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Steuervorteile",
      description: "Optimierung der Lohnnebenkosten durch clevere Gestaltung"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterzufriedenheit",
      description: "Stärkung der Bindung durch attraktive Zusatzleistungen"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rechtssicherheit",
      description: "Compliance und ordnungsgemäße Verwaltung gewährleistet"
    }
  ];

  const services = [
    {
      title: "Krankenversicherung",
      description: "Private Zusatzversicherungen für bessere medizinische Versorgung",
      features: ["Chefarztbehandlung", "Einzelzimmer", "Zahnzusatz", "Auslandsschutz"]
    },
    {
      title: "Pflegeversicherung", 
      description: "Absicherung für den Pflegefall mit erweiterten Leistungen",
      features: ["Pflegegeld", "Pflegehilfsmittel", "Betreuungsleistungen", "Kurzzeitpflege"]
    },
    {
      title: "Gesundheitsmanagement",
      description: "Präventive Maßnahmen für die Gesundheit Ihrer Mitarbeiter",
      features: ["Vorsorgeuntersuchungen", "Impfungen", "Check-ups", "Beratung"]
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
                Wir machen <span className="text-acencia-orange">bKV einfach!</span>
              </h1>
              
              <p className="text-xl text-acencia-blue mb-8 leading-relaxed">
                Stärken Sie die Gesundheit und Zufriedenheit Ihrer Mitarbeiter mit unserer digitalen Lösung für die betriebliche Krankenversicherung.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Umfassende Gesundheitsvorsorge</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Steuerliche Optimierung</span>
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
              {/* Coming Soon Card */}
              <div className="bg-white border border-gray-100 rounded-lg p-8 text-center">
                <Activity className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Coming Soon
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir arbeiten intensiv an unserer digitalen bKV-Lösung. Lassen Sie sich kostenfrei beraten und erfahren Sie als Erster von unserem Launch.
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
              Vorteile der betrieblichen Krankenversicherung
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Investieren Sie in die Gesundheit Ihrer Mitarbeiter und profitieren Sie von zahlreichen Vorteilen
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



      {/* CTA Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Interessiert an unserer bKV-Lösung?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine unverbindliche Beratung zur betrieblichen Krankenversicherung.
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
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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

export default BkvPage;