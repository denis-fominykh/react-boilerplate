export interface Starship {
  name: string;
}

export interface Starships {
  results: Starship[];
}

export type ErrorHttpAction = string;

export interface StarshipsState {
  data: Starships;
  isFetching: boolean;
  error: false | ErrorHttpAction;
}
