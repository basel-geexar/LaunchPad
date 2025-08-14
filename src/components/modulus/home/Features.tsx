import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Shield, Globe, Database, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Write maintainable, scalable code with our modern development tools and best practices.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Create stunning user interfaces with our comprehensive design system and components.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Build responsive applications that work perfectly on all devices and screen sizes.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimize performance with our advanced caching and optimization techniques.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security features to protect your data and users.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our global CDN and edge computing infrastructure.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Database,
    title: 'Smart Analytics',
    description: 'Gain insights with powerful analytics and real-time monitoring tools.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with built-in collaboration and project management tools.',
    gradient: 'from-rose-500 to-orange-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Modern Development
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-gray-200 to-gray-200 rounded-full overflow-hidden"
                  whileHover={{ scaleX: 1.05 }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full origin-left`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the power of modern development?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Explore All Features
            <motion.div
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}