export type Token = {
  token: string;
} | null;

export type FindSuccess = {
  planet_name: string;
  status: string;
};

export type FindFailure = {
  status: string;
};

export type FindError = {
  status: string;
};

export type FindResponse = FindSuccess | FindFailure | FindError | null;

export type FindBody = {
  token: string;
  planet_names: string[];
  vehicle_names: string[];
};