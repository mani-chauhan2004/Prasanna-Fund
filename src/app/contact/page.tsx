"use client";
import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <section className="bg-white min-h-[90vh] py-32 md:py-40 px-4 flex flex-col items-center justify-center w-full">
        <div className="w-full text-center flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold text-pf-black mb-8 font-display">Contact</h1>
          <p className="text-pf-black text-xl md:text-2xl font-body leading-relaxed mb-10 font-light">
            
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-example-form-link/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pf-black text-white font-medium px-10 py-5 rounded-lg text-2xl hover:bg-gray-800 transition mb-8"
          >
            Fill Out Contact Form
          </a>
          <p className="text-gray-500 text-base mt-2 max-w-xl">
            Disclaimer: By submitting this form, you consent to us storing your email and message for the purpose of responding to your inquiry. We will not share your information with third parties. This form is for initial contact only and does not constitute an offer or agreement.
          </p>
        </div>
      </section>
    </>
  );
}
