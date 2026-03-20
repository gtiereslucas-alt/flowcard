import React from 'react';

export const AudiLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <circle cx="20" cy="20" r="14.5" />
    <circle cx="40" cy="20" r="14.5" />
    <circle cx="60" cy="20" r="14.5" />
    <circle cx="80" cy="20" r="14.5" />
  </svg>
);

export const BMWLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="50" cy="50" r="48" strokeWidth="3" />
    <circle cx="50" cy="50" r="38" strokeWidth="12" />
    <path d="M50 12v38h38A38 38 0 0 0 50 12zm0 76V50H12a38 38 0 0 0 38 38z" fill="currentColor" />
  </svg>
);

export const BasicFitLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 60" fill="currentColor" {...props}>
    <path d="M10 10h180v40H10zM20 20v20h160V20z" opacity="0.2"/>
    <text x="50%" y="65%" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="sans-serif">BASIC-FIT</text>
  </svg>
);

export const Century21Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 220 60" fill="currentColor" {...props}>
    <text x="50%" y="65%" textAnchor="middle" fontSize="28" fontWeight="800" fontFamily="serif" letterSpacing="2">CENTURY 21</text>
    <path d="M10 15h200v2H10zm0 30h200v2H10z" opacity="0.5"/>
  </svg>
);

export const ERALogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
    <path d="M10 50 L50 10 L90 50" />
    <text x="50%" y="45" textAnchor="middle" fontSize="24" fontWeight="900" fontFamily="sans-serif" stroke="none" fill="currentColor">ERA</text>
  </svg>
);

export const FitnessParkLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 220 60" fill="currentColor" {...props}>
    <text x="50%" y="65%" textAnchor="middle" fontSize="26" fontWeight="900" fontFamily="sans-serif">FITNESS PARK</text>
    <path d="M10 5L30 5V55H10z" opacity="0.3"/>
  </svg>
);
