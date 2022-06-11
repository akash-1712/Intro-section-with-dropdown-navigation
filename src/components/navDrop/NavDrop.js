import styles from "./_navDrop.module.scss";

const NavDrop = (props) => {
  const lists = props.data.map((list) => {
    return (
      <div className={styles.nav_bar} key={list.name}>
        <img className={props.imgClass} src={list.icon} alt={list.name} />
        <li>{list.name}</li>
      </div>
    );
  });
  return <ul className={`${styles.nav_list} ${props.className}`}>{lists}</ul>;
};
export default NavDrop;
