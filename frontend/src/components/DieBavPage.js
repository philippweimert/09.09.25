import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Play } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  const location = useLocation();
  const [autoplay, setAutoplay] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for autoplay parameter
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('autoplay') === 'true') {
      setAutoplay(true);
    }
    
    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    // Load YouTube Player API if autoplay is enabled
    if (autoplay) {
      const loadYouTubeAPI = () => {
        if (window.YT && window.YT.Player) {
          initializePlayer();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer();
        };
      };

      const initializePlayer = () => {
        setTimeout(() => {
          try {
            const ytPlayer = new window.YT.Player('youtube-player', {
              videoId: 'Dw1XYzzPTkY',
              events: {
                onReady: (event) => {
                  setPlayer(event.target);
                  event.target.playVideo();
                },
                onStateChange: (event) => {
                  if (event.data === window.YT.PlayerState.ENDED) {
                    setShowVideoOverlay(true);
                  }
                }
              }
            });
          } catch (error) {
            console.error('Error initializing YouTube player:', error);
          }
        }, 500);
      };

      loadYouTubeAPI();
    }
  }, [autoplay]);

  const withoutAcencia = [
    {
      title: "Manuelle bAV-Verwaltung",
      description: "Zeitaufwändige Papierarbeit und fehleranfällige Excel-Listen"
    },
    {
      title: "HR-Überlastung", 
      description: "Wertvolle HR-Zeit wird für repetitive Verwaltungsaufgaben verschwendet"
    },
    {
      title: "Compliance-Risiken",
      description: "Schwierige Erfüllung von Arbeitgeberpflichten und Rechtsunsicherheit"
    },
    {
      title: "Systembrüche",
      description: "Keine Schnittstellen zu HR-Systemen führen zu Doppelarbeit"
    },
    {
      title: "Kommunikationslücken",
      description: "Mitarbeiter sind schlecht über ihre bAV-Optionen informiert"
    }
  ];

  const withAcencia = [
    {
      title: "Vollautomatisierte bAV-Verwaltung",
      description: "Digitale Prozesse eliminieren Fehlerquellen und sparen bis zu 80% Zeit"
    },
    {
      title: "HR-Entlastung durch Automation", 
      description: "Ihre HR-Teams fokussieren sich auf strategische Aufgaben statt Administration"
    },
    {
      title: "Automatische Compliance-Erfüllung",
      description: "Alle Arbeitgeberpflichten werden ohne zusätzlichen Aufwand gewährleistet"
    },
    {
      title: "Direkte HR-System-Integration", 
      description: "Nahtlose Anbindung an bestehende HR-Systeme für maximale Effizienz"
    },
    {
      title: "Proaktive Mitarbeiterkommunikation",
      description: "Moderne Beratungstools und digitale Information für optimale Aufklärung"
    }
  ];

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles"
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section - Dark Corporate Theme */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                Wir machen <span className="text-acencia-orange">bAV einfach!</span>
              </h1>
              
              <p className="text-xl text-acencia-blue mb-8 leading-relaxed">
                Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten, digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">100% digitale Verwaltung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Vollautomatisierte Prozesse</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">DSGVO-konform & rechtssicher</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-acencia-blue">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Video Player */}
              <div className="bg-white/10 border border-acencia-blue/30 rounded-lg mb-8 relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {autoplay ? (
                  <div className="relative w-full h-full">
                    <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
                    
                    {showVideoOverlay && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                        <div className="video-overlay-card p-6 text-center max-w-xs">
                          <div className="video-overlay-label mb-4">Video beendet</div>
                          <div className="space-y-3">
                            <Button 
                              className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-4 py-2 rounded-lg font-medium"
                              onClick={() => {
                                if (player) {
                                  player.playVideo();
                                  setShowVideoOverlay(false);
                                }
                              }}
                            >
                              Erneut ansehen
                            </Button>
                            <Button 
                              className="w-full border border-acencia-blue/30 hover:border-acencia-blue/50 text-acencia-blue hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                              onClick={() => window.location.href = '/gesetzliche-pflichten'}
                            >
                              Gesetzliche Pflichten - bAV
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-acencia-blue">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Video wird geladen...</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Onboarding Card - Green Glassmorphism Style */}
              <div className="onboarding-card-green relative overflow-hidden p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                    
                    <div>
                      <div className="onboarding-label-green">
                        <span className="text-white font-bold">0,00 €</span> Onboarding
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

      {/* bAV Process Section */}
      <section className="bg-acencia py-16 md:py-20 relative overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          .process-card {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            animation: slideInUp 0.8s ease-out;
            animation-fill-mode: both;
          }

          .process-card:nth-child(1) { animation-delay: 0.2s; }
          .process-card:nth-child(3) { animation-delay: 0.4s; }
          .process-card:nth-child(5) { animation-delay: 0.6s; }

          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(60px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .process-card-body {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            width: 320px;
            height: 160px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 25px;
            position: relative;
            z-index: 50;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            overflow: hidden;
          }

          .process-card-body::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
          }

          .process-card:hover .process-card-body::before {
            left: 100%;
          }

          .process-card:hover .process-card-body {
            transform: translateY(-15px) scale(1.03);
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 
              0 25px 50px rgba(30, 58, 95, 0.4),
              0 0 30px rgba(100, 181, 246, 0.2);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .process-card-label {
            background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
            color: #1e3a5f;
            padding: 18px 30px;
            border-radius: 30px;
            font-size: 1.1em;
            font-weight: 700;
            text-align: center;
            margin-bottom: 15px;
            font-family: 'Tenor Sans', serif;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            line-height: 1.3;
          }

          .process-card-label::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }

          .process-card:hover .process-card-label::before {
            left: 100%;
          }

          .process-card:hover .process-card-label {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            background: linear-gradient(135deg, #ffecd2 0%, #f8dcbf 50%, #e8ccaf 100%);
          }

          @media (max-width: 1024px) {
            .process-card-body {
              width: 280px;
              height: 140px;
            }
          }

          @media (max-width: 768px) {
            .process-card-body {
              width: 300px;
              height: 120px;
              padding: 20px;
            }

            .process-card-label {
              font-size: 1rem;
              padding: 15px 25px;
            }
          }
        `}} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Als Partner begleiten wir Sie entlang des gesamten bAV-Prozesses
            </h2>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-16">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-sm process-card" data-type="step1">
              <div className="process-card-body">
                <div className="process-card-label">
                  Rechtliche Prüfung & Einrichtung bAV
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-heading border-b-2 border-white pb-2 mt-6">
                Wir geben Sicherheit
              </h4>
              <p className="text-acencia-blue text-sm leading-relaxed">
                Individuelle Vorsorgelösungen für Unternehmen und Mitarbeitende – rechtssicher, unabhängig und mit innovativen Optionen.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:block transform rotate-0 lg:rotate-0">
              <div className="w-12 h-8 bg-gradient-to-r from-orange-300 to-orange-400" style={{ clipPath: 'polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%)' }}></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-sm process-card" data-type="step2">
              <div className="process-card-body">
                <div className="process-card-label">
                  Digitale bAV-Verwaltung & laufender Support
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-heading border-b-2 border-white pb-2 mt-6">
                Wir erleichtern den Alltag
              </h4>
              <p className="text-acencia-blue text-sm leading-relaxed">
                Digitale und automatisierte bAV-Verwaltung – ob neu oder bestehend, mit persönlichem Support im Hintergrund.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:block transform rotate-0 lg:rotate-0">
              <div className="w-12 h-8 bg-gradient-to-r from-orange-300 to-orange-400" style={{ clipPath: 'polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%)' }}></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-sm process-card" data-type="step3">
              <div className="process-card-body">
                <div className="process-card-label">
                  Mitarbeiterkommunikation & (digitale) Beratung
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-heading border-b-2 border-white pb-2 mt-6">
                Wir begeistern Ihre Mitarbeitenden
              </h4>
              <p className="text-acencia-blue text-sm leading-relaxed">
                Moderne bAV-Kommunikation für Mitarbeitende – inklusive individueller Beratung, digital oder vor Ort.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison Section - Always Expanded */}
      <section className="bg-acencia py-16 md:py-20">
        <style dangerouslySetInnerHTML={{ __html: `
          .challenges-solutions-card {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            position: relative;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
          }

          .challenges-solutions-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
          }

          .challenges-solutions-card:hover::before {
            left: 100%;
          }

          .challenges-solutions-card:hover {
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 
              0 25px 50px rgba(30, 58, 95, 0.4),
              0 0 30px rgba(100, 181, 246, 0.2);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .challenges-solutions-header {
            background: rgba(30, 58, 95, 0.85);
            color: white;
            padding: 20px 30px;
            border-radius: 30px 30px 0 0;
            font-size: 1.5em;
            font-weight: 700;
            text-align: center;
            font-family: 'Tenor Sans', serif;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .challenges-solutions-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }

          .challenges-solutions-card:hover .challenges-solutions-header::before {
            left: 100%;
          }

          .challenges-solutions-card:hover .challenges-solutions-header {
            transform: scale(1.02);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            background: rgba(30, 58, 95, 0.95);
          }

          .challenges-solutions-content {
            padding: 30px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
          }

          .challenges-solutions-content.expanded {
            max-height: 1000px;
          }

          .challenge-item, .solution-item {
            display: flex;
            align-items: start;
            space-x: 12px;
            margin-bottom: 16px;
          }

          .challenge-icon, .solution-icon {
            width: 20px;
            height: 20px;
            margin-top: 2px;
            flex-shrink: 0;
            margin-right: 12px;
          }

          .challenge-icon {
            color: #ef4444;
          }

          .solution-icon {
            color: #10b981;
          }

          /* Onboarding Card Styles - Green */
          .onboarding-card-green {
            background: rgba(16, 64, 32, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(34, 197, 94, 0.3);
            border-radius: 30px;
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
            border-radius: 20px;
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

          /* Video Overlay Card Styles */
          .video-overlay-card {
            background: rgba(30, 58, 95, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
          }

          .video-overlay-label {
            background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
            color: #1e3a5f;
            padding: 12px 24px;
            border-radius: 20px;
            font-size: 1.1rem;
            font-weight: 700;
            display: inline-block;
            font-family: 'Tenor Sans', serif;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          }

          /* More Info Cards Styles */
          .more-info-card {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .more-info-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
          }

          .more-info-card:hover::before {
            left: 100%;
          }

          .more-info-card:hover {
            transform: translateY(-10px) scale(1.03);
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 
              0 25px 50px rgba(30, 58, 95, 0.4),
              0 0 30px rgba(100, 181, 246, 0.2);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .more-info-label {
            background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
            color: #1e3a5f;
            padding: 12px 20px;
            border-radius: 20px;
            font-size: 1.1rem;
            font-weight: 700;
            display: inline-block;
            font-family: 'Tenor Sans', serif;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .more-info-card:hover .more-info-label {
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0,0,0,0.15);
            background: linear-gradient(135deg, #ffecd2 0%, #f8dcbf 50%, #e8ccaf 100%);
          }

          @media (max-width: 768px) {
            .challenges-solutions-header {
              font-size: 1.2em;
              padding: 16px 20px;
            }
            
            .challenges-solutions-content {
              padding: 20px;
            }

            .onboarding-card {
              padding: 16px;
            }

            .more-info-card {
              padding: 24px;
            }
          }
        `}} />
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">

          {/* Single Collapsible Card */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="challenges-solutions-card"
              onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
            >
              <div className="challenges-solutions-header">
                <span>Ohne ACENCIA vs. Mit ACENCIA</span>
                {isChallengesExpanded ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
              
              <div className={`challenges-solutions-content ${isChallengesExpanded ? 'expanded' : ''}`}>
                {isChallengesExpanded && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Without ACENCIA */}
                    <div>
                      <h3 className="text-xl font-semibold text-red-400 mb-6 font-heading">❌ Ohne ACENCIA</h3>
                      <div className="space-y-4">
                        {withoutAcencia.map((item, index) => (
                          <div key={index} className="challenge-item">
                            <AlertTriangle className="challenge-icon" />
                            <div>
                              <h4 className="font-medium text-white font-heading">{item.title}</h4>
                              <p className="text-acencia-blue text-sm">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* With ACENCIA */}
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-6 font-heading">✅ Mit ACENCIA</h3>
                      <div className="space-y-4">
                        {withAcencia.map((item, index) => (
                          <div key={index} className="solution-item">
                            <CheckCircle className="solution-icon" />
                            <div>
                              <h4 className="font-medium text-white font-heading">{item.title}</h4>
                              <p className="text-acencia-blue text-sm">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Information Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Weitere Informationen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Vertiefen Sie Ihr Wissen über die betriebliche Altersvorsorge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreInfoBoxes.map((box, index) => (
              <Link 
                key={index}
                to={box.link}
                className="group more-info-card p-8 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-acencia-orange/20 group-hover:to-acencia-orange/30 transition-all duration-150">
                  <div className="text-acencia-orange">
                    {box.icon}
                  </div>
                </div>
                
                <div className="more-info-label mb-3">
                  {box.title}
                </div>
                <p className="text-acencia-blue text-base leading-relaxed mb-6">
                  {box.description}
                </p>
                
                <div className="flex items-center space-x-2 text-acencia-orange group-hover:text-acencia-orange/80 transition-colors duration-150">
                  <span className="font-medium text-sm">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Für jede Unternehmensgröße Sektion */}
      <CustomerSegments />
      
      {/* Google Bewertungen Section */}
      <GoogleReviews />

      <Footer />
    </div>
  );
};

export default DieBavPage;