import React from "react";

const CustomerSegments = () => {
  const cardStyles = `
    /* Animated background particles */
    @keyframes floatParticles {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-20px) rotate(2deg); }
      66% { transform: translateY(10px) rotate(-1deg); }
    }

    .bg-particles::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 1px, transparent 1px),
        radial-gradient(circle at 40% 80%, rgba(255,255,255,0.08) 1px, transparent 1px);
      background-size: 300px 300px, 200px 200px, 400px 400px;
      animation: floatParticles 20s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

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

    .customer-card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: slideInUp 0.8s ease-out;
      animation-fill-mode: both;
    }

    .customer-card:nth-child(1) { animation-delay: 0.2s; }
    .customer-card:nth-child(2) { animation-delay: 0.4s; }
    .customer-card:nth-child(3) { animation-delay: 0.6s; }

    .card-icon {
      width: 90px;
      height: 90px;
      background: linear-gradient(145deg, #1e3a5f 0%, #2c5282 50%, #3d6db0 100%);
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -45px;
      position: relative;
      z-index: 100;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      filter: drop-shadow(0 10px 20px rgba(30, 58, 95, 0.3));
    }

    .card-icon::before {
      content: '';
      position: absolute;
      inset: -3px;
      background: linear-gradient(45deg, #64b5f6, #42a5f5, #2196f3, #1976d2);
      border-radius: inherit;
      clip-path: inherit;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    .customer-card:hover .card-icon {
      transform: translateY(-10px) scale(1.1) rotate(5deg);
      filter: drop-shadow(0 20px 40px rgba(30, 58, 95, 0.4));
    }

    .customer-card:hover .card-icon::before {
      opacity: 1;
    }

    .card-icon svg {
      width: 45px;
      height: 45px;
      transition: all 0.3s ease;
    }

    .card-icon svg path {
      fill: white;
      stroke: white;
      stroke-width: 0.5;
      transition: all 0.3s ease;
    }

    .customer-card:hover .card-icon svg {
      transform: scale(1.2);
      filter: drop-shadow(0 0 10px rgba(255,255,255,0.8));
    }

    .card-body {
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

    .card-body::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      transition: left 0.6s ease;
    }

    .customer-card:hover .card-body::before {
      left: 100%;
    }

    .customer-card:hover .card-body {
      transform: translateY(-15px) scale(1.03);
      background: rgba(30, 58, 95, 0.9);
      box-shadow: 
        0 25px 50px rgba(30, 58, 95, 0.4),
        0 0 30px rgba(100, 181, 246, 0.2);
      border-color: rgba(100, 181, 246, 0.3);
    }

    .card-label {
      background: linear-gradient(135deg, #f8dcbf 0%, #e8ccaf 50%, #d8bcaf 100%);
      color: #1e3a5f;
      padding: 18px 50px;
      border-radius: 30px;
      font-size: 1.4em;
      font-weight: 700;
      text-align: center;
      margin-bottom: 15px;
      font-family: 'Tenor Sans', serif;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .card-label::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s ease;
    }

    .customer-card:hover .card-label::before {
      left: 100%;
    }

    .customer-card:hover .card-label {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      background: linear-gradient(135deg, #ffecd2 0%, #f8dcbf 50%, #e8ccaf 100%);
    }

    @media (max-width: 768px) {
      .cards-container {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 60px 20px;
      }

      .card-body {
        width: 280px;
        height: 140px;
      }

      .card-icon {
        width: 80px;
        height: 80px;
        margin-bottom: -40px;
      }

      .card-icon svg {
        width: 35px;
        height: 35px;
      }

      .card-label {
        font-size: 1.2em;
        padding: 15px 40px;
      }
    }
  `;

  const segments = [
    {
      type: "startup",
      title: "Start-up",
      svgContent: (
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.885 20 158.231 160" viewBox="20.885 20 158.231 160" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M91.12 88.12h17.71c.37 0 .74-.07 1.09-.21s.66-.35.92-.61.47-.58.62-.92c.14-.34.22-.71.22-1.09V69c0-2.64-1.05-5.18-2.92-7.05a9.977 9.977 0 0 0-7.05-2.92h-3.52a9.962 9.962 0 0 0-6.98 2.96A9.965 9.965 0 0 0 88.33 69v16.3c.01.74.31 1.45.83 1.97.51.53 1.22.83 1.96.85zm1.76-19.14c0-1.4.56-2.74 1.55-3.73.99-.99 2.33-1.55 3.73-1.55h3.52c1.4 0 2.74.56 3.73 1.55.99.99 1.55 2.33 1.55 3.73v14.45H92.88V68.98z"></path>
            <path d="M120.43 113.13H79.55a6.707 6.707 0 0 0-6.7 6.71v26.69c0 1.78.71 3.48 1.97 4.73s2.96 1.96 4.73 1.97h40.88c1.78 0 3.48-.71 4.74-1.96a6.699 6.699 0 0 0 1.97-4.74v-26.69c0-1.78-.71-3.49-1.97-4.74a6.682 6.682 0 0 0-4.74-1.97zm2.03 6.71v10.99h-20.05v-13.01h18.09c.52.02 1.02.24 1.38.62.37.38.57.88.58 1.4zm-42.91-2.02h18.09v13.01h-20.1v-10.99c0-.53.21-1.05.59-1.42.38-.38.89-.6 1.42-.6zm-2.01 28.72v-11.01h20.08v13.01H79.55c-.53 0-1.04-.21-1.42-.59-.37-.37-.59-.88-.59-1.41zm42.89 2H102.3v-13.01h20.15v11.01a2.016 2.016 0 0 1-2.02 2z"></path>
            <path d="M157.4 175.23V95.6l17.58 21.38c.4.46.97.75 1.58.79.61.05 1.22-.14 1.69-.53s.78-.95.85-1.55c.07-.61-.1-1.22-.47-1.7l-26.59-32.32V42.63a7.029 7.029 0 0 0-2.35-4.83 6.984 6.984 0 0 0-5.07-1.76h-7.61a7.027 7.027 0 0 0-7.42 6.59v11.66l-27.17-33.18A3.101 3.101 0 0 0 99.99 20c-.46 0-.92.1-1.34.29-.42.19-.79.48-1.09.83l-76.19 92.86c-.37.49-.54 1.1-.47 1.7.07.61.37 1.16.85 1.55.47.39 1.08.58 1.69.53.61-.05 1.18-.33 1.58-.79L42.63 95.6V180h114.81l-.04-4.77zm-23.12-132.6c0-1 1.28-1.88 2.73-1.88h7.61c1.48 0 2.73.86 2.73 1.88v33.3L134.28 60V42.63zm-87.06 132.6V89.86l52.75-64.31 52.75 64.31v85.37H47.22z"></path>
          </g>
        </svg>
      )
    },
    {
      type: "mittelstand",
      title: "Mittelstand",
      svgContent: (
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="10 20.5 180.1 159" viewBox="10 20.5 180.1 159" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M187.5 174.1H171V76.7c0-4.4-2.5-8-7-8h-37.5V28.5c0-4.4-3.6-8-8.1-8H59.5c-4.4 0-8 3.6-8 8v17H37.1c-4.4 0-8 3.6-8 8v120.6H12.7c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7h174.9c1.4 0 2.5-1.3 2.5-2.7-.1-1.4-1.3-2.7-2.6-2.7zm-121.8 0H53.2v-22.3h12.5v22.3zm18.7 0H71.3V149c0-1.4-1.2-2.5-2.5-2.5H50.4c-1.4 0-2.5 1.2-2.5 2.5v25.2H34.4V52.9c0-1.6 1.3-2.9 3-2.9h44.2c1.6 0 3 1.3 3 2.9l-.2 121.2zm-3-128.6H55.9V28.8c0-1.6 1.3-2.9 3-2.9h60.3c1.6 0 3 1.3 3 2.9v19.4h-35c-1.5-1.6-3.6-2.7-5.8-2.7zm40.6 7.2V67H89V52.7h33zM106.8 175H89v-63.4h17.9c-.1 0-.1 63.4-.1 63.4zm0-68.7H89V92h17.9c-.1 0-.1 14.3-.1 14.3zm0-29.9v10.2H89V72.3h19c-.7 1.2-1.2 2.6-1.2 4.1zm59.9 97.7h-55.3v-98c0-1.6 1.3-2.9 3-2.9h49.5c1.6 0 3 1.3 3 2.9l-.2 98z"></path>
            <path d="M64.2 60.7h-9.6c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.6c0-.7-.7-1.4-1.5-1.4z"></path>
            <path d="M64.3 81.2h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.6c0-.7-.6-1.4-1.4-1.4z"></path>
            <path d="M64.3 101.8h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.7c0-.6-.6-1.3-1.4-1.3z"></path>
            <path d="M64.3 122.3h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.6c0-.7-.6-1.4-1.4-1.4z"></path>
            <path d="M154.6 85.7h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4V87c.1-.7-.6-1.3-1.4-1.3z"></path>
            <path d="M134 85.7h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.6c.1-.8-.6-1.4-1.4-1.4z"></path>
            <path d="M154.6 107.1h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.7c.1-.5-.6-1.3-1.4-1.3z"></path>
            <path d="M134 107.1h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.7c.1-.5-.6-1.3-1.4-1.3z"></path>
            <path d="M154.6 129.5h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.7c.1-.7-.6-1.3-1.4-1.3z"></path>
            <path d="M134 129.5h-9.7c-.8 0-1.4.6-1.4 1.4v9.6c0 .8.6 1.4 1.4 1.4h9.7c.8 0 1.4-.6 1.4-1.4v-9.6c.1-.8-.6-1.4-1.4-1.4z"></path>
          </g>
        </svg>
      )
    },
    {
      type: "konzern",
      title: "Konzern",
      svgContent: (
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="27 27.113 145.902 145.787" viewBox="27 27.113 145.902 145.787" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M159.8 124.9c-3.7 0-7.6 3.2-12.5 7.2-4.3 3.5-9.5 7.7-13.5 8.4-.1-2.3-1-4.3-2.4-6-5.1-5.8-16.4-5.4-23.8-5.2-1.2.1-2.2.1-3 .1-1.5 0-3.5-1.3-6.2-3-6.2-3.9-15.6-9.9-34.3-10.2-.3 0-.5.1-.8.1v-8.2c0-1.7-1.3-3-3-3H30c-1.7 0-3 1.3-3 3v54.2c0 1.7 1.3 3 3 3h30.2c1.7 0 3-1.3 3-3v-6.1c2.8.2 8.8 3.1 14.6 5.8 10.3 4.8 23.2 10.9 33.5 10.9 16.1 0 61.6-21.8 61.6-34.6.1-8.5-4.7-13.4-13.1-13.4zM57.2 159.4H33v-48.1h24.2v48.1zm54.2 7.7c-9 0-21.2-5.7-31-10.3-7.4-3.5-13.3-6.2-17.2-6.4v-28.2c.2.1.4.1.7.1 16.9.2 25.2 5.5 31.1 9.3 3.4 2.2 6.2 3.9 9.4 3.9.9 0 2-.1 3.2-.1 5.6-.2 15.8-.6 19.1 3.1.4.5 1 1.4 1 2.8H87.5c-1.7 0-3 1.3-3 3s1.3 3 3 3h42.3c.7 0 1.5-.3 2-.8 6.6.5 13.3-4.9 19.3-9.8 3-2.5 7.2-5.8 8.7-5.8 5 0 7.2 2.3 7.2 7.5 0 6.3-37.7 28.7-55.6 28.7zM106.2 91c4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8-4.8 0-8.8 3.9-8.8 8.8-.1 4.8 3.8 8.8 8.8 8.8zm0-14c2.9 0 5.3 2.3 5.3 5.3 0 2.9-2.3 5.3-5.3 5.3-2.9 0-5.3-2.3-5.3-5.3-.1-3 2.3-5.3 5.3-5.3zm-25.9 8.5h4.9c.6 3.9 2.3 7.4 4.8 10.3l-3.8 3.8c-.7.7-.7 1.8 0 2.5.4.4.8.5 1.2.5s.9-.1 1.2-.5l3.8-3.8c2.9 2.4 6.4 4.1 10.2 4.7v4.8c0 .9.5 1.8 1.5 1.8s1.5-.8 1.5-1.8v-4.5h.4c5.2 0 10-1.9 13.6-5l3.8 3.8c.4.4.8.5 1.2.5.4 0 .9-.1 1.2-.5.7-.7.7-1.8 0-2.5l-3.8-3.8c2.4-2.8 4.1-6.4 4.8-10.3h6.2c1 0 1.8-.5 1.8-1.5 0-.9-.8-1.5-1.8-1.5h-5.9v-.3c0-5.2-1.9-9.9-5-13.6l3.8-3.8c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-3.8 3.8c-3.7-3.1-8.4-5-13.6-5h-.4V55c0-.9-.5-1.8-1.5-1.8s-1.5.8-1.5 1.8v6.4c-3.8.7-7.3 2.3-10.2 4.7l-3.8-3.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.8 3.8c-3.2 3.7-5 8.4-5 13.6v.3h-4.6c-1 0-1.8.5-1.8 1.5.1 1 .8 1.5 1.8 1.5zm25.9-20.8c9.8 0 17.7 7.9 17.7 17.5 0 9.7-7.9 17.6-17.7 17.6s-17.6-7.9-17.6-17.6c-.1-9.7 7.8-17.5 17.6-17.5zm32.1-11.4c1 .5 2 .7 3.1.7 2.6 0 5.1-1.5 6.2-3.8 1.7-3.4.3-7.6-3.1-9.3-1-.5-2-.7-3.1-.7-2.6 0-5.1 1.5-6.2 3.8-1.7 3.4-.3 7.6 3.1 9.3zm.1-7.7c.6-1.2 1.8-1.9 3.1-1.9.5 0 1 .1 1.5.4 1.7.8 2.3 2.8 1.5 4.5-.8 1.6-2.9 2.3-4.5 1.5-1.8-.8-2.5-2.9-1.6-4.5zM123 55c.2 0 .4 0 .6-.1l3.4-1.1c1.2 2.8 3.2 5 5.8 6.6v.1l-1.6 3.1c-.4.9-.1 1.9.8 2.3.2.1.5.2.8.2.7 0 1.2-.4 1.6-.9l1.5-3.1c1.8.7 3.6 1 5.5 1 1.2 0 2.3-.1 3.4-.4l1.1 3.4c.2.7 1 1.2 1.7 1.2.2 0 .4 0 .6-.1 1-.3 1.4-1.3 1.1-2.2l-1.1-3.3c2.7-1.2 5.1-3.2 6.7-5.8l3.2 1.5c.2.1.5.2.8.2.7 0 1.2-.4 1.6-.9.4-.9.1-1.9-.8-2.3l-3.2-1.5h-.1c1-2.8 1.2-5.8.7-8.8l3.4-1.1c1-.3 1.4-1.3 1.1-2.2-.3-.9-1.3-1.4-2.2-1.1l-3.4 1.1c-1.2-2.8-3.2-5-5.8-6.6l.1-.1 1.6-3.1c.4-.9.1-1.9-.8-2.3s-1.9-.1-2.3.8l-1.8 2.8c-1.8-.7-3.6-1-5.5-1-1.2 0-2.3.1-3.4.4l-1.1-3.4c-.3-.9-1.3-1.4-2.2-1.1-1 .3-1.4 1.3-1.1 2.2l1.1 3.3c-2.7 1.2-5.1 3.2-6.7 5.8l-3.2-1.5c-.9-.4-1.9-.1-2.3.8-.4.9-.1 1.9.8 2.3l3 1.6h.1c-1 2.8-1.2 5.8-.7 8.8l-3.4 1.1c-1 .3-1.4 1.3-1.1 2.2.3.7.9 1.2 1.7 1.2zm7.3-13.5c2.1-4.2 6.4-6.9 11.2-6.9 1.9 0 3.8.4 5.6 1.3 3 1.5 5.2 4 6.2 7.2s.8 6.5-.7 9.5c-2.1 4.2-6.4 6.9-11.2 6.9-1.9 0-3.8-.4-5.6-1.3-3-1.5-5.2-4-6.2-7.2-1.1-3.1-.8-6.5.7-9.5z"></path>
          </g>
        </svg>
      )
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cardStyles }} />
      <section className="bg-acencia py-16 md:py-20 bg-particles relative overflow-hidden">
        {/* Corporate Container: Max-width 1200px with proper padding */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          {/* Corporate Header with proper typography hierarchy */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Für jede Unternehmensgröße
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed font-normal">
              Maßgeschneiderte bAV-Lösungen, die mit Ihrem Unternehmen wachsen
            </p>
          </div>

          {/* Animated Cards Container */}
          <div className="flex gap-12 flex-wrap justify-center max-w-[1400px] mx-auto py-8 relative z-20">
            {segments.map((segment, index) => (
              <div key={index} className="customer-card" data-type={segment.type}>
                <div className="card-icon">
                  {segment.svgContent}
                </div>
                <div className="card-body">
                  <div className="card-label">{segment.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSegments;