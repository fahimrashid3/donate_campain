import Banner from "../Banner/Banner";
// import DonateDetails from "../DonateDetails/DonateDetails";
import HomeCard from "../HomeCard/HomeCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  const [donatedItem, setDonatedItem] = useState([]);

  function handelDonation(id) {
    console.log(id);
    setDonatedItem([...donatedItem, id]);
  }

  return (
    <div>
      <Banner></Banner>
      <div className="lg:mt-20 md:mt-16 mt-10 lg:mx-20 md:mx-10 mx-2 grid grid-cols-4 gap-5">
        {allData.map((data) => (
          <HomeCard
            key={data.id}
            data={data}
            handelDonation={handelDonation}
          ></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
