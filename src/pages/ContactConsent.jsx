import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactConsent() {
  return (
    <section 
      style={{ 
        paddingTop: '140px', // Pushes content below the floating header
        paddingBottom: '80px', 
        backgroundColor: 'var(--white)',
        minHeight: '60vh' // Ensures the footer stays pushed down to the bottom
      }}
    >
      {/* The wrap class aligns the left and right edges with your header/footer */}
      <div className="wrap" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 40px' }}>
        
        <div style={{ color: 'var(--forest-night)', fontSize: '1rem', lineHeight: '1.8' }}>
          
          <h4 style={{ 
            color: 'var(--forest-green)', 
            fontSize: '1.15rem', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Contact Form Consent Statement
          </h4>
          
          <p style={{ marginBottom: '16px' }}>
            By submitting this form, you acknowledge that Silke IT Limited will process the information provided for the purpose of responding to your enquiry and maintaining records of business communications.
          </p>
          
          <p style={{ marginBottom: '16px' }}>
            Your information will be stored securely within our systems and may be used to contact you regarding your enquiry. We do not sell or share personal information for third-party marketing purposes.
          </p>
          
          <p style={{ marginBottom: '0' }}>
            For further information about how your data is handled, please review our{' '}
            <Link 
              to="/privacypolicy" 
              style={{ 
                color: 'var(--silke-red)', 
                textDecoration: 'underline', 
                fontWeight: '600' 
              }}
            >
              Privacy Policy
            </Link>.
          </p>
          
        </div>
      </div>
    </section>
  );
}