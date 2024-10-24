export const metadata = {
  title: "Home - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features from "@/components/features-home";
import Features02 from "@/components/features-home-02";
import Features03 from "@/components/features-home-03";
import Target from "@/components/target";
import PricingSection from "@/components/pricing";
import Cta from "@/components/cta";
import CategoryPreview from "@/components/category-preview";
import PromoSection from "@/components/promo-section";
import ProductList from "@/components/product-list";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryPreview />
      <PromoSection />
      <ProductList />
      <Testimonials />
    </>
  );
}
