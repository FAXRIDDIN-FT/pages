import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Link to="/">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Online Market</h2>
          </Link>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Eng yaxshi mahsulotlar, foydali retseptlar va foydalanuvchilar platformasi.
          </p>
          <div className="flex gap-4 text-xl text-gray-500 mt-2">
            <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 transition cursor-pointer" />
            <FaTelegram className="hover:text-sky-500 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Sahifalar</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-indigo-600 transition">Bosh sahifa</Link></li>
            <li><Link to="/recipes" className="hover:text-indigo-600 transition">Retseptlar</Link></li>
            <li><Link to="/users" className="hover:text-indigo-600 transition">Foydalanuvchilar</Link></li>
            <li><Link to="/posts" className="hover:text-indigo-600 transition">Postlar</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Aloqa</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><strong>Email:</strong> info@myapp.uz</li>
            <li><strong>Telefon:</strong> +998 50 250 62 60</li>
            <li><strong>Manzil:</strong> Toshkent shahri</li>
            <li><strong>Ish vaqti:</strong> 07:00 - 20:00</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Yangiliklarga obuna bo‘ling</h3>
          <p className="text-sm text-gray-600 mb-3">Eng so‘nggi yangiliklar va yangilanishlar haqida xabardor bo‘ling.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Emailingizni kiriting"
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white text-sm py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Obuna bo‘lish
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-12 text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-indigo-800">Online Market</span>. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}

export default Footer
