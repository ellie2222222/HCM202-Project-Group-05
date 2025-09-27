declare module 'react-chrono' {
  export interface ChronoProps {
    items: any[];
    mode?: string;
    theme?: any;
    cardHeight?: number;
    cardWidth?: number;
    hideControls?: boolean;
    allowDynamicUpdate?: boolean;
    scrollable?: any;
    fontSizes?: any;
    classNames?: any;
    showToolbar?: boolean;
  }
  
  export const Chrono: React.FC<ChronoProps>;
}
