import { Header } from "@saygo/web/modules/landing/home/header";
import { Information } from "@saygo/web/modules/landing/home/information";
import { Slider } from "@saygo/web/modules/landing/home/slider";

export default function Page() {
  return (
    <>
      <Header />
      <Slider />
      <Information />
    </>
  );
}
