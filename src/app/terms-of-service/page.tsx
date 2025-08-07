
import { FileText, Shield, AlertTriangle, Scale, Info } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last Updated: July 30, 2025
          </p>
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="space-y-12">

            {/* Agreement to Terms */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <FileText className="mr-3 h-7 w-7 text-blue-600" />
                1. Agreement to Terms
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                By accessing or using the DEVSIRCH HUB website, located at <code>devsirchhub.co.ke</code> (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you must not access or use the Site.
              </p>
            </section>

            {/* Use of the Website */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Info className="mr-3 h-7 w-7 text-blue-600" />
                2. Use of the Website
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                DEVSIRCH HUB grants you a non-exclusive, non-transferable, revocable license to access and use the Site strictly for the purpose of learning about our services and making inquiries. You agree not to use the Site for any purpose that is unlawful or prohibited by these Terms.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Shield className="mr-3 h-7 w-7 text-blue-600" />
                3. Intellectual Property Rights
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Unless otherwise stated, DEVSIRCH HUB owns all intellectual property rights and materials contained in this Site, including all text, graphics, logos, and software code. You may not reproduce or distribute any content without our prior written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <AlertTriangle className="mr-3 h-7 w-7 text-blue-600" />
                4. Limitation of Liability
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The Site is provided &quot;as is.&quot; In no event shall DEVSIRCH HUB be held liable for any damages arising out of or in any way connected with your use of this Site.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Scale className="mr-3 h-7 w-7 text-blue-600" />
                5. Governing Law & Jurisdiction
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These Terms will be governed by and interpreted in accordance with the laws of the Republic of Kenya. You agree to submit to the jurisdiction of the courts located in Kenya for the resolution of any disputes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                6. Contact Us
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at <a href="mailto:info@devsirchhub.co.ke" className="text-blue-600 hover:underline">info@devsirchhub.co.ke</a>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
