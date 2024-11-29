import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/raul_blanco.jpg";
import user2 from "../assets/profile-pictures/andrea_ayala.jpg";
import user3 from "../assets/profile-pictures/edmundo_acevedo.jpg";
import user4 from "../assets/profile-pictures/sylvain_edelberg.jpg";
import user5 from "../assets/profile-pictures/edith_gonzalez.jpg";
import user6 from "../assets/profile-pictures/cesar_vilchis.jpg";

export const navItems = [
  { label: "Inicio", href: "#HeroSection" },
  { label: "Características", href: "#FutureSection" },
  { label: "Precios", href: "#Pricing" },
  { label: "Testimonios", href: "#Testimonials" },
  { label: "Contacto", href: "#Workflow" },
];

export const testimonials = [
  {
    user: "Raúl Blanco García",
    company: "Grupo Bimbo",
    image: user1,
    text: "Gran conocimiento tecnico y capacidad para adoptar nuevas tecnologías y escenarios complicados. Resultados robustos y Gran atención al detalle logrados en tiempo record.",
  },
  {
    user: "Pilar Andrea Ayala Torres",
    company: "Bruria Alta Costura",
    image: user2,
    text: "No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y la capacidad de resolución de problemas del equipo fueron fundamentales para hacer realidad nuestra visión.",
  },
  {
    user: "Edmundo Acevedo ",
    company: "Moldex",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Su atención al detalle y su compromiso con la excelencia son dignos de elogio. Los recomendaría sin dudarlo a cualquiera que busque un servicio de primera.",
  },
  {
    user: "Sylvain Edelberg",
    company: "Grupo Bimbo",
    image: user4,
    text: "Trabajar con el equipo de la empresa XYZ fue un punto de inflexión para nuestro proyecto. Su atención a los detalles y sus soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que creíamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!",
  },
  {
    user: "Edith Gonzalez",
    company: "Nestlé",
    image: user5,
    text: "Estoy sorprendido por el nivel de profesionalismo y dedicación que demostró el equipo. Fueron capaces de superar nuestras expectativas y entregar resultados extraordinarios.",
  },
  {
    user: "César Vilchis",
    company: "EDDA",
    image: user6,
    text: "El equipo hizo todo lo posible para garantizar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero volver a trabajar con ellos en el futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Chatbots para cualquier plataforma",
    description:
      "Construimos chatbots para tu negocio en todas las plataformas como Messenger, Whatsapp, Telegram, SMS, Llamadas, Instagram, Teams.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidad móvil con múltiples plataformas",
    description:
      "Creamos aplicaciones móviles multiplataforma porque sabemos que tu negocio necesita estar en todas partes.",
  },
  {
    icon: <ShieldHalf />,
    text: "Página Web",
    description:
      "Creamos la página web que necesitas para tu negocio, con las funcionalidades que más necesitas.",
  },
  {
    icon: <BatteryCharging />,
    text: "Aplicación de VR, AR y realidad mixta",
    description:
      "Podemos construir las aplicaciones de realidad aumentada, realidad virtual o realidad mixta que necesites",
  },
  {
    icon: <PlugZap />,
    text: "Colaboraciones",
    description:
      "Colaboramos con tus equipos para lograr la rápida finalización de tus proyectos",
  },
  {
    icon: <GlobeLock />,
    text: "Analista de datos, soluciones de IA o ciencia de datos",
    description:
      "Podemos ayudarle con asesoramiento o tareas de un científico de datos, analista de datos o ingeniero de IA.",
  },
];

export const checklistItems = [
  {
    title: "La fusión de códigos se vuelve sencilla",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Revisa el código sin preocupaciones",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Asistencia de IA para reducir el tiempo",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Comparte tu trabajo en minutos",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento de los usuarios.",
  },
];

export const pricingOptions = [
  {
    title: "Producto Mínimo Viable Rápido",
    price: "$2000-10000",
    features: [
      "Tener reuniones (hasta 3) sobre el producto",
      "Construir un ejemplo del proyecto",
      "Proporcionar el plan del proyecto por fechas y entregables.",
      "Obtenga una cotización para el proyecto o por partes",
      "Mantenemos el precio por 15 días",
    ],
  },
  {
    title: "Proyecto",
    price: "Dendiendo del proyecto",
    features: [
      "Realizar reuniones sobre el producto y los entregables del proyecto.",
      "Proporcionar manual de usuario y código si se especifica",
      "Proporcionar el plan del proyecto por fechas y entregables.",
      "Pago contra entrega",
      "12 meses de garantía",
    ],
  },
  {
    title: "Horas de servicio",
    price: "$1000/8 horas",
    features: [
      "Centrarse en las horas de servicio",
      "Presentaciones y reuniones",
      "Informes de horas de servicio",
      "Centrarse en los resultados",
      "Modo privado",
      "Pago contra entrega",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.facebook.com/ethigssolutions/", text: "Facebook" },
  { href: "https://www.instagram.com/ethigssolutions/", text: "Instagram" },
  { href: "https://api.whatsapp.com/send/?phone=527297123275&text&type=phone_number&app_absent=0", text: "Whatsapp" },
  { href: "https://www.linkedin.com/in/jesusehernandezmendoza/", text: "Linkedin" },
 // { href: "", text: "Youtube" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "http://www.google.com.mx", text: "Jobs" },
];

export const headers_text = [
  { header: "Ethigs solutions", text: "Transforme el futuro de su negocio con tecnología innovadora y sostenible", text2:"En Ethigs Solutions, ayudamos a empresas de todos los tamaños a evolucionar hacia un futuro más conectado y eficiente. Ofrecemos soluciones tecnológicas avanzadas, diseñadas para optimizar sus procesos, mejorar la experiencia de sus clientes y apoyar su crecimiento de forma sostenible.", text3: "Cotizar" , text4:"" ,text5:"" },
  { header: "Características", text: "Construye fácilmente ", text2:"tu proyecto", text3: "" , text4:"" , text5:""},
  { header: "Precios", text: "", text2:"", text3: "" , text4:"", text5:""},
  { header: "Que esta diciendo la gente", text: "", text2:"", text3: "", text4:"" , text5:""},
  { header: "Llene nuestro formulario de contacto ", text: "para recibir una cotización.", text2: "Nombre", text3:"Correo", text4: "Mensaje", text5:"Enviar" },
];