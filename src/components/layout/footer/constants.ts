import {  Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  },
};

export const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];