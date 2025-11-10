"use client"

import { motion } from "framer-motion";
import IEEEInteractiveCanvas from "@/components/ui/homeScreen";
import { Award, BookOpen, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { useRouter } from "next/navigation";


const features = [
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with over 400,000 members worldwide across 160 countries, building relationships that last a lifetime.",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access IEEE Xplore Digital Library with millions of technical documents, courses, and educational content.",
    color: "from-purple-500 to-purple-600",
    delay: 0.2,
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Enhance your career with certifications, conferences, workshops, and leadership opportunities.",
    color: "from-indigo-500 to-indigo-600",
    delay: 0.3,
  },
];

const stats = [
  { value: "400", suffix: "K+", label: "Global Members", delay: 0.1 },
  { value: "160", suffix: "+", label: "Countries", delay: 0.2 },
  { value: "1300", suffix: "+", label: "Conferences", delay: 0.3 },
  { value: "5", suffix: "M+", label: "Publications", delay: 0.4 },
];


export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animation triggers only once
    threshold: 0.2,    // 20% visible
  });

  const router = useRouter();

  return (
    <div className="relative w-full min-h-[calc(100dvh-60px)] overflow-hidden">
      <IEEEInteractiveCanvas />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-5xl mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent py-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Join IEEE?
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IEEE offers unparalleled opportunities for professional development, networking, and technical advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={clsx("text-center p-8 h-full border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow relative overflow-hidden group", `z-[${10 - index}]`)}>
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="space-y-4 relative z-10">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <h3 className="text-2xl">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden" ref={ref}>
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-5xl mb-2 max-sm:text-[32px]"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={Number(stat.value)}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </motion.div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50" />

        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-5xl mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent py-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              Ready to Advance Your Career?
            </motion.h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join IEEE today and become part of a global community that's shaping the future of technology.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl px-8 py-6 text-lg"
                onClick={() => router.push('contact')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
