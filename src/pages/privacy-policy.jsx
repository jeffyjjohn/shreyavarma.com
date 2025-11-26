import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Shreya Varma</title>
        <meta name="description" content="Privacy Policy for Shreya Varma Clinical Psychology Services" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Privacy Policy</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="bg-white p-8 border border-gray-200">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This website is committed to putting the patient's need first. We understand, acknowledge and respect any individual's right to privacy and the concerns one may have in regard to privacy and security. We recognize the importance of protecting the privacy of information provided by our patients, as well as, general users of our website.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Medical Disclaimer</h2>
              <p>
                If this is a medical emergency, please immediately call emergency personnel to get prompt medical attention. Do not rely on electronic communications for assistance in regard to your immediate, urgent medical needs. This e-mail is not designed to facilitate medical emergencies. We cannot guarantee response times if you choose to use this e-mail in the event of a medical emergency.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h2>
              <p className="mb-3">
                A visitor can access and browse our entire site at any time without providing any personal information. We do not collect information that would personally identify you unless you choose to provide it.
              </p>
              <p>
                This website does not share any personally identifiable information of any individual with any third party unrelated to this website, except in situations where we must provide information for legal purposes or investigations, or if so directed by the patient through a proper authorization.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Forms</h2>
              <p className="mb-3">
                Our website contains forms through which users may request information or supply feedback to us. In some cases, telephone numbers, email addresses or return addresses are required so that we can supply requested information to you, and in other cases, correct names and addresses are required to process credit card payments.
              </p>
              <p>
                After you fill out a form, we may contact you with follow-up information. We do not provide any information supplied on our web forms to any outside organization for any reason (other than where we may be required to by law). We do not save this personal information for any other reason.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Surveys</h2>
              <p>
                Occasionally, we may survey visitors to our site. The information from these surveys is used in aggregate form to help us understand the needs of our visitors so that we can improve our site. We generally do not ask for information in surveys that would personally identify you. If we do request contact information for follow-up, you may decline to provide it. If survey respondents provide personal information (such as an email address) in a survey, it is shared only with those people who need to see it to respond to the question or request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Email</h2>
              <p>
                "phishing" is a scam designed to steal your personal information. If you receive an email that looks like it is from this website asking you for your personal information, do not respond. We will never request your password, username, credit card information or other personal information through email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Username and Password</h2>
              <p>
                In the event you access any service requiring a username and password, you are solely responsible for keeping such username and password strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Non-personal Information</h2>
              <p>
                This website collects non-personal information such as website usage, traffic patterns, site performance and related statistics based on our tracking of your visits to the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">IP Addresses</h2>
              <p className="mb-3">
                The web server automatically collects the ip (which stands for internet protocol) address of the computers that access our site. An ip address is a number that is assigned to your computer when you access the internet. It is not truly personally identifiable information because many different individuals can access the internet via the same computer. We use this information in aggregate form to understand how our site is being used and how we can better serve visitors.
              </p>
              <p>
                Please note that although such information is not personally identifiable, we can determine from an ip address a visitor's internet service provider and the geographic location of his or her point of connectivity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">First Party Cookies</h2>
              <p className="mb-3">
                We may collect information about visitors to our site using "first party cookies", which are alphanumeric identifiers that we transfer to your computer's hard drive through your web browser. Cookies are never associated with specific personal identities. First party cookies are distinct from third party cookies that they are created and directly served by the company hosting the website.
              </p>
              <p className="mb-2">We use two types of "cookies" on this site:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>We use persistent cookies to recognize a repeat visitor, enabling us the opportunity to offer the visitor a set of services or information requested in a previous visit.</li>
                <li>We use session cookies to track a visitor's path through our site during a visit, to help us understand how people use our site.</li>
                <li>You can delete our cookies at any time. The "help" section, located on the toolbar of most browsers, will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie or how to disable cookies altogether. Since cookies allow you to take full advantage of some of our website's best features, we recommend that you leave them turned on.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Security of Your Information</h2>
              <p className="mb-3">
                Electronic transmission of information cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. We therefore do not accept liability for any errors or omissions in the contents of such messages, which arise as a result of electronic transmission.
              </p>
              <p className="mb-3">
                We are required by law to maintain the privacy of your medical information, to provide you with this written notice of privacy rights and practices, and to abide by the terms of the notice currently in effect. This policy shall be applicable to the information collected or displayed on our website. We assure to take the privacy seriously and to keep your privacy and confidentiality of the information provided to us.
              </p>
              <p className="mb-3">
                We shall not intentionally or unless required under laws share the contents of any person with any outside authorities or any third party. We do not guarantee or assure that the electronic communications received from you or contents or records may not be accessible to the third parties.
              </p>
              <p>
                This website periodically reviews and modifies, where appropriate, its security policies and procedures. We use reasonable care to protect your personally identifiable and confidential information provided by you to our site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer of Warranty</h2>
              <p className="mb-3">
                Materials, services and other information are provided "as is" by Shreya Varma for educational purposes only. We make no express or implied warranties, including, but not limited to, any warranties of merchantability, fitness for a particular purpose or use, title or non-infringement.
              </p>
              <p className="mb-3">
                Please note that, by its very nature, a website cannot be absolutely protected against intentional or malicious intrusion attempts. Furthermore, this website does not control the devices or computers or the internet over which you may choose to send confidential personal information and cannot, therefore, prevent such interceptions of compromises to your information while in transit to this website.
              </p>
              <p className="mb-3">
                Therefore, shreyavarma.com hereby makes no guarantee as to security, integrity or confidentiality of any information transmitted to or from this website, or stored within this website.
              </p>
              <p className="mb-3">
                Beyond our reasonable care to safeguard your information while in transit, this website cannot and does not guarantee the absolute security of electronic communications or transmissions since any transmission made over the internet by any organization or any individual runs the risk of interception.
              </p>
              <p>
                In addition, we hereby make no guarantee as to security, integrity or confidentiality of any information transmitted to or from this website, or stored within this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p className="mb-3">
                You assume the sole risk of transmitting your information as it relates to the use of this website, and for any data corruptions, intentional interceptions, intrusions or unauthorized access to information, or of any delays, interruptions to or failures preventing the use this website.
              </p>
              <p className="mb-3">
                In no event shall Shreya Varma be liable for any direct, indirect, special, consequential or monetary damages, including fees, and penalties in connection with your use of materials posted on this site or connectivity to or from this site to any other site.
              </p>
              <p className="mb-3">
                Shreya Varma may change this privacy policy without notice to you.
              </p>
              <p className="mb-3">
                Other services provided by Shreya Varma on this website may require you to agree to additional terms.
              </p>
              <p className="mb-3">
                By using this website, you accept these terms.
              </p>
              <p>
                If you have any questions about our privacy policy or our use of information gathered through our web site, please contact us using the 'contact form' button.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <p className="font-semibold text-sm text-gray-500">Last updated on 11/22/2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default PrivacyPolicy;
