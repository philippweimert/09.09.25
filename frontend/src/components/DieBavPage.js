import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, Play, Clock, FileText, X, Zap, ChevronDown } from "lucide-react";

const DieBavPage = () => {

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
                Sparen Sie Zeit, reduzieren Sie Risiken und entlasten Sie Ihr HR-Team.
              </p>

              {/* Benefits Grid - 2x2 Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-base font-medium">Zeitersparnis durch Automatisierung</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-base font-medium">HR-Entlastung bei Verwaltungsaufgaben</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-base font-medium">Vollständige Rechtssicherheit</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-base font-medium">DSGVO Konform</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia text-lg"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Kostenlose Erstberatung</span>
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
                  <div className="flex flex-col items-center justify-center h-full text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-acencia-orange rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white text-lg font-medium mb-2">Sehen Sie ACENCIA in Aktion</div>
                      <p className="text-acencia-blue text-sm">3 Minuten Demo-Video</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Onboarding Card - Clean Modern Style */}
              <div className="onboarding-card-clean bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      0,00 € Onboarding
                    </div>
                    <p className="text-emerald-100 text-sm">
                      Bis zum 01.01.2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Process & Benefits Section */}
      <section className="bg-acencia py-12 md:py-16 relative overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          .compact-process-card {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 16px;
            transition: all 0.3s ease;
            text-align: center;
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .compact-process-card:hover {
            transform: translateY(-4px);
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 0 12px 25px rgba(30, 58, 95, 0.3);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .compact-process-label {
            background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
            color: #1e3a5f;
            padding: 8px 16px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 700;
            font-family: 'Tenor Sans', serif;
            margin-bottom: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .compact-process-title {
            color: white;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 4px;
            line-height: 1.2;
          }

          .compact-comparison-card {
            background: rgba(30, 58, 95, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 24px;
            transition: all 0.3s ease;
          }

          .compact-comparison-card:hover {
            background: rgba(30, 58, 95, 0.9);
            box-shadow: 0 15px 30px rgba(30, 58, 95, 0.3);
            border-color: rgba(100, 181, 246, 0.3);
          }

          .compact-benefit-item {
            display: flex;
            align-items: start;
            margin-bottom: 12px;
          }

          .compact-benefit-icon {
            width: 16px;
            height: 16px;
            margin-top: 1px;
            margin-right: 8px;
            flex-shrink: 0;
          }

          .compact-challenge-icon {
            color: #ef4444;
          }

          .compact-solution-icon {
            color: #10b981;
          }

          /* Onboarding Card Styles - Clean Modern */
          .onboarding-card-clean {
            transition: all 0.3s ease;
          }

          .onboarding-card-clean:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.25);
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
            .compact-process-card {
              height: 120px;
              padding: 12px;
            }
            
            .compact-process-label {
              font-size: 0.8rem;
              padding: 6px 12px;
            }
            
            .compact-comparison-card {
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
          
          {/* Compact Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="compact-process-card">
              <div className="compact-process-label">Rechtliche Prüfung</div>
              <div className="compact-process-title">Wir geben Sicherheit</div>
              <p className="text-acencia-blue text-xs">Rechtssichere, individuelle Vorsorgelösungen</p>
            </div>
            
            <div className="compact-process-card">
              <div className="compact-process-label">Digitale Verwaltung</div>
              <div className="compact-process-title">Wir erleichtern den Alltag</div>
              <p className="text-acencia-blue text-xs">Automatisierte Prozesse mit persönlichem Support</p>
            </div>
            
            <div className="compact-process-card">
              <div className="compact-process-label">Mitarbeiterkommunikation</div>
              <div className="compact-process-title">Wir begeistern Ihre Teams</div>
              <p className="text-acencia-blue text-xs">Moderne Beratung, digital oder vor Ort</p>
            </div>
          </div>

          {/* Compact Comparison */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 font-heading">
              Der ACENCIA-Vorteil
            </h2>
          </div>

          <div className="compact-comparison-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Without ACENCIA */}
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-4 font-heading">❌ Ohne ACENCIA</h3>
                <div className="space-y-3">
                  <div className="compact-benefit-item">
                    <AlertTriangle className="compact-benefit-icon compact-challenge-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">Manuelle bAV-Verwaltung</h4>
                      <p className="text-acencia-blue text-xs">Zeitaufwändige Papierarbeit</p>
                    </div>
                  </div>
                  <div className="compact-benefit-item">
                    <AlertTriangle className="compact-benefit-icon compact-challenge-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">HR-Überlastung</h4>
                      <p className="text-acencia-blue text-xs">Repetitive Verwaltungsaufgaben</p>
                    </div>
                  </div>
                  <div className="compact-benefit-item">
                    <AlertTriangle className="compact-benefit-icon compact-challenge-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">Compliance-Risiken</h4>
                      <p className="text-acencia-blue text-xs">Schwierige Arbeitgeberpflichten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* With ACENCIA */}
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4 font-heading">✅ Mit ACENCIA</h3>
                <div className="space-y-3">
                  <div className="compact-benefit-item">
                    <CheckCircle className="compact-benefit-icon compact-solution-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">Vollautomatisierung</h4>
                      <p className="text-acencia-blue text-xs">Bis zu 80% Zeitersparnis</p>
                    </div>
                  </div>
                  <div className="compact-benefit-item">
                    <CheckCircle className="compact-benefit-icon compact-solution-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">HR-Entlastung</h4>
                      <p className="text-acencia-blue text-xs">Fokus auf strategische Aufgaben</p>
                    </div>
                  </div>
                  <div className="compact-benefit-item">
                    <CheckCircle className="compact-benefit-icon compact-solution-icon" />
                    <div>
                      <h4 className="font-medium text-white text-sm">Automatische Compliance</h4>
                      <p className="text-acencia-blue text-xs">Alle Pflichten ohne Aufwand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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