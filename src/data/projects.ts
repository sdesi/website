// Типы блоков проекта
export type ProjectBlock =
  | {
      type: "text";
      title?: string;
      body: string;
    }
  | {
      type: "image";
      title?: string;
      caption?: string;
      src: string; // путь к картинке относительно public/
    }
  | {
      type: "wide-image";
      title?: string;
      caption?: string;
      src: string;
      side?: "left" | "right" | "center"; // направление смещения широкого блока
    };

// Тип проекта
export type Project = {
  slug: string;
  title: string;
  short: string;
  cover: string;
  categories: string[];
  blocks?: ProjectBlock[];
};

// -----------------------------------------
// ДВА ПРИМЕРНЫХ ПРОЕКТА
// -----------------------------------------

export const projects: Project[] = [
  {
    slug: "detali",
    title: "ЖК «Детали»",
    short: "Концепт; дизайн и прототипирование; стандарт оформления",
    cover: "img/detali/60-optimized.webp",
    categories: ["Графический дизайн", "Навигация"],

    blocks: [
      {
        type: "text",
        title: "Жилой комплекс «Детали» — проект бизнес-лайт класса в одной из самых перспективных частей Новой Москвы.",
        body:
          "В рамках проекта появится многофункциональный комплекс и два детских сада."
      },

      {
        type: "wide-image",
        title: "",
        caption: "Ландшафтное бюро «Вьюга» разрабатывало внутреннее наполнение закрытой дворовой территории, а мы помогали им, чтобы жителям комплекса было удобно и понятно перемещаться по ней.",
        src: "img/detali/0.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/1.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/3.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "Элементы навигации должны были быть долговечными и вандалоустойчивыми, поэтому мы выбрали нержавеющую сталь. Ее отражающие свойства позволяют поддерживать окружающие навигационные элементы цвета.",
        src: "img/detali/4.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "Подготовили подробное руководство использования навигации. В ней описаны конструктивные особенности, принципы построения навигационных носителей и расширения состава элементов.",
        src: "img/detali/5.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/7.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "Основные навигационные элементы состоят из металлических листов с печатью и перфорацией, держащихся на столбах, окрашенных в цвет секции ЖК.",
        src: "img/detali/8.webp",
        side: "center"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/9.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/10.gif",
        side: "center"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/detali/11.webp",
        side: "left"
      },

      {
        type: "text",
        title: "IKSA.AGENCY",
        body:
          "Арт-дир: Сергей Наумов"
      },
    ]
  },

  {
    slug: "localych",
    title: "Локалыч",
    short: "Мобильное приложение и сайт",
    cover: "img/localych/0.webp",
    categories: ["Графический дизайн", "Навигация"],

    blocks: [
      {
        type: "text",
        title: "Локалыч — удобное решение для удалённого управления доступом к парковкам и дворовым территориям.",
        body:
          "Компания предлагает бесплатную модернизацию существующих шлагбаумов для дворовых территорий и офисных парковок."
      },

      {
        type: "wide-image",
        title: "",
        caption: "Клиенты получают простой доступ к шлагбаумам с телефонов, не теряя возможность открывать закрытую территорию с брелка. Мы разработали дизайн приложения и сделали небольшой лендинг для промокомпании.",
        src: "img/localych/1.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/localych/2.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "Цветовая гамма поддерживает бренд, и наследуется от цвета шлагбаумов и прочих ограничительных конструкций.",
        src: "img/localych/3.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "Все основные функции приложения, и вся важная информация доступны с главного экрана.",
        caption: "",
        src: "img/localych/4.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/localych/5.mp4",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/localych/6.webp",
        side: "left"
      },

      {
        type: "wide-image",
        title: "",
        caption: "Основные навигационные элементы состоят из металлических листов с печатью и перфорацией, держащихся на столбах, окрашенных в цвет секции ЖК.",
        src: "img/localych/7.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/localych/8.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "У приложения есть функция оповещения других пользователей о проблемах с их машиной.",
        caption: "Если автомобиль зарегистрирован в системе владельцу можно отправить сообщение об аварии на парковке или просьбе убрать машину если она мешает.",
        src: "img/localych/9.webp",
        side: "center"
      },

      {
        type: "wide-image",
        title: "Для проекта так же сделали небольшой лендинг с формой для заявки, где коротко рассказывается о преимуществах системы перед традиционными способами доступа, способах модернизации существующих систем.",
        caption: "",
        src: "img/localych/10.webp",
        side: "right"
      },

      {
        type: "wide-image",
        title: "Модернизировать шлагбаум в своем дворе просто, пользоваться системой еще проще.",
        caption: "",
        src: "img/localych/11.webp",
        side: "center"
      },

      {
        type: "wide-image",
        title: "",
        caption: "",
        src: "img/localych/12.webp",
        side: "center"
      },

      {
        type: "text",
        title: "IKSA.AGENCY",
        body:
          "Арт-дир: Сергей Наумов"
      },
    ]
  },

  {
    slug: "viksa-city",
    title: "Городской портал Выксы",
    short: "Редизайн структуры и навигации портала.",
    cover: "projects/viksa/cover.png",
    categories: ["ui", "ux", "web"],

    blocks: [
      {
        type: "text",
        title: "Задача",
        body: "Перепроектировать портал, улучшив структуру разделов и удобство навигации."
      },

      {
        type: "image",
        title: "Сетка разделов",
        caption: "Карточная система группировки контента.",
        src: "projects/viksa/grid-1.png"
      },

      {
        type: "wide-image",
        title: "Горизонтальный превью-блок",
        caption: "Большая схема, выходящая за края экрана.",
        src: "projects/viksa/wide-1.png",
        side: "left"
      },

      {
        type: "text",
        title: "Вывод",
        body: "После редизайна структура стала проще, а путь пользователя — короче и понятнее."
      }
    ]
  }
];
