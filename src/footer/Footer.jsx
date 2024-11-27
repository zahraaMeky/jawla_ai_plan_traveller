import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="py-12 px-8 bg-orange-50">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 mr-14">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Website Logo" className="h-auto w-32" />
          </div>
          <p>تطبيق جولة: منصّة مبتكرة تسهّل حجز الرحلات السياحية واستكشاف أفضل الوجهات بتجربة مريحة وشاملة للمسافرين.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#DF6951] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="bg-[#DF6951] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <IoLogoTwitter className="text-xl" />
            </a>
            <a href="#" className="bg-[#DF6951] text-white rounded-full h-10 w-10 flex items-center justify-center">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links Section 1 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">روابــط سـريعــة</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="leading-normal">الـرئيسـيـة</Link>
            </li>
            <li>
              <Link to="/about" className="leading-normal">عــن جــولة</Link>
            </li>
            <li>
              <Link to="/contact" className="leading-normal">تـواصــل معنـــا</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section 2 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">الخـدمــات</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/tours" className="leading-normal">الجــولات السياحيــة</Link>
            </li>
            <li>
              <Link to="/hotels" className="leading-normal">حجــز الفنــادق</Link>
            </li>
            <li>
              <Link to="/flights" className="leading-normal">حجــوزات الطيــران</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">تــواصـل معنــا</h3>
          <ul className="space-y-3">
            <li className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-[#DF6951]" />
              <p>123 الرياض، المملكة العربية السعودية</p>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhone className="text-[#DF6951]" />
              <p className="text-right" dir="rtl">  ٥٥٥ ١٢٣ ٤٥٦ ٩٦٦+</p>

              </li>
            <li className="flex gap-2 items-center">
              <MdEmail className="text-[#DF6951]" />
              <p>info@jawlatravel.com</p>
            </li>
          </ul>
        </div>
      </div>

{/* Copyright Section */}
    <div className="mt-8 border-t border-[#DF6951] pt-4 text-center">
      <p className="text-sm">© 2024 جولة. جميع الحقوق محفوظة.</p>
    </div>

    </div>
  );
};
