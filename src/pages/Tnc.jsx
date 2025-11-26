import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Shreya Varma</title>
        <meta name="description" content="Terms and Conditions for Shreya Varma Clinical Psychology Services" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Terms and Conditions</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="bg-white p-8 border border-gray-200">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Terms of Use</h2>
              <p className="mb-3">
                Thank you for visiting Shreya Varma's website.
              </p>
              <p className="mb-3">
                This website is operated by Shreya Varma. Throughout the site, the terms "Shreya Varma", "we", "us" and "our" refer to Shreya Varma.
              </p>
              <p>
                By accessing, browsing and/or using webpages or other digital content in this site, you accept, without limitation or qualification, the following terms of use.
              </p>
            </div>

            <p>
              All health information posted on the site is based on the latest research and international treatment standards, and have been written or reviewed and approved by our physicians or health professionals unless otherwise specified. Portions of our site may have been created with the support of other individuals or organizations. The granting organization is noted at the bottom of the applicable page(s). This support does not influence the content of the health information on our website.
            </p>

            <p>
              The information provided on this website is designed to support, not replace, the relationship that exists between patient/site visitor and his/her doctor.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Consent</h2>
              <p>
                You agree that your use of this website and any uses of any services or materials are subject to your agreement with all of these terms of use, copyright and reprint policy, and the website privacy policy. You agree that you will not violate any local, state or international laws in using this website or accessing any material on this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Site Access</h2>
              <p>
                We reserve the right to prohibit, restrict or discontinue your access to certain pages within the website if you violate any terms of this agreement. We may modify these terms of use at any time without notice. The modified terms of use will be effective upon posting on our website. To remain in compliance, we suggest that you review the terms of use, as well as the other website policies listed above, at regular intervals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Medical Disclaimer</h2>
              <p>
                If this is a medical emergency, please immediately call emergency personnel to get prompt medical attention. Do not rely on electronic communications for assistance in regard to your immediate, urgent medical needs. This e-mail is not designed to facilitate medical emergencies. We cannot guarantee response times if you choose to use this e-mail in the event of a medical emergency.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer of Warranty</h2>
              <p className="mb-3">
                Materials, services and other information are provided "as is" by us for educational purposes only.
              </p>
              <p className="mb-3">
                We make no express or implied warranties, including, but not limited to, any warranties of merchantability, fitness for a particular purpose or use, title or non-infringement.
              </p>
              <p className="mb-3">
                Although our health information content is reviewed and approved by healthcare professionals, we do not guarantee the accuracy, adequacy, or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information.
              </p>
              <p className="mb-3">
                You acknowledge and agree that we do not operate or control the internet and therefore, does not guarantee that the use of this website will be error free or free of technology downtimes or unavailability.
              </p>
              <p className="mb-3">
                You acknowledge and agree that we cannot and does not guarantee against viruses, worms, or other unauthorized users or hackers attempting to obtain access to this website or information transmitted to or from this site.
              </p>
              <p>
                We also reserve the right to temporarily or permanently discontinue this site, any page, or any functionality on this website at any time and without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                In no event shall we be liable for any direct, indirect, special, consequential or monetary damages, including fees, and penalties in connection with your use of materials posted on this site or connectivity to or from this site to any other site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Feedback & Opinions</h2>
              <p>
                Any feedback / opinion(s) expressed in response to e-mail queries shall not be treated as medical advice until and unless an examination of the patient is carried out and treatment initiated. E-mail transmission cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. The sender therefore does not accept liability for any errors or omissions in the contents of this message, which arise as a result of e-mail transmission. Whilst every effort is made to address all queries and to accommodate valuable feedback from the users, we do not guarantee a response or action to every mail.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
              <p className="mb-3">
                This agreement is governed by the laws of India. You agree that any claim or dispute relating to this website or your use or reliance on this website shall be construed in accordance with the laws of India without regard to its conflict of laws' provisions. You hereby consent to the exclusive jurisdiction of the courts of Delhi in all disputes arising out of or relating to the use of this website. Use of this website is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph. Those who choose to access the web site from other locations do so on their own initiative and are responsible for compliance with applicable local laws.
              </p>
              <p className="mb-3">
                None of the terms herein shall affect any of your statutory rights as a consumer.
              </p>
              <p>
                Any rights not expressly granted herein are reserved.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Username and Password</h2>
              <p>
                In the event you access any service requiring a user name and password, you are solely responsible for keeping such user name and password strictly confidential.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Children</h2>
              <p>
                Accept as otherwise indicated, we do not knowingly or intentionally collect personal information from children under age 18. The content of our website is directed at adults, and therefore this site is intended for use only by adults over the age of 18. If you are under the age of 18, please consult a parent or guardian for help in using this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Inbound Links</h2>
              <p>
                You may not, under any circumstances, establish a link to this website without the express written consent of Shreya Varma, including but not limited to deep linking.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">External Links</h2>
              <p>
                Please note that pages of this site may be linked to other sites which may have different terms of use. We do not own, control, manage, supervise, direct or otherwise have any involvement in the business or affairs of any third party site. We are not responsible for the privacy practices or the content of the third party site. Once you link to another site, you are subject to the privacy policy of that site. We encourage you to be aware when you are leaving this website to read the privacy statements of each and every website that you visit before providing any personally identifiable information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Trademarks and Copyrights</h2>
              <p>
                All trademarks, service marks, and logos or copyrights displayed and used in this site are the property of their respective owners. Nothing in this site should be construed as granting any right or license to use any trademark without the written permission of its owner.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Privacy</h2>
              <p>
                Please read the full text of our notice of privacy practices.
              </p>
            </div>

            <p className="mb-3">
              By using this website, you accept these terms.
            </p>

            <div className="pt-6 border-t border-gray-300">
              <p className="text-sm font-semibold text-gray-500">Last updated: 22/11/2025</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default TermsAndConditions;
