import classes from "./style.module.scss";
import { List } from "../List/";

export const Location = ({ list, heading_1, heading_2 }) => {
  return (
    <section className={classes.grid}>
      <section>
        <h2>{heading_1}</h2>

        <List>{list}</List>
      </section>

      <section>
        <h2>{heading_2}</h2>
      </section>
    </section>
  );
};
