import { CeremonyCard } from "../../../../components";

// images
import Wedding from "../../../../assets/wedding-card.jpg";
import CakeTable from "../../../../assets/cake-table.jpg";
import Table from "../../../../assets/table.jpg";

function Ceremonies() {
  return (
    <section className="content-section ceremonies">
      <CeremonyCard title={"Weddings"} img={Wedding} />
      <CeremonyCard title={"Vow Renewal"} img={CakeTable} />
      <CeremonyCard title={"Unity"} img={Table} />
      <CeremonyCard title={"Naming"} img={Table} />
    </section>
  );
}

export default Ceremonies;
