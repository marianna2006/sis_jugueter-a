"use client";
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";

import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function AppFooter() {
  return (
    <Footer className="bg-secondary">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-5 px-10 py-10 md:grid-cols-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <FooterTitle title="Contacto Web" className="text-2xl font-bold" />
            <div className="flex flex-col items-start gap-3 mt-2 text-testSecondary text-xl">
              <p className="text-blue text-xl">Venta WhatsApp</p>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <BsTelephone className="w-5 h-5" />
                +51 936 585 634
              </a>
              <p className="text-testSecondary text-xl">Correo Electrónico</p>
              <a href="#" className="flex items-center gap-2 hover:underline">
                <BsEnvelope className="w-5 h-5" />
                info@toyshouse.pe
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <FooterTitle title="Conócenos" className="text-2xl font-bold" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="flex items-center text-xl">
                Quiénes somos
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Contacto
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Blog
              </FooterLink>
              
              <h1 className="text-testSecondary text-xl font-semibold pt-3">Boletín informátivo</h1>
              <div className="flex items-center w-full max-w-ms">
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  className="w-40 px-2 py-1.5 text-sm rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                />
                <button className="bg-gradient-verde hover:bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-r-xl">
                  Suscribirse
                </button>
              </div>
            </FooterLinkGroup>
          </div>
          <div className="flex flex-col gap-4">
            <FooterTitle title="Información" className="text-2xl font-bold" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="flex items-center text-xl">
                Términos &amp; Condiciones
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Política de despachos
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Venta Mayorista
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Ventas Institucionales
              </FooterLink>
              <FooterLink href="#" className="flex items-center text-xl">
                Libro de Reclamaciones
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div className="flex flex-col ">
            <FooterTitle title="Tiendas" className="text-2xl font-bold pb-2" />
            <h1 className="text-testSecondary text-xl font-semibold">Pucallpa</h1>
            <a
              href="#"
              className="text-testSecondary text-xl flex items-center pb-3 hover:underline"
            >
              Jr. Coronel Portillo 1056, Callería
            </a>
            <h1 className="text-testSecondary text-xl font-semibold">Lima</h1>
            <a
              href="#"
              className="text-testSecondary text-xl flex items-center pb-3 hover:underline"
            >
              Av. Pardo y Aliaga 621, San Isidro
            </a>
            <h2 className="text-testSecondary text-xl">
              Horarios de atención:
            </h2>
            <p className="text-testSecondary text-xl">
              Lunes a Viernes 10:00 a 19:00 horas
            </p>
            <p className="text-testSecondary text-xl">
              Sábado 10:00 a 18:00 horas
            </p>
          </div>
        </div>
        <div className="w-full bg-primary text-white px-4 py-6 sm:flex sm:items-center sm:justify-between text-white">
          <FooterCopyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} className="text-white" />
            <FooterIcon href="#" icon={BsInstagram} className="text-white" />
            <FooterIcon href="#" icon={BsTwitter} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
