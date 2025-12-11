export type ProjectBlock =
  | {
      type: "text";
      title?: string;
      body?: string; // можно блок только с заголовком
    }
  | {
      type: "image";
      title?: string;
      caption?: string;
      src: string;

      // по умолчанию — center (обычная картинка в колонке)
      side?: "left" | "right" | "center";

      // только для center-картинок:
      // square — высота = var(--project-image-height)
      // auto   — высота по содержимому
      height?: "square" | "auto";
    }
  | {
      type: "wide-video";
      title?: string;
      caption?: string;
      src: string;
      // логика такая же, как у wide-картинок:
      // left/right — выступающий, center — «широкий, но без вылета»
      side?: "left" | "right" | "center";
    }
  | {
      type: "spacer"; // пустой разделитель между блоками
      size?: "small" | "medium" | "large"; // можно накинуть разные отступы
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
    slug: "культура",
    title: "Коллекция «КУЛЬТУРНАЯ СТОЛИЦА»",
    short: "Концепт; стиль; верстка",
    cover: "img/kultura/0.png",
    categories: ["Мерч"],

    blocks: [
      {
        type: "text",
        title:
          "Для культурной столицы России 2024 г. — Нижнего Новгорода — разработали коллекцию мерча, которая говорит с жителями на их языке.",
        body:
          "Коллекция популяризирует локальное наследие. В качестве иллюстраций были выбраны и привычные общеизвестные, и неочевидные образы, связанные не только с Нижним Новгородом, но и городами региона. Среди них — Максим Горький, современный культурный центр «Пакгаузы», народные художественные промыслы Семенова, Городца и Балахны, Воскресенский собор в Арзамасе."
      },

      {
        type: "image",
        title:
          "Слово «культура» сделали главным визуальным элементом: крупным и броским, но затем спрятали его за сюжетами и образами, в которых она действительно живёт.",
        caption: "",
        src: "img/kultura/1.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption:
          "Добавили неожиданные детали: вышивку рядом с принтом, суперобложку на блокноте — чтобы культура не просто присутствовала, а удивляла.",
        src: "img/kultura/2.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/3.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption:
          "Переосмыслили привычные визуальные коды: от традиционных орнаментов до шрифтов и эстетики 90-х — времени, когда всё «запечатывали» на максимум. Так удалось усилить эффект: культура повсюду, даже если она выглядит как уличный принт или случайная надпись на плёнке.",
        src: "img/kultura/4.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption:
          "Для нижегородцев М. Горький — не только символ города и классик литературы, но и собирательный образ творца, который формирует культурную среду. Здесь он напоминает, что культура в первую очередь создаётся людьми, и именно их энергия превращает город в культурную столицу.",
        src: "img/kultura/5.png",
        side: "center"
      },

      {
        type: "image",
        title:
          "",
        caption: "Фигура, без которой нельзя представить историю Нижнего Новгорода — город носил его имя почти 60 лет.",
        src: "img/kultura/6.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/7.png",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "Видеть новое в старом, делать вновь актуальным.",
        caption:
          "Образ с Пакгаузами в нижней части города — один из самых ярких примеров переосмысления без потерь исторического слоя.",
        src: "img/kultura/9.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/8.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/10.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title:
          "Городецкая роспись — один из самых узнаваемых и жизнерадостных народных художественных промыслов России.",
        caption:
          "Тонкие линии и орнаменты — искусство, которое передаётся мастерами из поколения в поколение. Роспись не просто украшает предметы, она создаёт узнаваемый образ, в котором зашифрована история и характер региона.",
        src: "img/kultura/11.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/12.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/13.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/14.png",
        side: "center"
      },

      {
        type: "image",
        title:
          "Тема, которая объединяет и является необъятной. В качестве иллюстрации взята одна из четырнадцати чёрно-белых фресок Воскресенского кафедрального собора в городе Арзамас.",
        caption:
          "Монохромная роспись в православных храмах — почти исключение, ведь она даёт меньше «торжественности», но больше строгой созерцательной атмосферы.",
        src: "img/kultura/15.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/kultura/16.png",
        side: "center", height: "auto"
      },

      {
        type: "text",
        title: ">11000 проданных сувениров",
        body: ""
      },

      {
        type: "text",
        title: "3 перевыпуска тиража",
        body: ""
      },

      {
        type: "text",
        title:
          "802 года истории Нижнего Новгорода и области изучено в ходе подготовки проекта",
        body: ""
      },

      {
        type: "text",
        title: "",
        body:
          "Коллекция получилась многослойной и близкой широкой аудитории. Потому что культура — не абстракция. Это то, чем мы живём. Даже если это шаурма на центральной улице."
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
      },

      {
        type: "text",
        title: "IKSA.AGENCY",
        body: "w/ Шура Кузнецова; Арт-дир: Сергей Наумов"
      }
    ]
  },

  {
    slug: "детали",
    title: "ЖК «Детали»",
    short: "Концепт; дизайн и прототипирование; стандарт оформления",
    cover: "img/detali/60-optimized.webp",
    categories: ["Навигация", "3D"],

    blocks: [
      {
        type: "text",
        title: "Жилой комплекс «Детали» — проект бизнес-лайт класса в одной из самых перспективных частей Новой Москвы.",
        body:
          "В рамках проекта появится многофункциональный комплекс и два детских сада."
      },

      {
        type: "image",
        title: "",
        caption: "Ландшафтное бюро «Вьюга» разрабатывало внутреннее наполнение закрытой дворовой территории, а мы помогали им, чтобы жителям комплекса было удобно и понятно перемещаться по ней.",
        src: "img/detali/0.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/1.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/3.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Элементы навигации должны были быть долговечными и вандалоустойчивыми, поэтому мы выбрали нержавеющую сталь. Ее отражающие свойства позволяют поддерживать окружающие навигационные элементы цвета.",
        src: "img/detali/4.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Подготовили подробное руководство использования навигации. В ней описаны конструктивные особенности, принципы построения навигационных носителей и расширения состава элементов.",
        src: "img/detali/5.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/7.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Основные навигационные элементы состоят из металлических листов с печатью и перфорацией, держащихся на столбах, окрашенных в цвет секции ЖК.",
        src: "img/detali/8.webp",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/9.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/10.gif",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/detali/11.webp",
        side: "left", height: "auto"
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
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
    slug: "макс",
    title: "Навигация и дизайн ЖК «MAX»",
    short: "Стиль; навигация; мерч",
    cover: "img/max/0.png",
    categories: ["Навигация", "3D", "Мерч"],

    blocks: [
      {
        type: "text",
        title: "Работа приготовлена специально для конкурса «Креатив на MAX».",
        body:
          "Основная задача — добавить пространсту стиля, вписавшись в существующую айдентику."
      },

      {
        type: "image",
        title: "",
        caption: "Сделали иллюстрации для размещения в коридоре и на фасаде здания. Провели арт-надзор за реализацией проекта.",
        src: "img/max/1.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/max/2.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/max/3.png",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Техническая эстетика, куча бетона и металла могут подойти для заведения любой кухни. Особенно это контрастно и запоминающе будет выглядеть для, например, пельменной или чайной.",
        src: "img/max/4.png",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Создавать локальные мини-бренды для местных заведений — хороший способ продвижения себя и жилого комплекса вцелом.",
        src: "img/max/5.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/max/6.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/max/7.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/max/8.png",
        side: "center"
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
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
    slug: "локалыч",
    title: "Локалыч",
    short: "Мобильное приложение и сайт",
    cover: "img/localych/9.webp",
    categories: ["Web"],

    blocks: [
      {
        type: "text",
        title: "Локалыч — удобное решение для удалённого управления доступом к парковкам и дворовым территориям.",
        body:
          "Компания предлагает бесплатную модернизацию существующих шлагбаумов для дворовых территорий и офисных парковок."
      },

      {
        type: "image",
        title: "",
        caption: "Клиенты получают простой доступ к шлагбаумам с телефонов, не теряя возможность открывать закрытую территорию с брелка. Мы разработали дизайн приложения и сделали небольшой лендинг для промокомпании.",
        src: "img/localych/1.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/localych/2.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Цветовая гамма поддерживает бренд, и наследуется от цвета шлагбаумов и прочих ограничительных конструкций.",
        src: "img/localych/3.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "Все основные функции приложения, и вся важная информация доступны с главного экрана.",
        caption: "",
        src: "img/localych/4.webp",
        side: "left", height: "auto"
      },

      {
        type: "wide-video",
        title: "",
        caption: "",
        src: "img/localych/5.mp4",
        side: "right"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/localych/6.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "Основные навигационные элементы состоят из металлических листов с печатью и перфорацией, держащихся на столбах, окрашенных в цвет секции ЖК.",
        src: "img/localych/7.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/localych/8.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "У приложения есть функция оповещения других пользователей о проблемах с их машиной.",
        caption: "Если автомобиль зарегистрирован в системе владельцу можно отправить сообщение об аварии на парковке или просьбе убрать машину если она мешает.",
        src: "img/localych/0.webp",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "Для проекта так же сделали небольшой лендинг с формой для заявки, где коротко рассказывается о преимуществах системы перед традиционными способами доступа, способах модернизации существующих систем.",
        caption: "",
        src: "img/localych/10.webp",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "Модернизировать шлагбаум в своем дворе просто, пользоваться системой еще проще.",
        caption: "",
        src: "img/localych/11.webp",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/localych/12.webp",
        side: "center"
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
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
    slug: "арзамас",
    title: "Музей пожарной охраны Арзамаса",
    short: "Экспозиция; стиль; полиграфия; дизайн-проект; сопровождение",
    cover: "img/arzamas/0.png",
    categories: [],

    blocks: [
      {
        type: "text",
        title:
          "Для музея ПЧ44 г. Арзамас спроектировали оформление новой экспозиции.",
        body:
          "Продумали дизайн и расположение экспонатов, разработали стиль, в том числе двух фотозон, где будут проходить мероприятия по награждению. Подготовили чертежи и технические задания для производства."
      },

      {
        type: "image",
        title: "",
        caption:
          "Сделали иллюстрации для размещения в коридоре и на фасаде здания. Провели арт-надзор за реализацией проекта.",
        src: "img/arzamas/1.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/arzamas/2.png",
        side: "center"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/arzamas/3.png",
        side: "left", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption: "",
        src: "img/arzamas/4.png",
        side: "right", height: "auto"
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
      },

      {
        type: "text",
        title: "IKSA.AGENCY",
        body: "Арт-дир: Сергей Наумов"
      }
    ]
  },

  {
    slug: "эколант",
    title: "HR-офис «Эколант»",
    short: "Дизайн интерьера",
    cover: "img/ecolant/0.png",
    categories: ["3D"],

    blocks: [
      {
        type: "text",
        title:
          "Новому металлургическому заводу был необходим новый современный офис для приёма новых сотрудников. Важно было не выйти из стиля брендбука.",
        body:
          "Благодаря интервью с действующими сотрудниками офиса удалось сделать удобное пространство и для них, и для соискателей. Мебель вся выбрана из материалов уже готовых офисов, но в другой компоновке и форме."
      },

      {
        type: "image",
        title: "",
        caption:
          "Сделали иллюстрации для размещения в коридоре и на фасаде здания. Провели арт-надзор за реализацией проекта.",
        src: "img/ecolant/1.png",
        side: "right", height: "auto"
      },

      {
        type: "image",
        title: "",
        caption:
          "Большая карта на стене даст множеству приезжих ребят легче воспринять последующий путь от офиса на новое рабочее место.",
        src: "img/ecolant/2.png",
        side: "left", height: "auto"
      },

      {
        type: "spacer", // пустой блок-разделитель
        size: "small"
      },

      {
        type: "text",
        title: "IKSA.AGENCY",
        body: "Арт-дир: Сергей Наумов"
      }
    ]
  }
];