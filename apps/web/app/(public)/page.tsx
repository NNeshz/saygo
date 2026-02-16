import { Header } from "@saygo/web/modules/landing/home/header";
import { Information } from "@saygo/web/modules/landing/home/information";
import { Testimonials } from "@saygo/web/modules/landing/home/testimonials";
import { HowWorks } from "@saygo/web/modules/landing/home/how-works";
import { FAQ } from "@saygo/web/modules/landing/home/faq";

export default function Page() {
  return (
    <>
      <Header />
      <Information />
      <Testimonials />
      <HowWorks />
      <FAQ />
    </>
  );
}
