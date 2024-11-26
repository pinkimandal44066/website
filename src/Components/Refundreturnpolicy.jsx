import React from "react";
import Scrolling from "./Scrolling";
const RefundPolicy = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-black via-purple-500 to-white w-full h-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center px-6 py-12 sm:py-20">
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Refund/Cancellation Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mt-4">
              At SystAIO, we provide high-quality services with a focus on
              client satisfaction. Our refund and cancellation policy ensures
              fairness and transparency for all services provided.
            </p>
          </div>

          <div className="sm:w-1/2 mt-8 sm:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Eligibility for Refunds
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Cancellation Policy
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <p className="text-sm font-semibold text-gray-700 text-center">
                Non-refundable Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 ">
        <p className="mb-6 text-4xl font-bold">
          Please read refund & cancellation policy carefully.
        </p>
        <div className=" p-6">
          <p className="mb-4">
            Each of the services offered by us will take a completely different
            course of action. It helps us to accomplish from the start till the
            end. Therefore, the refund policy will vary for one service to the
            other.
          </p>
          <p className="mb-4">
            We come up with a particular set of resources which help in
            achieving all the milestones of a campaign. Therefore, we will not
            entertain a refund for any work which has already been completed.
          </p>
          <p className="mb-4">
            Fees that have been paid in the form of installation charges or
            administrative fees will not be refunded.
          </p>
          <p className="mb-4">
            Fees that have been paid for Domain Registration , Hosting Server
            and SSL certificates are not be refundable after the product or
            services Buyed/Applied.
          </p>
          <p className="mb-4">
            We will not refund any fee for the taxes that have been paid for
            services that are levied by regulatory bodies.
          </p>
          <p className="mb-4">
            If any service gets canceled because of any violation of terms which
            are mentioned in our Terms & Conditions segment, we will not refund
            any fee for that.
            {/* If any service gets canceled because of any violation of terms which are mentioned in our Terms & Conditions segment, we will not refund any fee for that. */}
          </p>
          <p className="mb-4">
            For the same day delivery services, we do not follow any refund
            policy.We do not refund fee for any disruption caused by any third
            party.
            {/* For the same day delivery services, we do not follow any refund policy. We do not refund fee for any disruption caused by any third party. */}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Cancellation Policy
          </h2>
          <p className="mb-4">
            Project can only be cancelled within 3 days after signing the
            project agreement. If there is a refund, client will get refund
            within 10 days of the claim.
          </p>
          <p className="mb-4">
            For the services offered with some promotional discounts, subscriber
            cannot place the cancellation as these offers are for limited time.
            Therefore, no refund for this service would be possible.
          </p>
          <p className="mb-4">
            A service is automatically canceled if the next payment is not
            received within 7 working days. And there will be Penalty charges
            imposed if services in continued there after .
          </p>
          <p className="mb-4">
            SEO and digital marketing packages are not refundable, but the
            client may cancel with a notice written 30 days in advance.
          </p>
          <p className="mb-4">
            We do not offer refunds on deposits or payments for projects that
            are abandoned or lay dormant for more than 15 days.
          </p>
        </div>
      </div>
    </>
  );
};

export default Scrolling(RefundPolicy);
