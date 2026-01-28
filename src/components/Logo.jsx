import '../styles/Logo.css';

export default function Logo({ className = "" }) {
  return (
    <div className={`logo ${className}`}>
      <div className="logo-badge-wrapper">
        {/* Logo Badge */}
        <div className="logo-badge">
          <span className="logo-text">TS</span>
        </div>
        {/* Small security icon overlay */}
        <div className="logo-icon">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="logo-company">
        <div className="logo-company-name">
          <span className="primary">TecSol</span>
          <br />
          <span className="secondary">Tecnology Solution's</span>
        </div>
      </div>
    </div>
  );
}
