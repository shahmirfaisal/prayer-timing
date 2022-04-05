import classes from "./style.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Prayers Timing</h1>
      </header>
      {children}
    </div>
  );
};
