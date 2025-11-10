"use client";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function BreadcrumbNav({ paths }) {
  return (
    <Breadcrumb
      aria-label="Navegación"
      className="text-2xl font-semibold text-[#007C4E] bg-[#F1F5FC] px-6 py-3 rounded-xl shadow-md"
    >
      <BreadcrumbItem icon={HiHome}>
        <Link to="/" className="hover:text-green-600 transition">
          Inicio
        </Link>
      </BreadcrumbItem>

      {paths.map((path, index) => (
        <BreadcrumbItem key={index}>
          {path.link ? (
            <Link
              to={path.link}
              className="hover:text-green-600 transition"
            >
              {path.label}
            </Link>
          ) : (
            path.label
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
