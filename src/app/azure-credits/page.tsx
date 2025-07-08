
import React from 'react'
import Navbar from '../../components/Navbar'

export default function AzureCreditsPage() {
  return (
    <>
      <Navbar currentPath="/azure-credits" />
      <section className="bg-pf-black min-h-[90vh] py-20 px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-8xl md:text-5xl font-bold text-pf-gold mb-6 font-raleway">Microsoft for Startups Investor Codes</h1>
          <p className="text-pf-cream text-lg md:text-2xl font-medium leading-relaxed mb-4">
            Prasanna Fund is a proud member of the <span className="text-pf-gold font-semibold">Microsoft for Startups Investor Network</span>.<br />
            As a portfolio founder, you can unlock exclusive Azure cloud credits and benefits through our partnership with Microsoft.
          </p>
        </div>
      </section>
      {/* Step-by-step section */}
      <section className="bg-pf-cream py-10 px-4 flex flex-col items-center justify-center min-h-[60vh] text-pf-black">
        <div className="max-w-2xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pf-gold mb-6 font-raleway text-center">How to Claim Your Azure Credits</h2>
          <ol className="list-decimal list-inside text-pf-black text-lg md:text-xl font-medium space-y-4 text-center">
            <li>
              If we've invested in you, email <a href="mailto:credits@prasannafund.com" className="text-pf-gold underline font-semibold">credits@prasannafund.com</a> for your referral code.
            </li>
            <li>
              Create a Microsoft account (if you don't have one).
            </li>
            <li>
              Apply for the Microsoft for Startups Investor Offer within <span className="text-pf-gold font-semibold">90 days</span> of receiving your code.
            </li>
            <li>
              Enjoy <span className="text-pf-gold font-semibold">$1K–$5K</span> baseline credits plus up to two years of Azure runway for Investor Offer recipients.
            </li>
          </ol>
          <div className="flex flex-row gap-4 justify-center mt-8">
            <a href="https://learn.microsoft.com/en-us/microsoft-for-startups/application" target="_blank" rel="noopener noreferrer" className="bg-pf-gold text-pf-black font-bold px-4 py-2 rounded-lg shadow hover:bg-pf-cream transition">Microsoft for Startups Application</a>
            <a href="https://learn.microsoft.com/en-us/microsoft-for-startups/benefits/azure-credits-billing" target="_blank" rel="noopener noreferrer" className="bg-pf-gold text-pf-black font-bold px-4 py-2 rounded-lg shadow hover:bg-pf-cream transition">Microsoft Azure Credits Billing</a>
          </div>
        </div>
      </section>
    </>
  )
}