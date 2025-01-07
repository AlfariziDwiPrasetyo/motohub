import { FaMotorcycle } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { BiSupport, BiTagAlt } from "react-icons/bi";

export const navMenu = [
  { name: "Beranda", url: "/" },
  { name: "Tentang", url: "/" },
  { name: "Produk", url: "/produk" },
  { name: "Benefit", url: "/" },
  { name: "Kontak", url: "/kontak" },
  { name: "Admin", url: "/admin" },
];
export const adminNavMenu = [{ name: "Add Motor", url: "/add" }];

export const mockupProduct = [
  {
    id: 1,
    name: "Yamaha NMAX 2022",
    description:
      "Yamaha NMAX bekas dengan kondisi seperti baru, servis rutin, dan kilometer rendah.",
    price: 32000000,
    category: "Motor Matic",
    createdAt: "2024-12-31T10:00:00.000Z",
  },
  {
    id: 2,
    name: "Honda Vario 125 2021",
    description: "Honda Vario 125 dengan performa mesin prima dan bodi mulus.",
    price: 22000000,
    category: "Motor Matic",
    createdAt: "2024-12-30T15:30:00.000Z",
  },
  {
    id: 3,
    name: "Suzuki GSX-R150 2020",
    description:
      "Motor sport Suzuki GSX-R150 dengan tenaga maksimal, cocok untuk pecinta kecepatan.",
    price: 26000000,
    category: "Motor Sport",
    createdAt: "2024-12-29T08:45:00.000Z",
  },
];

export const benefitData = [
  {
    id: 1,
    title: "Pilihan Terlengkap",
    description:
      "Temukan berbagai jenis motor, mulai dari motor sport, matic, hingga motor klasik.",
    icon: FaMotorcycle,
  },
  {
    id: 2,
    title: "Transaksi Aman dan Mudah",
    description:
      "Nikmati pengalaman membeli dan menjual motor dengan sistem transaksi yang terjamin keamanannya",
    icon: AiFillLock,
  },
  {
    id: 3,
    title: "Penawaran Eksklusif & Harga Kompetitif",
    description:
      "Dapatkan akses ke promo menarik dan penawaran eksklusif dari penjual terpercaya",
    icon: BiTagAlt,
  },
  {
    id: 4,
    title: "Layanan Pelanggan 24/7",
    description:
      "Kami siap membantu Anda kapan saja dengan layanan pelanggan yang responsif dan ramah, memastikan pengalaman Anda tetap mulus.",
    icon: BiSupport,
  },
];
