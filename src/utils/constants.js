// NetInfoState Type
const NETINFO_STATE_TYPE = {
  NONE: 'none',
  CELLULAR: 'cellular',
  WIFI: 'wifi',
};
const ACTOR_TYPE = {
  CAST: 'cast',
  CREW: 'crew',
};

const APP_ENVIRONMENT = {
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};

const EVENT_TYPE = {
  LIKE: 'like',
  UNLIKE: 'unlike',
  DISLIKE: 'dislike',
};

const LOGIN_TYPE = {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  HTSSO: 'HTSSO',
  APPLE: 'APPLE',
};

const REFINE_DETAILS_SCREENS = {
  STREAMING_SERVICES: 'Streaming Services',
  LANGUAGES: 'Languages',
  GENRE: 'Genres',
  RATING: 'Rating',
  CONTENT_TYPE: 'Content Type',
  FREE_OR_PAID: 'Free/Paid',
  AIR_DATE: 'Air Date',
  QUALITY: 'Quality',
  PRICE: 'Price',
  RUNTIME_MINUTES: 'Runtime Minutes',
  CONTENT_RATINGS: 'Content Ratings',
  RELEASE_YEAR: 'Release Year',
};

const SORT_BY = {
  RELEVANCE: 'relevance',
  MATCH_SCORE: 'match_score',
  OTTPLAY_RATING: 'ottplay_rating',
  CRITICS_SCORE: 'critics_score',
  RELEASE_DATE: 'release_date',
};

const VIDEO_AUTOPLAY = {
  WIFI_ONLY: 'WIFI_ONLY',
  WIFI_AND_4G_3G: 'WIFI_AND_4G_3G',
};

const CONTENT = {
  NEWS: 'news',
  REVIEW: 'review',
  LISTICLES: 'listicles',
  INTERVIEWS: 'interview',
  REVIEWS: 'reviews',
};

const REVIEW_TYPE = {
  AGGREGATED: 'aggregated',
  ORIGINAL: 'reviews',
  SYNDICATED: 'critics',
};

const NEWS_TYPE = {
  LISTICLES: 'listicles',
  INTERVIEW: 'interviews',
  REGULAR: 'news',
};

const LISTICLE_TYPE = {
  LISTICLE_MOVIE_OR_SHOW: 'listicles-movie-show',
  LISTICAL_CAST_OR_CREW: 'listicles-cast-crew',
};

const CONTENT_DETAILS_SECTION_TYPE = {
  PARAGRAPH: 'paragraph',
  HEADING: 'heading',
  IMAGE: 'image',
  VIDEO: 'video',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
};

const SCREENS = {
  MOVIE_DETAIL: 'MovieDetail',
  SHOW_DETAIL: 'ShowDetail',
  FOR_YOU: 'ForYou',
  WATCHLIST: 'WatchList',
  SIMILAR_MOVIES: 'SimilarMovie',
  SIMILAR_SHOWS: 'SimilarShows',
  SIMILAR_TITLES: 'SimilarMovies',
  PROFILE_LIKED_MOVIES: 'Profile',
  POPULAR_FOR: 'PopularFor',
  MOVIES_AND_SHOWS: 'MoviesAndShows',
  NEW_RELEASES: 'NewReleases',
  EPISODES: 'Episodes',
  NEWS: 'News',
  REVIEWS: 'Reviews',
  LISTICLES: 'Listicles',
  HOME: 'Home',
  CRITIC_REVIEWS: 'Critic Reviews',
  EDITORS_CHOICE: 'EditorsChoice',
  TOP_DOCUMENTARIES: 'Top Documentaries',
  TOP_ORIGINALS: 'Top Originals',
  TIME_TO_KILL: 'Time To Kill',
  FREE_TICKET_JUNCTION: 'Free Ticket Junction',
  RECENTLY_VIEWED: 'Recently Viewed',
  HOT_ON_HOTSTAR: 'Hot on Hotstar',
  PICKS_FROM_NETFLIX: 'Picks From Netflix',
  PRIME_VIDEO_PATAKAS: "Prime Video's Patakas",
  SONY_LIV: 'Sony LIV',
  ZINGER_FROM_ZEE5: 'Zingers from Zee5',
  UPCOMING_MOVIES_AND_SHOWS: 'Upcoming Movies and Shows',
  CAST_AND_CREWS: 'Trending Celebs',
};

const FOR_YOU_API = {
  DEFAULT: 'DEFAULT',
  CONTENT_BASED_API: 'CONTENT_BASED_API',
  MOVIES_MATCH_SCORE: 'MOVIES_MATCH_SCORE',
  MOVIES_ALTERNATE_TITLE: 'MOVIES_ALTERNATE_TITLE',
  SHOWS_MATCH_SCORE: 'SHOWS_MATCH_SCORE',
  SHOWS_ALTERNATE_TITLE: 'SHOWS_ALTERNATE_TITLE',
};

const HOME_SCREEN_SECTIONS = {
  EDITORS_CHOICE: "Editor's Choice",
  FEATURED: 'Featured',
  FREE_TICKET_JUNCTION: 'Free Ticket Junction',
  HOT_ON_HOTSTAR: 'Hot on Hotstar',
  PICKS_FROM_NETFLIX: 'Picks From Netflix',
  TOP_ORIGINALS: 'Top Originals',
  TOP_DOCUMENTARIES: 'Top documentaries',
  TIME_TO_KILL: 'Time to Kill',
  RECENTLY_ADDED: 'Recently Added',
  RECENTLY_VIEWED: 'Recently Viewed',
  PRIME_VIDEO_PATAKAS: "Prime Video's Patakas",
  TRENDING: 'Trending',
  ZINGER_FROM_ZEE5: 'Zinger from Zee5',
  SONY_LIV: 'Sony LIV',
  UPCOMING_MOVIES_AND_SHOWS: 'Upcoming Movies & Shows',
  CAST_AND_CREWS: 'Cast & Crew',
};
const CONTENT_PUBLISHERS = {
  DESI_MARTINI: 'Desi Martini',
  LIVE_MINT: 'Live Mint',
  HINDUSTAN_TIMES: 'Hindustan Times',
  FILM_COMPANION: 'Film Companion',
};
const CONTENT_PUBLISHERS_CODE = {
  DESI_MARTINI: 'DM',
  LIVE_MINT: 'LM',
  HINDUSTAN_TIMES: 'HT',
  FILM_COMPANION: 'FC',
};
const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PUBLISHED: 'published',
};
const homeScreenSectionTitle = (section) => {
  let sectionTitle = '';
  switch (section) {
    case HOME_SCREEN_SECTIONS.EDITORS_CHOICE:
      sectionTitle = "Editor's Choice";
      break;
    case HOME_SCREEN_SECTIONS.PICKS_FROM_NETFLIX:
      sectionTitle = 'Picks from Netflix';
      break;
    case HOME_SCREEN_SECTIONS.TOP_DOCUMENTARIES:
      sectionTitle = 'Top Documentaries';
      break;
    case HOME_SCREEN_SECTIONS.ZINGER_FROM_ZEE5:
      sectionTitle = 'Zingers from Zee5';
      break;
    case HOME_SCREEN_SECTIONS.SONY_LIV:
      sectionTitle = 'Specials from SonyLIV';
      break;

    default:
      sectionTitle = section;
      break;
  }
  return sectionTitle;
};
const ValueOfMin = 15;

const FORCE_UPGRADE_TYPES = {
  SPECIFIC_VERSIOM: 'force_upgrade_specific_version',
  MINIMUN_VERSION: 'force_upgrade_minimum_version',
  MESSAGE: 'message',
  UPGRADE: 'upgrade_option',
};
export {
  NETINFO_STATE_TYPE,
  ACTOR_TYPE,
  REFINE_DETAILS_SCREENS,
  LOGIN_TYPE,
  CONTENT,
  REVIEW_TYPE,
  NEWS_TYPE,
  LISTICLE_TYPE,
  SORT_BY,
  SCREENS,
  VIDEO_AUTOPLAY,
  HOME_SCREEN_SECTIONS,
  FOR_YOU_API,
  STATUS,
  homeScreenSectionTitle,
  ValueOfMin,
  EVENT_TYPE,
  APP_ENVIRONMENT,
  CONTENT_DETAILS_SECTION_TYPE,
  FORCE_UPGRADE_TYPES,
  CONTENT_PUBLISHERS,
  CONTENT_PUBLISHERS_CODE,
};
