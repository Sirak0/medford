import Logiq7I from "../images/page/items/Logiq7/1logiq7.png";
import Logiq7II from "../images/page/items/Logiq7/logiq7.png";
import Logiq7video from "../images/page/items/Logiq7/logiq7video.mp4";
import datchik1 from "../images/page/items/Logiq7/sensors/datchik3.png";
import datchik2 from "../images/page/items/Logiq7/sensors/datchik2.png";
import datchik3 from "../images/page/items/Logiq7/sensors/datchik1.png";
import option1 from "../images/page/items/Logiq7/options/option1.png";
import option2 from "../images/page/items/Logiq7/options/option2.png";
import option3 from "../images/page/items/Logiq7/options/option3.png";
import option4 from "../images/page/items/Logiq7/options/option4.png";
import printer from "../images/page/items/Logiq7/devices/printer.png";
import holder from "../images/page/items/Logiq7/devices/holder.png";
import usbs from "../images/page/items/Logiq7/devices/usb.png";
import BrandLogo from "../images/main/brandlogo.svg";

const items = [
  {
    id: 1,
    name: "GE Logiq 7",
    description:
      "УЗИ Аппарат GE Logiq 7 — полностью цифровая ультразвуковая система GE Healthcare высокого класса. Базируясь на современной технологии цифрового кодированного ультразвука, ультразвуковой аппарат Logiq 7 обеспечивает сканирование с высокой частотой на большой глубине в режиме второй тканевой гармоники.",
    mainImage: Logiq7I,
    brandLogo: BrandLogo,
    price: "57 000",
    rating: 4.5,
    nutrition: "100~240V AC, 50/60 Hz",
    sizes: "75 мм х 361 мм х 357 мм Высота 75 мм",
    weight: "6,5 кг (с аккумуляторами и блоком 4D Mindray M7)",
    display: "15-дюймовый жидкокристаллический дисплей высокого разрешения",
    platform: "Windows XP",
    color: "Цветовое доплеровское картирование",
    pw: "Импульсно-волновой доплер",
    images: [Logiq7I, Logiq7II, Logiq7video],
    sensors: [
      {
        image: datchik3,
        name: "Конвекс. датчик 2-5 МГц",
        available: true,
      },
      {
        image: datchik1,
        name: "Внутриполостной датчик 5-13                Мгц",
        available: true,
      },
      {
        image: datchik3,
        name: "Линейный датчик 5-12 Мгц",
        available: false,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
    ],
    options: [
      {
        image: option1,
        name: "Режим кодированного контрастного изображения",
        available: true,
      },
      {
        image: option2,
        name: "Эластография",
        available: false,
      },
      {
        image: option4,
        name: "Видеопреобразо-ватель",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
    ],
    devices: [
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: holder,
        name: "Мобильная тележка",
        available: false,
      },
      {
        image: usbs,
        name: "Разветвитель на 3 порта",
        available: true,
      },
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: "GE Logiq 9",
    description:
      "СС Аппарат GE Logiq 7 — полностью цифровая ультразвуковая система GE Healthcare высокого класса. Базируясь на современной технологии цифрового кодированного ультразвука, ультразвуковой аппарат Logiq 7 обеспечивает сканирование с высокой частотой на большой глубине в режиме второй тканевой гармоники.",
    mainImage: Logiq7I,
    price: "53 000",
    brandLogo: BrandLogo,
    rating: 4,
    nutrition: "100~240V AC, 50/60 Hz",
    sizes: "75 мм х 361 мм х 357 мм Высота 75 мм",
    weight: "6,5 кг (с аккумуляторами и блоком 4D Mindray M7)",
    display: "15-дюймовый жидкокристаллический дисплей высокого разрешения",
    platform: "Windows XP",
    color: "Цветовое доплеровское картирование",
    pw: "Импульсно-волновой доплер",
    images: [Logiq7I, Logiq7II, Logiq7video],
    sensors: [
      {
        image: datchik3,
        name: "Конвекс. датчик 2-5 МГц",
        available: true,
      },
      {
        image: datchik1,
        name: "Внутриполостной датчик 5-13      Мгц",
        available: true,
      },
      {
        image: datchik3,
        name: "Линейный датчик 5-12 Мгц",
        available: false,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
    ],
    options: [
      {
        image: option1,
        name: "Режим кодированного контрастного изображения",
        available: true,
      },
      {
        image: option2,
        name: "Эластография",
        available: false,
      },
      {
        image: option4,
        name: "Видеопреобразо-ватель",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
    ],
    devices: [
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: holder,
        name: "Мобильная тележка",
        available: false,
      },
      {
        image: usbs,
        name: "Разветвитель на 3 порта",
        available: true,
      },
    ],
  },
  {
    id: 3,
    name: "GE Logiq 9",
    description:
      "СС Аппарат GE Logiq 7 — полностью цифровая ультразвуковая система GE Healthcare высокого класса. Базируясь на современной технологии цифрового кодированного ультразвука, ультразвуковой аппарат Logiq 7 обеспечивает сканирование с высокой частотой на большой глубине в режиме второй тканевой гармоники.",
    mainImage: Logiq7I,
    price: "58 000",
    brandLogo: BrandLogo,
    rating: 4,
    nutrition: "100~240V AC, 50/60 Hz",
    sizes: "75 мм х 361 мм х 357 мм Высота 75 мм",
    weight: "6,5 кг (с аккумуляторами и блоком 4D Mindray M7)",
    display: "15-дюймовый жидкокристаллический дисплей высокого разрешения",
    platform: "Windows XP",
    color: "Цветовое доплеровское картирование",
    pw: "Импульсно-волновой доплер",
    images: [Logiq7I, Logiq7II, Logiq7video],
    sensors: [
      {
        image: datchik3,
        name: "Конвекс. датчик 2-5 МГц",
        available: true,
      },
      {
        image: datchik1,
        name: "Внутриполостной датчик 5-13      Мгц",
        available: true,
      },
      {
        image: datchik3,
        name: "Линейный датчик 5-12 Мгц",
        available: false,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
    ],
    options: [
      {
        image: option1,
        name: "Режим кодированного контрастного изображения",
        available: true,
      },
      {
        image: option2,
        name: "Эластография",
        available: false,
      },
      {
        image: option4,
        name: "Видеопреобразо-ватель",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
    ],
    devices: [
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: holder,
        name: "Мобильная тележка",
        available: false,
      },
      {
        image: usbs,
        name: "Разветвитель на 3 порта",
        available: true,
      },
    ],
  },
  {
    id: 4,
    name: "GE Logiq 8",
    description:
      "СС Аппарат GE Logiq 7 —  GEой технологии цифрgiq 7 обеспечивает сканирование с высокой частотой на большой глубине в режиме второй тканевой гармоники.",
    mainImage: Logiq7I,
    brandLogo: BrandLogo,
    price: "62 000",
    rating: 4,
    nutrition: "100~240V AC, 50/60 Hz",
    sizes: "75 мм х 361 мм х 357 мм Высота 75 мм",
    weight: "6,5 кг (с аккумуляторами и блоком 4D Mindray M7)",
    display: "15-дюймовый жидкокристаллический дисплей высокого разрешения",
    platform: "Windows XP",
    color: "Цветовое доплеровское картирование",
    pw: "Импульсно-волновой доплер",
    images: [Logiq7I, Logiq7II, Logiq7video],
    sensors: [
      {
        image: datchik3,
        name: "Конвекс. датчик 2-5 МГц",
        available: true,
      },
      {
        image: datchik1,
        name: "Внутриполостной датчик 5-13      Мгц",
        available: true,
      },
      {
        image: datchik3,
        name: "Линейный датчик 5-12 Мгц",
        available: false,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
    ],
    options: [
      {
        image: option1,
        name: "Режим кодированного контрастного изображения",
        available: true,
      },
      {
        image: option2,
        name: "Эластография",
        available: false,
      },
      {
        image: option4,
        name: "Видеопреобразо-ватель",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
    ],
    devices: [
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: holder,
        name: "Мобильная тележка",
        available: false,
      },
      {
        image: usbs,
        name: "Разветвитель на 3 порта",
        available: true,
      },
    ],
  },
  {
    id: 5,
    name: "GE Logiq 9",
    description:
      "СС Аппарат GE Logiq 7 — полностью цифровая ультразвуковая система GE Healthcare высокого класса. Базируясь на современной технологии цифрового кодированного ультразвука, ультразвуковой аппарат Logiq 7 обеспечивает сканирование с высокой частотой на большой глубине в режиме второй тканевой гармоники.",
    mainImage: Logiq7I,
    brandLogo: BrandLogo,
    price: "43 000",
    rating: 4,
    nutrition: "100~240V AC, 50/60 Hz",
    sizes: "75 мм х 361 мм х 357 мм Высота 75 мм",
    weight: "6,5 кг (с аккумуляторами и блоком 4D Mindray M7)",
    display: "15-дюймовый жидкокристаллический дисплей высокого разрешения",
    platform: "Windows XP",
    color: "Цветовое доплеровское картирование",
    pw: "Импульсно-волновой доплер",
    images: [Logiq7I, Logiq7II, Logiq7video],
    sensors: [
      {
        image: datchik3,
        name: "Конвекс. датчик 2-5 МГц",
        available: true,
      },
      {
        image: datchik1,
        name: "Внутриполостной датчик 5-13      Мгц",
        available: true,
      },
      {
        image: datchik3,
        name: "Линейный датчик 5-12 Мгц",
        available: false,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
      {
        image: datchik2,
        name: "Кардио. датчик 1-4 Мгц",
        available: true,
      },
    ],
    options: [
      {
        image: option1,
        name: "Режим кодированного контрастного изображения",
        available: true,
      },
      {
        image: option2,
        name: "Эластография",
        available: false,
      },
      {
        image: option4,
        name: "Видеопреобразо-ватель",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
      {
        image: option3,
        name: "CW ‑ опция постоянно‑волнового доплера",
        available: true,
      },
    ],
    devices: [
      {
        image: printer,
        name: "Ч/Б Принтер",
        available: true,
      },
      {
        image: holder,
        name: "Мобильная тележка",
        available: false,
      },
      {
        image: usbs,
        name: "Разветвитель на 3 порта",
        available: true,
      },
    ],
  },
];

export default items;
