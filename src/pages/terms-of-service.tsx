import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to our service. These Terms of Service (&quot;Terms&quot;) govern
          your use of the services, websites, and applications (collectively,
          the &quot;Service&quot;) offered by [Your Municipality/Organization Name]
          (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these
          Terms and our Privacy Policy. If you do not agree to these Terms,
          please do not use our Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Description of Service</h2>
        <p>
          Our Service provides [describe the service, e.g., access to municipal
          information, online payment facilities, reporting tools] for the
          residents and stakeholders of [Municipality Name], South Africa.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
        <p>
          You are responsible for your use of the Service and for any
          information you provide, including compliance with applicable laws,
          rules, and regulations. You agree not to misuse the Service or help
          anyone else to do so.
        </p>
        <p>
          Specifically, you agree not to:
        </p>
        <ul>
          <li>
            Engage in any activity that interferes with or disrupts the
            Service.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or
            its related systems or networks.
          </li>
          <li>
            Use the Service for any illegal or unauthorized purpose.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding content provided by
          users), features, and functionality are and will remain the
          exclusive property of [Your Municipality/Organization Name] and its
          licensors. The Service is protected by copyright, trademark, and
          other laws of both South Africa and foreign countries.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Termination</h2>
        <p>
          We may terminate or suspend your access to our Service immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if you breach the Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
        <p>
          In no event shall [Your Municipality/Organization Name], nor its
          directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential or
          punitive damages, including without limitation, loss of profits,
          data, use, goodwill, or other intangible losses, resulting from (i)
          your access to or use of or inability to access or use the Service;
          (ii) any conduct or content of any third party on the Service; (iii)
          any content obtained from the Service; and (iv) unauthorized access,
          use or alteration of your transmissions or content, whether based on
          warranty, contract, tort (including negligence) or any other legal
          theory, whether or not we have been informed of the possibility of
          such damage, and even if a remedy set forth herein is found to have
          failed of its essential purpose.
        </p>
         <p>
          Our liability is limited to the maximum extent permitted by law in South Africa.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is
          provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is
          provided without warranties of any kind, whether express or implied,
          including, but not limited to, implied warranties of
          merchantability, fitness for a particular purpose, non-infringement
          or course of performance.
        </p>
        <p>
          [Your Municipality/Organization Name] its subsidiaries, affiliates,
          and its licensors do not warrant that a) the Service will function
          uninterrupted, secure or available at any particular time or
          location; b) any errors or defects will be corrected; c) the Service
          is free of viruses or other harmful components; or d) the results of
          using the Service will meet your requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of South Africa, without regard to its conflict of law
          provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 days' notice prior to any new terms taking
          effect. What constitutes a material change will be determined at our
          sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          [Contact Email/Link to Contact Page].
        </p>
        <p className="mt-6 text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 