
import { Shield, FileText, Clock, UserCheck, Trash2, HelpCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last Updated: July 30, 2025
          </p>
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="space-y-12">
            
            {/* Introduction */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <FileText className="mr-3 h-7 w-7 text-blue-600" />
                1. Introduction
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Welcome to DEVSIRCH HUB (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). We are committed to protecting your privacy and handling your personal data in an open and transparent manner. This Privacy Policy explains how we collect, use, process, and safeguard your information when you visit our website, <code>devsirchhub.co.ke</code> (the &quot;Site&quot;).
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed">
                This policy is prepared in compliance with the <strong>Kenya Data Protection Act, 2019 (DPA)</strong>. By using our Site, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <UserCheck className="mr-3 h-7 w-7 text-blue-600" />
                2. Information We Collect
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our website is designed to be an open, informational resource that does not require user registration. We only collect personal data that you voluntarily provide to us.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>
                  <strong>Personal Data You Provide:</strong> We collect personal information when you use our contact form to make an inquiry. This information includes: Your Full Name, Email Address, Phone Number, and any other information you choose to provide in the message body.
                </li>
                <li>
                  <strong>Data We Do Not Collect:</strong> We do not use analytics or tracking cookies. We do not automatically collect technical data such as your IP address, browser type, or device information.
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <HelpCircle className="mr-3 h-7 w-7 text-blue-600" />
                3. How We Use Your Information
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We use the personal information you provide through the contact form for the following specific and legitimate purposes only:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>To respond to the questions, comments, or service requests you submit.</li>
                <li>To communicate with you about the services you are interested in.</li>
                <li>For internal administrative purposes related to your inquiry.</li>
              </ul>
              <p className="mt-2 text-gray-700 leading-relaxed">
                We will not use your personal data for any other purpose, such as marketing, without first obtaining your separate, explicit consent.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Clock className="mr-3 h-7 w-7 text-blue-600" />
                4. Data Retention
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We will only retain your personal data for as long as is necessary to fulfill the purpose for which it was collected or as required by law. Once this purpose is fulfilled, your data will be securely deleted.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Shield className="mr-3 h-7 w-7 text-blue-600" />
                5. Data Security
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We are committed to ensuring your information is secure. We have implemented appropriate technical and organizational measures to safeguard the information we collect online, including the use of HTTPS to encrypt data transmitted through our contact form.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                <Trash2 className="mr-3 h-7 w-7 text-blue-600" />
                6. Your Data Protection Rights
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Under the Kenya Data Protection Act, you have several rights regarding your personal data, including the right to access, rectify, or request the deletion of your data. To exercise any of these rights, please contact us using the details provided below.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="flex items-center text-2xl font-bold text-gray-800">
                7. Contact Us
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:privacy@devsirchhub.co.ke" className="text-blue-600 hover:underline">privacy@devsirchhub.co.ke</a></li>
                <li><strong>Phone:</strong> +254 700 000 000</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
