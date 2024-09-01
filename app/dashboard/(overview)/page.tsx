import MyButton from "@/app/ui/Button";
import MyCarousel from "@/app/ui/Carousel";

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
