"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";

interface FormState {
  name: string;
  email: string;
  deck: string;
  heard: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  deck?: string;
  heard?: string;
}

const howYouHeardOptions = [
  "Referral",
  "Event",
  "Social Media",
  "Search Engine",
  "Other"
];

export default function ContactPage() {
  return(
    <div className="min-h-[90vh] w-full bg-pf-black flex flex-col justify-center items-center border-t border-pf-gold">
      <div className="w-full text-center text-pf-cream text-2xl leading-relaxed flex flex-col justify-center items-center flex-1">
        <div className="mb-4">
          <span className="block mb-1 text-pf-gold font-semibold">For founders</span>
          <span className="block mb-2 text-pf-cream/90">DM <span className="font-semibold">@myprasanna</span> on X for a 48-hour reply.</span>
          <span className="block text-pf-gold font-semibold mt-2">For LPs & press</span>
          <a href="mailto:investor-relations@prasannafund.com" className="block text-pf-gold underline font-medium">investor-relations@prasannafund.com</a>
        </div>
        <div className="mt-8">
          <h2 className="text-pf-gold font-bold text-2xl mb-2 text-center">Legal Disclaimer</h2>
          <p className="text-pf-cream text-lg text-center max-w-3xl mx-auto">
            Information provided is for discussion purposes only and does not constitute an offer to sell or a solicitation of an offer to buy securities. Past performance is not indicative of future results. Microsoft and Azure are trademarks of Microsoft Corp.; credit amounts and eligibility are subject to change by Microsoft.
          </p>
        </div>
      </div>
    </div>
  )
}
