interface Url {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null | string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Link;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: null | string;
    paypal_email: null | string;
  };
}

interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Url;
  links: Link;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null | string;
  topic_submissions: {
    animals: {
      status: string;
      approved_on: string;
    };
  };
  premium: boolean;
  user: User;
}

interface Link {
  self: string;
  html: string;
  photos?: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
  download?: string;
  download_location?: string;
}

interface Slug {
  slug: string;
  pretty_slug: string;
}

interface Ancestry {
  type: Slug;
  category: Slug;
  subcategory: Slug;
}

interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface UnsplashTypes {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null | string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Url;
  links: Link;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null | string;
  topic_submissions: Record<string, unknown>;
  user: User;
  tags: [
    {
      type: string;
      title: string;
      source: Source;
    },
    {
      type: string;
      title: string;
    },
    {
      type: string;
      title: string;
      source: Source;
    }
  ];
}
