import React from "react";

const Certificate = ({ name }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <style>
          {`
            .certificate-bg { fill: #fff; }
            .border { fill: none; stroke: #c54343; stroke-width: 2; }
            .title { fill: #cc0000; font-family: Arial, sans-serif; font-size: 48px; font-weight: bold; }
            .text { fill: #000; font-family: Arial, sans-serif; font-size: 18px; }
            .name { fill: #000; font-family: 'Brush Script MT', cursive; font-size: 40px; }
            .signature { fill: #000; font-family: Arial, sans-serif; font-size: 14px; }
          `}
        </style>
      </defs>

      {/* Background */}
      <rect className="certificate-bg" x="0" y="0" width="800" height="600" />

      {/* Red curved background */}
      <path
        d="M0,0 Q400,0 400,300 Q400,600 800,600 L800,580 Q420,580 420,300 Q420,20 20,20 L0,20 Z"
        fill="#e4352f"
      />

      {/* White border */}
      <rect
        className="border"
        x="30"
        y="30"
        width="740"
        height="540"
        rx="20"
        ry="20"
      />

      {/* Medal */}
      <circle cx="100" cy="100" r="40" fill="#FFD700" />
      <circle cx="100" cy="100" r="35" fill="#FFA500" />
      <path
        d="M100,70 L110,90 L132,90 L115,105 L122,127 L100,115 L78,127 L85,105 L68,90 L90,90 Z"
        fill="#FFD700"
      />
      <rect x="90" y="130" width="20" height="40" fill="#FFD700" />
      <path d="M90,170 L100,180 L110,170 Z" fill="#FFD700" />

      {/* Certificate text */}
      <text x="400" y="120" textAnchor="middle" className="title">
        CERTIFICATE
      </text>
      <text x="400" y="160" textAnchor="middle" className="text">
        of appreciation
      </text>
      <text x="400" y="200" textAnchor="middle" className="text">
        is presented to:
      </text>

      {/* Customizable name */}
      <text
        x="400"
        y="270"
        textAnchor="middle"
        className="name"
        id="recipient-name"
      >
        {name}
      </text>

      <text x="400" y="330" textAnchor="middle" className="text">
        <tspan x="400" dy="0">
          For his achievements in participating in the
        </tspan>
        <tspan x="400" dy="25">
          2025 Computer Training activities
        </tspan>
      </text>

      {/* Signature lines */}
      <line x1="200" y1="470" x2="350" y2="470" stroke="#000" strokeWidth="1" />
      <line x1="450" y1="470" x2="600" y2="470" stroke="#000" strokeWidth="1" />

      <text x="275" y="500" textAnchor="middle" className="signature">
        Isabel Mercado
      </text>
      <text x="275" y="520" textAnchor="middle" className="signature">
        SUPERVISOR
      </text>

      <text x="525" y="500" textAnchor="middle" className="signature">
        Adora Montminy
      </text>
      <text x="525" y="520" textAnchor="middle" className="signature">
        VICE PRESIDENT
      </text>
    </svg>
  );
};

export default Certificate;
