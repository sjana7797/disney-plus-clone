export interface Content {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title: string;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
  overview?: string;
  release_date?: string;
  title: string;
  id: number;
  media_type: string;
  original_name?: string;
  first_air_date?: string;
  runtime?: number;
  genres?: { name: string }[];
}
