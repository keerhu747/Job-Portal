import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  MessageCircle,
  Star,
  ShieldCheck,
  Zap,
  TrendingUp,
  Check,
} from "lucide-react";

export default function Upgrade1() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* ===== HEADER ===== */}
      <div className="bg-white px-8 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center">
            TP
          </div>
        <div className= "flex items-left ">
             <h2 className="text-1xl font-semibold text-center mb-2">
                TalentPoint
        </h2>
        <h4 className="text-gray-500 text-sm text-center mb-10">
          Employer View
        </h4>
        </div>
        </div>
            
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500" />
        </div>
      </div>


      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-6xl mx-auto mt-14 px-4">

        {/* DIAMOND */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#F4B400">
              <path d="M12 2L2 9l10 13 10-13z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">
          Unlock Premium Benefits
        </h2>
        <p className="text-gray-500 text-sm text-center mb-10">
          Boost your job search with premium features and get hired faster
        </p>

        {/* ===== BENEFITS GRID (LIGHT GREY OUTLINE) ===== */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          <BenefitCard
            icon={<Zap className="text-yellow-500" />}
            title="Priority AI Matching"
            desc="Get matched first with the best jobs that fit your profile"
          />
          <BenefitCard
            icon={<TrendingUp className="text-purple-500" />}
            title="Higher Profile Visibility"
            desc="Your profile appears at the top when employers search"
          />
          <BenefitCard
            icon={<ShieldCheck className="text-green-600" />}
            title="Early Job Access"
            desc="See and apply to new jobs 24 hours before free users"
          />
          <BenefitCard
            icon={<Star className="text-blue-600" />}
            title="Premium Badge"
            desc="Stand out with a premium badge on your profile"
          />
        </div>

        {/* ===== PLANS ===== */}
        <h3 className="text-center text-lg font-semibold mb-8">
          Choose Your Plan
        </h3>

        <div className="flex justify-center gap-8 mb-20">

          {/* BASIC (Light Blue Inside + Grey Border) */}
          <PlanCard
            title="Basic / Free"
            price="AU$ 0"
            desc="Designed for users who want to explore with minimal commitment."
            button="Select"
            active={false}
          />

          {/* MONTHLY (Highlighted) */}
          <PlanCard
            title="Monthly"
            price="AU$ 199"
            desc="Designed for active users who need flexibility."
            button="Choose Plan"
            badge="Most Popular"
            active={true}
          />

          {/* YEARLY (Light Blue Inside + Grey Border) */}
          <PlanCard
            title="Yearly"
            price="AU$ 1,499"
            desc="Designed for committed users who want full access and value."
            button="Select"
            active={false}
          />
        </div>

        {/* ===== ALL PREMIUM INCLUDE (LIGHT GREY INSIDE + GREY OUTLINE) ===== */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-10 mb-6">
          <h3 className="text-lg font-semibold mb-6">
            All Premium Plans Include:
          </h3>

          <ul className="space-y-4 text-sm text-gray-700">
            <PremiumItem text="Priority placement in AI job recommendations" />
            <PremiumItem text="Profile appears 5x more often to employers" />
            <PremiumItem text="Early access to new job postings (24 hours before others)" />
            <PremiumItem text="Premium badge on your profile" />
            <PremiumItem text="Priority customer support" />
            <PremiumItem text="Unlimited job applications" />
          </ul>
        </div>

        {/* ===== MONEY BACK (BLACK TEXT) ===== */}
        <p className="text-center text-sm text-black mb-20">
          <span className="font-semibold">
            100% 7-Day Money-Back Guarantee
          </span>
          <br />
          Not satisfied? Get a full refund within 7 days, no questions asked.
        </p>

      </div>
    </div>
  );
}

/* COMPONENTS */

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="border border-gray-300 rounded-lg p-5 flex gap-4 items-start bg-white">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function PlanCard({ title, price, desc, button, badge, active }) {
  return (
    <div
      className={`w-72 rounded-lg p-6 text-center relative ${
        active
          ? "border-2 border-blue-600 shadow-md bg-white"
          : "border border-gray-300 bg-blue-50"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      <h4 className="text-sm font-semibold mb-2 mt-4">{title}</h4>
      <p className="text-xl font-bold mb-3">{price}</p>
      <p className="text-xs text-gray-500 mb-6">{desc}</p>

      <button
        className={`w-full py-2 rounded text-sm ${
          active
            ? "bg-black text-white"
            : "border border-gray-400 text-black"
        }`}
      >
        {button}
      </button>
    </div>
  );
}

function PremiumItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <Check className="text-green-600 w-5 h-5" />
      {text}
    </li>
  );
}