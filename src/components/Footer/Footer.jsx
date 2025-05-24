import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 mt-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 max-[640px]:grid-cols-1 max-[768px]:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link to="/">
                   <h2 className="text-white text-xl font-bold mb-4">MyApp</h2>
          </Link>
 
          <p className="text-sm mb-4">
            Eng yaxshi mahsulotlar, foydali retseptlar, foydalanuvchilar va postlar platformasi.
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTelegram className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Mahsulotlar</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Smartfonlar</a></li>
            <li><a href="#" className="hover:text-white">Laptoplar</a></li>
            <li><a href="#" className="hover:text-white">Aksessuarlar</a></li>
            <li><a href="#" className="hover:text-white">Yangiliklar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Sahifalar</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Recipe</a></li>
            <li><a href="#" className="hover:text-white">User</a></li>
            <li><a href="#" className="hover:text-white">Post</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Aloqa</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@myapp.uz</li>
            <li>Telefon: +998 90 123 45 67</li>
            <li>Manzil: Toshkent shahri</li>
            <li>Ish vaqti: 09:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500 max-[400px]:text-[10px]">
         {new Date().getFullYear()} MyApp. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}

export default Footer
