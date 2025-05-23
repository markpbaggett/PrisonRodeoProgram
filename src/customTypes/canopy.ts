import { GAParams, GTMParams } from "@next/third-parties/dist/types/google";

import { InternationalString } from "@iiif/presentation-3";
import { ThemeProps } from "@radix-ui/themes";

export interface CanopyCollectionShape {
  "@context": string;
  id: string;
  type: string;
  label: InternationalString;
  slug: string;
  depth: number;
  parent: null;
  manifests: number;
  collections: number;
  items: Array<{
    id: string;
    type: string;
    homepage: Array<{
      id: string;
      type: string;
      format: string;
      label: InternationalString;
    }>;
  }>;
}

export interface CanopyComponents {
  viewer?: "clover" | "ramp";
}

export interface CanopyTheme extends ThemeProps {
  defaultTheme: string;
  toggleEnabled: boolean;
}

export interface CanopyVendor {
  googleAnalytics?: GAParams;
  googleTagManager?: GTMParams;
}

export interface CanopyEnvironment {
  collection: string;
  featured: string[];
  label: InternationalString;
  locales: CanopyLocale[];
  metadata: string[];
  map: { enabled: boolean };
  search: {
    enabled: boolean;
    index: {
      metadata: { enabled: boolean; all: boolean };
      summary: { enabled: boolean };
    };
    flexSearch: any;
  };
  static: boolean;
  summary: InternationalString;
  theme: CanopyTheme;
  url: string;
  basePath?: string;
  components?: CanopyComponents;
  vendor?: CanopyVendor;
}

export interface CanopyFacetValueShape {
  value: string;
  slug: string;
  doc_count: number;
  docs: number[];
}

export interface CanopyFacetShape {
  label: string;
  slug: string;
  values: CanopyFacetValueShape[];
}

export interface CanopyLocale {
  config: string;
  label: string;
  lang: string;
}

export interface CanopyManifestShape {
  id: string;
  index: number;
  label: InternationalString;
  slug: string;
  thumbnail: Array<{
    id: string;
    type: string;
    format: string;
    height: number;
    width: number;
  }>;
}

export interface CanopySearchShape {
  id: number;
  label: string;
  metadata: string;
}

export type CanopyCollections = CanopyCollectionShape[];
export type CanopyFacets = CanopyFacetShape[];
export type CanopyManifests = CanopyManifestShape[];
export type CanopySearch = CanopySearchShape[];
