export interface IAstrolab {
  starSystems: IStarSystem[];
}

export interface IStarSystem {
  Description: {
    Id: string;
    Name: string;
    Details: string;
    Icon: string;
  };
  Position: {
    x: number;
    y: number;
    z: number;
  };
  Tags: {
    items: string[];
    tagSetSourceFile: "";
  };
  SupportedBiomes: string[];
  MapRequiredTags: {
    items: string[];
    tagSetSourceFile: string;
  };
  MapExcludedTags: {
    items: string[];
    tagSetSourceFile: string;
  };
  FuelingStation: boolean;
  JumpDistance: number;
  ownerID: string;
  ShopRefreshRate: number;
  ShopMaxInventory: number;
  ShopMaxSpecials: number;
  SystemInfluence: {
    factionID: string;
    Influence: number;
  }[];
  TravelRequirements: {
    Scope: string;
    RequirementTags: {
      items: string[];
      tagSetSourceFile: string;
    };
    ExclusionTags: {
      items: string[];
      tagSetSourceFile: string;
    };
    RequirementComparisons: string[];
  }[];

  StarPosition: null;
  StarType: string;
  Depletable: boolean;
  UseSystemRoninHiringChance: boolean;
  RoninHiringChance: number;
  UseMaxContractOverride: boolean;
  MaxContractOverride: number;
  SystemShopItems: string[];
  factionShopOwnerID: string;
  FactionShopItems: string[];
  BlackMarketShopItems: null;
  CoreSystemID: string;
  StartingSystemModes: string[];
  DefaultDifficulty: number;
  DifficultyList: string[];
  DifficultyModes: string[];
  contractEmployerIDs: string[];
  contractTargetIDs: string[];
}
