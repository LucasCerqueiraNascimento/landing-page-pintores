"use client"

import type React from "react"
import { useState } from "react"
import { Inter } from 'next/font/google'
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
children,
}: {
children: React.ReactNode
}) {
const [language, setLanguage] = useState("en")

const companyDesc = {
  en: "Transforming spaces with quality and professionalism since 2005.",
  pt: "Transformando espaços com qualidade e profissionalismo desde 2005.",
}

return (
  <html lang={language}>
    <body className={`${inter.className} bg-purple-900`}>
      <div className="min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-transparent">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
                >
                  Zoom AI painting assistant
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/admin" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Zoom contractors{" "}
                  <span className="block text-xs text-gray-400 mt-1">powered by colorcrewconnect</span>
                </h3>
                <div className="mb-4">
                  <div className="relative inline-block text-left">
                    <div className="group">
                      <button
                        type="button"
                        className="inline-flex justify-center items-center w-16 px-2 py-1 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none"
                      >
                        <span className="mr-1">{language.toUpperCase()}</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-1 w-16 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          <button
                            className="block w-full px-2 py-1 text-sm text-white hover:bg-gray-700"
                            role="menuitem"
                            onClick={() => setLanguage("en")}
                          >
                            EN
                          </button>
                          <button
                            className="block w-full px-2 py-1 text-sm text-white hover:bg-gray-700"
                            role="menuitem"
                            onClick={() => setLanguage("pt")}
                          >
                            PT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{language === "en" ? companyDesc.en : companyDesc.pt}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{language === "en" ? "Services" : "Serviços"}</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Residential Painting" : "Pintura Residencial"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Commercial Painting" : "Pintura Comercial"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Specialized Painting" : "Pintura Especializada"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Textures & Effects" : "Texturas e Efeitos"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Waterproofing" : "Impermeabilização"}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{language === "en" ? "Quick Links" : "Links Rápidos"}</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Home" : "Início"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "About Us" : "Sobre Nós"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Portfolio" : "Portfólio"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Contact" : "Contato"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {language === "en" ? "Blog" : "Blog"}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{language === "en" ? "Contact" : "Contato"}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 mt-0.5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-400">(11) 1234-5678</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 mt-0.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="text-gray-400">contact@pinturaspro.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 mt-0.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-400">
                      123 Example Ave, District
                      <br />
                      São Paulo - SP, 00000-000
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
              © 2025 Zoom contractors. {language === "en" ? "All rights reserved." : "Todos os direitos reservados."}
            </div>
          </div>
        </footer>
      </div>
    </body>
  </html>
)
}