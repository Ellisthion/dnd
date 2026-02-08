export const mapConfig = {
  width: 6656,
  height: 4676
};

export type MapMarkerType = 'planar-breach';

export interface MapMarkerTypeOptions {
  name: string,
  namePlural: string;

  defaultIcon: string,
  defaultTint: string;
  defaultAnimation: string;

  defaultWidth: number,
  defaultHeight: number
}

export interface MapMarker {
  type: MapMarkerType,
  name: string,
  description: string,

  x: number,
  y: number,

  // Overrides
  tint?: string,
  icon?: string,
  animation?: string,
  width?: number,
  height?: number
}

export const mapMarkerTypes: Record<MapMarkerType, MapMarkerTypeOptions> = {
  'planar-breach': {
    name: 'Planar Activity',
    namePlural: 'Planar Activity',
    defaultTint: '#d000ff',
    defaultIcon: 'rolling-energy',
    defaultAnimation: 'spin',
    defaultWidth: 256,
    defaultHeight: 256
  }
};

export const mapMarkers: MapMarker[] = [
  {
    type: 'planar-breach',
    name: 'Near Trowbrook',
    description: 'The cascading planar breaches seem to have started with a planar disruption in the hills near Trowbrook.',
    x: 4554,
    y: 722
  },
  {
    type: 'planar-breach',
    name: 'Bronston Forge',
    description: 'The city and surrounds have seen considerable magical disturbances in recent years.',
    x: 4590,
    y: 1535
  },
  {
    type: 'planar-breach',
    name: 'The Dead Lake',
    description: "Only creatures like copper dragons that tolerate the acidic conditions can live in the Dead Lake.",
    x: 5101,
    y: 871
  },
  {
    type: 'planar-breach',
    name: 'Ember Mage Guild',
    description: "After being destroyed a few years ago during Ember's violent revolution, its Mage Guild has been host to all sorts of unstable magic.",
    x: 3423,
    y: 3819
  },
  {
    type: 'planar-breach',
    name: 'Denaan',
    description: "The small town of Denaan isn't sure what it did to deserve this.",
    x: 700,
    y: 2335
  },
  {
    type: 'planar-breach',
    name: 'Near Hriar',
    description: "The goblin city of Hriar has long disrupted attempts to form an overland trade route between Rochekell and Bronston Forge.",
    x: 3039,
    y: 1571
  },
  {
    type: 'planar-breach',
    name: 'Ylönen Mountains',
    description: 'The spires of the northern tribes are host to many dangerous beasts, including silver dragons.',
    x: 1252,
    y: 743
  },
  {
    type: 'planar-breach',
    name: 'The Harrow Grove',
    description: 'The forests near Harroway are soaked in the blood of endless border conflicts between Valengard and Ravena.',
    x: 3124,
    y: 2708
  },
  {
    type: 'planar-breach',
    name: 'Heart Lake',
    description: 'The crags near The Irongrove are rarely trod by any except enthusiastic prospectors.',
    x: 5613,
    y: 3180
  },
  {
    type: 'planar-breach',
    name: 'Fractured Isles',
    description: 'Little is known about the dangerous Fractured Isles, but a disturbance has been detected nonetheless.',
    x: 1324,
    y: 4309
  },
  {
    type: 'planar-breach',
    name: 'Fallen Crystal',
    description: 'A crystal fell from the sky with the young girl, The Light of the Radiant Dawn.',
    x: 1569,
    y: 1735,
    icon: 'minerals',
    animation: 'float'
  }
];