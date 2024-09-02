import { MyButton } from "@/app/components/ui/Button";
import MyCarousel from "@/app/components/ui/Carousel";

const DashboardPage = async () => {

  return (
    <div>
      <h1>DashboardPage</h1>

      <span>
        <MyButton params={'Hello'} />
      </span>

      <section className="flex justify-center">
        <MyCarousel />
      </section>

    </div >
  );
};

export default DashboardPage;
