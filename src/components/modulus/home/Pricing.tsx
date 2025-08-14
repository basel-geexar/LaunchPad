import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals and small projects',
    features: [
      '5 Projects',
      '10GB Storage',
      'Community Support',
      'Basic Analytics',
      'SSL Certificate',
      'Mobile Responsive',
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Professional',
    price: 29,
    period: 'month',
    description: 'Ideal for growing businesses and teams',
    features: [
      '50 Projects',
      '100GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Domain',
      'Team Collaboration',
      'API Access',
      'Backup & Recovery',
    ],
    cta: 'Start Trial',
    popular: true,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited Projects',
      '1TB Storage',
      '24/7 Premium Support',
      'Custom Analytics',
      'White-label Solution',
      'Advanced Security',
      'Custom Integrations',
      'Dedicated Manager',
      'SLA Guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-500 to-pink-600',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
          
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white p-1 rounded-lg shadow-md"
          >
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
              Annual
            </button>
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
              Save 20%
            </Badge>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`p-8 h-full bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full py-4 text-lg font-medium ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.popular && <Zap className="h-5 w-5 mr-2" />}
                    {plan.cta}
                  </Button>
                </motion.div>

                {/* Background Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-full transform translate-x-16 -translate-y-16`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            Contact Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}