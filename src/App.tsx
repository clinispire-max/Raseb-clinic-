import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Stethoscope, ChevronDown, Check, X, 
  Settings, MessageCircle, Repeat, Star, Calendar,
  ArrowRight, ShieldCheck, HeartPulse, Stethoscope as MedIcon,
  TrendingUp, Users, Activity, Clock, FileText, XCircle
} from 'lucide-react';

import heroBg from './assets/images/regenerated_image_1781602630400.jpg';
import aboutImg from './assets/images/regenerated_image_1781602636668.jpg';
import founderImg from './assets/images/regenerated_image_1781602642576.png';
import logoImg from './assets/images/regenerated_image_1781602992181.png';

const WA_NUMBER = "+919674137152";

function WhatsAppButton({ text, label, className = "", isPill = false }: { text: string, label?: string, className?: string, isPill?: boolean }) {
  const encodedText = encodeURIComponent(text);
  const href = `https://wa.me/${WA_NUMBER}?text=${encodedText}`;
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-[#25D366] hover:bg-opacity-90 text-white font-bold transition-all shadow-lg hover:shadow-xl ${isPill ? 'rounded-full px-5 py-2.5 text-sm' : 'rounded-xl px-4 py-3'} ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2 fill-current" />
      <span>{label || "Chat Now"}</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="font-body text-brand-dark bg-brand-light min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-1">
              <img src={logoImg} alt="Clinispire Logo" className="h-10 w-auto object-contain object-left" />
              <span className="text-brand-primary text-2xl font-bold tracking-tight">Clinispire</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium hidden sm:block">Smarter Systems. Better Patient Experience.</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex px-3 py-1 bg-teal-50 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest">
              Operational Excellence
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-6 text-slate-800">
              Your Clinic Shouldn't <br className="hidden sm:block"/><span className="text-brand-primary">Feel Like Firefighting.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="space-y-2 flex-1">
                <span className="font-bold text-slate-900 border-b-2 border-red-200 pb-1 inline-block mb-3 text-sm tracking-tight">The Struggle</span>
                {[
                  "Missed appointments", "WhatsApp chaos", 
                  "Patient complaints", "Staff overload",
                  "No follow-up system", "Scattered records",
                  "Lost revenue", "Manual data entry"
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[13px]">
                    <span className="text-red-400 font-bold mt-0.5 text-xs mr-2">✕</span>
                    <span className="text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 flex-1">
                <span className="font-bold text-brand-primary border-b-2 border-teal-200 pb-1 inline-block mb-3 text-sm tracking-tight">The Clinispire Way</span>
                {[
                  "Automated reminders", "Unified communications",
                  "Better patient experience", "Streamlined workflows",
                  "Predictable follow-ups", "Digital organization"
                ].map((item, i) => (
                  <div key={i} className="flex items-start text-[13px]">
                    <span className="text-[#25D366] font-bold mt-0.5 text-xs mr-2">✓</span>
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <WhatsAppButton 
              text="Hi Clinispire, I would like to get my Free Clinic Assessment." 
              label="💬 Get My Free Clinic Assessment" 
              isPill 
              className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply z-10"></div>
              <img 
                src={heroBg} 
                alt="Doctor working efficiently in a modern clinic" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20">
               <div className="bg-green-100 p-2 rounded-full">
                 <ShieldCheck className="w-6 h-6 text-green-600" />
               </div>
               <div>
                 <div className="text-sm font-bold text-gray-900">Proven Systems</div>
                 <div className="text-xs text-gray-500">For Modern Clinics</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-4">
            {[
              { icon: Activity, label: "Workflow Optimization" },
              { icon: Settings, label: "Systems Audit" },
              { icon: TrendingUp, label: "Growth Metrics" },
              { icon: MessageCircle, label: "Communication Pipeline" },
              { icon: HeartPulse, label: "Patient Retention" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0E7C86]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square sm:aspect-4/3">
              <img 
                src={aboutImg} 
                alt="Healthcare consultant reviewing data" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">We Don't Sell Software. <br/><span className="text-brand-primary">We Help Clinics Operate Smarter.</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Most fast-growing clinics reach a breaking point where writing things down on paper or relying on disconnected WhatsApp chats is no longer sustainable. 
              We bridge the gap between healthcare expertise and modern digital operations, empowering your team to focus on patient care while systems handle the repetitive work.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <MedIcon className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-heading font-semibold text-gray-900 mb-1">Medical Background</h3>
                <p className="text-xs text-gray-500">We understand the reality of running a busy clinic, patient empathy, and front-desk challenges.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <TrendingUp className="w-6 h-6 text-brand-primary mb-3" />
                <h3 className="font-heading font-semibold text-gray-900 mb-1">Digital Background</h3>
                <p className="text-xs text-gray-500">We bring modern, scalable digital systems that work reliably without requiring an IT team.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Who We Help</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tailored operational systems for specialized healthcare providers.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "Small Clinics", icon: Building2 },
              { name: "Dental Clinics", icon: Activity },
              { name: "Physiotherapy", icon: Users },
              { name: "Diagnostic Centers", icon: FileText },
            ].map((type, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-brand-light px-6 py-4 rounded-xl flex items-center gap-3 border border-gray-100 font-medium text-gray-700"
              >
                <type.icon className="w-5 h-5 text-brand-primary" />
                {type.name}
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 px-6 py-4 rounded-xl flex items-center gap-3 border border-gray-200 font-medium text-gray-400 relative overflow-hidden"
            >
              <Building2 className="w-5 h-5 text-gray-300" />
              Multi-Specialty
              <span className="absolute top-0 right-0 bg-brand-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">Soon</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-3">The Problems We Solve</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Stop letting operational bottlenecks hurt your clinic's reputation and growth.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Appointment Issues",
              icon: Calendar,
              items: ["High no-show rates", "Double bookings", "Manual scheduling", "Empty cancelled slots"]
            },
            {
              title: "Communication Issues",
              icon: MessageCircle,
              items: ["Unanswered patient queries", "Disjointed WhatsApp chats", "Delayed report sharing", "Staff confusion"]
            },
            {
              title: "Patient Experience",
              icon: HeartPulse,
              items: ["Long waiting room times", "Confusing post-care prep", "Zero follow-up engagement", "Generic interactions"]
            },
            {
              title: "Operational Issues",
              icon: Settings,
              items: ["Front-desk burnout", "Revenue leakage", "Paper-based chaos", "No growth tracking"]
            }
          ].map((cluster, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-brand-light w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <cluster.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4">{cluster.title}</h3>
              <ul className="space-y-2">
                {cluster.items.map((item, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-600">
                    <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-3">Smart Clinic Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Targeted systems implemented for you, directly improving the bottom line.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Appointment Management",
                desc: "Seamless scheduling that reduces friction for patients and saves time for your front desk.",
                icon: Calendar,
                benefits: ["Automated SMS/WhatsApp reminders", "Online smart booking links", "Reduced no-shows"]
              },
              {
                title: "WhatsApp Communication",
                desc: "Professionalize your clinic's WhatsApp presence with centralized control.",
                icon: MessageCircle,
                benefits: ["Shared team inbox", "Quick-reply templates", "Automated off-hours responses"]
              },
              {
                title: "Patient Follow-Up",
                desc: "Keep patients engaged after they leave the clinic without manual tracking.",
                icon: Repeat,
                benefits: ["Post-treatment check-ins", "Diet/Care sheet delivery", "Re-visit reminders"]
              },
              {
                title: "Google Review Collection",
                desc: "Transform happy patients into local SEO growth automatically.",
                icon: Star,
                benefits: ["Automated review requests", "Filter out negative feedback privately", "Boost local ranking"]
              },
              {
                title: "Process Optimization",
                desc: "Tailored consulting to fix specific operational bottlenecks in your clinic.",
                icon: Settings,
                benefits: ["Staff training workflows", "Inventory tracking basics", "Digital transition planning"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 border border-gray-700 p-6 rounded-2xl"
              >
                <div className="bg-gray-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-5 min-h-[40px]">{service.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-300">
                      <Check className="w-4 h-4 text-brand-primary mr-2 mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A hands-free process. We do the heavy lifting so you don't have to.</p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gray-100 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Assessment", desc: "We review your current chaos, find the gaps, and identify quick wins." },
                { step: "02", title: "Strategy", desc: "A tailored blueprint integrating exactly what your specific clinic needs." },
                { step: "03", title: "Implementation", desc: "We set up the software, configure WhatsApp, and format your templates." },
                { step: "04", title: "Optimization", desc: "We train your staff and monitor the systems to ensure continuous smooth operations." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-light border border-brand-primary text-brand-primary font-heading font-bold text-xl flex items-center justify-center mb-4 shadow-sm relative">
                    {step.step}
                    {i !== 3 && <ArrowRight className="md:hidden absolute -bottom-6 w-5 h-5 text-gray-300" />}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Select Your Plan</h2>
          <h3 className="font-heading text-3xl font-bold mt-2 mb-3">Simple, Transparent Pricing</h3>
          <p className="text-gray-500">Pick a plan to get started. No hidden onboarding fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {/* Starter */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Starter</span>
            <div className="my-2 mb-4">
              <span className="text-3xl font-black">₹2,000</span><span className="text-xs text-slate-400">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Appointment Booking Link</li>
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Basic Reminders</li>
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Google Review Prompts</li>
            </ul>
            <WhatsAppButton 
              text="Hi Clinispire, I'm interested in the Starter plan (₹2,000/mo) for my clinic. Please share details." 
              label="Choose Starter" 
              className="w-full !bg-slate-50 !text-slate-600 !font-bold py-3"
              isPill={false}
            />
          </div>

          {/* Growth - Highlighted */}
          <div className="bg-brand-primary p-6 rounded-2xl border-2 border-teal-300 flex flex-col transform md:scale-105 shadow-xl relative z-10">
            <div className="absolute top-0 right-5 -translate-y-1/2 bg-[#25D366] text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-sm">
              Most Popular
            </div>
            <span className="text-[10px] font-bold text-teal-100 uppercase tracking-tight">Growth</span>
            <div className="my-2 mb-4">
              <span className="text-3xl font-black text-white">₹5,000</span><span className="text-xs text-teal-200">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start text-sm text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 mt-1.5 shrink-0"></div> Everything in Starter</li>
              <li className="flex items-start text-sm text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 mt-1.5 shrink-0"></div> Shared WhatsApp Inbox</li>
              <li className="flex items-start text-sm text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 mt-1.5 shrink-0"></div> Automated Post-Care Follow-ups</li>
              <li className="flex items-start text-sm text-white font-medium"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3 mt-1.5 shrink-0"></div> Staff Training Session</li>
            </ul>
            <WhatsAppButton 
              text="Hi Clinispire, I'm interested in the Growth plan (₹5,000/mo) for my clinic. Please share details." 
              label="Go With Growth" 
              className="w-full !text-white !font-black !shadow-md py-3"
              isPill={false}
            />
          </div>

          {/* Premium */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Premium</span>
            <div className="my-2 mb-4">
              <span className="text-3xl font-black">₹10,000</span><span className="text-xs text-slate-400">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Everything in Growth</li>
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Custom Clinic Workflows</li>
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> priority Support & SLA</li>
              <li className="flex items-start text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-teal-200 mr-3 mt-1.5 shrink-0"></div> Quarterly Business Reviews</li>
            </ul>
            <WhatsAppButton 
              text="Hi Clinispire, I'm interested in the Premium plan (₹10,000/mo) for my clinic. Please share details." 
              label="Choose Premium" 
              className="w-full !bg-slate-50 !text-slate-600 !font-bold py-3" 
              isPill={false}
            />
          </div>
        </div>
      </section>

      {/* Why Clinics Choose Us */}
      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: Check, title: "Practical Solutions" },
              { icon: MedIcon, title: "Healthcare-Focused" },
              { icon: Users, title: "Personalized Setup" },
              { icon: TrendingUp, title: "Highly Affordable" },
              { icon: HeartPulse, title: "Better Patient Exp." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4">
                <div className="bg-white p-3 rounded-full shadow-sm mb-3">
                  <item.icon className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="font-heading font-medium text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 order-2 md:order-1 flex justify-center">
            <div className="w-48 h-48 md:w-full md:h-64 rounded-2xl overflow-hidden shadow-md">
              <img 
                src={founderImg} 
                alt="Raseb Mollah, Founder of Clinispire" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2">
            <h2 className="font-heading text-3xl font-bold mb-2">Meet The Founder</h2>
            <h3 className="text-xl text-brand-primary font-medium mb-4">Raseb Mollah</h3>
            <p className="text-gray-600 leading-relaxed italic mb-6">
              "I started Clinispire because I saw exceptional doctors struggling with terrible clinic management overhead. Healthcare shouldn't mean spending your evenings reading through WhatsApp logs or apologizing to patients for lost reports. We build the systems so you can focus entirely on your medical practice."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "What exactly does Clinispire do?",
                a: "We are an operational consultancy that configures smart digital tools (like appointment scheduling software and centralized WhatsApp systems) specifically for healthcare clinics to improve efficiency and the patient experience."
              },
              {
                q: "Do my staff or I need technical skills?",
                a: "Not at all. We handle the entire setup, configuration, and implementation. We then train your staff on how to use these extremely simple tools in their daily workflow."
              },
              {
                q: "How long does it take to see results?",
                a: "Most clinics see a reduction in no-shows and an increase in Google reviews within the first 14 days of our systems going live."
              },
              {
                q: "Is our patient data secure?",
                a: "Yes. We use standard, compliant, established software providers globally recognized for data security. Clinispire primarily acts as the architect and systems integrator."
              },
              {
                q: "Do you work with brand new clinics?",
                a: "Absolutely. In fact, getting your digital infrastructure right from day one is much easier than fixing bad habits a year later."
              }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft background image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1600&auto=format&fit=crop" 
            alt="Warm doctor consultation" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">Ready To Build A Smarter Clinic?</h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 mb-8 inline-block text-left">
             <ul className="space-y-4 text-white font-medium">
               <li className="flex items-center"><Check className="text-brand-whatsapp mr-3 w-5 h-5" /> Automate your appointment follow-ups</li>
               <li className="flex items-center"><Check className="text-brand-whatsapp mr-3 w-5 h-5" /> Centralize patient communication</li>
               <li className="flex items-center"><Check className="text-brand-whatsapp mr-3 w-5 h-5" /> Grow your 5-star Google reputation</li>
               <li className="flex items-center"><Check className="text-brand-whatsapp mr-3 w-5 h-5" /> Eliminate manual front-desk chaos</li>
               <li className="flex items-center"><Check className="text-brand-whatsapp mr-3 w-5 h-5" /> Give patients a premium experience</li>
             </ul>
          </div>
          <br />
          <WhatsAppButton 
            text="Hi Clinispire, I would like to get my Free Clinic Assessment." 
            label="💬 Get My Free Clinic Assessment" 
            isPill 
            className="text-xl px-10 py-5 shadow-2xl hover:scale-105" 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Clinispire Logo" className="h-10 w-auto object-contain object-left" />
              <span className="text-brand-primary text-2xl font-bold tracking-tight">Clinispire</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-6 max-w-sm font-medium">
              Smarter Systems. Better Patient Experience. We help specialized healthcare providers streamline their clinic operations.
            </p>
            <div className="flex gap-4 float">
              <a href="#" className="hover:text-white transition-colors text-xs font-semibold tracking-wider text-slate-500 uppercase">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors text-xs font-semibold tracking-wider text-slate-500 uppercase">Instagram</a>
              <a href="#" className="hover:text-white transition-colors text-xs font-semibold tracking-wider text-slate-500 uppercase">Facebook</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#0E7C86] mb-4">Services</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>Appointment Systems</li>
              <li>WhatsApp Integration</li>
              <li>Patient Follow-Ups</li>
              <li>Reputation Growth</li>
              <li>Process Optimization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#0E7C86] mb-4">Contact</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>clinispire@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-[10px] text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Clinispire Operations Consulting. Smarter Clinics, Faster Growth.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating Sticky WhatsApp Button for Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
        <div className="bg-white px-3 py-2 rounded-lg shadow-xl text-xs font-bold border border-gray-100 flex items-center space-x-2">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           <span>Raseb is online</span>
        </div>
        <a 
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Clinispire, I would like to get my Free Clinic Assessment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  );
}

// Simple FAQ Accordion Component
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden bg-brand-light"
      >
        <div className="p-5 text-sm text-gray-600 border-t border-gray-100">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

