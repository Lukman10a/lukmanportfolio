import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Zap, Smartphone, Monitor, Database, Globe } from "lucide-react";
import Link from "next/link";
import EnhancedButton from "@/components/ui/EnhancedButton";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import SEO from "@/components/SEO";

export default function Pricing() {
  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Pricing data
  const pricingPlans = [
    {
      title: "Landing Page",
      price: "£500+",
      description: "Perfect for businesses looking to establish their online presence",
      icon: <Globe className="w-8 h-8 text-brand" />,
      features: [
        "1-page custom design",
        "Fully responsive",
        "Contact form integration",
        "Basic animations (if needed)",
        "SEO optimization",
        "Mobile-first approach"
      ],
      delivery: "5 – 10 days",
      popular: false
    },
    {
      title: "Multi-Page Website",
      price: "£1,200–£1,800",
      description: "Comprehensive website solution for growing businesses",
      icon: <Monitor className="w-8 h-8 text-brand" />,
      features: [
        "Up to 5–7 pages (Home, About, Services, Contact)",
        "Fully responsive design",
        "Blog or CMS integration (optional)",
        "Basic SEO setup",
        "Advanced animations",
        "Performance optimization"
      ],
      delivery: "10 – 20 days",
      popular: true
    },
    {
      title: "Admin Dashboard / Web App",
      price: "£2,000–£3,000",
      description: "Full-featured web application with advanced functionality",
      icon: <Database className="w-8 h-8 text-brand" />,
      features: [
        "Auth system (login/register)",
        "Data tables, charts, filters",
        "API integration",
        "Role-based access control",
        "Real-time updates",
        "Advanced security features"
      ],
      delivery: "10–20 days",
      popular: false
    },
    {
      title: "Mobile App (React Native)",
      price: "£1,500–£2,500",
      description: "Cross-platform mobile application for iOS and Android",
      icon: <Smartphone className="w-8 h-8 text-brand" />,
      features: [
        "Cross-platform (iOS + Android)",
        "Navigation & screens",
        "API integration",
        "Auth system + state management",
        "Push notifications",
        "App store deployment"
      ],
      delivery: "2–4 weeks",
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="Project Pricing - Frontend Development Services"
        description="Transparent pricing for custom web and mobile solutions. Professional frontend development services including landing pages, multi-page websites, admin dashboards, and mobile apps."
        type="website"
      />
      <div className="min-h-screen bg-[#f8f4ec] dark:bg-[#121212] pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            Project <span className="text-brand">Pricing</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for custom web and mobile solutions. Each project is tailored to your specific needs with clear deliverables and timelines.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-8 mb-16"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={itemVariants}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-brand scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  {plan.title}
                </h3>
                <div className="text-3xl font-bold text-brand mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  Delivery: {plan.delivery}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <EnhancedButton
                href="/contact"
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </EnhancedButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-black dark:text-white mb-6 text-center"
          >
            Important Notes
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-1 gap-6"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-1">
                    Flexible Pricing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    All prices and delivery times are starting points and may vary depending on project scope and specific requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-1">
                    Additional Services
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Hosting, domain, and third-party services (payment gateways, CMS platforms) are billed separately if needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-1">
                    Formal Proposal
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    A detailed proposal or quote will be sent after discussing your specific project requirements and goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-brand mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-1">
                    Project Timeline
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Delivery times are estimates and may vary based on project complexity and client feedback cycles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom solution that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <EnhancedButton 
                href="/contact" 
                variant="primary"
              >
                Get a Custom Quote
              </EnhancedButton>
              <EnhancedButton 
                href="/projects" 
                variant="outline"
              >
                View My Work
              </EnhancedButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
} 