/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface stationsByNameQueryVariables {
  name?: string | null,
};

export interface stationsByNameQuery {
  search:  {
    __typename: "Searchable",
    stations:  Array< {
      __typename: "Station",
      name: string,
      primaryEvaId: number | null,
    } >,
  },
};

export interface StationsNearbyQueryVariables {
  latitude: number,
  longitude: number,
};

export interface StationsNearbyQuery {
  nearby:  {
    __typename: "Nearby",
    stations:  Array< {
      __typename: "Station",
      name: string,
      primaryEvaId: number | null,
    } >,
  },
};
