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
      side?: "left" | "right"; // направление смещения широкого блока
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
    short: "Айдентика, лендинг и визуальный стиль.",
    cover: "img/detali/60-optimized.webp",
    categories: ["identity", "web"],

    blocks: [
      {
        type: "text",
        title: "Задача",
        body:
          "Создать айдентику и лендинг для жилого комплекса. " +
          "Простая графика, выразительные контрастные формы, акцент на деталях архитектуры."
      },

      {
        type: "image",
        title: "Главный экран сайта",
        caption: "Квадратный блок с макетом.",
        src: "img/detali/wide.png"
      },

      {
        type: "wide-image",
        title: "Большая полоса изображений",
        caption: "Широкий блок, скроллится только внутри себя.",
        src: "img/detali/wide.png",
        side: "right"
      },

      {
        type: "wide-image",
        title: "Большая полоса изображений",
        caption: "Широкий блок, скроллится только внутри себя.",
        src: "img/detali/wide.png",
        side: "left"
      },


      {
        type: "text",
        title: "Результат",
        body:
          "Современная айдентика и адаптивный сайт, выдержанный в единой визуальной системе."
      }
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
