type Store = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  linkName: string;
  outerImageUrl: string;
  customUrl: string;
};

type Blog = {
  id: string;
  name: string;
  content: string;
  seoContent: string;
  imageUrl: string;
};

type PlanFeature = {
  isActive: boolean;
  label: string;
};

type Plan = {
  imgUrl: string;
  planTitle: string;
  price: string;
  timeline: string;
  features: PlanFeature[];
};
