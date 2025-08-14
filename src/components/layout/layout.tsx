import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children?: React.ReactNode;
}

/**
 * MainLayout Component
 *
 * This component serves as the primary layout wrapper for the entire application.
 * It implements the Single Responsibility Principle by focusing solely on layout structure
 * and follows the Open/Closed Principle by being extensible through props.
 *
 * Responsibilities:
 * - Provide consistent page structure
 * - Include global navigation (Header)
 * - Include global footer
 * - Handle toast notifications
 * - Provide outlet for route content
 */
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Global Header - Fixed positioning for consistent navigation */}
      <Header />

      {/* Main Content Area - Flex-grow to fill available space */}
      <main className="flex-grow pt-16">
        {/* Content Outlet - Renders the current route component */}
        {children || <Outlet />}
      </main>

      {/* Global Footer - Always at bottom */}
      <Footer />

      {/* Toast Notifications - Global notification system */}
      <Toaster />
    </div>
  );
};

export default MainLayout;
