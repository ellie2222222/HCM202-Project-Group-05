declare module "react-chrono" {
  export interface ChronoItem {
    title: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
    media?: {
      type: string;
      source: {
        url: string;
      };
    };
  }

  export interface ChronoTheme {
    primary?: string;
    secondary?: string;
    cardBgColor?: string;
    cardForeColor?: string;
    titleColor?: string;
    titleColorActive?: string;
  }

  export interface ChronoScrollable {
    scrollbar?: boolean;
  }

  export interface ChronoFontSizes {
    cardSubtitle?: string;
    cardText?: string;
    cardTitle?: string;
    title?: string;
  }

  export interface ChronoClassNames {
    card?: string;
    cardMedia?: string;
    cardSubTitle?: string;
    cardText?: string;
    cardTitle?: string;
    controls?: string;
    title?: string;
  }

  export interface ChronoProps {
    items: ChronoItem[];
    mode?: string;
    theme?: ChronoTheme;
    cardHeight?: number;
    cardWidth?: number;
    hideControls?: boolean;
    allowDynamicUpdate?: boolean;
    scrollable?: ChronoScrollable;
    fontSizes?: ChronoFontSizes;
    classNames?: ChronoClassNames;
    showToolbar?: boolean;
    disableToolbar?: boolean;
  }

  export const Chrono: React.FC<ChronoProps>;
}
