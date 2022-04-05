import classes from "./style.module.scss";

export const List = ({ children }) => {
  return <ul className={classes.list}>{children}</ul>;
};
